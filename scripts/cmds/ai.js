const axios = require("axios");

module.exports = {
  config: {
    name: "ai",
    aliases: ["g507", "groq"],
    version: "1.0",
    author: "Thataone",
    countDown: 3,
    role: 0,
    shortDescription: "Chat with Groq AI",
    longDescription: "Ask Groq507 anything using the Groq API.",
    category: "ai",
    guide: {
      en: "{pn} <question>"
    }
  },

  onStart: async function ({ message, args }) {
    if (!args.length) {
      return message.reply(
        "🤖 Groq507\n\nUsage:\n.groq507 <your question>\n\nExample:\n.groq507 Tell me a funny joke"
      );
    }

    const question = args.join(" ");

    // 🔑 Put your Groq API key here
    const API_KEY = "sk-bl-xvzvpx3Bq03FwkqWAJ3BsCk6DK2Jga7sZkLpS_0KS7Yk8psz";

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content:
                "You are Groq507, a helpful, intelligent and friendly AI assistant. Give clear and useful answers."
            },
            {
              role: "user",
              content: question
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        },
        {
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const answer =
        response.data.choices?.[0]?.message?.content ||
        "❌ Groq507 couldn't generate a response.";

      return message.reply(
        `🤖 𝗚𝗥𝗢𝗤𝟱𝟬𝟳\n\n${answer}`
      );

    } catch (error) {
      console.error("Groq507 Error:", error.response?.data || error.message);

      return message.reply(
        "❌ Groq507 encountered an error.\n\nPlease check your API key or try again later."
      );
    }
  }
};
