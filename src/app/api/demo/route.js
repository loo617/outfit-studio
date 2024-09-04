import { Client } from "@gradio/client";


export async function GET() {

    const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
    const exampleImage = await response_0.blob();
                            
    const client = await Client.connect("MaziyarPanahi/Qwen2-VL-2B");
    const result = await client.predict("/run_example", { 
                    image: exampleImage, 		
            text_input: "Hello!!", 		
            model_id: "Qwen/Qwen2-VL-2B-Instruct", 
    });

    return Response.json({ result })
}