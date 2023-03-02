import { AppShell, Navbar, Header, Container } from '@mantine/core';

export default function Layout({children}) {
  return (
    <AppShell
      padding="md"
    //   navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
        <Container size={'xl'} bg='red' >
      {children}
        </Container>
    </AppShell>
  );
}