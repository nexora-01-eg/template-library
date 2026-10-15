// Lite version: there is no backend. This module returns a demo profile.
// The PRO kit replaces it with an API client for onboarding and profile data.

export interface ProfileData {
  full_name: string;
  age: number;
  gender: string;
  university: string;
  major: string;
  bio: string;
  username?: string;
}

export const getMyProfile = async (): Promise<ProfileData> => ({
  full_name: 'Demo Student',
  age: 20,
  gender: 'Prefer not to say',
  university: 'RMIT University Vietnam',
  major: 'Computer Science',
  bio: 'Demo profile. The Lite version has no backend, so this data is built in.',
  username: 'demo_student',
});
