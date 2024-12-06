/**
 * Represents reaction counts for different reactions on a pin.
 * The key is the type of reaction (like "like", "love", etc.), and the value is the count.
 */
type ReactionCounts = {
  [key: string]: number;
};

/**
 * Represents various visual options for a Pinterest pin or item.
 * This is typically the return type when fetching pin-related visuals.
 */
export interface IVisuals {
  /** Alt text for the visual (usually an image) */
  altText?: string;
  /** Information about the pinner who created the pin */
  pinner?: IVisualPinner;
  /** Information about the board the pin belongs to */
  board?: IVisualBoard;
  /** Information about the images associated with the pin */
  images?: IVisualImages;
  /** Pin-related data such as title, description, and reaction counts */
  pinData?: IVisualPinData;
  /** Story-related data (if the pin is part of a story) */
  storyData?: IVisualStoryData;
}

/**
 * Represents the pinner (user) who created the pin.
 * This is typically used in `IVisuals` to describe the pinner's profile.
 */
export interface IVisualPinner {
  /** Full name of the pinner */
  fullName?: string;
  /** URL to the pinner's avatar image */
  imageURL?: string;
  /** Unique identifier for the pinner */
  id?: string;
  /** Username of the pinner */
  username?: string;
}

/**
 * Represents the board where the pin is located.
 * This is typically used in `IVisuals` to describe the board.
 */
export interface IVisualBoard {
  /** Name of the board */
  name?: string;
  /** URL of the board */
  url?: string;
  /** URL to the board's thumbnail image */
  thumbnailURL?: string;
}

/**
 * Represents different sizes of images associated with a pin.
 * This is used in `IVisuals` to describe the image URLs in different resolutions.
 */
export interface IVisualImages {
  /** URL to a small-sized image */
  small?: string;
  /** URL to a medium-sized image */
  medium?: string;
  /** URL to a large-sized image */
  large?: string;
  /** URL to the original image */
  original?: string;
}

/**
 * Represents detailed data about the pin itself.
 * This is used in `IVisuals` to provide metadata about the pin.
 */
export interface IVisualPinData {
  /** Title of the pin */
  title: string;
  /** Description of the pin */
  description: string;
  /** Dominant color of the pin's image */
  dominantColor: string;
  /** Creation date of the pin */
  createdAt: string;
  /** Image signature for verifying the image */
  imageSignature: string;
  /** Link associated with the pin */
  link: string;
  /** Boolean indicating if the pin is a video */
  isVideo: boolean;
  /** Counts of different reactions to the pin */
  reactionCounts: ReactionCounts;
  /** Count of comments on the pin */
  commentsCount: number;
  /** Count of repins for the pin */
  repinCount: number;
}

/**
 * Represents data specific to a visual story, if the pin is part of one.
 * This is used in `IVisuals` when the pin is part of a story.
 */
export interface IVisualStoryData {
  /** ID of the story */
  storyId: string | null;
  /** ID of the story node (page in the story) */
  storyNodeId: string | null;
  /** Total video duration for the story */
  totalVideoDuration: number;
  /** Total number of pages in the story */
  pages: number;
}

/**
 * Represents the result of a visual search or query.
 * This is typically the return type when fetching search results for visuals.
 */
export interface IVisualResult {
  /** Bookmark or label associated with the search result */
  bookmark: string;
  /** Array of visuals found in the search */
  visuals?: IVisuals[];
}
