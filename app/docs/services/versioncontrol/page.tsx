import React from "react";
import { versionControlDocs } from "../../Component/Documentations/version";
import ContentNavigation from "../../Component/Navigation";

const VersionControlPage = () => {
  const doc = versionControlDocs[0];

  return (
    <div className="p-2 max-w-6xl mx-auto w-full">
      <div className=" mb-4">
        <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-white mb-3">
          {doc.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto">
          {doc.description}
        </p>
        <p className="text-lg text-center text-gray-300 mt-2">
          {Array.isArray(doc.subtitle) ? doc.subtitle.join(", ") : doc.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-4">
        {doc.features?.map((feature) => (
          <div key={feature.title} className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {feature.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {feature.details.map((detail) => (
                <li key={detail} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className=" p-8 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {doc.workflow?.title}
        </h2>
        <ol className="space-y-4">
          {doc.workflow?.steps.map((step, index) => (
            <li key={step} className="flex items-start">
              <span className="flex items-center justify-center ">
                {index + 1}.
              </span>
              <p className="text-gray-700 dark:text-gray-300">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {doc.security?.title}
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {doc.security?.items.map((item) => (
            <li key={item} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {doc.technical?.title}
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {doc.technical?.items.map((item) => (
            <li key={item} className="flex items-start">
              <span className="text-green-500 mr-2">⚙️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 p-6 ">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
          Key Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "End-to-end version history for all changes",
            "Reduced merge conflicts with real-time awareness",
            "Enterprise-grade security and compliance",
            "Simplified Git for beginners",
            "Advanced features for power users",
            "Seamless integration with development workflow",
          ].map((benefit) => (
            <div key={benefit} className="flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span className="text-gray-700 dark:text-gray-300">
                {benefit}
              </span>
            </div>
          ))}
        </div>
        <ContentNavigation
          previous={{
            title: "Project Management",
            href: "/docs/services/projectmanagement",
          }}
          next={{ title: "Docker", href: "/docs/services/docker" }}
        />
      </div>
    </div>
  );
};

export default VersionControlPage;
