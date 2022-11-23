import React from "react";
import {
  SimpleGrid,
  createStyles,
  ActionIcon,
  Center,
  Grid,
  List,
  ThemeIcon,
  Transition,
} from "@mantine/core";
import { IconCaretRight } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#F1F3F5",
    marginTop: 120,
    marginLeft: 120,
    marginRight: 120,
    paddingTop: theme.spacing.xl * 2,
    borderRadius: 20,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginTop: 35,
      marginBottom: 35,
      marginLeft: 120,
      marginRight: 80,
      padding: theme.spacing.xl,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 30,
      marginRight: 30,
      padding: theme.spacing.sm * 3,
    },
  },

  header: {
    paddingLeft: 80,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 18,
      paddingLeft: 0,
      lineHeight: 1.2,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 14,
      paddingLeft: 0,
      lineHeight: 1.2,
      marginBottom: 40,
    },
  },

  iconBox: {
    lineHeight: 0.75,
    textAlign: "left",
    marginTop: -80,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 70,
    paddingRight: 70,
    borderBottomLeftRadius: 0,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      lineHeight: 1,
      paddingTop: 10,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
  },

  numbers: {
    fontSize: 80,
    color: "#E4E7EC",
    marginBottom: 50,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginBottom: -10,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: { marginBottom: 35 },
  },

  infoHeader: {
    fontWeight: 800,
  },
  infoLink: {
    fontSize: 14,
    lineHeight: 1.5,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 14,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 12,
    },
  },
}));

export function Process() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>The process is 100% stress free.</h2>
      </div>
      <Grid gutter="md">
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <h1 className={classes.numbers}>01</h1>
            <div></div>
            <h3 className={classes.infoHeader}>Contact Us</h3>
            <p className={classes.infoLink}>
              Your only job is to contact us. Either via E-mail, WhatsApp, or
              Phone Call.
            </p>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <h1 className={classes.numbers}>02</h1>
            <h3 className={classes.infoHeader}>Our Team Takes Over</h3>
            <p className={classes.infoLink}>
              Our team takes over as soon as possible. Simple questions and
              follow-ups to meet your requirement and satisfaction.
            </p>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <h1 className={classes.numbers}>03</h1>
            <h3 className={classes.infoHeader}>Sit Back and Relax</h3>
            <p className={classes.infoLink}>
              Leave the rest to us. Digital Prime will ensure your need and
              standards are met.
            </p>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
