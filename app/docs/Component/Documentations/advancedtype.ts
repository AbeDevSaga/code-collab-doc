import { DocTextFormat } from "../type";

export const advancedSetupDocs: DocTextFormat[] = [
  {
    title: "Advanced Setup Options",
    description: "Customize, self-host, and extend Code Collab for enterprise and devops needs",
    subtitle: "Powerful deployment, configuration, and integration features for teams at scale",

    features: [
      {
        title: "Self-Hosting",
        description: "Deploy Code Collab on your own infrastructure",
        details: [
          "Docker & Docker Compose support",
          "Custom domain and reverse proxy setup",
          "MongoDB and Redis configuration",
          "Production-ready with SSL & HTTPS"
        ]
      },
      {
        title: "Custom Docker Environments",
        description: "Build and run code in your own runtime setup",
        details: [
          "Define Dockerfiles per project",
          "Install custom dependencies and packages",
          "Bind volumes for persistent data",
          "Snapshot and restore containers"
        ]
      },
      {
        title: "External Git Integration",
        description: "Connect Code Collab to your existing repositories",
        details: [
          "GitHub, GitLab, Bitbucket support",
          "SSH key authentication",
          "Push/pull with token-based access",
          "Webhook integration (trigger builds, deploys)"
        ]
      },
      {
        title: "Enterprise Authentication",
        description: "Integrate your identity system for secure access",
        details: [
          "OAuth2 and OpenID Connect support",
          "SAML and LDAP for enterprise",
          "Google Workspace and Azure AD",
          "Role mapping and user provisioning"
        ]
      }
    ],

    workflow: {
      title: "Advanced Deployment Workflow",
      steps: [
        "Clone Code Collab from the official repository",
        "Create and configure a .env file with your custom settings",
        "Launch using Docker Compose or Kubernetes",
        "Set up a reverse proxy with SSL for HTTPS access",
        "Connect external services (Git, CI/CD, Auth)",
        "Monitor logs and scale services independently"
      ]
    },

    security: {
      title: "Security Considerations",
      items: [
        "Encrypted traffic with TLS",
        "Service isolation using containers",
        "Role-based access and team scopes",
        "Audit logs for user and system activity"
      ]
    },

    technical: {
      title: "Technical Stack & Integration",
      items: [
        "Modular microservices architecture",
        "API-first backend with REST endpoints",
        "Docker-based runtime and environment control",
        "Optional Kubernetes support for auto-scaling"
      ]
    }
  }
];
