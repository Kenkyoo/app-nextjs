import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Sponsors } from '@/components/Sponsors';
import { features } from '@/types/features';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <>
      <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-400">
                  {' '}
                  {`Follow `}
                  <a
                    className="text-blue-700 hover:border-b-2 hover:border-blue-700"
                    href="https://twitter.com/ixartz"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    @Ixartz on Twitter
                  </a>
                  {` for updates and more information about the boilerplate.`}
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Boilerplate Code for Your Next.js Project with Tailwind CSS
                </p>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Next.js Boilerplate is a developer-friendly starter code for Next.js projects, built with Tailwind CSS and TypeScript.
                  {' '}
                  <span role="img" aria-label="zap">
                    ⚡️
                  </span>
                  {' '}
                  Designed with developer experience in mind, it includes:
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                  {features.map((feature, idx) => (
                    <div key={idx} className="relative pl-9">
                      <dt className="inline font-semibold text-white">
                        {feature.text}
                      </dt>
                      {' '}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">sponsors</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              {t('sponsors_title')}
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Our sponsors&apos; exceptional support has made this project possible.
              Their services integrate seamlessly with the boilerplate, and we
              recommend trying them out.
            </p>
          </div>
          <Sponsors />
        </div>
      </div>
    </>
  );
};
