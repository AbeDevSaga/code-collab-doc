import { DocTextFormat } from "../type";

export const dockerEnvDocs: DocTextFormat[] = [
  {
    title: "Docker Execution Environment",
    description: "Secure, containerized runtime for CodeCollab projects",
    subtitle: "Consistent environments from development to production",
    
    features: [
      {
        title: "Language Support",
        description: "Preconfigured environments for all major languages",
        details: [
          "Node.js, Python, Java, C++ templates",
          "Framework-specific containers (React, Django, etc.)",
          "Custom base image support"
        ]
      },
      {
        title: "Isolation & Security",
        description: "Fully sandboxed execution",
        details: [
          "Process-level isolation between users",
          "Read-only filesystem by default",
          "Network access controls"
        ]
      },
      {
        title: "Persistent Workspaces",
        description: "Maintain your development state",
        details: [
          "Volume storage for dependencies",
          "Snapshot and restore capabilities",
          "Configurable auto-cleanup"
        ]
      },
      {
        title: "Resource Management",
        description: "Optimized performance controls",
        details: [
          "CPU/Memory allocation settings",
          "GPU acceleration option",
          "Scaling for parallel workloads"
        ]
      }
    ],

    workflow: {
      title: "Environment Workflow",
      steps: [
        "Select or define container configuration",
        "Launch environment with one click",
        "Develop in isolated sandbox",
        "Execute code with real-time output",
        "Commit changes or save snapshot"
      ]
    },

    integrations: {
      title: "Platform Integrations",
      items: [
        "Live Editor: Direct execution from code",
        "Version Control: Container specs in Git",
        "Task System: Link environments to tickets",
        "CI/CD: Automated testing pipelines"
      ]
    },

    security: {
      title: "Security Features",
      items: [
        "User-level container isolation",
        "Execution time limits",
        "Command whitelisting",
        "Activity monitoring and logging"
      ]
    }
  }
];

