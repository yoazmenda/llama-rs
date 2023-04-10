use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn test_wasm() -> String {
    "Hello from Rust and WebAssembly!".to_string()
}
