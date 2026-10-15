import React from "react";
import { Box, Text } from "ink";

interface StatusBarProps {
  message: string;
  messageColor?: string;
  lastUpdated: Date | null;
}

export function StatusBar({ message, messageColor, lastUpdated }: StatusBarProps) {
  const timeStr = lastUpdated
    ? lastUpdated.toLocaleTimeString()
    : "--:--:--";

  return (
    <Box paddingX={1} justifyContent="space-between">
      <Text color={(messageColor as never) ?? "gray"}>{message}</Text>
      <Text color="gray">Last updated: {timeStr}</Text>
    </Box>
  );
}
