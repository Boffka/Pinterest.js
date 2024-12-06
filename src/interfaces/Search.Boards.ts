/**
 * Represents the owner of a Pinterest board.
 * This is typically the return type when fetching board owner details.
 */
export interface BoardOwner {
  /** Unique identifier for the board owner */
  id?: string;
  /** Username of the board owner on Pinterest */
  username?: string;
  /** Full name of the board owner */
  fullName?: string;
  /** URL to the avatar image of the board owner */
  avatarURL?: string;
  /** Number of followers the board owner has, can be a string or number */
  followers?: number | string;
}

/**
 * Represents a Pinterest board.
 * This is typically the return type when fetching board details.
 */
export interface IBoards {
  /** Unique identifier for the board */
  id?: string;
  /** Name of the board */
  name?: string;
  /** Type of the board (e.g., "Personal", "Group") */
  type?: string;
  /** URL to the thumbnail image of the board */
  thumbnailURL?: string;
  /** Array of URLs for additional thumbnail images related to the board */
  thumbnailImagesURL?: string[];
  /** URL to the cover image of the board */
  coverURL?: string;
  /** URL to the board for sharing or navigation */
  slashURL?: string;
  /** The number of pins on the board, represented as a string */
  pinCount?: string;
  /** The owner of the board, represented by a `BoardOwner` object */
  owner?: BoardOwner;
}
