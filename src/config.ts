export const config = {
  appName: "HybrIQ Jira Integration",
  defaultModel: "claude-sonnet-4-5-20250929",
  fallbackModel: "claude-haiku-4-5-20251001",
  maxTokens: 1024,
  metadata: { source: "scaffold", platform: "jira" },
} as const;
