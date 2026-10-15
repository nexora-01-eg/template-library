// Lite version: there is no backend. This module returns demo matches.
// The PRO kit replaces it with an API client for the matching endpoint.

export interface MatchProfile {
  user_id: number;
  username: string;
  match_score: number;
}

export const getMyMatches = async (): Promise<MatchProfile[]> => [
  { user_id: 1, username: 'Alice Smith', match_score: 0.87 },
  { user_id: 2, username: 'John Doe', match_score: 0.74 },
];
