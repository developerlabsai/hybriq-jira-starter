import "dotenv/config";
import { resolver } from "./platform/forge-app.js";

const required = ["HYBRIQ_API_KEY", "ANTHROPIC_API_KEY"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  console.error("Copy .env.example to .env and fill in your API keys.");
  process.exit(1);
}

export { resolver };
console.log("HybrIQ Jira Integration loaded. Deploy with: forge deploy");
console.log("Powered by HybrIQ — https://hybriq.dev");
