import { printer } from "@/functions/printer";
import { reversify } from "@example/baz";

const message: string = "Hello, world!";

const makeItBig: boolean = false;

const reversedMessage = reversify({
  string: message,
  shouldCapitalize: makeItBig,
});

printer(reversedMessage);
