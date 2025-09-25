import actionsCore from '@actions/core';
import octIcons from '@primer/octicons';
import { generateSVG } from './svg/generate_svg.ts';

const lableTextInput = actionsCore.getInput('label-text');
const lableTextColorInput = actionsCore.getInput('label-text-color');
const labelBackgroundColorInput = actionsCore.getInput('state-background-color');

const stateTextInput = actionsCore.getInput('state-text');
const stateTextColorInput = actionsCore.getInput('state-text-color');
const stateBackgroundColorInput = actionsCore.getInput('state-background-color');

const iconInput = actionsCore.getInput('icon');

console.log('label-text:', lableTextInput);
console.log('label-text-color:', lableTextColorInput);
console.log('label-background-color:', labelBackgroundColorInput);

console.log('state-text:', stateTextInput);
console.log('state-text-color:', stateTextColorInput);
console.log('state-background-color:', stateBackgroundColorInput);
console.log('icon:', iconInput);

const svg = generateSVG(
  {text: lableTextInput, backgroundColor: labelBackgroundColorInput},
  {text: stateTextInput, backgroundColor: stateBackgroundColorInput},
  octIcons[iconInput as keyof typeof octIcons]?.heights?.['16']?.path
);

actionsCore.setOutput('svg-text', svg)
actionsCore.setOutput('svg-text-encoded', encodeURIComponent(svg))
