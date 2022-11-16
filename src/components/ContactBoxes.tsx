import React from "react";
import {
  SimpleGrid,
  createStyles,
  ActionIcon,
  Center,
  Grid,
} from "@mantine/core";
import { IconAt, IconPhone, IconMap2 } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  root: {
    marginTop: 50,
    marginLeft: 120,
    marginRight: 120,
    paddingTop: theme.spacing.xl * 2,

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
      padding: theme.spacing.sm * 2,
    },
  },

  iconBox: {
    backgroundColor: "#F8F9FA",
    lineHeight: 0.75,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 20,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  actionIcon: {
    display: "table",
    margin: "auto",
  },
  infoLink: {
    fontSize: 12,
    lineHeight: 1,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 8,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 10,
    },
  },
}));

export function ContactBoxes() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Grid gutter="md">
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <ActionIcon className={classes.actionIcon} color="dark">
              <IconAt size={24} />
            </ActionIcon>
            <h4>Email Us</h4>
            <p className={classes.infoLink}>info@digitalprimegh.com</p>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <ActionIcon className={classes.actionIcon} color="dark">
              <IconPhone size={24} />
            </ActionIcon>
            <h4>Call Us</h4>
            <p className={classes.infoLink}>0549390344</p>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <ActionIcon className={classes.actionIcon} color="dark">
              <IconMap2 size={24} />
            </ActionIcon>
            <h4>Visit Us</h4>
            <p className={classes.infoLink}>
              Fiapa Close, Spintex, Accra, Ghana
            </p>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
