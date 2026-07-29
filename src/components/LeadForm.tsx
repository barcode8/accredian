'use client';

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { leadSchema, type LeadInput } from '@/lib/validation';

interface LeadFormProps {
  onSuccess: () => void;
}

type LeadErrors = Partial<Record<keyof LeadInput, string>>;

const initialValues: LeadInput = {
  name: '',
  email: '',
  countryCode: '+91',
  phone: '',
  company: '',
  domain: '',
  candidates: '',
  deliveryMode: '',
  location: '',
};

const domains = ['Data Science', 'AI & ML', 'Product Management', 'Cyber Security', 'Cloud Computing', 'Leadership'];
const deliveryModes = ['Online', 'Offline', 'Hybrid'];

interface FormFieldProps {
  id: keyof LeadInput;
  label: string;
  error?: string;
  children: ReactNode;
}

function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">{error}</p>}
    </div>
  );
}

const inputClassName = 'w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100';

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [values, setValues] = useState<LeadInput>(initialValues);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function updateValue(field: keyof LeadInput, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    setSubmitError('');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    updateValue(event.target.name as keyof LeadInput, event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validation = leadSchema.safeParse(values);
    if (!validation.success) {
      const nextErrors = validation.error.issues.reduce<LeadErrors>((currentErrors, issue) => {
        const field = issue.path[0];
        if (typeof field === 'string' && field in values) {
          currentErrors[field as keyof LeadInput] = issue.message;
        }
        return currentErrors;
      }, {});
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data),
      });

      if (!response.ok) {
        throw new Error('Unable to submit your enquiry. Please try again.');
      }

      setValues(initialValues);
      setErrors({});
      onSuccess();
    } catch (error: unknown) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <FormField id="name" label="Full Name" error={errors.name}>
        <input id="name" name="name" value={values.name} onChange={handleChange} className={inputClassName} autoComplete="name" placeholder="Enter your full name" />
      </FormField>
      <FormField id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClassName} autoComplete="email" placeholder="Enter your email" />
      </FormField>
      <FormField id="phone" label="Phone Number" error={errors.phone}>
        <div className="flex gap-2">
          <select id="countryCode" name="countryCode" value={values.countryCode} onChange={handleChange} className="w-24 rounded-lg border border-slate-200 bg-white px-2 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" aria-label="Country code">
            <option value="+91">+91</option>
          </select>
          <input id="phone" name="phone" inputMode="numeric" maxLength={10} value={values.phone} onChange={handleChange} className={inputClassName} autoComplete="tel" placeholder="10-digit mobile number" />
        </div>
      </FormField>
      <FormField id="company" label="Company Name" error={errors.company}>
        <input id="company" name="company" value={values.company} onChange={handleChange} className={inputClassName} autoComplete="organization" placeholder="Enter company name" />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="domain" label="Domain" error={errors.domain}>
          <select id="domain" name="domain" value={values.domain} onChange={handleChange} className={inputClassName}>
            <option value="">Select domain</option>
            {domains.map((domain) => <option key={domain} value={domain}>{domain}</option>)}
          </select>
        </FormField>
        <FormField id="candidates" label="Number of Candidates" error={errors.candidates}>
          <input id="candidates" name="candidates" inputMode="numeric" value={values.candidates} onChange={handleChange} className={inputClassName} placeholder="e.g. 25" />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="deliveryMode" label="Mode of Delivery" error={errors.deliveryMode}>
          <select id="deliveryMode" name="deliveryMode" value={values.deliveryMode} onChange={handleChange} className={inputClassName}>
            <option value="">Select mode</option>
            {deliveryModes.map((mode) => <option key={mode} value={mode}>{mode}</option>)}
          </select>
        </FormField>
        <FormField id="location" label="Location" error={errors.location}>
          <input id="location" name="location" value={values.location} onChange={handleChange} className={inputClassName} autoComplete="address-level2" placeholder="Enter location" />
        </FormField>
      </div>
      {submitError && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700" role="alert">{submitError}</p>}
      <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-blue-400">
        {isSubmitting && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />}
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </form>
  );
}
