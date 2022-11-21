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
    marginTop: -250,
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
    backgroundColor: "#000",
    lineHeight: 0.75,
    textAlign: "left",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 70,
    paddingRight: 70,

    borderRadius: 20,
    borderBottomLeftRadius: 0,
    color: "#ffcc00",

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
    fontSize: 14,
    lineHeight: 1.5,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 8,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 10,
    },
  },

  list: {
    color: "#ffcc00",
  },
}));

export function InfoBoxes() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Grid gutter="md">
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <h3>Who We Are</h3>
            <p className={classes.infoLink}>
              Digital Prime is a tech company currently specializing in website
              development and digital marketing. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Atque fuga, error vitae eius illum,
            </p>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <h3>Our Mission</h3>
            <p className={classes.infoLink}>
              Help businesses reach their maximal potential through
              digitalization. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Laudantium esse placeat voluptatem aperiam.
            </p>
          </div>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>
          <div className={classes.iconBox}>
            <h3>What we do</h3>
            <List
              className={classes.list}
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="yellow.5" size={24} radius="xl">
                  <IconCaretRight size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
            </List>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
