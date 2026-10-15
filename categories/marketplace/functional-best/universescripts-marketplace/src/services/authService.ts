// Lite version: there is no backend. This module returns demo data so every screen renders.
// The PRO kit replaces it with an API client for login, signup and user lookups.

export interface PublicProfile {
  user_id: number;
  username: string;
}

// Names match the demo conversations on /chat.
const DEMO_USERNAMES: Record<number, string> = {
  1: 'Alice Smith',
  2: 'John Doe',
};

export const getUserPublicProfile = async (userId: number): Promise<PublicProfile> => ({
  user_id: userId,
  username: DEMO_USERNAMES[userId] ?? `User #${userId}`,
});
