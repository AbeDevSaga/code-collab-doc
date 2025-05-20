import { coreApiDocs } from "@/app/docs/Component/Documentations/apitype";
import ContentNavigation from "@/app/docs/Component/Navigation";

const CoreAPIPage = () => {
  const doc = coreApiDocs[0];

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
        <p className="text-lg text-gray-300 mt-2">{doc.subtitle}</p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  <span className="text-gray-300 mr-2">→</span>
                  <span className="font-mono text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Authentication Flow */}
      <div className=" p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {doc.authentication?.title}
        </h2>
        <ol className="space-y-4">
          {doc.authentication?.steps.map((step, index) => (
            <li key={step} className="flex items-start">
              <span className="flex items-center justify-center text-sm font-medium mr-3 mt-1">
                {index + 1}
              </span>
              <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Endpoints Table */}
      <div className="p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {doc.endpoints?.title}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Endpoint
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {doc.endpoints?.items.map(([endpoint, desc]) => (
                <tr key={endpoint}>
                  <td className="px-4 py-3 font-mono text-sm text-gray-300">
                    {endpoint}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Examples */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {doc.examples?.title}
        </h2>
        <div className="space-y-8">
          {doc.examples?.items.map((example) => (
            <div key={example.title} className=" overflow-hidden">
              <div className="px-4 py-3 bg-gray-700 text-gray-300 text-sm font-mono">
                {example.title}
              </div>
              <pre className="p-4 text-gray-100 text-sm overflow-x-auto">
                <code>{example.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          API Best Practices
        </h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {[
            "Always use HTTPS for all requests",
            "Implement exponential backoff for rate limits",
            "Store tokens securely (never in client-side code)",
            "Use WebSockets for real-time data instead of polling",
            "Validate all responses and handle errors gracefully",
          ].map((item) => (
            <li key={item} className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>{item}</span>
            </li>
          ))}
          <ContentNavigation
            previous={{ title: "CLI", href: "/docs/services/cli" }}
            next={{
              title: "Authentication API",
              href: "/docs/api/APIReference/auth",
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default CoreAPIPage;
