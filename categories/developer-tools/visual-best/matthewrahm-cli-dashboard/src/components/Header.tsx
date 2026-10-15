import React from "react";
import { Box, Text } from "ink";

interface HeaderProps {
  hostname: string;
}

export function Header({ hostname }: HeaderProps) {
  return (
    <Box
      borderStyle="single"
      borderColor="gray"
      paddingX={1}
      justifyContent="space-between"
    >
      <Text bold color="green">
        {"█ DASHBOARD"}
      </Text>
      <Text color="gray">{hostname}</Text>
      <Text color="gray">
        q:quit r:restart s:stop ↑↓:select l:logs
      </Text>
    </Box>
  );
}
