/**
 * Represents visual options for a Pinterest item.
 * This is typically the return type for fetching visual options.
 */
export interface IVisualOptions {
  /** Unique identifier for the visual option */
  id: string;
  /** Optional bookmark or label associated with the visual option */
  bookmark?: string;
}
