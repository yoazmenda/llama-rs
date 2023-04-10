use warp::path;
use warp::Filter;

#[tokio::main]
async fn main() {
    print!("hi from server");
    let static_assets = warp::fs::dir("/root/workspace/llama-rs");
    let routes = static_assets;
    warp::serve(routes).run(([0, 0, 0, 0], 80)).await;
}
