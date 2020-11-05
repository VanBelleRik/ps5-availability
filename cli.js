const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
var Helper = require("./helpers");

console.log(Helper.getIntro());

const argv = yargs(hideBin(process.argv))
    .usage("Usage: -s <store>, -e <edition>")
    .option("s", { alias: "store", describe: "Store you want to check", type: "string", demandOption: true })
    .option("e", { alias: "edition", describe: "Disc or Digital", type: "string", demandOption: true })
    .argv

console.log('Checking availability for the PS5 %s on %s...', argv.edition, argv.store);