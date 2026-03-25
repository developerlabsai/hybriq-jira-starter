# HybrIQ Jira Starter

AI agents for Jira powered by [HybrIQ](https://hybriq.dev) (Atlassian Forge).

Includes 3 pre-built agents:
- **Issue Triage** — Classify issues by priority, component, team, and labels
- **Sprint Retro** — Generate retrospectives from completed sprint work
- **Dependency Mapper** — Identify blockers and dependencies from issue descriptions

## Quick Start

1. Clone and configure:
```bash
git clone https://github.com/developerlabsai/hybriq-jira-starter.git
cd hybriq-jira-starter
cp .env.example .env
# Add your HybrIQ + Anthropic API keys
npm install
```

2. Deploy to Atlassian:
```bash
npm install -g @forge/cli
forge register
forge deploy
forge install
```

3. Test in Jira — the agents appear as issue panel actions.

## License

MIT — Built with [HybrIQ](https://hybriq.dev)
