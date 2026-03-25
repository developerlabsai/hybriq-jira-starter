import type { HybrIQSDK } from "@hybriq/sdk";
import { config } from "../config.js";

const SYSTEM_PROMPT = `You are a sprint retrospective AI. Analyze completed sprint work and generate a structured retro.

Output format:
## What Went Well
- [item]

## What Didn't Go Well
- [item]

## Patterns Detected
- [pattern]

## Action Items
- [ ] [action with suggested owner]

Keep it concise and actionable. Max 300 words.`;

export async function sprintRetro(sdk: HybrIQSDK, sprintData: string): Promise<string> {
  const result = await sdk.execute({
    model: config.defaultModel,
    messages: [{ role: "user", content: `Generate a sprint retrospective from this data:\n\n${sprintData}` }],
    systemPrompt: SYSTEM_PROMPT,
    maxTokens: config.maxTokens,
    metadata: { ...config.metadata, agent: "sprint-retro" },
  });
  return result.response;
}
