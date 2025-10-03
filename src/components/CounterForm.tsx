'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { CounterValidation } from '@/validations/CounterValidation';

export const CounterForm = () => {
  const t = useTranslations('CounterForm');
  const form = useForm({
    resolver: zodResolver(CounterValidation),
    defaultValues: {
      increment: 0,
    },
  });
  const router = useRouter();

  const handleIncrement = form.handleSubmit(async (data) => {
    const response = await fetch(`/api/counter`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    await response.json();

    form.reset();
    router.refresh();
  });

  return (
    <form onSubmit={handleIncrement}>
      <p>{t('presentation')}</p>
      <div>
        <label className="block text-sm/6 font-medium text-white" htmlFor="increment">
          {t('label_increment')}
          <input
            id="increment"
            type="number"
            className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
        </label>

        {form.formState.errors.increment && (
          <div className="my-2 text-xs text-red-500 italic">
            {t('error_increment_range')}
          </div>
        )}
      </div>

      <div className="mt-2">
        <button
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {t('button_increment')}
        </button>
      </div>
    </form>
  );
};
