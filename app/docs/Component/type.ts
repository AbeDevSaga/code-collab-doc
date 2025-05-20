interface DocItem {
  id: string;
  title: string;
  path?: string;
  items?: DocItem[];
}

export interface DocTextFormat {
  id: string;
  title: string;
  description?: string;
  content: string;
  subtitle:
    {
      title: string;
      description: string;
    }[],
  link?:
    {
      description: string;
      href: string;
    }[],
  contentList?: {
    title: string;
    items: string[];
  };
  note?: Array<{
    title: string;
    content: string;
  }>;
  featureList?: {
    title: string;
    items: string[];
  };
  securitySection?: {
    title: string;
    items: string[];
  };
  technicalDetails?: {
    title: string;
    items: string[];
  };
  benefits?: {
    title: string;
    items: string[];
  };
  collaborationFeatures?: {
  title: string;
  items: string[];
  };
  featureCards?: Array<{
    title: string;
    content: string;
  }>;
  workflow?: {
    title: string;
    steps: string[];
  };
  security?: {
    title: string;
    items: string[];
  };
  features?: {
    title: string;
    description: string;
    details: string[];
  }[];
  
  technical?: {
    title: string;
    items: string[];

  };

  integrations?: {
    title: string;
    items: string[];
  };
  endpoints?: {
    title: string;
    items: [string, string][]; // [endpoint, description]
  };
  
  // For code examples
  examples?: {
    title: string;
    items: {
      title: string;
      code: string;
    }[];
  };
  
  // For authentication flows
  authentication?: {
    title: string;
    steps: string[];
  };
  

  commands?: {
    title: string;
    items: [string, string][]; 
  };
}

export interface TabBarProps {
  logo?: React.ReactNode;
  appName?: string;
  searchResults?: Array<{
    id: string;
    title: string;
    href: string;
  }>;
  onSearch?: (query: string) => void;
}

export interface DocsStructure {
  id: string;
  title: string;
  path?: string;
  items?: DocItem[];
}
export interface SidebarProps {
  className?: string;
}
export interface TabBarProps {
  logo?: React.ReactNode;
  appName?: string;
  className?: string;
}

export interface BottomBarProps {
  logo?: React.ReactNode;
  appName?: string;
  companyName?: string;
  className?: string;
}