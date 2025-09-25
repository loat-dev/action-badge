import actionsCore from '@actions/core';
import octIcons from '@primer/octicons';
import { generateSVG } from './svg/generate_svg.ts';

const iconInput = actionsCore.getInput('icon');
const lableTextInput = actionsCore.getInput('label-text');
const stateTextInput = actionsCore.getInput('state-text');

console.log('icon:', iconInput);
console.log('label-text:', lableTextInput);
console.log('state-text:', stateTextInput);


const svg = generateSVG(
  octIcons[iconInput as keyof typeof octIcons]?.heights?.['16']?.path,
  lableTextInput,
  stateTextInput,
);

actionsCore.setOutput('svg-text', svg)
actionsCore.setOutput('svg-text-encoded', encodeURIComponent(svg))
