"use client";
import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Badge,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight, IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AVATAR_IMG = "/user-collected.webp";
const PLATFORM_IMG = "/embed-collected.png";

export default function HeroSection() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isExtraSmall = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  const t = useTranslations("hero_section");

  return (
    <Box
      mih={{ base: "auto", sm: "100vh" }}
      bg="url('/grid-box.svg')"
      bgsz="cover"
      bgp="center"
      bgr="no-repeat"
      display="flex"
      px={{ base: "sm", sm: "md" }}
      pt={100}
      pb="50px"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container size="lg">
        <Stack align="center" gap={isMobile ? "md" : "lg"}>
          <Badge
            variant="outline"
            size="lg"
            radius="xl"
            leftSection={
              <Box w={8} h={8} bg="teal.9" style={{ borderRadius: "50%" }} />
            }
            styles={{ label: { fontSize: theme.fontSizes.xs } }}
          >
            {t("Badge")}
          </Badge>

          {/* Hero Title */}
          <Title
            ta="center"
            order={1}
            maw={1000}
            fz={{ base: "1.5rem", sm: "2.8rem", md: "3.2rem" }}
          >
            {t("Title")}
          </Title>

          {/* Hero Description */}
          <Text ta="center" c="dimmed" maw={1000} fz={{ base: "xs", sm: "md" }}>
            {t("Description")}
          </Text>

          {/* Social Proof + Platforms */}
          <Group
            justify="center"
            wrap="wrap"
            gap="md"
            mt={{ base: "lg", sm: "xl" }}
          >
            <Box w={{ base: 160, xs: 180, sm: 200 }}>
              <Image
                src={AVATAR_IMG}
                alt="Avatars of creators using PostNitro"
                width={180}
                height={40}
                priority
              />
            </Box>

            {/* Rating */}
            <Group align="center" gap="xs" wrap="nowrap">
              <Stack gap={0} align="flex-start">
                <Group align="center" gap={4}>
                  <Text fw={700} fz={{ base: "md", sm: "lg" }}>
                    5.0
                  </Text>
                  <Group gap={2}>
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <IconStarFilled
                          key={idx}
                          size={isMobile ? 16 : 18}
                          color="var(--mantine-color-yellow-6)"
                        />
                      ))}
                  </Group>
                </Group>
                <Text c="dimmed" fz={{ base: "xs", sm: "sm" }}>
                  {t("Rating")}
                </Text>
              </Stack>
            </Group>

            {/* Divider */}
            {!isExtraSmall && (
              <Text fz="xs" c="dimmed">
                |
              </Text>
            )}

            {/* Platforms */}
            <Group align="center" gap="xs" wrap="wrap">
              <Stack gap={0} align="flex-start">
                <Text fw={500} fz={{ base: "xs", sm: "sm" }}>
                  {t("EmbeddedInto")}
                </Text>
                <Text fw={400} c="dimmed" fz={{ base: "xs", sm: "sm" }}>
                  {t("Platforms")}
                </Text>
              </Stack>
              <Box w={{ base: 140, xs: 120, sm: 150 }}>
                <Image
                  src={PLATFORM_IMG}
                  alt="Logos of integrated platforms"
                  width={140}
                  height={30}
                />
              </Box>
            </Group>
          </Group>

          {/* CTA Button */}
          <Stack align="center" mt={{ base: "lg", sm: "xl" }} gap="xs">
            <Button
              size={isMobile ? "md" : "lg"}
              rightSection={<IconArrowRight size={20} />}
              color="teal.9"
            >
              {t("CTA")}
            </Button>
            <Text fz="xs" c="dimmed">
              {t("Subtext")}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
