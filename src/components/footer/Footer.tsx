import Image from "next/image";
import Link from "next/link";
import EnquireNowButton from '../EnquireNowButton';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const navigationLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Why Accredian", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f8fc] text-slate-700">
      <div className="mx-auto max-w-[1220px] px-6 lg:px-0">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-10 py-16 lg:flex-row lg:items-start lg:text-left">
          {/* Logo + Socials */}
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Link href="/" aria-label="Accredian home">
              <Image
                src="/image/logo.webp"
                alt="Accredian"
                width={165}
                height={44}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-5 text-[18px] text-slate-700">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="transition-colors duration-200 hover:text-blue-600"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center pt-2 lg:items-end">
            <EnquireNowButton className="rounded-lg bg-[#1363DF] px-10 py-3.5 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#0d56c4]" />

            <p className="mt-3 text-sm text-slate-500">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-2 border-t border-slate-300" />

        {/* Bottom Section */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr] lg:gap-32">
          {/* Navigation */}
          <div>
            <h2 className="text-[2rem] font-semibold text-slate-900">
              Accredian
            </h2>

            <nav
              className="mt-5 flex flex-col gap-4"
              aria-label="Footer navigation"
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base text-slate-600 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h2 className="text-[2rem] font-semibold text-slate-900">
              Contact Us
            </h2>

            <div className="mt-4 flex flex-col gap-2 text-sm leading-8 text-slate-600">
              <a
                href="mailto:enterprise@accredian.com"
                className="transition-colors hover:text-blue-600"
              >
                enterprise@accredian.com
              </a>

              <p>
                WeWork, 13th Floor, Prestige Central,
                <br />
                Infantry Road, Bengaluru, Karnataka 560001
              </p>
            </div>
          </address>
        </div>

        {/* Bottom Divider */}
        <div className="mx-2 border-t border-slate-300" />

        {/* Copyright */}
        <div className="py-5 text-center text-[15px] text-slate-500">
          © {new Date().getFullYear()} Accredian. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
