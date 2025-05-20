import React from "react";
import { advancedSetupDocs } from "../../Component/Documentations/advancedtype";
import ContentNavigation from "../../Component/Navigation";

const AdvancedSetupPage = () => {
  const doc = advancedSetupDocs[0];

  return (
    <div className="p-2 max-w-6xl mx-auto w-full">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {doc.title}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {doc.description}
        </p>
        <p className="text-lg text-gray-300 mt-2">{doc.subtitle}</p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-4">
        {doc.features?.map((feature) => (
          <div key={feature.title} className="p-6 ">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {feature.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {feature.details.map((detail) => (
                <li key={detail} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Workflow Section */}
      {doc.workflow && (
        <div className=" p-8 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {doc.workflow.title}
          </h2>
          <ol className="space-y-4">
            {doc.workflow.steps.map((step, index) => (
              <li key={step} className="flex items-start">
                <span className="flex items-center justify-center text-sm font-medium mr-3 mt-1">
                  {index + 1}
                </span>
                <p className="text-gray-700 dark:text-gray-300">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Security Section */}
      {doc.security && (
        <div className=" p-8 mb-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {doc.security.title}
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {doc.security.items.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technical Section */}
      {doc.technical && (
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {doc.technical.title}
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {doc.technical.items.map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-white mr-2">⚙️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Benefits Section */}
      <div className="mt-12 p-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
          Key Benefits
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Deploy privately on your own infrastructure",
            "Customize Docker environments per project",
            "Integrate with enterprise identity systems",
            "Connect to existing Git workflows and CI tools",
            "Scale reliably with microservices architecture",
            "Maintain complete control over data and access",
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
            title: "Basic Setup",
            href: "/docs/configuration/basicsetup",
          }}
          next={{
            title: "Authentication",
            href: "/docs/services/authentication",
          }}
        />
      </div>
    </div>
  );
};

export default AdvancedSetupPage;
