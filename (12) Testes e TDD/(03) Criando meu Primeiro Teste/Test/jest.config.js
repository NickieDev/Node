/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  detectOpenHandles: true // Quando estiver requisições em aberto
};



// npx ts-jest config:init => Comando pra criar esse arquivo