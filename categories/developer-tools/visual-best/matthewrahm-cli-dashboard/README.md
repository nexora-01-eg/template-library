# CLI Dashboard

A terminal-based dashboard for monitoring your agents and services. Built with Ink (React for the terminal), it connects to the [Command Center](https://github.com/matthewrahm/telegram-command-center) API for real-time system stats and service management.

## Features

- **Real-time system monitoring** — CPU, memory, disk with visual bars
- **Service management** — View, restart, and stop PM2 services
- **Live logs** — Tail service logs directly in the dashboard
- **Keyboard controls** — Navigate and manage everything without leaving the terminal
- **Auto-refresh** — Data updates every 3 seconds

## Screenshot

```
┌──────────────────────────────────────────────────────────────────┐
│ █ DASHBOARD              hostname          q:quit r:restart ...  │
├──────────────────────────────────────────┬───────────────────────┤
│ SERVICES                                 │ SYSTEM                │
│                                          │                       │
│ ▸ ● command-center   online  CPU 0.2%    │ CPU    ██████░░░░ 30% │
│   ● wallet-tracker   online  CPU 0.1%    │ MEM    ████████░░ 80% │
│                                          │ DISK   ██████░░░░ 60% │
├──────────────────────────────────────────│                       │
│ LOGS — command-center                    │ UPTIME 5d 12h         │
│                                          │                       │
│ Telegram bot is running.                 │                       │
│ API server is running on port 7070.      │                       │
└──────────────────────────────────────────┴───────────────────────┘
```

## Keyboard Controls

| Key | Action |
|-----|--------|
| `↑` `↓` | Select service |
| `l` | View logs for selected service |
| `r` | Restart selected service |
| `s` | Stop selected service |
| `q` | Quit |

## Prerequisites

Requires the [Command Center](https://github.com/matthewrahm/telegram-command-center) API running on `localhost:7070`.

## Setup

```bash
cp .env.example .env
# Edit .env with your Command Center API token

npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Tech Stack

- TypeScript + React
- [Ink](https://github.com/vadimdemedes/ink) — React for the terminal
- Command Center API — Data source

## License

MIT
