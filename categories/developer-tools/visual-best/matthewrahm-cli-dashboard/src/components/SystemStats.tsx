import React from "react";
import { Box, Text } from "ink";
import type { SystemStatus, DiskInfo } from "../lib/api.js";

interface SystemStatsProps {
  status: SystemStatus | null;
  disks: DiskInfo[];
}

export function SystemStats({ status, disks }: SystemStatsProps) {
  if (!status) {
    return (
      <Box borderStyle="single" borderColor="gray" paddingX={1} flexDirection="column">
        <Text color="yellow">Loading system stats...</Text>
      </Box>
    );
  }

  const cpuVal = parseFloat(status.cpu_load);
  const memVal = parseFloat(status.memory_used);
  const cpuColor = cpuVal > 80 ? "red" : cpuVal > 50 ? "yellow" : "green";
  const memColor = memVal > 80 ? "red" : memVal > 50 ? "yellow" : "green";

  const uptimeDays = Math.floor(status.uptime_seconds / 86400);
  const uptimeHours = Math.floor((status.uptime_seconds % 86400) / 3600);

  const mainDisk = disks.find((d) => d.mount === "/");
  const diskVal = mainDisk ? parseFloat(mainDisk.use_percent) : 0;
  const diskColor = diskVal > 80 ? "red" : diskVal > 50 ? "yellow" : "green";

  return (
    <Box borderStyle="single" borderColor="gray" paddingX={1} flexDirection="column">
      <Text bold color="white">
        SYSTEM
      </Text>
      <Box marginTop={1} flexDirection="column" gap={0}>
        <Box>
          <Text color="gray">{"CPU    "}</Text>
          <Text color={cpuColor}>{bar(cpuVal)}</Text>
          <Text color={cpuColor}>{` ${status.cpu_load}`}</Text>
        </Box>
        <Box>
          <Text color="gray">{"MEM    "}</Text>
          <Text color={memColor}>{bar(memVal)}</Text>
          <Text color={memColor}>{` ${status.memory_used} of ${status.memory_total_gb} GB`}</Text>
        </Box>
        {mainDisk && (
          <Box>
            <Text color="gray">{"DISK   "}</Text>
            <Text color={diskColor}>{bar(diskVal)}</Text>
            <Text color={diskColor}>{` ${mainDisk.use_percent}% (${mainDisk.used_gb}/${mainDisk.total_gb} GB)`}</Text>
          </Box>
        )}
        <Box marginTop={1}>
          <Text color="gray">{`UPTIME ${uptimeDays}d ${uptimeHours}h`}</Text>
        </Box>
      </Box>
    </Box>
  );
}

function bar(percent: number): string {
  const width = 20;
  const filled = Math.round((percent / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}
