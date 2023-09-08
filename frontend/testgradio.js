const { client } = require("@gradio/client");

async function testGradio() {
    const app = await client("https://chansung-llama2-with-gradio-chat.hf.space/", {
        headers: {
            'Authorization': `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`
        }
    });
    
    const result = await app.predict(1, ["Howdy!"]);
    console.log(result.data);
}

testGradio();