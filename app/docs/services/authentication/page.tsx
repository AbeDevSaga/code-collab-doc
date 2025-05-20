import { authServiceDocs } from "../../Component/Documentations/authtype";
import ContentNavigation from "../../Component/Navigation";

const AuthServicePage = () => {
  return (
     <div className="p-2 max-w-6xl mx-auto w-full">
      <div className="text-center ">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {authServiceDocs[0].title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {authServiceDocs[0].description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8mb-4 ">
        {authServiceDocs[0].features?.map((feature) => (
          <div key={feature.title} className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {feature.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {feature.description}
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {feature.details?.map((detail) => (
                <li key={detail} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-8 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {authServiceDocs[0].workflow?.title}
        </h2>
        <ol className="space-y-4">
          {authServiceDocs[0].workflow?.steps.map((step) => (
            <li key={step} className="flex items-start">
              <p className="text-gray-700 dark:text-gray-300">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className=" p-8 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {authServiceDocs[0].security?.title}
        </h2>
        <ul className="space-y-3">
          {authServiceDocs[0].security?.items.map((item) => (
            <li key={item} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <p className="text-gray-700 dark:text-gray-300">
                {item}
              </p>
            </li>
          ))}
          <ContentNavigation
  previous={{ title: "Advanced Options", href: "/docs/configuration/advancedoption" }}
  next={{ title: "Chat", href: "/docs/services/chat" }}
/>

        </ul>
      </div>
    </div>
  );
};

export default AuthServicePage;