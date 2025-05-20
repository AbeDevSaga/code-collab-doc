import React from "react";
import { dockerEnvDocs } from "../../Component/Documentations/docker";
import ContentNavigation from "../../Component/Navigation";

const DockerEnvPage = () => {
  const doc = dockerEnvDocs[0];

  return (
    <div className="p-2 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {doc.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {doc.description}
        </p>
        <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">
          {Array.isArray(doc.subtitle) ? doc.subtitle.join(", ") : doc.subtitle}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {doc.features?.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-green-500"
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

      {/* Workflow Section */}
      <div className="p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {doc.workflow?.title}
        </h2>
        <ol className="space-y-4">
          {doc.workflow?.steps.map((step, index) => (
            <li key={step} className="flex items-start">
              <span className="flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-gray-700 dark:text-gray-300">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Integrations Section */}
      <div className=" p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Platform Integrations
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {doc.integrations?.items.map((item) => (
            <div key={item} className="flex items-start p-3 ">
              <span className="text-blue-500 mr-3">↗</span>
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security Section */}
      <div className="p-8 mb-12 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
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

      <div className=" p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Key Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            " Consistent environments across all team members",
            " Secure sandboxing for all executions",
            " Persistent workspaces between sessions",
            " Quick startup with prebuilt images",
            " Customizable via Dockerfiles",
            " Resource monitoring and limits",
          ].map((benefit) => (
            <div key={benefit} className="flex items-start">
              <span className="text-lg mr-3">{benefit.split(" ")[0]}</span>
              <span className="text-gray-700 dark:text-gray-300">
                {benefit.split(" ").slice(1).join(" ")}
              </span>
            </div>
          ))}
        </div>
        <ContentNavigation
          previous={{
            title: "Version Control",
            href: "/docs/services/versioncontrol",
          }}
          next={{ title: "CLI", href: "/docs/services/cli" }}
        />
      </div>
    </div>
  );
};

export default DockerEnvPage;
