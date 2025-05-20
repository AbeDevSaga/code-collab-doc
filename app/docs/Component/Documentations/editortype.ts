import { DocTextFormat } from "../type";

export const liveEditorDocs: DocTextFormat[] = [
  {
    title: "Live Editor",
    description: "Real-time collaborative code editing environment",
    subtitle: "Code together from anywhere in the world",
    
    features: [
      {
        title: "Real-Time Collaboration",
        description: "Multiple users editing simultaneously",
        details: [
          "Live cursor and selection visibility",
          "Instant change synchronization",
          "Color-coded user presence indicators"
        ]
      },
      {
        title: "Multi-Language Support",
        description: "Full-featured code editing",
        details: [
          "Syntax highlighting for 20+ languages",
          "Intelligent code completion",
          "Bracket matching and auto-closing"
        ]
      },
      {
        title: "Git Integration",
        description: "Version control built-in",
        details: [
          "Commit, push, pull without leaving editor",
          "Side-by-side diff viewing",
          "Branch management tools"
        ]
      },
      {
        title: "Environment & Security",
        description: "Safe and configurable workspace",
        details: [
          "Docker container isolation",
          "Role-based access controls",
          "Auto-save with version history"
        ]
      }
    ],

    workflow: {
      title: "Collaboration Flow",
      steps: [
        "Open a file in collaborative mode",
        "Invite team members to edit",
        "See real-time changes as they type",
        "Discuss using integrated chat",
        "Commit changes directly to Git"
      ]
    },

    technical: {
      title: "Technical Implementation",
      items: [
        "WebSocket-based synchronization",
        "CRDT algorithms for conflict resolution",
        "Monaco Editor foundation",
        "Docker-based execution environment"
      ]
    },

    benefits: {
      title: "Key Benefits",
      items: [
        "Eliminates merge conflicts through real-time sync",
        "Reduces need for screen sharing",
        "Accelerates code reviews",
        "Enables true pair programming remotely"
      ]
    }
  }
];

