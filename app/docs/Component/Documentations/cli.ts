import { DocTextFormat } from "../type";

export const cliDocs: DocTextFormat[] = [
  {
    title: "Command Line Interface (CLI)",
    description: "Terminal access to Code Collab for automation and power users",
    subtitle: "Manage projects, sync code, and run builds with a single command",

    features: [
      {
        title: "Core Capabilities",
        description: "Perform critical project tasks from your terminal",
        details: [
          "Create and manage projects",
          "Push/pull files and code",
          "Trigger Docker-based builds",
          "Set environment variables"
        ]
      },
      {
        title: "Automation & CI/CD",
        description: "Integrate with external tools and pipelines",
        details: [
          "Supports GitHub Actions, GitLab CI, Jenkins",
          "Scripted deployments and tests",
          "Environment-aware CLI commands",
          "Webhook-compatible workflows"
        ]
      },
      {
        title: "Authentication",
        description: "Secure terminal-based sessions",
        details: [
          "Login with credentials or API tokens",
          "Persistent local session storage",
          "Token revocation from dashboard",
          "Supports token expiration policies"
        ]
      },
      {
        title: "Integration",
        description: "Works with your local stack",
        details: [
          "Compatible with Git-style workflows",
          "Sync files with local projects",
          "Docker container interaction",
          "Minimal dependencies"
        ]
      }
    ],

    workflow: {
      title: "Typical CLI Workflow",
      steps: [
        "Install the CLI using npm or download",
        "Run `collab login` to authenticate",
        "Create or connect to a project",
        "Push local files to the remote workspace",
        "Run code in Docker containers using `collab run`",
        "Automate deployment via CI pipelines"
      ]
    },

    security: {
      title: "Security & Access",
      items: [
        "HTTPS for all CLI communication",
        "Token-based authentication with expiration",
        "Support for local session revocation",
        "Activity logging for audit compliance"
      ]
    },

    technical: {
      title: "Technical Notes",
      items: [
        "Cross-platform CLI binary",
        "Available via npm or manual download",
        "Built with Node.js and REST API integration",
        "Lightweight execution footprint"
      ]
    }
  }
];
