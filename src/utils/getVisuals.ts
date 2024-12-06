import type { IVisuals } from "../interfaces/index";
export function getVisuals<T>(visuals: T[]): IVisuals[] {
  return visuals?.map((visual: any) => {
    const altText =
      visual?.alt_text || visual?.auto_alt_text || "No description available";

    const pinner = {
      fullName: visual?.pinner?.full_name || "Unknown",
      imageURL: visual?.pinner?.image_large_url || null,
      id: visual?.pinner?.id || "N/A",
      username: visual?.pinner?.username || "Anonymous",
    };

    const board = {
      name: visual?.board?.name || "Untitled",
      url: visual?.board?.url || "N/A",
      thumbnailURL: visual?.board?.image_thumbnail_url || null,
    };

    const images = {
      small: visual?.images?.["136x136"]?.url || null,
      medium: visual?.images?.["236x"]?.url || null,
      large: visual?.images?.["736x"]?.url || null,
      original: visual?.images?.orig?.url || null,
    };

    const pinData = {
      title: visual?.title || "No title",
      description:
        visual?.description || visual?.grid_description || "No description",
      dominantColor: visual?.dominant_color || "Unknown",
      createdAt: visual?.created_at || "Unknown date",
      imageSignature: visual?.image_signature || "Unknown",
      link: visual?.link || "No link available",
      isVideo: visual?.is_video || false,
      reactionCounts: visual?.reaction_counts || { "1": 0 },
      commentsCount: visual?.comment_count || 0,
      repinCount: visual?.repin_count || 0,
    };

    const storyData = {
      storyId: visual?.story_pin_data_id || null,
      storyNodeId: visual?.story_pin_data?.node_id || null,
      totalVideoDuration: visual?.story_pin_data?.total_video_duration || 0,
      pages: visual?.story_pin_data?.pages?.length || 0,
    };
    return {
      altText,
      board,
      images,
      pinData,
      pinner,
      storyData,
    };
  });
}
