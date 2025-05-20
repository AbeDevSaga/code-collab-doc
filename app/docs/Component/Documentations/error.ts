"use client";
import { DocTextFormat } from "../type";

export const errorHandlingDocs: DocTextFormat[] = [
  {
    title: "Error Handling",
    description: "Understand and respond to errors returned by the Code Collab API",
    subtitle: "Consistent status codes, structured error objects, and helpful debugging tools",

    features: [
      {
        title: "Standard HTTP Status Codes",
        description: "API responses follow standard HTTP status codes for clarity",
        details: [
          "200 OK – Request succeeded",
          "201 Created – Resource created successfully",
          "400 Bad Request – Validation or client error",
          "401 Unauthorized – Invalid or missing token",
          "403 Forbidden – Access denied based on permissions",
          "404 Not Found – Resource doesn’t exist",
          "409 Conflict – Duplicate or conflicting action",
          "500 Internal Server Error – Something went wrong server-side"
        ]
      },
      {
        title: "Error Response Format",
        description: "Consistent structure for handling errors in clients",
        details: [
          `status: HTTP status code (e.g., 400, 401)`,
          `message: Human-readable error summary`,
          `code: Optional machine-readable error code (e.g., "TOKEN_EXPIRED")`,
          `details: Additional info or validation errors (if any)`
        ]
      },
      {
        title: "Validation Errors",
        description: "Detailed feedback for form and input issues",
        details: [
          "Returned with 400 Bad Request",
          "Field-specific messages (e.g., email, password)",
          "Useful for frontend form validation and UI display",
          "Example: { field: 'email', error: 'Invalid format' }"
        ]
      },
      {
        title: "Common Error Scenarios",
        description: "Typical issues you may encounter",
        details: [
          "Expired or missing access token",
          "Incorrect login credentials",
          "Trying to access a deleted or unauthorized resource",
          "Missing required parameters in API calls"
        ]
      }
    ],

    workflow: {
      title: "Error Handling Strategy",
      steps: [
        "Check the HTTP status code from the response",
        "Read the `message` and `code` fields for details",
        "Display a user-friendly message based on error type",
        "Retry or refresh token if needed (e.g., 401)",
        "Log unexpected 5xx errors for debugging",
        "Use error boundaries or global handlers in frontend apps"
      ]
    },

    security: {
      title: "Error Security Best Practices",
      items: [
        "Avoid exposing sensitive stack traces in client responses",
        "Differentiate between user errors and system errors",
        "Use error codes for internal debugging without leaking system logic",
        "Apply rate-limiting to prevent brute-force retries"
      ]
    },

    technical: {
      title: "Technical Notes",
      items: [
        "Error payloads are returned as JSON with `application/json` content type",
        "Consistent shape across all endpoints for easy parsing",
        "Supports localization of error messages (future roadmap)",
        "Detailed logs available in server console for debugging"
      ]
    }
  }
];
