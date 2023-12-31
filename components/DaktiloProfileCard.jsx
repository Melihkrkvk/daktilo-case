"use client";
import { Avatar, Text, Button, Paper } from '@mantine/core';

export function DaktiloProfileCard({ avatar, name, email, job }) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {email}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {job}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Makaleye Git
      </Button>
    </Paper>
  );
}