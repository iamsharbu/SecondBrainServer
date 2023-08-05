import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
// import fetch from 'node-fetch';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

export async function getAIResponse(prompt){
    try{
        const response = await fetch(
            `https://api-inference.huggingface.co/models/${process.env.AI_MODEL_NAME}`,
            {
                headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_KEY}` },
                method: "POST",
                body: JSON.stringify(prompt),
            }
        );
        const result = await response.json();
        return result[0]['generated_text'];

  } catch (error) {
    console.error(error)
  }
}