/**
 * Represents the native creator of a board, including details like ID, username, and avatar.
 */
export interface NativeCreator {
  /** Unique ID of the creator */
  id: string;

  /** Username of the creator */
  username: string;

  /** Full name of the creator */
  fullName: string;

  /** URL of the creator's avatar image */
  avatarURL: string;

  /** Type of creator (e.g., user, organization) */
  type: string;
}

/**
 * Represents the response data for a board, including optional fields such as title and creator details.
 */
export interface BoardDataResponse {
  /** Unique ID of the board */
  id?: string;

  /** Type of the board */
  type?: string;

  /** Title of the board */
  title?: string;

  /** URL of an image associated with the board */
  image?: string;

  /** Native creator details of the board */
  nativeCreator?: NativeCreator;
}

/**
 * Represents the results of a board query, including an optional bookmark and response data.
 */
export interface BoardResults {
  /** Optional bookmark for pagination or referencing specific data */
  bookmark?: string;

  /** Array of board data responses */
  response?: BoardDataResponse[];
}
