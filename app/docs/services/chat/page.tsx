import { chatServiceDocs } from "../../Component/Documentations/chattype";

const ChatServicePage = () => {
  return (
    <div className="p-2 max-w-6xl mx-auto w-full">
      <div className="px-2 space-y-8">
        {chatServiceDocs.map((section, index) => (
          <section key={index} className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </h1>
            
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
              {section.description}
            </p>
            
            {section.content && (
              <p className="text-gray-700 dark:text-gray-300">
                {section.content}
              </p>
            )}
            
            {section.featureList && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {section.featureList.title}
                </h2>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                  {section.featureList.items.map((item, idx) => (
                    <li key={idx} className="[&>:first-child]:font-medium">
                      {item.split(':').length > 1 ? (
                        <>
                          <span className="font-medium">{item.split(':')[0]}:</span>
                          {item.split(':')[1]}
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {section.securitySection && (
              <div className="mt-8 p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {section.securitySection.title}
                </h2>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  {section.securitySection.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {section.technicalDetails && (
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {section.technicalDetails.title}
                </h2>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  {section.technicalDetails.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {section.benefits && (
              <div className="mt-8 p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {section.benefits.title}
                </h2>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                  {section.benefits.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ChatServicePage;