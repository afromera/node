import {fatorial} from './fatorial'
import * as yargs from 'yargs'

const argv = yargs.demandOption('num').argv

console.log('=== n-fatorial ===')

const num = argv.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

console.log(module.paths)