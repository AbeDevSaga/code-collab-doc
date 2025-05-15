import { DocTextFormat } from "../type";

export const videoCallDocs: DocTextFormat[] = [
  {
    title: "Video Call Service",
    description: "The Video Call Service in Code Collab enables real-time face-to-face communication directly within the collaborative development environment.",
    content: "Designed for remote and distributed teams, this feature eliminates the need to switch between third-party conferencing tools, keeping all communication, collaboration, and context in one place.",
    
    featureList: {
      title: " Key Features",
      items: [
        "In-Platform Video Calling: One-on-one or group calls within workspace",
        "Integrated with Chat & Code Editor: Start calls from any context",
        "Screen Sharing: Share windows for live reviews or debugging",
        "Audio-Only Mode: Low-bandwidth participation option",
        "Active Speaker Detection: Visual indicators for current speaker",
        "Call Controls: Mute, video toggle, and participant management",
        "Meeting Notifications: Alerts for incoming/scheduled calls"
      ]
    },
    
    securitySection: {
      title: " Security & Privacy",
      items: [
        "End-to-End Encryption: WebRTC secured streams",
        "Access Control: Role-based call initiation",
        "Temporary Call Tokens: Session-based authentication",
        "No External Tools: All data stays within your deployment"
      ]
    },
    
    technicalDetails: {
      title: " Technical Details",
      items: [
        "WebRTC Foundation: Peer-to-peer video technology",
        "Media Server Support: Optional SFU/MCU configuration",
        "Microservice-Based: Isolated for scalability",
        "Signaling Server: WebSocket-based session management"
      ]
    },
    
    benefits: {
      title: " Benefits",
      items: [
        "Enables real-time conversations without context switching",
        "Ideal for scrums, walkthroughs, and planning",
        "Boosts remote team morale and clarity",
        "Enhances live coding collaboration"
      ]
    },
    
   
  }
];