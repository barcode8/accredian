'use client';

import { useEnquiry } from './EnquiryProvider';

interface EnquireNowButtonProps {
  className: string;
}

export default function EnquireNowButton({ className }: EnquireNowButtonProps) {
  const { openEnquiry } = useEnquiry();

  return <button type="button" onClick={openEnquiry} className={className}>Enquire Now</button>;
}
