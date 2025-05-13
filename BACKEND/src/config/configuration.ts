export default () => ({
  mongoUri: process.env.MONGO_URI,
  openaiApiKey: process.env.OPENAI_API_KEY,
  deepseekApiKey: process.env.DEEPSEEK_API_KEY,
  claudeApiKey: process.env.CLAUDE_API_KEY,
});




// export default () => ({
    // port: parseInt(process.env.PORT, 10) || 3003,
    // database: {
    //   uri: process.env.MONGODB_URI || 'mongodb://localhost/content-generator',
    // },
  //   ai: {
  //     openai: {
  //       apiKey: process.env.OPENAI_API_KEY,
  //     },
  //     deepseek: {
  //       apiKey: process.env.DEEPSEEK_API_KEY,
  //     },
  //     claude: {
  //       apiKey: process.env.CLAUDE_API_KEY,
  //     },
  //   },
  // });