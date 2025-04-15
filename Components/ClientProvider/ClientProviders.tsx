'use client';

import { NextIntlClientProvider } from 'next-intl';
import { MantineProvider } from '@mantine/core';
import { ReactNode, useState, useEffect } from 'react';
import { theme } from '../../theme';

type Props = {
  children: ReactNode;
  locale: string;
  messages: any;
};

export default function ClientProviders({ children, locale, messages }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </NextIntlClientProvider>
  );
}
