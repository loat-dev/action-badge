import fontVerdana110 from './font/verdana_110.json' with { type: 'json' }

/**
 * This function calculates the width in `px` of the provided text.
 * 
 * @param text Input text to calculate the width for
 * @param charWidthTable Character width lookup table
 * @returns The calculated width for the text.
 */
export function calculateTextWidth(
  text : string,
  charWidthTable : number[] = fontVerdana110
) : number {
  const fallbackWidth = charWidthTable[64]

  let charWidth = 0

  for (let charIndex = 0; charIndex < text.length; charIndex++) {
    charWidth += charWidthTable[text.charCodeAt(charIndex)] ?? fallbackWidth;
  }

  return charWidth / 10;
}
