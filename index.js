/*
 * Principal file to execute.
*/


const os = require('os');
const utils = require('./utils')

const dataRequired = utils.getDataRequired(os)

console.log('========== System Info ==========')
utils.showData(dataRequired)
