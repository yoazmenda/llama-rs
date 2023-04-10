import { hello, llama_web_infer, test_wasm } from "./llama_wasm.js";

// Call the hello function
console.log(hello());

// Call the llama_web_infer function with a sample input
const input = "Sample input";
const inferenceResult = llama_web_infer(input);
console.log(`Inference result: ${inferenceResult}`);

// Call the test_wasm function
console.log(test_wasm());
