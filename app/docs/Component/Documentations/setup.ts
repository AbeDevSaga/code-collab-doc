import { DocTextFormat } from "../type";

export const basicSetupDocs: DocTextFormat[] = [
  {
    title: "Basic Setup",
    description: "Your first steps to getting started with Code Collab",
    subtitle: "Create a project, invite teammates, and start building in minutes",

    features: [
      {
        title: "Account Setup",
        description: "Register and authenticate your user identity",
        details: [
          "Sign up using email or SSO",
          "Email verification for secure access",
          "Password reset and recovery options",
          "Two-factor authentication (optional)"
        ]
      },
      {
        title: "Project Creation",
        description: "Create and configure your first workspace",
        details: [
          "Start a new project from the dashboard",
          "Set project name and visibility",
          "Choose default language/environment",
          "Assign team roles: Admin, Developer, Viewer"
        ]
      },
      {
        title: "Editor & Environment",
        description: "Start working in the Live Editor",
        details: [
          "Write and edit code collaboratively in real time",
          "Auto-save with version control tracking",
          "Run code in isolated Docker containers",
          "Live terminal output and logs"
        ]
      },
      {
        title: "Team Collaboration",
        description: "Work together with your team",
        details: [
          "Invite users by email or username",
          "Track edits in real time",
          "Use integrated chat or video call",
          "Assign tasks linked to code changes"
        ]
      }
    ],

    workflow: {
      title: "Initial Setup Workflow",
      steps: [
        "Visit https://app.codecollab.com and sign up",
        "Verify your email and log in",
        "Create a new project from your dashboard",
        "Choose a runtime and project type",
        "Invite your team and assign roles",
        "Start coding in the Live Editor"
      ]
    },

    security: {
      title: "Security Practices",
      items: [
        "Secure authentication via password or token",
        "HTTPS for all data transmission",
        "Project-based role permissions",
        "Automatic session expiration and logout"
      ]
    },

    technical: {
      title: "Technical Overview",
      items: [
        "Browser-based IDE with WebSocket sync",
        "Live Docker containers for safe code execution",
        "MongoDB backend for project storage",
        "Realtime presence, Git, and task services"
      ]
    }
  }
];
