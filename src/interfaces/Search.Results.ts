import { ISearch } from "./SearchPins";

/**
 * Represents the search results from a Pinterest search.
 * This is typically the return type when fetching search results.
 */
export interface SearchResults {
  /** Bookmark or label associated with the search results */
  bookmark: string;
  /** Array of search results, each conforming to the `ISearch` interface */
  response: ISearch[];
}
