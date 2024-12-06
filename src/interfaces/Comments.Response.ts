/**
 * Represents a user who has commented, including optional fields for user details.
 */
export interface CommentUser {
  /** Username of the user who commented */
  username?: string;

  /** Display name of the user who commented */
  displayName?: string;

  /** Profile image URL of the user */
  image?: string;

  /** Unique ID of the user */
  id?: string;
}

/**
 * Represents the result of a comment, including the comment's text, user details, and additional metadata.
 */
export interface CommentsResultResponse {
  /** Text content of the comment */
  text?: string;

  /** Creation date of the comment */
  createdAt?: string;

  /** Information about the user who commented */
  user?: CommentUser;

  /** Additional details about the comment */
  details?: string;

  /** Number of likes the comment has received */
  likes?: number;

  /** List of image URLs associated with the comment */
  image?: string[];

  /** List of tags associated with the comment */
  tags?: string[];
}
