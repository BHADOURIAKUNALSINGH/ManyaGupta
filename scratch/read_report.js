const fs = require('fs');

const logPath = 'C:/Users/bhado/.gemini/antigravity-ide/brain/35bbd9a4-a0ee-4bb0-b4bf-99c078bf79aa/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (!lines[i]) continue;
  const data = JSON.parse(lines[i]);
  if (data.type === 'PLANNER_RESPONSE' && data.tool_calls) {
    data.tool_calls.forEach(tc => {
      if (tc.name === 'browser_subagent') {
        // Look at the matching step index response
        const stepIdx = data.step_index;
        console.log(`Subagent call at step ${stepIdx}`);
      }
    });
  }
  if (data.type === 'BROWSER_SUBAGENT' && data.content && data.content.includes('Image Identification Report')) {
    console.log('FOUND FULL SUBAGENT REPORT:');
    console.log(data.content);
  }
}
