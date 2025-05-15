interface DocItem {
  id: string;
  title: string;
  path?: string;
  items?: DocItem[];
}

export interface DocTextFormat {
  title: string;
  description?: string;
  content: string;
  subtitle?:
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