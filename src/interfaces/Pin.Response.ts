/**
 * Represents the specification for an image, including its URL and optional properties.
 */
export interface PinImageSpec {
  /** URL of the image */
  url: string;

  /** Height of the image */
  height?: number;

  /** Width of the image */
  width?: number;

  /** Dominant color in the image */
  dominantColor?: string | null;

  /** Type of the image (e.g., "JPEG", "PNG") */
  type?: string | null;
}

/**
 * Represents video URLs and associated metadata.
 */
export interface VideoUrls {
  /** Array of video URLs */
  videoUrls: string[];

  /** Unique ID of the video */
  id: string;

  /** Entity ID related to the video */
  entityId: string;

  /** List of video qualities and their associated objects */
  videoList: { __typename: string; vHLSV4: object; v720P: object };
}

/**
 * Represents the owner of a pin's board with basic identification.
 */
export interface PinResponseBoardOwner {
  /** Unique entity ID of the board owner */
  entityId: string;

  /** Unique ID of the board owner */
  id: string;
}

/**
 * Represents a board to which the pin belongs, including collaboration status and permissions.
 */
export interface Board {
  /** Whether the user collaborated on the board */
  collaboratedByMe: boolean;

  /** Permissions the user has on the board, if any */
  collaboratorPermissions: string | null;

  /** Unique entity ID for the board */
  entityId: string;

  /** Whether the board is collaborative */
  isCollaborative: boolean;

  /** Owner of the board */
  owner: PinResponseBoardOwner;

  /** URL of the board */
  url: string;

  /** Whether the user follows the board */
  id: string;

  /** Whether the user follows the board */
  followedByMe: boolean;
}

/**
 * Represents a user (pinner) with associated domain and follow information.
 */
export interface Pinner {
  /** URL of the domain associated with the pinner */
  domainUrl: string | null;

  /** Whether the domain is verified */
  domainVerified: boolean;

  /** Unique entity ID of the pinner */
  entityId: string;

  /** Unique ID of the pinner */
  id: string;

  /** Username of the pinner */
  username: string;

  /** Type of connection the pinner has */
  connectionType: string;

  /** Full name of the pinner */
  fullName: string;

  /** Whether the user explicitly follows the pinner */
  explicitlyFollowedByMe: boolean;

  /** Whether the user has blocked the pinner */
  blockedByMe: boolean;
}

/**
 * Represents a rich summary for a pin.
 */
export interface PinRichSummary {
  /** Type name of the rich summary */
  typeName: string;

  /** Display name for the rich summary */
  displayName: string;
}

/**
 * Represents rich metadata associated with the pin, such as article, product, or recipe details.
 */
export interface RichMetadata {
  /** Type name of the metadata */
  __typename: string;

  /** Article associated with the pin, if any */
  article: { __typename: string };

  /** Products associated with the pin, if any */
  products: any;

  /** Recipe associated with the pin, if any */
  recipe: any;

  /** Tutorial associated with the pin, if any */
  tutorial: any;

  /** Description of the metadata */
  description: string;

  /** Title of the metadata */
  title: string;
}

/**
 * Represents information about a pin's join status, including SEO breadcrumbs and annotations.
 */
export interface PinJoin {
  /** SEO breadcrumbs for the pin */
  seoBreadcrumbs: object[];

  /** Visual annotations for the pin */
  visualAnnotation: string[];
}

/**
 * Represents attribution details for the pin's close-up view.
 */
export interface Attribution {
  /** Full name of the attribution */
  fullName: string;

  /** ID of the attribution */
  id: string;
}

/**
 * Represents a domain user who is associated with the pin.
 */
export interface DomainUser {
  /** Type name of the domain user */
  __typename: string;

  /** ID of the domain user */
  id: string;

  /** Username of the domain user */
  username: string;

  /** Full name of the domain user */
  fullName: string;

  /** Medium-sized profile image URL of the domain user */
  imageMediumUrl: string;
}

/**
 * Represents a link domain associated with the pin.
 */
export interface LinkDomain {
  /** Name of the link domain */
  name: string;

  /** Official user associated with the link domain */
  officialUser: DomainUser;

  /** Unique ID of the link domain */
  id: string;
}

/**
 * Represents the creator of the native pin.
 */
export interface NativePinCreator {
  /** Type name of the native pin creator */
  __typename: string;

  /** ID of the native pin creator */
  id: string;

  /** Username of the native pin creator */
  username: string;

  /** Full name of the native pin creator */
  fullName: string;
}

/**
 * Represents a third-party pin owner.
 */
export interface ThirdPartyPinOwner {
  /** Type name of the third-party pin owner */
  __typename: string;

  /** ID of the third-party pin owner */
  id: string;
}

/**
 * Represents music attribution, if associated with the pin.
 */
export interface MusicAttribution {}

/**
 * Represents an image response for a pin, with multiple image sizes.
 */
export interface ImageResponse {
  /** URL of the image */
  url: string;

  /** Image specification for 236x size */
  imageSpec_236x: PinImageSpec | null;

  /** Image specification for 474x size */
  imageSpec_474x: PinImageSpec | null;

  /** Image specification for 736x size */
  imageSpec_736x: PinImageSpec | null;

  /** Image specification for the original size */
  imageSpec_orig: PinImageSpec | null;
}

/**
 * Represents the parsed data of a pin, including various optional fields for additional metadata.
 */
export interface ParsedPinData {
  /** Title of the pin */
  title?: string;

  /** Description of the pin */
  description?: string;

  /** Hexadecimal color of the pin */
  hexColor?: string;

  /** Image response for the pin */
  image?: ImageResponse;

  /** Link associated with the pin */
  link?: string;

  /** Creation date of the pin */
  createdAt?: string;

  /** Domain of the pin */
  domain?: string;

  /** Whether the pin is promoted */
  isPromoted?: boolean;

  /** The board to which the pin belongs */
  board?: Board | null;

  /** Videos associated with the pin */
  videos?: VideoUrls | null;

  /** Information about the pinner */
  pinner?: Pinner | null;

  /** Rich summary for the pin */
  richSummary?: PinRichSummary | null;

  /** Rich metadata associated with the pin */
  richMetadata?: RichMetadata | null;

  /** Pin join information */
  pinJoin?: PinJoin | null;

  /** Attribution for the pin's close-up view */
  closeupAttribution?: Attribution | null;

  /** Domain of the link associated with the pin */
  linkDomain?: LinkDomain | null;

  /** Native creator of the pin */
  nativeCreator?: NativePinCreator | null;

  /** Reason for the recommendation (if any) */
  recommendationReason?: string | null;

  /** Third-party owner of the pin */
  thirdPartyPinOwner?: ThirdPartyPinOwner | null;

  /** Tracked link for the pin */
  trackedLink?: string | null;

  /** Tracking parameters for the pin */
  trackingParams?: string;

  /** Close-up unified description of the pin */
  closeupUnifiedDescription?: string;

  /** Category of the pin */
  category?: string;

  /** Whether the pin is marked as unsafe */
  isUnsafe?: boolean;

  /** Music attributions associated with the pin */
  musicAttributions?: MusicAttribution[];

  /** Entity ID of the pin */
  entityId?: string;

  /** Unique ID of the pin */
  id?: string;
}
