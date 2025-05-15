import React from 'react'
import { codeCollabOverview } from "../Component/Documentations/introtype";

const IntroductionPage = () => {
  return (
    <div className="p-2 max-w-6xl mx-auto w-full">
      <div className="px-2 space-y-8">
        {codeCollabOverview.map((section, index) => (
          <section key={index} className="prose dark:prose-invert max-w-none">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {section.title}
            </h1>
            
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
              {section.description}
            </p>
            
            {section.content && (
              <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-200 mt-6">
                {section.content}
              </div>
            )}
            
            {section.subtitle?.map((sub, subIndex) => (
              <div key={subIndex} className="mt-6">
                <h2 className="text-2xl mt-4 font-semibold text-gray-800 dark:text-gray-100">
                  {sub.title}
                </h2>
                <p className="text-gray-600  dark:text-gray-300">
                  {sub.description}
                </p>
              </div>
            ))}
            
            {section.contentList && (
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  {section.contentList.title}
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                  {section.contentList.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {section.note?.map((note, noteIndex) => (
              <div key={noteIndex} className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-medium text-blue-800 dark:text-blue-200">
                  {note.title}
                </h3>
                <p className="text-blue-700 dark:text-blue-300 mt-1">
                  {note.content}
                </p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default IntroductionPage;