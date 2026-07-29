import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { LeadInput } from './validation';

interface StoredLead extends Omit<LeadInput, 'countryCode'> {
  id: string;
  phone: string;
  submittedAt: string;
}

const dataDirectory = path.join(process.cwd(), 'data');
const leadsFile = path.join(dataDirectory, 'leads.json');
let writeQueue: Promise<void> = Promise.resolve();

async function readLeads(): Promise<StoredLead[]> {
  try {
    const fileContent = await readFile(leadsFile, 'utf8');
    const parsed: unknown = JSON.parse(fileContent);
    return Array.isArray(parsed) ? (parsed as StoredLead[]) : [];
  } catch (error: unknown) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export function appendLead(lead: LeadInput): Promise<void> {
  const operation = writeQueue.then(async () => {
    await mkdir(dataDirectory, { recursive: true });
    const leads = await readLeads();
    const { countryCode, ...leadDetails } = lead;

    leads.push({
      id: crypto.randomUUID(),
      ...leadDetails,
      phone: `${countryCode} ${lead.phone}`,
      submittedAt: new Date().toISOString(),
    });

    await writeFile(leadsFile, `${JSON.stringify(leads, null, 2)}\n`, 'utf8');
  });

  writeQueue = operation.catch(() => undefined);
  return operation;
}
