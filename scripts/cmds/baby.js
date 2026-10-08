// Removed by user request.
module.exports.config = {
  name: "baby",
  aliases: ["bby"],
  version: "0.0.0",
  author: "removed",
  countDown: 0,
  role: 0,
  description: "disabled",
  category: "CHATTING",
  guide: {
    en: "disabled"
  }
};

module.exports.onStart = async ({ api, event }) => {
  return api.sendMessage("This command has been disabled.", event.threadID, event.messageID);
};

module.exports.onReply = async ({ api, event }) => {
  return api.sendMessage("This command has been disabled.", event.threadID, event.messageID);
};

module.exports.onChat = async ({ api, event }) => {
  return;
};
