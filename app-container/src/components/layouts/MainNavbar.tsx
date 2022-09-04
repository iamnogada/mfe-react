import { Badge, Navbar, NavLink } from '@mantine/core'
import { IconCurrentLocation, IconCurrentLocationOff, IconCircleOff, IconGauge, IconHome2 } from '@tabler/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

function MainNavbar({ }: Props) {
  const router = useRouter()
  return (
    <>
      {/* Grow section will take all available space that is not taken by first and last sections */}
      <Navbar.Section grow mt="md">
        <Link href="/" passHref>
          <NavLink label="Home" icon={<IconHome2 size={16} stroke={1.5} />} active={router.pathname === '/'} />
        </Link>
        <Link href="/local" passHref>
          <NavLink label="Local App" icon={<IconCurrentLocation size={16} stroke={1.5} />} active={router.pathname === '/local'} />
        </Link>
        <Link href="/remote" passHref>
          <NavLink label="Remote App" icon={<IconCurrentLocationOff size={16} stroke={1.5} />} active={router.pathname === '/remote'} />
        </Link>

      </Navbar.Section>

      {/* Last section with normal height (depends on section content) */}
      <Navbar.Section>Last section</Navbar.Section>
    </>
  )
}

export default MainNavbar