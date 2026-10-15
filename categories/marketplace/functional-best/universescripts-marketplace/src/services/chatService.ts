// Lite version: there is no backend. Chat history is demo data and no socket is opened.
// The PRO kit replaces this module with REST history and a WebSocket connection.

export interface Message {
  id?: number;
  sender_id: number;
  receiver_id: number;
  content: string;
  timestamp?: string;
}

export const getChatHistory = async (partnerId: number): Promise<Message[]> => [
  {
    id: 1,
    sender_id: partnerId,
    receiver_id: 0,
    content: 'Hi! I saw we matched. Are you still looking for a room in District 7?',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
];

// No real-time server in Lite, so there is no socket URL to connect to.
export const getWebSocketUrl = (_userId: number): string | null => null;
