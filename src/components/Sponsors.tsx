import Image from 'next/image';
import { sponsors } from '@/types/sponsors';

export const Sponsors = () => (
  <div className="mx-auto my-6 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
      {sponsors.map(sponsor => (
        <div key={sponsor.name} className="relative pl-20">
          <dt className="text-base/7 font-semibold text-white">
            <a
              href={sponsor.link}
              target="_blank"
              rel="noopener"
              className="absolute top-0 left-0 flex size-16 items-center justify-center rounded-lg bg-white p-2 shadow"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </a>
            {sponsor.name}
          </dt>
          <dd className="mt-2 text-base/7 text-gray-400">{sponsor.description}</dd>
        </div>
      ))}
    </dl>
  </div>
);
