import type { HybrIQSDK } from "@hybriq/sdk";
import { config } from "../config.js";

const SYSTEM_PROMPT = `You are a dependency analysis AI. Identify dependencies and blockers from issue descriptions.

Output format:
*Blocks*: [list of issue keys this blocks]
*Blocked By*: [list of issue keys blocking this]
*Related*: [list of related issues]
*Risk*: [Low / Medium / High] — [why]
*Recommendation*: [suggested action]

If no dependencies are found, say "No dependencies detected" and explain why.`;

export async function dependencyMapper(sdk: HybrIQSDK, issueText: string): Promise<string> {
  const result = await sdk.execute({
    model: config.defaultModel,
    messages: [{ role: "user", content: `Analyze dependencies for this issue:\n\n${issueText}` }],
    systemPrompt: SYSTEM_PROMPT,
    maxTokens: 512,
    metadata: { ...config.metadata, agent: "dependency-mapper" },
  });
  return result.response;
}
