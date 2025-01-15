import { z } from "zod";
import { capatalize } from "../utils";

const schema = z.object({
  string: z.string(),
  shouldCapitalize: z.boolean(),
});

/**
 * Reverses a string and returns the result.
 * @param input - An object containing the string to reverse and a flag to capitalize.
 * @returns The reversed (and optionally capitalized) string.
 */
function reversify(input: {
  string: string;
  shouldCapitalize: boolean;
}): string {
  // Validate the input using the schema
  const parsedInput = schema.parse(input);

  // Reverse the string
  let reversedString = parsedInput.string.split("").reverse().join("");

  // Capitalize if the flag is set
  if (parsedInput.shouldCapitalize) {
    reversedString = capatalize(reversedString);
  }

  return reversedString;
}

export { schema, reversify };
