import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "red",
  },
  // iconBox: {
  //   borderRadius:'50%'
  // },
}));

export default function ItemCardMini() {
  const { classes } = useStyles();
  return <h3 className={classes.root}>make your card here!</h3>;
}
