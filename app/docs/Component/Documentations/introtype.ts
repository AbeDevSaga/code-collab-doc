import { DocTextFormat } from "../type";

export const codeCollabOverview: DocTextFormat[] = [
  {
    title: "What is Code Collab?",
    description:
      "Code Collab is a cloud-based platform designed to bring developers, project managers, and remote teams together in one shared development environment. Unlike traditional development workflows that rely on multiple disconnected tools, Code Collab integrates all the essential components of modern software development into a single web interface.",
    content: `Key features include:
- Real-time collaborative code editing
- Built-in Git version control
- Task and project management tools
- In-platform communication via chat and video calls
- Docker-based execution environments
- Scalable microservices architecture
- Secure authentication and in-house deployment options

Whether you're a startup team, a large enterprise, or an academic group working on shared projects, Code Collab provides a unified ecosystem that promotes seamless development, reduces friction, and enhances productivity.`,
    subtitle: [
      {
        title: "How to Use This Documentation",
        description:
          "This documentation is structured to guide developers, administrators, project managers, and new users through using and understanding Code Collab."
      }
    ],
    contentList: {
      title: "Here's how it's organized:",
      items: [
        "Getting Started - Step-by-step guide for new users",
        "Features & Services - Detailed explanations of core services",
        "Developer Guide - API integration and configuration",
        "Admin & Deployment - Installation and system management",
        "Security & Compliance - Access control and data security",
        "FAQs & Troubleshooting - Common issues and solutions"
      ]
    },
    note: [
      {
        title: "Quick Tips:",
        content: "Use the search bar at the top to find topics quickly. Most sections include live code snippets and diagrams."
      }
    ]
  }
];

