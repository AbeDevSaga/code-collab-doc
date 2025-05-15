import fs from 'fs/promises';
import path from 'path';

const EditorPage = async () => {

  const fileContent = await getTextFileContent();

  if (!fileContent) {
    return (
      <div className="p-2">
      </div>
    );
  }

  return (
    <div className="p-2 max-w-8xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
     
      </div>
      
      <div className=" p-2">
        <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 dark:text-gray-200">
          {fileContent}
        </pre>
      </div>

     
    </div>
  );
};

// Server-side file reading function
async function getTextFileContent(): Promise<string | null> {
  try {
    const filePath = path.join(
      process.cwd(), 
      'app/docs/services/liveeditor/liveeditor.txt'
    );
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}

export default EditorPage;