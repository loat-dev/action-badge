import actionsCore from '@actions/core';
import { generateSVG } from './svg/generate_svg.ts';

const lableTextInput = actionsCore.getInput('label-text');
const iconPathInput = actionsCore.getInput('icon-path');
const stateTextInput = actionsCore.getInput('state-text');
const stateColorInput = actionsCore.getInput('state-color');

console.log('label-text:', lableTextInput);
console.log('state-text:', stateTextInput);
console.log('state-color:', stateColorInput);
console.log('icon-path:', iconPathInput);

const svg = generateSVG({text: lableTextInput}, {text: stateTextInput, backgroundColor: stateColorInput});

actionsCore.setOutput('svg-text', svg)
actionsCore.setOutput('svg-text-encoded', encodeURIComponent(svg))
