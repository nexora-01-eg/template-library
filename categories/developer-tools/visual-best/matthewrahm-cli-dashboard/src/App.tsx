import React, { useState, useEffect, useCallback } from "react";
import { Box, useApp, useInput } from "ink";
import { Header } from "./components/Header.js";
import { SystemStats } from "./components/SystemStats.js";
import { ServiceList } from "./components/ServiceList.js";
import { LogPanel } from "./components/LogPanel.js";
import { StatusBar } from "./components/StatusBar.js";
import {
  getStatus,
  getServices,
  getDisk,
  getServiceLogs,
  restartService,
  stopService,
} from "./lib/api.js";
import type { SystemStatus, ServiceInfo, DiskInfo } from "./lib/api.js";

const POLL_INTERVAL = 3_000;

export function App() {
  const { exit } = useApp();

  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [services, setServices] = useState<ServiceInfo[]>([]);
  const [disks, setDisks] = useState<DiskInfo[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [logs, setLogs] = useState("");
  const [logService, setLogService] = useState<string | null>(null);
  const [logsLoading, setLogsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Starting...");
  const [statusColor, setStatusColor] = useState("yellow");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const showMessage = useCallback((msg: string, color = "green") => {
    setStatusMessage(msg);
    setStatusColor(color);
    setTimeout(() => {
      setStatusMessage("Ready");
      setStatusColor("gray");
    }, 3_000);
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const [s, svc, d] = await Promise.all([
        getStatus(),
        getServices(),
        getDisk(),
      ]);
      setStatus(s);
      setServices(svc);
      setDisks(d);
      setLastUpdated(new Date());

      if (statusMessage === "Starting...") {
        setStatusMessage("Ready");
        setStatusColor("gray");
      }
    } catch {
      showMessage("API connection failed", "red");
    }
  }, [showMessage, statusMessage]);

  // Poll for data
  useEffect(() => {
    fetchData();
    const timer = setInterval(fetchData, POLL_INTERVAL);
    return () => clearInterval(timer);
  }, [fetchData]);

  // Auto-refresh logs if viewing
  useEffect(() => {
    if (!logService) return;
    const timer = setInterval(async () => {
      try {
        const l = await getServiceLogs(logService);
        setLogs(l);
      } catch {
        // ignore
      }
    }, POLL_INTERVAL);
    return () => clearInterval(timer);
  }, [logService]);

  useInput(async (input, key) => {
    // Quit
    if (input === "q") {
      exit();
      return;
    }

    // Navigate services
    if (key.upArrow) {
      setSelectedIndex((i) => Math.max(0, i - 1));
      return;
    }
    if (key.downArrow) {
      setSelectedIndex((i) => Math.min(services.length - 1, i + 1));
      return;
    }

    const selected = services[selectedIndex];
    if (!selected) return;

    // View logs
    if (input === "l") {
      setLogsLoading(true);
      setLogService(selected.name);
      try {
        const l = await getServiceLogs(selected.name);
        setLogs(l);
      } catch {
        setLogs("Failed to fetch logs.");
      }
      setLogsLoading(false);
      return;
    }

    // Restart
    if (input === "r") {
      showMessage(`Restarting ${selected.name}...`, "yellow");
      try {
        await restartService(selected.name);
        showMessage(`${selected.name} restarted`, "green");
        await fetchData();
      } catch {
        showMessage(`Failed to restart ${selected.name}`, "red");
      }
      return;
    }

    // Stop
    if (input === "s") {
      showMessage(`Stopping ${selected.name}...`, "yellow");
      try {
        await stopService(selected.name);
        showMessage(`${selected.name} stopped`, "green");
        await fetchData();
      } catch {
        showMessage(`Failed to stop ${selected.name}`, "red");
      }
      return;
    }
  });

  return (
    <Box flexDirection="column">
      <Header hostname={status?.hostname ?? "..."} />
      <Box>
        <Box flexDirection="column" width="60%">
          <ServiceList services={services} selectedIndex={selectedIndex} />
          <LogPanel
            serviceName={logService}
            logs={logs}
            loading={logsLoading}
          />
        </Box>
        <Box flexDirection="column" width="40%">
          <SystemStats status={status} disks={disks} />
        </Box>
      </Box>
      <StatusBar
        message={statusMessage}
        messageColor={statusColor}
        lastUpdated={lastUpdated}
      />
    </Box>
  );
}
