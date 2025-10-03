import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { CounterForm } from '@/components/CounterForm';
import { CurrentCount } from '@/components/CurrentCount';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Counter',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Counter() {
  const t = useTranslations('Counter');

  return (
    <>
      <div className="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <div>
            <a
              href="https://launch.arcjet.com/Q6eLbRE"
            >
              <Image
                className="mx-auto mt-2"
                src="/assets/images/arcjet-light.svg"
                alt="Arcjet"
                width={128}
                height={38}
              />
            </a>
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            {`${t('security_powered_by')} `}
          </h1>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
            <CounterForm />
            <CurrentCount />
          </div>
        </div>
      </div>
    </>
  );
};
