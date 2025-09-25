import actionsCore from '@actions/core';
import { generateSVG } from './svg/generate_svg.ts';

const lableTextInput = actionsCore.getInput('label-text');
const lableTextColorInput = actionsCore.getInput('label-text-color');
const labelBackgroundColorInput = actionsCore.getInput('state-background-color');

const stateTextInput = actionsCore.getInput('state-text');
const stateTextColorInput = actionsCore.getInput('state-text-color');
const stateBackgroundColorInput = actionsCore.getInput('state-background-color');

const iconPathInput = actionsCore.getInput('icon-path');

console.log('label-text:', lableTextInput);
console.log('label-text-color:', lableTextColorInput);
console.log('label-background-color:', labelBackgroundColorInput);

console.log('state-text:', stateTextInput);
console.log('state-text-color:', stateTextColorInput);
console.log('state-background-color:', stateBackgroundColorInput);
console.log('icon-path:', iconPathInput);

const svg = generateSVG(
  {text: lableTextInput, backgroundColor: labelBackgroundColorInput},
  {text: stateTextInput, backgroundColor: stateBackgroundColorInput},
  await fetch(iconPathInput).then(response => response.text())
);

actionsCore.setOutput('svg-text', svg)
actionsCore.setOutput('svg-text-encoded', encodeURIComponent(svg))
