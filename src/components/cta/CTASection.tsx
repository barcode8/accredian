import { ArrowRight, Headset } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-12 lg:py-14 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-2xl bg-[#2F73D9] shadow-[0_10px_24px_rgba(33,95,198,0.18)]">

        {/* Background Rings */}
        <div className="absolute -right-52 -bottom-72 h-[760px] w-[760px] rounded-full border-[56px] border-blue-300/10" />
        <div className="absolute -right-36 -bottom-60 h-[620px] w-[620px] rounded-full border-[52px] border-blue-300/10" />
        <div className="absolute -right-20 -bottom-44 h-[470px] w-[470px] rounded-full border-[46px] border-blue-200/10" />
        <div className="absolute right-12 -bottom-28 h-[320px] w-[320px] rounded-full border-[40px] border-blue-100/10" />

        <div className="relative z-10 flex flex-col gap-8 px-11 py-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div className="flex items-center gap-7">

            <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.12)]">
              <Headset
                size={34}
                strokeWidth={2}
                className="text-[#2F73D9]"
              />
            </div>

            <div>

              <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.01em] text-white">
                Want to Learn More About Our Training Solutions?
              </h2>

              <p className="mt-2 text-[15px] font-medium text-blue-100">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>

            </div>

          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-flex h-[46px] min-w-[178px] shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-7 text-[17px] font-semibold text-[#2F73D9] shadow-sm transition hover:bg-slate-50"
          >
            Contact Us
            <ArrowRight size={17} strokeWidth={2.5} />
          </a>

        </div>
      </div>
    </section>
  );
}