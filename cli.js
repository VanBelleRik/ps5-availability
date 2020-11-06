const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { Environment: PS5 } = require('ps5-availability');
const Helper = require("./helpers");

console.log(Helper.getIntro());

const argv = yargs(hideBin(process.argv))
    .usage("Usage: -s <store>, -e <edition>")
    .option("r", { alias: "retailer", describe: "Retailer you want to check", type: "string", demandOption: true})
    .option("e", { alias: "edition", describe: "Disc or Digital", type: "string", demandOption: true })
    .check((argv) => {
        if(Helper.hasRetailer(argv.retailer)){
            return true;
        }
        throw new Error('Use one of the existing retailers: ' + Helper.getRetailers().join(', '));
    })
    .argv

let result = PS5.checkAvailability([argv.retailer]);
console.log(result);