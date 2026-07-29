import Image from "next/image";

export interface SegmentationCardProps {
  image: string;
  title: string;
  description: string;
}

export default function SegmentationCard({
  image,
  title,
  description,
}: SegmentationCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center px-6 py-6 text-center">
        <h3 className="mb-3 text-xl font-semibold text-[#2563eb]">
          {title}
        </h3>

        <p className="text-sm font-medium leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}