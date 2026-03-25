import { hybriq } from "../hybriq.js";
import { issueTriage } from "../agents/issue-triage.js";
import { sprintRetro } from "../agents/sprint-retro.js";
import { dependencyMapper } from "../agents/dependency-mapper.js";

interface ForgeContext {
  issueKey?: string;
  projectKey?: string;
  action: "triage" | "retro" | "dependencies";
  payload: string;
}

export async function resolver(context: ForgeContext): Promise<string> {
  switch (context.action) {
    case "triage":
      return issueTriage(hybriq, context.payload);
    case "retro":
      return sprintRetro(hybriq, context.payload);
    case "dependencies":
      return dependencyMapper(hybriq, context.payload);
    default:
      return `Unknown action: ${context.action}`;
  }
}
