import Image from 'next/image';

export interface LogoGridProps {
  logos: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function LogoGrid({ logos }: LogoGridProps) {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-14 md:gap-16 lg:gap-20">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="flex h-24 items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-16 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}