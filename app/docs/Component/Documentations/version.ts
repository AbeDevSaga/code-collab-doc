import { DocTextFormat } from "../type";

export const versionControlDocs: DocTextFormat[] = [
  {
    title: "Version Control Service",
    description: "Seamless Git integration for collaborative development",
    subtitle: "Enterprise-grade version control without leaving CodeCollab",
    
    features: [
      {
        title: "Core Git Operations",
        description: "Complete version control workflow",
        details: [
          "Commit, push, pull with one-click",
          "Visual branch management",
          "Conflict resolution tools",
          "Partial staging (hunks/lines)"
        ]
      },
      {
        title: "Code History",
        description: "Track and understand changes",
        details: [
          "Timeline view of commits",
          "Side-by-side diff comparisons",
          "Blame annotation",
          "Commit search by message/author"
        ]
      },
      {
        title: "Collaboration",
        description: "Team-friendly workflows",
        details: [
          "Protected branches",
          "Pull request system (coming soon)",
          "Code review tools",
          "Integration with tasks"
        ]
      },
      {
        title: "Integrations",
        description: "Works with your existing tools",
        details: [
          "Connect to GitHub/GitLab/Bitbucket",
          "SSH key management",
          "CI/CD pipeline triggers",
          "Webhook support"
        ]
      }
    ],

    workflow: {
      title: "Version Control Workflow",
      steps: [
        "Make changes in Live Editor",
        "Stage and commit with message",
        "Push to remote repository",
        "Create feature branches as needed",
        "Review changes via pull requests",
        "Merge approved changes to main"
      ]
    },

    security: {
      title: "Security & Controls",
      items: [
        "Granular repository permissions",
        "Signed commits verification",
        "Two-factor authentication",
        "Activity audit logging"
      ]
    },

    technical: {
      title: "Technical Implementation",
      items: [
        "Git microservice with REST API",
        "CRDT-based real-time sync",
        "Distributed version control",
        "Conflict-free replicated data types"
      ]
    }
  }
];