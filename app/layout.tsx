// import "@mantine/core/styles.css";
// import React from "react";
// import {
//   MantineProvider,
//   ColorSchemeScript,
//   mantineHtmlProps,
// } from "@mantine/core";
// import { theme } from "../theme";

// export const metadata = {
//   title: "Mantine Next.js template",
//   description: "I am using Mantine with Next.js!",
// };

// export default function RootLayout({ children }: { children: any }) {
//   return (
//     <html lang="en" {...mantineHtmlProps}>
//       <head>
//         <ColorSchemeScript />
//         <link rel="shortcut icon" href="/favicon.ico" />
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
//         />
//       </head>
//       <body>
//         <MantineProvider theme={theme}>{children}</MantineProvider>
//       </body>
//     </html>
//   );
// }

import "@mantine/core/styles.css";
import React from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { getMessages, getLocale } from "next-intl/server";
import ClientProviders from "../Components/ClientProvider/ClientProviders";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ClientProviders locale={locale} messages={messages}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
