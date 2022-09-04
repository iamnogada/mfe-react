import { ReactNode } from "react";
import { AppShell, Navbar, Header } from '@mantine/core';
import MainHeader from "./MainHeader";
import MainNavbar from "./MainNavbar";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} p="xs">{<MainNavbar />}</Navbar>}
      header={<Header height={60} p="xs">{<MainHeader />}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  )
}

export default MainLayout