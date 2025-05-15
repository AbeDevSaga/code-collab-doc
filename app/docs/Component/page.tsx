import ContentNavigation from "./Navigation";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-16rem)]"> {/* Adjust height as needed */}
      {/* Your page content */}
      <h1 className="text-2xl font-bold">Page Title</h1>
      <p className="mt-4">Your content here...</p>
      
      {/* Navigation at the bottom */}
      <div className="mt-auto pt-8"> {/* Pushes navigation to bottom */}
        <ContentNavigation 
          previous={{ title: "Introduction", href: "/docs/intro" }}
          next={{ title: "Installation", href: "/docs/installation" }}
        />
      </div>
    </div>
  );
}