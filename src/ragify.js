export function ragify(text) {
  return text.split("").reduce(
    (acc, char) => {
      const { text, shouldUppercase } = acc;
      const isWhitespace = char.trim() === "";
      if (isWhitespace) {
        return {
          text: text + char,
          shouldUppercase,
        };
      } else {
        const newChar = shouldUppercase
          ? char.toUpperCase()
          : char.toLowerCase();
        return {
          text: text + newChar,
          shouldUppercase: !shouldUppercase,
        };
      }
    },
    {
      text: "",
      shouldUppercase: false,
    }
  ).text;
}
