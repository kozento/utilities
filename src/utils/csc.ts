/**
 * **Create Styles Conditionally (CSC)** is a utility function that generates classes based on the values of properties.
 *
 * @param {Partial<T>} props - An object containing properties. All keys must be strings, and all values must be strings, numbers, or symbols.
 * @param {Partial<{[K in keyof T]?: T[K] extends string | number | symbol ? Partial<{ [V in T[K]]: string }> : never;}> & { default?: string | string[] }} styles - An object containing styles. All keys must be strings, and all values must be objects with string keys and string values. It can also contain a "default" key with a string or an array of strings. The "default" key is reserved, accepts a string or an array of strings, and is added to the result by default.
 * @returns {string} A string containing the generated classes.
 * @example csc({ foo: "bar" }, { default: "defaultClass", foo: { bar: "baz" } }) // "defaultClass baz"
 */
function csc<T extends Record<string, string | number | symbol>>(
  props: Partial<T>,
  styles: Partial<{
    [K in keyof T]?: T[K] extends string | number | symbol
      ? Partial<{ [V in T[K]]: string }>
      : never;
  }> & { default?: string | string[] }
): string {
  let r = "";
  for (const s in styles) {
    if (s === "default") {
      r && (r += " ");
      if (typeof styles[s] === "string") r += styles[s];
      else r += (styles[s] as string[]).join(" ");
      continue;
    }
    const pv = props[s as keyof T],
      sk = styles[s as keyof T];
    if (s in props && pv && sk && (sk as any)[pv as string]) {
      r && (r += " ");
      r += (sk as any)[pv as string];
    }
  }
  return r;
}
export { csc };
