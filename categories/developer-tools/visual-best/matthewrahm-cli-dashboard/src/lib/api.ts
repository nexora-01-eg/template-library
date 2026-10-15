const API_URL = process.env.API_URL || "http://localhost:7070";
const API_TOKEN = process.env.API_TOKEN || "";

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  return res.json() as Promise<T>;
}

async function apiPost<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  return res.json() as Promise<T>;
}

export interface SystemStatus {
  hostname: string;
  cpu_load: string;
  memory_used: string;
  memory_total_gb: string;
  uptime_seconds: number;
}

export interface ServiceInfo {
  name: string;
  status: string;
  cpu: string;
  memory: string;
  uptime: string;
  pid: string;
}

export interface DiskInfo {
  mount: string;
  used_gb: string;
  total_gb: string;
  use_percent: string;
}

export async function getStatus(): Promise<SystemStatus> {
  return apiFetch<SystemStatus>("/status");
}

export async function getServices(): Promise<ServiceInfo[]> {
  return apiFetch<ServiceInfo[]>("/services");
}

export async function getDisk(): Promise<DiskInfo[]> {
  return apiFetch<DiskInfo[]>("/disk");
}

export async function getServiceLogs(
  name: string,
  lines = 20
): Promise<string> {
  const data = await apiFetch<{ logs: string }>(
    `/services/${name}/logs?lines=${lines}`
  );
  return data.logs;
}

export async function restartService(
  name: string
): Promise<string> {
  const data = await apiPost<{ message: string }>(
    `/services/${name}/restart`
  );
  return data.message;
}

export async function stopService(
  name: string
): Promise<string> {
  const data = await apiPost<{ message: string }>(
    `/services/${name}/stop`
  );
  return data.message;
}
