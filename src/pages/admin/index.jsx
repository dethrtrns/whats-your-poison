import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  NumberInput,
  Alert,
  Progress,
  Notification,
  Select,
} from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import { IconSend, IconUpload } from "@tabler/icons-react";

import Joi from "joi";
import { useState } from "react";
// import { sendContactForm } from "../lib/api/api";
// import { ContactIconsList } from "../utils/ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    // backgroundBlendMode: "color-dodge",
    // opacity: 0.8,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][6]} 80%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,
    transition: "all 0.5s linear",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const schema = Joi.object({
  title: Joi.string().required().lowercase().trim(),
  price: Joi.number()
    .min(0)
    .message("Invalid price, should be a positive number")
    .required(),
  category: Joi.string().required(),
  abv: Joi.number()
    .min(0)
    .max(100)
    .message("Invalid %age value(should be between 0 to 100)")
    .required(),
  imgUrl: Joi.string().required(),
});

export default function admin() {
  const { classes } = useStyles();
  const [loading, setLoading] = useState(false);
  // const [notify, setNotify] = useState(false);
  const form = useForm({
    validateInputOnChange: true,
    validate: joiResolver(schema),
    initialValues: {
      title: "",
      price: undefined,
      category: "",
      abv: "",
      imgUrl: "",
    },
  });

  const submitForm = async (v) => {
    setLoading(true);
    // setNotify(true);
    //call Database
    // await sendContactForm(v);
    console.log(v);
    setTimeout(() => {
      setLoading(false);
      form.reset();
    }, 1500);
    setTimeout(() => {
      //   setNotify(false);
    }, 4500);
  };

  return (
    <div
      id='contact'
      className={classes.wrapper}>
      {/* <SimpleGrid
        cols={2}
        sx={{
          opacity: 1,
        }}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}> */}
      <div className={classes.form}>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            // form.reset;
            submitForm(values);
          })}>
          <TextInput
            label='Title'
            description='required'
            placeholder='Enter the title here...'
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps("title")}
          />
          <NumberInput
            label='Price'
            placeholder='Enter Price here...'
            description='required'
            required
            // hideControls
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps("price")}
          />
          <NumberInput
            label='ABV'
            placeholder='Enter abv % here...'
            description='required'
            required
            // hideControls
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps("abv")}
          />
          <Select
            label='Category'
            placeholder='Pick one from below'
            data={[
              { value: "beer", label: "Beer" },
              { value: "wine", label: "Wine" },
              { value: "vodka", label: "Vodka" },
              { value: "scotch", label: "Scotch" },
              { value: "whiskey", label: "Whiskey" },
              { value: "rum", label: "Rum" },
            ]}
            {...form.getInputProps("category")}
          />
          <Textarea
            required
            label='ImgUrl'
            description='paste the image address'
            placeholder='Enter url here...'
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps("imgUrl")}
          />

          {loading && (
            <Progress
              radius='xl'
              size='sm'
              color={"violet"}
              value={100}
              striped
              animate
            />
          )}
          <Group
            position='right'
            mt='md'>
            <Button
              type='submit'
              variant='gradient'
              loading={loading}
              loaderProps={{ variant: "dots" }}
              // loaderPosition='center'
              compact={loading}
              // onClick={submitForm}
              leftIcon={<IconUpload size={14} />}
              className={classes.control}>
              {loading ? "Uploading..." : "Upload to database"}
            </Button>
            {/* {notify && (
              <Notification
                icon={<IconCheck size={20} />}
                color='teal'
                title={loading ? "Upload..." : "Success"}
                loading={loading}
                disallowClose={loading}
                onClose={() => setNotify(false)}>
                Keep going...this is easy!
              </Notification>
            )} */}
          </Group>
        </form>
      </div>
      {/* </SimpleGrid> */}
    </div>
  );
}
