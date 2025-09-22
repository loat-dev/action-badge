import actionsCore from '@actions/core';

const statusTextInput = actionsCore.getInput('status-text');
const statusColorInput = actionsCore.getInput('status-color');
const lableTextInput = actionsCore.getInput('label-text');
const iconPathInput = actionsCore.getInput('icon-path');

console.log('status-text:', statusTextInput);
console.log('status-color:', statusColorInput);
console.log('label-text:', lableTextInput);
console.log('icon-path:', iconPathInput);

actionsCore.setOutput('custom-text-output', 'Test123');
