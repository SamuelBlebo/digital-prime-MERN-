import React from "react";
import { Link } from "react-router-dom";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
import Logo from "../images/digital-prime-logo.png";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>

      // <Link
      //   to={link.label}
      //   key={link.label}
      //   className={classes.link}
      //   onClick={(event) => event.preventDefault()}
      // >
      //   {link.label}
      // </Link>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <div style={{ width: 200, marginLeft: "auto", marginRight: "auto" }}>
            <Image src={Logo} alt="Digital Prime Logo" />
          </div>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button
          component="a"
          radius="md"
          color="yellow.5"
          sx={{ height: 30 }}
          href="https://twitter.com/mantinedev"
        >
          GET IN TOUCH
        </Button>
      </Container>
    </Header>
  );
}
