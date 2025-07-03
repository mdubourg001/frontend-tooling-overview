export type Language = 'en' | 'fr';

export type Translation = {
  ui: {
    title: string;
    whatIsIt: string;
    github: string;
    startSimulation: string;
    stopSimulation: string;
    simulation: string;
    reset: string;
    shuffle: string;
    checkAll: string;
    uncheckAll: string;
    about: string;
    close: string;
    cancel: string;
    confirm: string;
    description: string;
    relatedResources: string;
    similarTools: string;
    explanation: string;
    examples: string;
    toggleFilter: string;
    openDetails: string;
    logoAlt: string;
  };
  modal: {
    whatIsIt: {
      title: string;
      description: string[];
    };
  };
};

export type CategoryTranslation = {
  name: string;
  description: string | React.ReactNode;
};

export type ToolTranslation = {
  description?: (bag: {
    handleCategoryClick: (key: string) => void;
    handleToolClick: (name: string) => void;
  }) => React.ReactNode;
  links?: { label: string; href: string }[];
};