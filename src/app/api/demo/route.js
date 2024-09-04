import { Client } from "@gradio/client";


export async function GET() {


    // 在 fetch 请求中使用代理
    // const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png", {
    //     agent,  // 添加代理
    // });
    // const exampleImage1 = await response_0.blob();
                            
    // const response_1 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png", {
    //     agent,  // 添加代理
    // });
    // const exampleImage2 = await response_1.blob();
                            
    const client = await Client.connect("Kwai-Kolors/Kolors-Virtual-Try-On");
    const result = await client.predict("/tryon", { 
                    person_img: 'das', 
                    garment_img: 'dasda', 		
            seed: 0, 		
            randomize_seed: true, 
    });
    const res = result.data;
    console.log(res);

    return Response.json({ res })
}