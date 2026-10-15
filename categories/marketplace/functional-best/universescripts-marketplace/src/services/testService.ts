// Lite version: there is no backend. Answers stay in the browser and are not scored.
// The PRO kit replaces this module with an API client for the assessment endpoints.

export interface TestSubmission {
  sleep_schedule: string;
  cleanliness: string;
  noise_tolerance: string;
  guest_frequency: string;
  budget: string;
  priority: string;
  district: string;
}

export const checkTestStatus = async (): Promise<{ completed: boolean }> => ({ completed: false });

export const submitAssessment = async (_data: TestSubmission): Promise<{ submitted: boolean }> => ({
  submitted: true,
});
