import * as wasm from './llama_wasm.js';

async function main() {
  await wasm.default(); // Initialize the wasm module
  const result = wasm.test_wasm();
  console.log(result);
}

main();

