import { setRequestLocale } from 'next-intl/server';

export default async function CenteredLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 py-24 sm:py-32">
      {props.children}
    </div>
  );
}
