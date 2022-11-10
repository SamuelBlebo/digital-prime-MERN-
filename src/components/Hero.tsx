import React from "react";
import {
  //   SimpleGrid,
  Image,
  createStyles,
  Container,
  Title,
  Text,
  Button,
} from "@mantine/core";
import image from "../images/contactus.svg";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#ffcc00",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

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
      {/* <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      > */}
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Contact Us</Title>

            <Text className={classes.description} mt={30}>
              Get in touch with us, our team is ready to assist you. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Cupiditate veritatis
              quidem beatae ipsam, tempore, exercitationem veniam consequatur
              voluptatibus vel amet nostrum incidunt iusto illo. Incidunt
              voluptate facere itaque commodi voluptates.
            </Text>
            {/* <Image
              src={image}
              alt="Digital Prime Logo"
              className={classes.desktopImage}
            /> */}

            <Button color="dark" className={classes.control} mt={40}>
              Get started
            </Button>
          </div>
        </div>
      </Container>
      {/* </SimpleGrid> */}
    </div>
  );
}
