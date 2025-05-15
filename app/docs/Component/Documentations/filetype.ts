import { DocTextFormat } from "../type";

export const fileManagementDocs: DocTextFormat[] = [
  {
    title: "File Management Service",
    description: "The File Management service in Code Collab enables users to upload, browse, organize, and manage project files directly within the platform.",
    content: "This service is seamlessly integrated into the development workspace, allowing developers to view, edit, move, and version files without switching tools or breaking their workflow.",
    
    featureList: {
      title: " Key Features",
      items: [
        "Project-Based File Structure: Mirroring modern development standards",
        "File Upload & Download: Drag and drop support",
        "Create/Edit/Delete Files & Folders: Intuitive organization controls",
        "Versioned Files: Track changes with Git integration",
        "Preview Support: View code, markdown, and images in browser",
        "Code Editor Integration: Open files directly in collaborative editor",
        "File Permissions: Role-based read/write access control",
        "Search & Filter: Find files by name, extension, or content"
      ]
    },
    
    securitySection: {
      title: " Security & Access Control",
      items: [
        "Role-Based File Access: Admin/Developer/Viewer permissions",
        "Audit Logs: Track all file operations",
        "Sandboxed Execution: Isolated Docker environments",
        "Encrypted Storage: At rest and in transit encryption"
      ]
    },
    
    technicalDetails: {
      title: " Technical Details",
      items: [
        "Storage Backend: Scalable file system with MongoDB metadata",
        "Microservice Architecture: Independent file operations service",
        "API Access: RESTful endpoints for automation",
        "Auto Syncing: Real-time editor-file system synchronization"
      ]
    },
    
    benefits: {
      title: " Benefits",
      items: [
        "Centralized control of all project files",
        "Eliminates third-party file hosting needs",
        "Real-time collaboration with task integration",
        "Simplified workflows with versioning"
      ]
    }
  }
];

