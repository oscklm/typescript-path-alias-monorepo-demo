import { printer } from "@/functions/printer";
import { reversify } from "@example/baz";

const message: string = "Hello, universe!";

const makeItBig: boolean = true;

const reversedMessage = reversify({
  string: message,
  shouldCapitalize: makeItBig,
});

printer(reversedMessage);
