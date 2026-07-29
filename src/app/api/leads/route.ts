import { NextResponse } from 'next/server';
import { appendLead } from '@/lib/leadStorage';
import { leadSchema } from '@/lib/validation';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Validation failed.' }, { status: 400 });
  }

  const parsedLead = leadSchema.safeParse(body);

  if (!parsedLead.success) {
    return NextResponse.json({ success: false, message: 'Validation failed.' }, { status: 400 });
  }

  try {
    await appendLead(parsedLead.data);
    return NextResponse.json({ success: true, message: 'Lead submitted successfully.' });
  } catch {
    return NextResponse.json({ success: false, message: 'Unable to submit your enquiry. Please try again.' }, { status: 500 });
  }
}
