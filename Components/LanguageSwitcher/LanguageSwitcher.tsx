// components/LanguageSwitcher/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { Menu, Image, useMantineTheme } from "@mantine/core";

const flags: Record<string, { src: string; name: string }> = {
  en: { src: "/flags/GB-UKM - United Kingdom.svg", name: "English" },
  zh: { src: "/flags/CN - China.svg", name: "中文" },
  es: { src: "/flags/ES - Spain.svg", name: "Español" },
  fr: { src: "/flags/FR - France.svg", name: "Français" },
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useMantineTheme();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lang: string) => {
    document.cookie = `NEXT_LOCALE=${lang}; path=/`;
    router.refresh();
  };

  if (!mounted) return null;

  return (
    <Menu shadow="md" width={160}>
      <Menu.Target>
        <div
          style={{
            padding: "4px",
            borderRadius: theme.radius.sm,
            backgroundColor: theme.colors.gray[1],
            cursor: "pointer",
            transition: "background-color 0.2s, border-color 0.2s",
          }}
        >
          <Image
            src={flags[locale]?.src}
            alt={locale}
            width={20}
            height={20}
            style={{ cursor: "pointer", borderRadius: "4px" }}
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        {Object.entries(flags).map(([code, { src, name }]) => (
          <Menu.Item
            key={code}
            onClick={() => changeLanguage(code)}
            leftSection={<Image src={src} alt={name} width={20} height={20} />}
          >
            {name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
