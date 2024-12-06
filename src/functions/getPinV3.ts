import { Api } from "../api/api";
import request from "../fetch/request";
import { parseSpecificScriptTags } from "../parser/parser.tags";
import { parsePinData } from "../parser/parse.pin_v3";
import type { ParsedPinData } from "../interfaces";

/**
 * Fetches pin data using version 3 of the API.
 *
 * This function is deprecated and may be removed in future versions.
 *
 * @deprecated
 *
 * @param id - The unique identifier of the pin to fetch.
 * @returns A promise that resolves to the parsed pin data (`ParsedPinData`).
 */
export async function getPinV3(id: string): Promise<ParsedPinData> {
  // Fetch the raw HTML content of the pin page
  const requestCall = await request.getText(Api.baseURL + `/pin/${id}`);

  // Parse the HTML content to extract all script tags
  const response = requestCall;
  const parseScriptAllScriptTags = parseSpecificScriptTags(response);

  // Extract and parse the relevant JSON data from the first script tag
  const scriptFormValidation = parseScriptAllScriptTags[0];
  const JSONConversion = JSON.parse(scriptFormValidation);

  // Parse the pin data from the JSON object
  const data = parsePinData(JSONConversion);

  // Return the parsed pin data
  return { ...data };
}
