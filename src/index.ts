import actionsCore from '@actions/core';
import { generateSVG } from './svg/generate_svg.ts';

const lableTextInput = actionsCore.getInput('label-text');
const iconPathInput = actionsCore.getInput('icon-path');
const statusTextInput = actionsCore.getInput('status-text');
const statusColorInput = actionsCore.getInput('status-color');

console.log('status-text:', statusTextInput);
console.log('status-color:', statusColorInput);
console.log('label-text:', lableTextInput);
console.log('icon-path:', iconPathInput);

const svg = generateSVG({text: lableTextInput}, {text: statusTextInput});

actionsCore.setOutput('svg-text', svg.replace('\n', ''));
