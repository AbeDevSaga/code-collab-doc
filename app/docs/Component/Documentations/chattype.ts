import { DocTextFormat } from "../type";

export const chatServiceDocs: DocTextFormat[] = [
  {
    title: "Chat Service Overview",
    description: "The Chat Service in Code Collab is a real-time communication module built directly into the development platform. It enables seamless collaboration by allowing developers, project managers, and teams to exchange messages without leaving the coding environment.",
    content: "Whether you need to coordinate tasks, review changes, or troubleshoot issues, the integrated chat ensures that conversations happen in context—right where the code lives.",
    
    featureList: {
      title: " Key Features",
      items: [
        "Project-Based Chat Rooms: Dedicated spaces for each project/repository",
        "Direct Messages (DMs): One-on-one private messaging",
        "Threaded Conversations: Reply to specific messages",
        "Mentions & Tagging: @username and @channel notifications",
        "Message Reactions: Emoji feedback system",
        "File Sharing: Share code snippets, screenshots, or documents",
        "Code Snippet Previews: Syntax-highlighted code blocks",
        "Message History: Searchable conversation archives",
        "Online Presence Indicators: Real-time status visibility"
      ]
    },
    
    securitySection: {
      title: " Security & Compliance",
      items: [
        "End-to-End Encryption (Optional)",
        "Role-Based Access Controls",
        "Configurable Data Retention Policies",
        "Audit Logging for compliance"
      ]
    },
    
    technicalDetails: {
      title: " Technical Details",
      items: [
        "WebSockets for real-time communication",
        "Scalable microservice architecture",
        "Integrated Notifications System",
        "Extensible for future integrations (Slack/Discord/Matrix)"
      ]
    },
    
    benefits: {
      title: " Benefits",
      items: [
        "Keeps teams connected without context switching",
        "Encourages contextual discussions",
        "Reduces miscommunication time",
        "Empowers remote/distributed teams"
      ]
    }
  }
];

