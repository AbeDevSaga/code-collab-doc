"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { SidebarProps } from "./type";
import ThemeSelector from "./ThemeSelector";

export default function Sidebar({ className = "" }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  type DocSection = {
    id: string;
    title: string;
    items?: DocItem[];
  };

  type DocItem = {
    id: string;
    title: string;
    path?: string;
    items?: DocItem[];
  };

  const docsStructure: DocSection[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        {
          id: "introduction",
          title: "Introduction",
          path: "/docs/Introduction",
        },
      
        {
          id: "configuration",
          title: "Configuration",
          items: [
            {
              id: "basic-setup",
              title: "Basic Setup",
              path: "/docs/configuration/basicsetup",
            },
            {
              id: "advancedoptions",
              title: "Advanced Options",
              path: "/docs/configuration/advancedoption",
            },
          ],
        },
      ],
    },
    {
      id: "services",
      title: "services",
      items: [
        {
          id: "authentication",
          title: "Authentication",
          path: "/docs/services/authentication",
        },
        { id: "chat", 
          title: "Chat", 
          path: "/docs/services/chat" },
        {
          id: "videocall",
          title: "Video Call",
          path: "/docs/services/videocall",
        },
        {
          id: "liveeditor",
          title: "Live Editor",
          path: "/docs/services/liveeditor",
        },
        {
          id: "filemanagement",
          title: "File Management",
          path: "/docs/services/filemanagement",
        },
        {
          id: "project-management",
          title: "Project Management",
          path: "/docs/services/projectmanagement",
        },
        {
          id: "versioncontrol",
          title: "Version Control",
          path: "/docs/services/versioncontrol",
        },
        { id: "docker", title: "Docker", path: "/docs/services/docker" },
        { id: "cli", title: "CLI", path: "/docs/services/cli" },
      ],
    },
    {
      id: "api-reference",
      title: "API Reference",
      items: [
        { id: "core-api", title: "Core API", path: "/docs/api/APIReference/core" },
        { id: "auth-api", title: "Authentication", path: "/docs/api/APIReference/auth" },
        {
          id: "error-handling",
          title: "Error Handling",
          path: "/docs/api/errors",
        },
      ],
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("sidebarState");
      const initialState = docsStructure.reduce((acc, section) => {
        acc[section.id] = savedState
          ? JSON.parse(savedState)[section.id]
          : section.id === "getting-started";
        return acc;
      }, {} as Record<string, boolean>);

      setExpandedSections(initialState);
    }
  }, []);

  const toggleSection = (sectionId: string) => {
    const newState = {
      ...expandedSections,
      [sectionId]: !expandedSections[sectionId],
    };
    setExpandedSections(newState);
    localStorage.setItem("sidebarState", JSON.stringify(newState));
  };

  const pathname = usePathname();
  const isActive = (path?: string) => path && pathname === path;

  const renderDocItems = (items: DocItem[], level = 0) => {
    return items.map((item) => (
      <li key={item.id} className={level > 0 ? "ml-4" : ""}>
        {item.path ? (
          <Link
            href={item.path}
            className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
              isActive(item.path)
                ? "bg-blue-50 text-blue-600 font-medium dark:bg-gray-800 dark:text-blue-400"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {item.title}
          </Link>
        ) : (
          <>
            {item.items && (
              <div className={`mt-2 ${level > 0 ? "ml-2" : ""}`}>
                <p className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>
                <ul className="space-y-1">
                  {renderDocItems(item.items, level + 1)}
                </ul>
              </div>
            )}
          </>
        )}
      </li>
    ));
  };

  return (
    <nav
      className={`w-64 h-screen sticky top-0 overflow-y-auto p-4 ${className}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {" "}
      <div className="mb-6"></div>
      {docsStructure.map((section) => (
        <div key={section.id} className="mb-4">
          <button
            onClick={() => toggleSection(section.id)}
            className="flex items-center w-full text-left text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-expanded={expandedSections[section.id]}
          >
            {expandedSections[section.id] ? (
              <FiChevronDown className="w-4 h-4 mr-2" />
            ) : (
              <FiChevronRight className="w-4 h-4 mr-2" />
            )}
            {section.title}
          </button>

          {expandedSections[section.id] && (
            <ul className="space-y-1">{renderDocItems(section.items || [])}</ul>
          )}
        </div>
      ))}
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <ThemeSelector />
      </div>
    </nav>
  );
}
