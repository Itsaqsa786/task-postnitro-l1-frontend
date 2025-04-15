"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
  ThemeIcon,
  SegmentedControl,
} from "@mantine/core";
import { IconCheck, IconBolt } from "@tabler/icons-react";
import { basePlans, freePlanId, planPrices, planFeatureCounts } from "./plans";
import { useTranslations } from "next-intl";
type BillingPeriod = "monthly" | "yearly";

export default function PlansSection() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const theme = useMantineTheme();
  const t = useTranslations("plans");
  const highlightColor = theme.colors.teal[8];
  const defaultBorderColor = theme.colors.gray[3];
  const lightShadowColor = theme.colors.gray[2];

  const segmentedControlStyles = {
    root: {
      backgroundColor: theme.colors.gray[1],
      padding: 4,
      width: "auto",
      display: "inline-flex",
    },
    indicator: {
      backgroundColor: theme.white,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.xs,
    },
    label: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 20,
      paddingRight: 20,
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      "&[dataActive]": {
        color: theme.black,
        fontWeight: 600,
      },
    },
    control: {
      border: "none !important",
      minWidth: 140,
      textAlign: "center" as const,
    },
  };

  const getPlanDetails = (planId: string, period: BillingPeriod) => {
    const price = planPrices[planId][period];
    const originalPriceKey = `${planId}.originalPrice${
      period === "yearly" ? "Yearly" : "Monthly"
    }`;
    const saveTextKey = `${planId}.saveTextYearly`;
    const originalPrice = t.rich(originalPriceKey, {}) || "";
    const saveText = period === "yearly" ? t.rich(saveTextKey, {}) || "" : "";

    const features = Array.from(
      { length: planFeatureCounts[planId] || 0 },
      (_, i) => t(`${planId}.features.${i}`)
    );

    return {
      title: t(`${planId}.title`),
      subtext: t(`${planId}.subtext`),
      price,
      originalPrice: originalPrice || undefined,
      saveText: saveText || undefined,
      features,
    };
  };

  return (
    <Box
      mih={{ base: "auto", sm: "auto" }}
      bg="url('/grid-box.svg')"
      bgsz="cover"
      bgp="center"
      bgr="no-repeat"
      p={{ base: theme.spacing.xs, sm: 80 }}
    >
      <Container size="lg">
        <Stack align="center" gap="sm" mb={50}>
          <Title order={2} ta="center" fz={{ base: `25px`, sm: `40px` }}>
            {t("sectionTitle")}
          </Title>
          <Text ta="center" c="dimmed" size="sm" maw={600}>
            {t("sectionDescription")}
          </Text>

          <SegmentedControl
            value={billing}
            onChange={(value) => setBilling(value as BillingPeriod)}
            data={[
              { label: t("billingToggleMonthly"), value: "monthly" },
              { label: t("billingToggleYearly"), value: "yearly" },
            ]}
            radius="md"
            size="md"
            mt="lg"
            styles={segmentedControlStyles}
          />

          {/* Yearly Discount Banner */}
          {billing === "yearly" && (
            <Box
              bg={highlightColor}
              px="sm"
              py={5}
              mt="xs"
              style={{
                display: "inline-block",
                borderRadius: theme.radius.xl,
              }}
            >
              <Text c="white" fw={500} size="xs">
                {t("yearlyDiscountBanner")} {/* Use key */}
              </Text>
            </Box>
          )}
        </Stack>

        {/* Pricing Grid */}
        <Grid gutter="xl" justify="center" align="center">
          {basePlans.map((planBase, idx: number) => {
            const planDetails = getPlanDetails(planBase.id, billing);
            return (
              <Grid.Col key={idx} span={{ base: 12, sm: 8, md: 4 }}>
                <Paper
                  radius="md"
                  p="lg"
                  shadow="none"
                  withBorder
                  style={{
                    borderColor: planBase.highlight
                      ? highlightColor
                      : defaultBorderColor,
                    borderWidth: planBase.highlight ? 3 : 2,
                    borderStyle: "solid",
                    boxShadow: planBase.highlight
                      ? `10px 10px ${highlightColor}`
                      : `6px 6px ${lightShadowColor}`,
                    backgroundColor: theme.white,
                    height: "auto",
                  }}
                >
                  <Stack gap={4} style={{ flexGrow: 1 }}>
                    <Text tt="uppercase" fw={700} size="lg" c={highlightColor}>
                      {planDetails.title}
                    </Text>
                    {planDetails.originalPrice && (
                      <Text
                        component="span"
                        td="line-through"
                        fz={16}
                        c="red.7"
                        size="sm"
                      >
                        {planDetails.originalPrice}
                      </Text>
                    )}
                    <Text fw={700} fz={22} lh={1.2}>
                      {planDetails.price}
                    </Text>
                    {planDetails.saveText && (
                      <Text size="sm" c="var(--mantine-color-teal-9)" fw={500}>
                        {planDetails.saveText}
                      </Text>
                    )}
                    <Text size="sm" c="dimmed" mt="xs" mb="sm">
                      {planDetails.subtext}
                    </Text>
                    <Stack gap={8} mt="md">
                      {planDetails.features.map((feature, i) => (
                        <Group
                          key={i}
                          gap="sm"
                          wrap="nowrap"
                          align="flex-start"
                        >
                          <Box mt={4}>
                            <ThemeIcon
                              variant="light"
                              color="var(--mantine-color-teal-9)"
                              size="sm"
                              radius="xl"
                            >
                              <IconCheck
                                color={theme.colors.teal[9]}
                                size={14}
                                stroke={2.5}
                              />
                            </ThemeIcon>
                          </Box>
                          <Text size="sm" lh={1.4}>
                            {feature} {/* Use translated feature */}
                          </Text>
                        </Group>
                      ))}
                    </Stack>
                  </Stack>{" "}
                  {/* End of growing stack */}
                  {/* Button and disclaimer at the bottom */}
                  <Box mt="xl">
                    <Button
                      fullWidth
                      variant={planBase.highlight ? "filled" : "outline"}
                      color={highlightColor}
                      radius="sm"
                      size="sm"
                      leftSection={<IconBolt size={18} />}
                    >
                      {t("getStartedButton")} {/* Use key */}
                    </Button>
                    <Text size="xs" c="dimmed" mt="sm" ta="center">
                      {t("taxDisclaimer")} {/* Use key */}
                    </Text>
                  </Box>
                </Paper>
              </Grid.Col>
            );
          })}
        </Grid>

        {/* Add-Ons Text */}
        <Text mt={50} ta="center" size="sm" c="dimmed">
          {t.rich("addOnsText", {
            link: (chunks) => (
              <Text
                component="a"
                href="#"
                c="var(--mantine-color-teal-9)"
                fw={500}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {chunks}
              </Text>
            ),
          })}
        </Text>

        {/* Free Plan Section */}
        <Center mt="xl">
          <Paper
            withBorder
            p="lg"
            radius="md"
            w="100%"
            maw={600}
            style={{
              borderColor: defaultBorderColor,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: `6px 6px ${lightShadowColor}`,
              backgroundColor: theme.white,
            }}
          >
            {(() => {
              const freePlanDetails = getPlanDetails(freePlanId, billing);
              return (
                <Group
                  justify="space-between"
                  align="center"
                  grow
                  preventGrowOverflow={false}
                >
                  <Stack gap={4} style={{ flexBasis: "auto", flexGrow: 1 }}>
                    <Text
                      tt="uppercase"
                      fw={700}
                      size="lg"
                      c="var(--mantine-color-teal-9)"
                    >
                      {freePlanDetails.title}
                    </Text>
                    <Text fw={700} fz={22} lh={1.2}>
                      {freePlanDetails.price}
                    </Text>
                    <Text size="sm" c="dimmed" mt="xs">
                      {freePlanDetails.subtext}
                    </Text>
                  </Stack>

                  <Stack gap={8} style={{ flexBasis: "auto", flexGrow: 1.5 }}>
                    {freePlanDetails.features.map((feature, i) => (
                      <Group key={i} gap="sm" wrap="nowrap" align="flex-start">
                        <Box mt={4}>
                          <ThemeIcon
                            variant="light"
                            color="var(--mantine-color-teal-9)"
                            size="sm"
                            radius="xl"
                          >
                            <IconCheck
                              color={theme.colors.teal[9]}
                              size={14}
                              stroke={2.5}
                            />
                          </ThemeIcon>
                        </Box>
                        <Text size="sm" lh={1.4}>
                          {feature}
                        </Text>
                      </Group>
                    ))}
                  </Stack>

                  <Box style={{ flexBasis: "auto", alignSelf: "center" }}>
                    <Button
                      variant="outline"
                      color={highlightColor}
                      radius="sm"
                      size="sm"
                      leftSection={<IconBolt size={18} />}
                    >
                      {t("getStartedButton")}
                    </Button>
                  </Box>
                </Group>
              );
            })()}
          </Paper>
        </Center>
      </Container>
    </Box>
  );
}
