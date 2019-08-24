import getHintFromWord from "./get-hint-from-word";

describe("getHintFromWord", () => {
  it("contains only chars from that word and dots", () => {
    const word = "something";
    const chars = word.split("").sort();
    const hintChars = getHintFromWord(word)
      .split("")
      .filter(c => c !== ".")
      .sort();
    hintChars.forEach(char => {
      expect(chars.find(c => c === char)).not.toBeFalsy();
    });
  });

  it("should have the same amount of chars as one of the two words", () => {
    const word = "word";
    const hint = getHintFromWord(word);
    expect(hint.length).toBe(word.length);
  });

  it("distributes the dots throughout the word", () => {
    const word = "hello";
    const maxChars = Math.floor(word.length / 3);
    const hintChars = getHintFromWord(word, maxChars).split("");
    expect(hintChars.filter(w => w !== ".").length).toBeLessThanOrEqual(
      maxChars
    );
    expect(hintChars.filter(w => w === ".").length).toBeGreaterThanOrEqual(
      word.length - maxChars
    );
  });
});