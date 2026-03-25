import type { HybrIQSDK } from "@hybriq/sdk";
import { config } from "../config.js";

const SYSTEM_PROMPT = `You are an issue triage AI for Jira. Classify incoming issues.

Output format:
*Priority*: [P0 / P1 / P2 / P3 / P4]
*Component*: [component name]
*Team*: [team name]
*Summary*: [one-line summary]
*Suggested Labels*: [comma-separated labels]

P0 = system down. P1 = user-blocking. P2 = non-blocking bug. P3 = enhancement. P4 = cosmetic/nice-to-have.`;

export async function issueTriage(sdk: HybrIQSDK, issueText: string): Promise<string> {
  const result = await sdk.execute({
    model: config.defaultModel,
    messages: [{ role: "user", content: `Triage this issue:\n\n${issueText}` }],
    systemPrompt: SYSTEM_PROMPT,
    maxTokens: 512,
    metadata: { ...config.metadata, agent: "issue-triage" },
  });
  return result.response;
}
