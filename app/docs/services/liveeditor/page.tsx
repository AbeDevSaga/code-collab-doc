import React from "react";
import { liveEditorDocs } from "../../Component/Documentations/editortype";
import ContentNavigation from "../../Component/Navigation";

const LiveEditorPage = () => {
  const doc = liveEditorDocs[0];

  return (
    <div className="p-2 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {doc.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {doc.description}
        </p>
        <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">
          {Array.isArray(doc.subtitle)
            ? doc.subtitle.map((item, index) => (
                <span key={index}>{item.title || item.description}</span>
              ))
            : doc.subtitle}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {doc.features?.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-blue-500"
          >
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

      <div className=" p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {doc.workflow?.title}
        </h2>
        <ol className="space-y-4">
          {doc.workflow?.steps.map((step) => (
            <li key={step} className="flex items-start">
              <span className="flex items-center justify-center h-6 w-6  text-blue-800 dark:text-blue-200 text-sm font-medium mr-3 mt-1">
                {(doc.workflow?.steps ?? []).indexOf(step) + 1}
              </span>
              <p className="text-gray-700 dark:text-gray-300">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="p-8 mb-16 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {doc.technical?.title}
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {doc.technical?.items.map((item) => (
            <li key={item} className="flex items-start">
              <span className="text-blue-500 mr-2">⚙️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className=" p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {doc.benefits?.title}
        </h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          {doc.benefits?.items.map((item) => (
            <li key={item} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Coming Soon */}
      <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
          Coming Soon Features
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="text-yellow-500 mr-2">→</span>
            <span>Inline code commenting and reviews</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-2">→</span>
            <span>Live execution debugging together</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mr-2">→</span>
            <span>Template sharing between teams</span>
          </li>
        </ul>
       
      </div>
       <ContentNavigation
          previous={{ title: "Video Call", href: "/docs/services/videocall" }}
          next={{
            title: "File Management",
            href: "/docs/services/filemanagement",
          }}
        />
    </div>
  );
};

export default LiveEditorPage;
