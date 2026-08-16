const fs = require('fs');
const readline = require('readline');

const logPath = 'C:/Users/bhado/.gemini/antigravity-ide/brain/35bbd9a4-a0ee-4bb0-b4bf-99c078bf79aa/.system_generated/logs/transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(logPath),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (line.includes('Browser subagent result:')) {
    const data = JSON.parse(line);
    console.log('--- SUBAGENT REPORT ---');
    console.log(data.content || data.thinking || line);
  }
});
