import { DocTextFormat } from "../type";

export const authServiceDocs: DocTextFormat[] = [
  {
    title: "Authentication Service",
    description: "Secure identity management for CodeCollab platform",
    subtitle: "Enterprise-grade security with seamless user experience",
    
    features: [
      {
        title: "User Management",
        description: "Secure signup and login flows with email verification",
        details: [
          "Email/password registration",
          "Mandatory email verification",
          "Account recovery system"
        ]
      },
      {
        title: "JWT Authentication",
        description: "Token-based session management",
        details: [
          "RS256 signed tokens",
          "15-minute access token expiry",
          "7-day refresh tokens"
        ]
      },
      {
        title: "Password Security",
        description: "Industry-standard protection",
        details: [
          "Bcrypt hashing (cost factor 12)",
          "Minimum 12-character requirement",
          "Complexity enforcement"
        ]
      },
      {
        title: "Access Control",
        description: "Granular permission system",
        details: [
          "Admin/Developer/Viewer roles",
          "Project-level permissions",
          "Middleware validation"
        ]
      }
    ],

    workflow: {
      title: "Authentication Flow",
      steps: [
        "User registers with email and password",
        "Verification email is sent",
        "Email confirmation completes signup",
        "User logs in and receives JWT",
        "Token validates API requests",
        "Refresh tokens maintain sessions"
      ]
    },

    security: {
      title: "Security Measures",
      items: [
        "End-to-end encrypted communications",
        "Rate-limited login attempts (10/min)",
        "Automatic session expiration",
        "HttpOnly, Secure, SameSite cookies"
      ]
    }
  }
];

