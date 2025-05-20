import { DocTextFormat } from "../type";

export const coreApiDocs: DocTextFormat[] = [
  {
    title: "Core API",
    description: "Programmatic interface for CodeCollab platform integration",
    subtitle: "RESTful endpoints with JWT authentication",
    
    features: [
      {
        title: "Authentication",
        description: "Secure API access methods",
        details: [
          "Bearer token authentication",
          "OAuth 2.0 support",
          "Rate limiting (1000 requests/hour)",
          "Token refresh endpoints"
        ]
      },
      {
        title: "Resources",
        description: "Primary API endpoints",
        details: [
          "/projects - Project management",
          "/files - File system operations",
          "/executions - Container runs",
          "/collaborators - Team management"
        ]
      },
      {
        title: "Real-Time",
        description: "WebSocket endpoints",
        details: [
          "ws://editor - Live code updates",
          "ws://logs - Execution output streams",
          "ws://notifications - Event subscriptions"
        ]
      },
      {
        title: "Webhooks",
        description: "Event-driven integrations",
        details: [
          "Project change notifications",
          "Build completion triggers",
          "User activity events",
          "Custom payload templates"
        ]
      }
    ],

    authentication: {
      title: "Authentication Flow",
      steps: [
        "Obtain API key from dashboard",
        "Include in headers: Authorization: Bearer {token}",
        "Handle 401 responses with token refresh",
        "Implement exponential backoff for rate limits"
      ]
    },

    endpoints: {
      title: "Key Endpoints",
      items: [
        ["POST /auth/login", "Authenticate and receive tokens"],
        ["GET /projects", "List accessible projects"],
        ["POST /projects/:id/execute", "Trigger container execution"],
        ["WS /editor/:projectId", "Connect to real-time editor"],
        ["GET /users/me", "Get current user profile"]
      ]
    },

    examples: {
      title: "Example Requests",
      items: [
        {
          title: "Create Project",
          code: `curl -X POST https://api.codecollab.com/v1/projects \\
  -H "Authorization: Bearer {token}" \\
  -d '{"name":"MyProject","template":"python"}'`
        },
        {
          title: "Execute Code",
          code: `fetch('https://api.codecollab.com/v1/executions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer {token}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    projectId: 'abc123',
    command: 'python main.py'
  })
})`
        }
      ]
    }
  }
];

