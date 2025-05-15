import { authServiceDocs } from "../../Component/Documentations/authtype";

const AuthServicePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {authServiceDocs[0].title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {authServiceDocs[0].description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {authServiceDocs[0].features?.map((feature) => (
          <div key={feature.title} className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
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

      {/* Workflow Section */}
      <div className="p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
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

      {/* Security Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
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
        </ul>
      </div>
    </div>
  );
};

export default AuthServicePage;