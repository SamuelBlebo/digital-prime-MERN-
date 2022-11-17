import React from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Grid,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: theme.spacing.xl * 3,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 2,
    },
  },

  map: {
    padding: 50,
    borderRadius: 50,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  },

  form: {
    padding: 50,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: 20,
    },
  },

  inputForm: {
    marginTop: 20,
  },
}));

export function GetInTouch() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  const { classes, theme } = useStyles();

  return (
    <div className={classes.root}>
      <Grid gutter="lg">
        <Grid.Col className={classes.map} md={6} lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4732530887395!2d-0.08977658474947321!3d5.644452534321766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8409f2c1bf61%3A0xc4fe5a3df6c9b2e6!2sDigital%20Prime!5e0!3m2!1sen!2sus!4v1668629882541!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 20 }}
          ></iframe>
        </Grid.Col>
        <Grid.Col className={classes.form} md={6} lg={5}>
          <form onSubmit={form.onSubmit(() => {})}>
            <Title
              order={2}
              size="h2"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              })}
              weight={900}
              align="center"
            >
              Get in touch
            </Title>

            <SimpleGrid
              cols={2}
              mt="xl"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <TextInput
                placeholder="Your name"
                name="name"
                variant="filled"
                {...form.getInputProps("name")}
              />
              <TextInput
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <TextInput
              placeholder="Subject"
              mt="md"
              name="subject"
              variant="filled"
              {...form.getInputProps("subject")}
            />
            <Textarea
              mt="md"
              placeholder="Your message"
              maxRows={10}
              minRows={5}
              autosize
              name="message"
              variant="filled"
              {...form.getInputProps("subject")}
            />

            <Group position="left" mt="xl">
              <Button color="yellow.5" type="submit" size="sm">
                Send message
              </Button>
            </Group>
          </form>
        </Grid.Col>
      </Grid>
    </div>
  );
}
