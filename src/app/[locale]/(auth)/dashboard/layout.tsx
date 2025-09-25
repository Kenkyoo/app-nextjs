import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <BaseTemplate
      leftNav={(
        <>
          <li>
            <Link
              href="/"
              className="text-sm/6 font-semibold text-white"
            >
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="text-sm/6 font-semibold text-white"
            >
              {t('about_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/counter/"
              className="text-sm/6 font-semibold text-white"
            >
              {t('counter_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="text-sm/6 font-semibold text-white"
            >
              {t('portfolio_link')}
            </Link>
          </li>
          <li>
            <a
              className="text-sm/6 font-semibold text-white"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
        </>
      )}
      rightNav={(
        <>
          <li>
            <Link
              href="/sign-in/"
              className="text-sm/6 font-semibold text-white"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="text-sm/6 font-semibold text-white"
            >
              {t('sign_up_link')}
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      )}
      leftNavMobile={(
        <>
          <li>
            <Link
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
            >
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
            >
              {t('about_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/counter/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
            >
              {t('counter_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
            >
              {t('portfolio_link')}
            </Link>
          </li>
          <li>
            <a
              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
        </>
      )}
      rightNavMobile={(
        <>
          <li>
            <Link
              href="/sign-in/"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
            >
              {t('sign_in_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/sign-up/"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
            >
              {t('sign_up_link')}
            </Link>
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      )}
    >
      {props.children}
    </BaseTemplate>
  );
}
