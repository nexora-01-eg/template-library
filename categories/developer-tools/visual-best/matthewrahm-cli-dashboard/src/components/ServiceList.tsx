import React from "react";
import { Box, Text } from "ink";
import type { ServiceInfo } from "../lib/api.js";

interface ServiceListProps {
  services: ServiceInfo[];
  selectedIndex: number;
}

export function ServiceList({ services, selectedIndex }: ServiceListProps) {
  return (
    <Box
      borderStyle="single"
      borderColor="gray"
      paddingX={1}
      flexDirection="column"
    >
      <Text bold color="white">
        SERVICES
      </Text>
      <Box marginTop={1} flexDirection="column">
        {services.length === 0 ? (
          <Text color="gray">No services found</Text>
        ) : (
          services.map((s, i) => (
            <ServiceRow
              key={s.name}
              service={s}
              selected={i === selectedIndex}
            />
          ))
        )}
      </Box>
    </Box>
  );
}

function ServiceRow({
  service,
  selected,
}: {
  service: ServiceInfo;
  selected: boolean;
}) {
  const statusColor = service.status === "online" ? "green" : "red";
  const icon = service.status === "online" ? "●" : "○";
  const pointer = selected ? "▸ " : "  ";

  return (
    <Box>
      <Text color={selected ? "cyan" : "white"} bold={selected}>
        {pointer}
      </Text>
      <Text color={statusColor}>{icon} </Text>
      <Text color={selected ? "cyan" : "white"} bold={selected}>
        {padRight(service.name, 20)}
      </Text>
      <Text color="gray">
        {padRight(service.status, 10)}
      </Text>
      <Text color="gray">
        {`CPU ${padRight(service.cpu, 6)} MEM ${padRight(service.memory, 12)} UP ${service.uptime}`}
      </Text>
    </Box>
  );
}

function padRight(str: string, len: number): string {
  return str.length >= len ? str : str + " ".repeat(len - str.length);
}
