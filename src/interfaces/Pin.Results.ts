/**
 * Represents the specifications for an image, including its color, size, and URL.
 */
export interface ImageSpec {
  /** The dominant color of the image, or null if not available */
  dominantColor: string | null;
  /** The height of the image */
  height: number;
  /** The type of the image, or null if not available */
  type: string | null;
  /** The URL of the image */
  url: string;
  /** The width of the image */
  width: number;
}

/**
 * Represents the owner of a Pin board.
 */
export interface PinBoardOwner {
  /** The entity ID of the owner */
  entityId: string;
  /** The ID of the owner */
  id: string;
}

/**
 * Represents a Pin board, including collaboration and ownership information.
 */
export interface PinBoard {
  /** Whether the current user has collaborated on this board */
  collaboratedByMe: boolean;
  /** Permissions associated with collaborating on the board */
  collaboratorPermissions: string | null;
  /** The entity ID of the board */
  entityId: string;
  /** Whether the board is collaborative */
  isCollaborative: boolean;
  /** The owner of the board */
  owner: PinBoardOwner;
  /** The URL of the board */
  url: string;
  /** The ID of the board */
  id: string;
  /** Whether the current user is following this board */
  followedByMe: boolean;
}

/**
 * Represents a rich summary of a Pin's data, including its name and type.
 */
export interface RichSummary {
  /** The type name of the summary */
  typeName: string;
  /** The display name of the summary */
  displayName: string;
}

/**
 * Represents detailed information about a Pin, including descriptions, images, and other metadata.
 */
export interface PinData {
  /** The description of the Pin */
  description: string;
  /** The dominant color of the Pin */
  dominantColor: string;
  /** Embedded content related to the Pin */
  embed: any;
  /** Description for the grid layout */
  gridDescription: string;
  /** Title for the grid layout */
  gridTitle: string;
  /** Image specifications for a specific size (236x) */
  imageSpec_236x: ImageSpec;
  /** The image signature */
  imageSignature: string;
  /** Whether the Pin is eligible for a product detail page (PDP) */
  isEligibleForPdp: boolean;
  /** Rich summary data associated with the Pin */
  richSummary: RichSummary;
  /** ID for the story Pin data */
  storyPinDataId: any;
  /** Video content related to the Pin */
  videos: any;
  /** Board associated with the Pin */
  board: PinBoard;
  /** Attribution information for the closeup image */
  closeupAttribution: { fullName: string; id: string };
  /** The creation date of the Pin */
  createdAt: string;
  /** The domain of the Pin */
  domain: string;
  /** Image specifications for another size (136x136) */
  imageSpec_136x136: ImageSpec;
  /** Image URL associated with the Pin */
  images: { url: string };
  /** Whether the Pin is a downstream promotion */
  isDownstreamPromotion: boolean;
  /** Whether the Pin is eligible for aggregated comments */
  isEligibleForAggregatedComments: boolean;
  /** Whether the Pin is promoted */
  isPromoted: boolean;
  /** ID for the V1 idea Pin */
  isV1IdeaPin: any;
  /** Pin join data, including SEO breadcrumbs and visual annotations */
  pinJoin: {
    seoBreadcrumbs: any[];
    visualAnnotation: string[];
  };
  /** Link associated with the Pin */
  link: string;
  /** Domain data for the link */
  linkDomain: {
    name: string;
    officialUser: {
      __typename: string;
      id: string;
      username: string;
      fullName: string;
      imageMediumUrl: string;
    };
    id: string;
  };
  /** Website link for the user associated with the Pin */
  linkUserWebsite: any;
  /** Mobile link for the Pin */
  mobileLink: any;
  /** Native creator information */
  nativeCreator: {
    __typename: string;
    id: string;
    username: string;
    fullName: string;
  };
  /** Pinned board information */
  pinnedToBoard: any;
  /** Pinner information for the user who created the Pin */
  pinner: {
    domainUrl: any;
    domainVerified: boolean;
    entityId: string;
    id: string;
    username: string;
    connectionType: string;
    fullName: string;
    explicitlyFollowedByMe: boolean;
    blockedByMe: boolean;
  };
  /** Promoter information, if the Pin is promoted */
  promoter: any;
  /** Whether the Pin is removable from promotion */
  promotedIsRemovable: boolean;
  /** Reason for the recommendation of the Pin */
  recommendationReason: any;
  /** Rich metadata for various content types (e.g., article, products, recipe, tutorial) */
  richMetadata: {
    __typename: string;
    article: { __typename: string };
    products: any;
    recipe: any;
    tutorial: any;
    description: string;
    title: string;
  };
  /** Section information related to the Pin */
  section: any;
  /** Whether the Pin should open in stream */
  shouldOpenInStream: boolean;
  /** Story Pin data */
  storyPinData: any;
  /** Third-party Pin owner information */
  thirdPartyPinOwner: any;
  /** Tracked link URL */
  trackedLink: string;
  /** Tracking parameters associated with the Pin */
  trackingParams: string;
  /** Whether the Pin is an out-of-stock product */
  isOosProduct: boolean;
  /** Whether the Pin is a stale product */
  isStaleProduct: boolean;
  /** Flags for shopping-related data */
  shoppingFlags: any[];
  /** Closeup description for the Pin */
  closeupUnifiedDescription: string;
  /** Closeup description for the image of the Pin */
  closeupDescription: string;
  /** Category associated with the Pin */
  category: string;
  /** Various image specifications for different sizes */
  imageSpec_236: { url: string };
  imageSpec_474: { url: string };
  imageSpec_736: { url: string };
  /** Whether the Pin is considered unsafe */
  isUnsafe: boolean;
  /** Origin pinner information */
  originPinner: {
    username: string;
    id: string;
    fullName: string;
  };
  /** Title of the Pin */
  title: string;
  /** Original image URL for the Pin */
  imageSpec_orig: {
    __typename: string;
    url: string;
  };
  /** Large image URL for the Pin */
  imageLargeUrl: string;
  /** HTML description for the Pin */
  descriptionHtml: string;
  /** Alt text for the image */
  altText: any;
  /** Auto-generated alt text for the image */
  autoAltText: any;
  /** Whether the Pin is hidden */
  isHidden: boolean;
  /** Shuffle data for the Pin */
  shuffle: any;
  /** Image specifications for different sizes */
  imageSpec_60x60: { url: string };
  imageSpec_170x: { url: string };
  imageSpec_474x: { url: string };
  imageSpec_564x: { url: string };
  imageSpec_736x: { url: string };
  imageSpec_600x315: { url: string };
  /** Whether the Pin should mute the sound */
  shouldMute: boolean;
  /** Music attributions related to the Pin */
  musicAttributions: any[];
  /** Entity ID for the Pin */
  entityId: string;
  /** Media attribution information */
  mediaAttribution: any;
  /** The ID of the Pin */
  id: string;
}

/**
 * Represents the response structure for Pin data query.
 */
export interface Response {
  data: {
    v3GetPinQuery: {
      data: PinData;
    };
  };
}

/**
 * Represents the data returned for a Pin query.
 */
export interface Data {
  response: Response;
}
