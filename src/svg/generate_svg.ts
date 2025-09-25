import { type LabelOptions } from './label_options.ts';
import { type StateOptions } from './state_options.ts';
import { calculateTextWidth } from '../text/calculate_text_width.ts';
import { colors } from './colors.ts';


/**
 * This function generates a SVG badge.
 * 
 * @param label The label options
 * @param state The state options
 */
export function generateSVG(
  label : LabelOptions,
  state : StateOptions,
  iconUrl : string
) : string {

  const labelTextWidth = Math.floor(calculateTextWidth(label.text));
  const stateTextWidth = Math.floor(calculateTextWidth(state.text));

  const labelPadding = 28;
  const statePadding = 7;

  const workflowWidth = labelTextWidth + labelPadding;
  const stateWidth = stateTextWidth + statePadding;
  const totalWidth = workflowWidth + stateWidth + 4;
             
  const workflowBackgroundPath = `M0,3 C0,1.3431 1.3552,0 3.02702703,0 L${workflowWidth},0 L${workflowWidth},20 L3.02702703,20 C1.3552,20 0,18.6569 0,17 L0,3 Z`;
  const statePath = `M0 0h${stateWidth + 0.47}C${stateWidth + 1.869} 0 ${stateWidth + 3} 1.343 ${stateWidth + 3} 3v14c0 1.657-1.132 3-2.53 3H0V0z`

  const stateBackgroundColors : typeof colors.GREY = colors.GREY

  const [start, end] = state.backgroundColor.split('-')

  stateBackgroundColors.start = start ?? colors.GREY.start;    
  stateBackgroundColors.end = end ?? start ?? colors.GREY.end;

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20">
  <title>${label.text} - ${state.text}</title>
  <defs>
    <linearGradient id="workflow-fill" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop stop-color="#444D56" offset="0%"/>
      <stop stop-color="#24292E" offset="100%"/>
    </linearGradient>
    <linearGradient id="state-fill" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop stop-color="${stateBackgroundColors.start}" offset="0%"/>
      <stop stop-color="${stateBackgroundColors.end}" offset="100%"/>
    </linearGradient>
    <mask id="icon-mask">
      <image href="${iconUrl}" width="14" height="14" fill="white"/>
    </mask>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <g font-family="'DejaVu Sans',Verdana,Geneva,sans-serif" font-size="11px">
      <path id="workflow_background" d="${workflowBackgroundPath}" fill="url(#workflow-fill)" fill-rule="nonzero"/>
      <text fill="#010101" fill-opacity=".3" aria-hidden="true">
        <tspan x="22.1981982" y="15">${label.text}</tspan>
      </text>
      <text fill="#FFFFFF">
        <tspan x="22.1981982" y="14">${label.text}</tspan>
      </text>
    </g>
    <g transform="translate(${workflowWidth})" font-family="'DejaVu Sans',Verdana,Geneva,sans-serif" font-size="11px">
      <path id="state_background" d="${statePath}" fill="url(#state-fill)" fill-rule="nonzero"/>
      <text fill="#010101" fill-opacity=".3" aria-hidden="true">
        <tspan x="5" y="15">${state.text}</tspan>
      </text>
      <text fill="#FFFFFF">
        <tspan x="5" y="14">${state.text}</tspan>
      </text>
    </g>
    <g transform="translate(4,3)" fill="#959DA5">
      <rect x="3" y="3" width="14" height="14" mask="url(#icon-mask)"/>
    </g>
  </g>
</svg>
  `.trim()
}
