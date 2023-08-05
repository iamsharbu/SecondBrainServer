import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const getAIResponse = async (prompt) => {
  try {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${process.env.AI_MODEL_NAME}`,
      {
        headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_KEY}` },
        method: 'POST',
        body: JSON.stringify(prompt),
      },
    );
    const [result] = await response.json();
    // eslint-disable-next-line camelcase
    const { generated_text } = result;
    const regEx = /(.*startseq\s+)(.*)(\s+endseq.*)/;
    // eslint-disable-next-line camelcase
    const parsedResponse = generated_text.replace(regEx, '$2');
    return parsedResponse;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export default getAIResponse;
