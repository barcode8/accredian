'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import EnquiryModal from './EnquiryModal';

interface EnquiryContextValue {
  openEnquiry: () => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  function handleSuccess() {
    setShowSuccessToast(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setShowSuccessToast(false);
    }, 1000);
  }

  return (
    <EnquiryContext.Provider value={{ openEnquiry: () => setIsOpen(true), closeEnquiry: () => setIsOpen(false) }}>
      {children}
      <EnquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSuccess={handleSuccess} />
      {showSuccessToast && <div role="status" className="fixed bottom-5 right-5 z-[110] rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl">Lead submitted successfully.</div>}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);

  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider.');
  }

  return context;
}
