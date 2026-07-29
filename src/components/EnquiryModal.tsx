'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import LeadForm from './LeadForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function EnquiryModal({ isOpen, onClose, onSuccess }: EnquiryModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div aria-hidden={!isOpen} inert={!isOpen} className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onMouseDown={(event) => { if (isOpen && event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title" className={`grid min-h-0 max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-200 lg:grid-cols-[45%_55%] ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <div className="relative h-40 min-h-40 lg:h-auto lg:min-h-full">
          <Image src="/images/imagehuman.png" alt="Accredian learning advisor" fill className="object-cover" sizes="(max-width: 1024px) 0px, 45vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3f88]/70 via-transparent to-transparent" />
          <p className="absolute bottom-10 left-10 right-10 hidden text-2xl font-bold leading-snug text-white lg:block">Let&apos;s build a learning journey that moves your business forward.</p>
        </div>
        <div className="relative min-h-0 overflow-y-auto p-6 sm:p-8 lg:p-10">
          <button type="button" onClick={onClose} className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Close enquiry form">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <div className="mb-7 pr-10">
            <h2 id="enquiry-modal-title" className="text-3xl font-bold text-slate-900">Enquire Now</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500">Tell us about your learning goals and our advisor will get in touch.</p>
          </div>
          <LeadForm onSuccess={onSuccess} />
        </div>
      </section>
    </div>
  );
}
