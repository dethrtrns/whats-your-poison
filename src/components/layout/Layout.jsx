import {
  AppShell,
  Navbar,
  Header,
  Container,
  Text,
  BackgroundImage,
} from "@mantine/core";
import {
  IconBarrel,
  IconBottle,
  IconGlass,
  IconGlassFull,
  IconGlassOff,
} from "@tabler/icons-react";

export default function Layout({ children }) {
  return (
    <AppShell
      padding='md'
      fixed={false}
      //   navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={
        <Header height={"20vh"}>
          <BackgroundImage
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            w={"100%"}
            h={"100%"}
            src='/beer-drinks.gif'
          >
            <Text
              sx={{
                border: "0.5px solid",
                borderRadius: 5,
                padding: "2px 5px",
                boxShadow: 10,
                zIndex: 5,
                ":hover": {
                  // transform: "scale3d(2.5,2.5,-25)",
                  transform: "rotateX(180deg)",
                  transformStyle: "preserve-3d",
                },
              }}
              component='h1'
              ff='cursive'
              variant={"gradient"}
              gradient={{ from: "red", to: "purple", deg: 135 }}
              lts={"-3.5"}
              fz={"xl"}
              ta={"center"}
            >
              What's Your{" "}
              <Text
                component='span'
                transform='uppercase'
                ff='fantasy'
                fz={"xl"}
                fw={100}
                variant={"gradient"}
                gradient={{ from: "red", to: "purple", deg: 135 }}
                lts={-1}
              >
                <IconGlassFull color='purple' />
                Poison
                <IconGlassOff color='maroon' />?
              </Text>
            </Text>
          </BackgroundImage>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container mt={"-md"} size={"xl"} bg='red'>
        {children}
      </Container>
    </AppShell>
  );
}
