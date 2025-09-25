'use client';

import type { ChangeEventHandler } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}${pathname}`);
    router.refresh(); // Ensure the page takes the new locale into account related to the issue #395
  };

  return (
    <div className="sm:col-span-3">
      <div className="mt-2 grid grid-cols-1">
        <select
          defaultValue={locale}
          onChange={handleChange}
          aria-label="lang-switcher"
          id="locale"
          name="locale"
          autoComplete="locale-name"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        >
          {routing.locales.map(elt => (
            <option key={elt} value={elt}>
              {elt.toUpperCase()}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
        />
      </div>
    </div>
  );
};
