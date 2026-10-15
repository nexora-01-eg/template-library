import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge Tailwind CSS classes safely.
 * clsx() resolves conditional classes; twMerge() deduplicates and merges
 * conflicting Tailwind classes (e.g. "p-2" + "p-4" => "p-4").
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
