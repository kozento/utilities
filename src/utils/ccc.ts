/**
 * **Create Classes Conditionally (CCC)** is a utility function that generates classes based on the values of properties.
 *
 * @param {...(string | boolean | null | undefined)[]} args - Arguments defining the classes or conditions. All arguments must be of type string, boolean, null, or undefined.
 * @returns {string} A string containing the generated classes.
 * @example ccc("foo", true && "bar", false && "baz") // "foo bar"
 */
function ccc(...args: (string | boolean | null | undefined)[]): string;
function ccc(): string {
  let r = "",
    i = 0,
    a: unknown;
  for (; i < arguments.length; ) {
    if ((a = arguments[i++]) && typeof a === "string") {
      r && (r += " ");
      r += a;
    }
  }
  return r;
}
export { ccc };
