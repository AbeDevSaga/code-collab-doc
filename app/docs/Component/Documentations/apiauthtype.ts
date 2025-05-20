import { DocTextFormat } from "../type";

export const authApiDocs: DocTextFormat[] = [
  {
    title: "Authentication API",
    description: "Secure access and identity management for Code Collab",
    subtitle: "Login, register, refresh, and manage tokens via RESTful endpoints",

    features: [
      {
        title: "Core Endpoints",
        description: "Token-based login and user registration",
        details: [
          "POST /auth/register – Create a new user account",
          "POST /auth/login – Log in and receive JWT access & refresh tokens",
          "POST /auth/refresh – Exchange a refresh token for a new access token",
          "POST /auth/logout – Revoke the current session"
        ]
      },
      {
        title: "Account Management",
        description: "Support for user identity and credential recovery",
        details: [
          "POST /auth/forgot-password – Send reset link to email",
          "POST /auth/reset-password – Complete password reset",
          "GET /auth/me – Fetch the current user's profile",
          "PATCH /auth/update – Update user details or password"
        ]
      },
      {
        title: "Token & Session Security",
        description: "Best practices for safe token-based authentication",
        details: [
          "Short-lived access tokens with refresh token support",
          "Tokens returned in JSON response for client-side storage",
          "Authorization via Bearer tokens in headers",
          "Revocation support for logging out or token expiry"
        ]
      },
      {
        title: "Integration Examples",
        description: "How to integrate Auth API with frontend apps",
        details: [
          "React login flow using axios",
          "Store token in HTTP-only cookie or localStorage",
          "Use interceptors to refresh token on expiry",
          "Protect routes based on JWT claims (roles/scopes)"
        ]
      }
    ],

    workflow: {
      title: "Authentication Flow",
      steps: [
        "Register or log in via /auth/register or /auth/login",
        "Store the returned access and refresh tokens",
        "Use access token in Authorization header for requests",
        "Use /auth/refresh when the access token expires",
        "Call /auth/logout to invalidate the session"
      ]
    },

    security: {
      title: "Security Guidelines",
      items: [
        "All auth endpoints require HTTPS",
        "Tokens should never be exposed in URLs",
        "Refresh tokens must be stored securely (preferably HTTP-only cookies)",
        "Implement token expiration checks client-side"
      ]
    },

    technical: {
      title: "Technical Overview",
      items: [
        "JWT authentication using HS256/RS256 algorithm",
        "Access tokens typically expire in 15–30 minutes",
        "Refresh tokens expire in 7–30 days (configurable)",
        "API follows REST conventions with JSON payloads"
      ]
    }
  }
];
