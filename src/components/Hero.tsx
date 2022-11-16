import React from "react";
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
import image from "../images/contactus.svg";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#ffcc00",
    backgroundSize: "cover",
    padding: theme.spacing.xl * 5,

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
  },

  control: {
    [theme.fn.smallerThan("md")]: {
      width: "100%",
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

export function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Grid justify="center" align="center" gutter="xl">
        <Grid.Col md={4} lg={5}>
          <div className={classes.inner}>
            <div>
              <Title className={classes.title}>Contact Us</Title>

              <Text className={classes.description} mt={30}>
                Get in touch with us, our team is ready to assist you. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                veritatis quidem beatae ipsam, tempore, exercitationem.
              </Text>

              <Button color="dark" className={classes.control} mt={40}>
                Get started
              </Button>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={5}>
          <div className={classes.inner}>
            <Image
              src={image}
              alt="Digital Prime Logo"
              className={classes.desktopImage}
            />
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
