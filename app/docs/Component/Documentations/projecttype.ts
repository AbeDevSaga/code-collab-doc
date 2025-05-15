import { DocTextFormat } from "../type";

export const projectManagementDocs: DocTextFormat[] = [
  {
    title: "Project Management Service",
    description: "The Project Management Service in Code Collab provides integrated tools to plan, track, and coordinate development work without leaving the coding environment.",
    content: "This unified approach connects tasks directly to code changes, team discussions, and progress metrics—eliminating silos between development and project tracking.",

    featureList: {
      title: " Key Features",
      items: [
        "Task Boards: Kanban-style boards with customizable workflows",
        "Sprint Planning: Create and manage agile sprints with capacity tracking",
        "Issue Tracking: Log, categorize, and prioritize development tasks",
        "Time Estimates: Set and track time expectations for tasks",
        "Milestones: Mark key deliverables and project phases",
        "Dependencies: Visualize and manage task relationships",
        "Progress Reporting: Burn-down charts and velocity metrics",
        "Code Linking: Connect commits and PRs directly to tasks"
      ]
    },

    collaborationFeatures: {
      title: " Collaboration Tools",
      items: [
        "@mentions in task comments",
        "Task-specific chat threads",
        "File attachments on tickets",
        "Real-time updates for all team members",
        "Integrated code review workflows"
      ]
    },

    securitySection: {
      title: " Security & Permissions",
      items: [
        "Role-based project access (Admin/Dev/Viewer)",
        "Fine-grained task visibility controls",
        "Audit logs for all modifications",
        "Two-factor auth for sensitive operations"
      ]
    },

    technicalDetails: {
      title: " Technical Details",
      items: [
        "Built on React/Node.js microservices",
        "RESTful API for integrations",
        "WebSocket real-time updates",
        "PostgreSQL backend with Redis caching"
      ]
    },

    benefits: {
      title: " Benefits",
      items: [
        "Single source of truth for development work",
        "Reduces context switching between tools",
        "Improves accountability with traceability",
        "Adaptable to agile or hybrid methodologies"
      ]
    }
  }
];