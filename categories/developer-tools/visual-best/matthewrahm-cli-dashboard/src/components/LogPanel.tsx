import React from "react";
import { Box, Text } from "ink";

interface LogPanelProps {
  serviceName: string | null;
  logs: string;
  loading: boolean;
}

export function LogPanel({ serviceName, logs, loading }: LogPanelProps) {
  const lines = logs.split("\n").filter(Boolean).slice(-15);

  return (
    <Box
      borderStyle="single"
      borderColor="gray"
      paddingX={1}
      flexDirection="column"
      height={18}
    >
      <Text bold color="white">
        {serviceName ? `LOGS — ${serviceName}` : "LOGS"}
      </Text>
      <Box marginTop={1} flexDirection="column">
        {loading ? (
          <Text color="yellow">Loading logs...</Text>
        ) : !serviceName ? (
          <Text color="gray">Press l to view logs for selected service</Text>
        ) : lines.length === 0 ? (
          <Text color="gray">No logs available</Text>
        ) : (
          lines.map((line, i) => (
            <Text key={i} color="gray" wrap="truncate">
              {colorLogLine(line)}
            </Text>
          ))
        )}
      </Box>
    </Box>
  );
}

function colorLogLine(line: string): string {
  // Strip PM2 prefix coloring artifacts
  return line.replace(/\x1b\[[0-9;]*m/g, "");
}
