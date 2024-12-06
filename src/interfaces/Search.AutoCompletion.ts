/**
 * Represents the response data for an auto-completion query.
 * This is typically used when retrieving auto-suggested results based on user input.
 */
export interface AutoCompletionResponse {
  /** The query string that was used for auto-completion */
  query?: string;
  /** The index of the suggested result */
  index?: number;
  /** The label or text of the auto-completion suggestion */
  label?: string;
  /** The URL associated with the auto-completion suggestion */
  url?: string;
}
