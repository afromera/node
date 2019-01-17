"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const yargs = require("yargs");
const argv = yargs.demandOption('num').argv;
console.log('=== n-fatorial ===');
const num = argv.num;
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
console.log(module.paths);
//# sourceMappingURL=main.js.map