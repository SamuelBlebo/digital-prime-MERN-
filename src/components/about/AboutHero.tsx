import React from "react";
import { Link } from "react-router-dom";
import {
  //   SimpleGrid,
  Image,
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Grid,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#ffcc00",
    backgroundSize: "cover",
    padding: theme.spacing.xl * 5,
    paddingBottom: 300,

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      padding: theme.spacing.xl * 2,
      paddingTop: 120,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: theme.spacing.xl * 3,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 2,
      paddingTop: 80,
    },
  },

  inner: {},

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  title: {
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 800,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 35,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.black,
    opacity: 0.75,
    maxWidth: 500,
    textAlign: "justify",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: 14,
    },
  },

  control: {
    [theme.fn.smallerThan("md")]: {
      width: "50%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export function AboutHero() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Grid justify="center" align="center" gutter="xl">
        <Grid.Col md={4} lg={5}>
          <div className={classes.inner}>
            <div>
              <Title className={classes.title}>About US</Title>

              <Text className={classes.description} mt={30}>
                Get to know about digital prime. Our team of programmers and
                designers are well versed and enjoys bringing smiles to clients.
                A happy client is all we work to achieve.
              </Text>

              <Button
                component={Link}
                to="/contact"
                color="dark"
                className={classes.control}
                mt={40}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={5}></Grid.Col>
      </Grid>
    </div>
  );
}
