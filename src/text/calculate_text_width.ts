import fontVerdana110 from './font/verdana_110.json' with { type: "json" }

export function calculateTextWidth(
  text : string,
  charWidthTable : number[] = fontVerdana110
) : number {
  const fallbackWidth = charWidthTable[64]

  let charWidth = 0

  for (let charIndex = 0; charIndex < text.length; charIndex++) {
    
    charWidth += charWidthTable[text.charCodeAt(charIndex)];
    
  }

  return charWidth;
}
