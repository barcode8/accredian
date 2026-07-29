import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(1, 'Full name is required.'),
  email: z.string().trim().min(1, 'Email is required.').email('Enter a valid email address.'),
  countryCode: z.literal('+91'),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number.'),
  company: z.string().trim().min(1, 'Company name is required.'),
  domain: z.string().min(1, 'Please select a domain.'),
  candidates: z.string().trim().min(1, 'Number of candidates is required.'),
  deliveryMode: z.string().min(1, 'Please select a delivery mode.'),
  location: z.string().trim().min(1, 'Location is required.'),
});

export type LeadInput = z.infer<typeof leadSchema>;
