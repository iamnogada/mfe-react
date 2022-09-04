import React from 'react';
import { Group, ActionIcon, Box, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { Logo } from './_logo';
import { useColorScheme } from '@mantine/hooks';

export default function Brand() {
  const colorScheme = useColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
      })}
    >
      <Group position="apart">
        <Logo colorScheme={colorScheme} />
        <ActionIcon variant="default" size={30}>
          {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Box>
  );
}