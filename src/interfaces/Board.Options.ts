/**
 * Represents options for a board on Pinterest with necessary and optional parameters.
 */
export interface IOptions {
  /** Unique identifier for the board */
  id: string;
  /** URL for the board, often used for navigation or sharing */
  slashurl: string;
  /** Optional bookmark or label for the board */
  bookmark?: string;
}
