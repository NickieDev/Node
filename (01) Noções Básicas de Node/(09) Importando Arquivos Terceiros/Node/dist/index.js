"use strict";
// (09) Importando arquivos terceiros
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
console.log(validator_1.default.isEmail('op@gmail.com'));
let ip = '127.0.0.1';
console.log(validator_1.default.isIP(ip));
console.log(validator_1.default.isLowercase('SHANKS'));
