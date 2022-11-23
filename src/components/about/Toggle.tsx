import React from "react";
import { Container, Title, Accordion, createStyles, Box } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  box: {
    backgroundColor: "#000",
    marginTop: 120,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      // padding:0,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    // paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    color: "#ffcc00",
    marginBottom: theme.spacing.xl * 1.5,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 35,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 25,
    },
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function Toggle() {
  const { classes } = useStyles();
  return (
    <Box className={classes.box}>
      <Container className={classes.wrapper}>
        <Title align="center" className={classes.title}>
          Why choose Us?
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>Creative Designs</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Greate customer relation</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              Fast loading and responsive websites.
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>Result oriented Projects</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>24x7 Live Support</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Box>
  );
}
