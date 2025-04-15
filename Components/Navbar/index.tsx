"use client";

import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  Menu,
  Paper,
  Stack,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { Sparkles, ChevronDown, Menu as MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const navLinks = [
  {
    label: "Getting_Started",
    items: [
      { label: "Docs", href: "https://postnitro.ai/docs" },
      { label: "Blog", href: "https://postnitro.ai/blog" },
      { label: "Affiliates", href: "https://ls.postnitro.ai/affiliates" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "LinkedIn_Carousel", href: "/carousels/linkedin" },
      { label: "Instagram_Carousel", href: "/carousels/instagram" },
      { label: "TikTok_Carousel", href: "/carousels/tiktok" },
      { label: "Twitter_Carousel", href: "/carousels/x-twitter" },
      { label: "Embed", href: "/products/embed" },
      { label: "Extension", href: "/products/extension" },
    ],
  },
  {
    label: "Free_Tools",
    items: [
      {
        label: "Twitter_Banner",
        href: "/free-ai-tools/twitter-free-banner-header-image-maker",
      },
      {
        label: "LinkedIn_Banner",
        href: "/free-ai-tools/linkedin-free-banner-header-image-maker",
      },
      {
        label: "Instagram_Grid",
        href: "/free-ai-tools/instagram-free-image-splitter-grid-maker",
      },
      {
        label: "LinkedIn_Formatter",
        href: "/free-ai-tools/linkedin-free-text-formatter",
      },
      {
        label: "LinkedIn_Post_Generator",
        href: "/free-ai-tools/linkedin-free-post-generator",
      },
    ],
  },
];

export default function Navbar() {
  const theme = useMantineTheme();
  const primaryTeal = theme.colors.teal[6];

  const [drawerOpened, drawer] = useDisclosure(false);
  const [openedMenu, setOpenedMenu] = useDisclosure();
  const t = useTranslations("navbar");

  const renderCreateButtons = (isMobile = false) => (
    <Group gap="xs" {...(isMobile ? { grow: true } : {})}>
      <Button
        component={Link}
        href="/app/post-maker"
        variant="outline"
        color="teal.9"
        size="xs"
        leftSection={<Sparkles size={16} />}
        fullWidth={isMobile}
      >
        {t("Create_Image_Post")}
        <Box
          ml={6}
          px={5}
          py={1}
          bg={theme.colors.green[1]}
          color={theme.colors.green[9]}
          style={{
            fontSize: "10px",
            borderRadius: theme.radius.sm,
            fontWeight: 600,
          }}
        >
          BETA
        </Box>
      </Button>
      <Button
        component={Link}
        href="/app/carousel-maker"
        variant="filled"
        color={primaryTeal}
        size="xs"
        bg="teal.9"
        leftSection={<Sparkles size={16} />}
        fullWidth={isMobile}
      >
        {t("Create_Carousel")}
      </Button>
    </Group>
  );

  return (
    <>
      <Paper
        component="header"
        p="15px 20px"
        shadow="none"
        styles={(theme) => ({
          root: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: theme.white,
          },
        })}
      >
        <Flex justify="space-between" align="center">
          <Group>
            <Link href="/" passHref legacyBehavior>
              <Image
                src="/logo-full.svg"
                alt="PostNitro Logo"
                height={28}
                style={{ cursor: "pointer" }}
              />
            </Link>

            <Group gap="xs" visibleFrom="md">
              {navLinks.map((link) => (
                <Menu
                  key={link.label}
                  trigger="hover"
                  openDelay={100}
                  closeDelay={150}
                  shadow="md"
                >
                  <Menu.Target>
                    <Button
                      variant="subtle"
                      size="sm"
                      color="dark"
                      rightSection={<ChevronDown size={16} />}
                      styles={(theme) => ({
                        root: {
                          fontWeight: 600,
                          color: theme.colors.dark[7],
                          "&:hover": {
                            backgroundColor: theme.colors.teal[9],
                            color: theme.white,
                          },
                        },
                      })}
                    >
                      {t(link.label)}
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {link.items.map((item) => (
                      <Menu.Item
                        key={item.label}
                        component={Link}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {t(item.label)}
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>
              ))}
              <Button
                component={Link}
                color="dark.9"
                href="/plans"
                variant="subtle"
                size="sm"
              >
                {t("Plans")}
              </Button>
            </Group>
          </Group>

          <Group gap="xs" visibleFrom="md">
            <LanguageSwitcher />
            {renderCreateButtons()}
          </Group>

          <Group hiddenFrom="md" gap="8">
            <LanguageSwitcher />
            <Button
              variant="subtle"
              size="sm"
              c="dark"
              p="0px"
              onClick={drawer.toggle}
              leftSection={<MenuIcon size={20} />}
            >
              {t("Menu")}
            </Button>
          </Group>
        </Flex>
      </Paper>

      <Drawer
        opened={drawerOpened}
        onClose={drawer.close}
        title={t("Navigation")}
        padding="md"
        size="md"
        hiddenFrom="md"
        zIndex={1001}
      >
        <Stack gap="sm">
          {navLinks.map((link) => (
            <Box key={link.label}>
              <UnstyledButton
                onClick={() => setOpenedMenu.toggle()}
                p="0px"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: theme.radius.sm,
                }}
              >
                <Group justify="space-between">
                  <span>{t(link.label)}</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: openedMenu ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </Group>
              </UnstyledButton>
              <Collapse in={openedMenu}>
                {link.items.map((item) => (
                  <UnstyledButton
                    key={item.label}
                    component={Link}
                    href={item.href}
                    onClick={drawer.close}
                    p="xs"
                    pl={34}
                    style={{ display: "block", width: "100%" }}
                  >
                    {t(item.label)}
                  </UnstyledButton>
                ))}
              </Collapse>
            </Box>
          ))}

          <Divider />
          <UnstyledButton
            component={Link}
            href="/plans"
            onClick={drawer.close}
            p="0px"
            style={{ display: "block", width: "100%" }}
          >
            {t("Plans")}
          </UnstyledButton>

          <Divider />
          {renderCreateButtons(true)}
        </Stack>
      </Drawer>
    </>
  );
}
