import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt:
//     "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nContact the ski store and figure out if I can get my skis fixed before I leave on Thursday",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1.0,
//   frequency_penalty: 0.2,
//   presence_penalty: 0.0,
//   stop: ["\n"],
// });

// console.log("response", response);

const openAIService = async (promptText) => {
  console.log("openAIService invoked >>> promptText", promptText)
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: promptText,
    temperature: 0,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.2,
    presence_penalty: 0.0,
    stop: ["\n"],
  });
  return response;
};

export default openAIService;
