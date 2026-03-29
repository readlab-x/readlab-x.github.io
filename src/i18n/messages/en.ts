export type HomeFeature = {
  title: string;
  copy: string;
};

export type WorkflowStep = {
  index: string;
  title: string;
  copy: string;
};

export type ProjectPreviewItem = {
  title: string;
  status: string;
  summary: string;
  tags: string[];
};

export type HomeMessages = {
  navItems: Array<{ href: string; label: string }>;
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    bullets: string[];
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
  };
  heroPanel: {
    label: string;
    title: string;
    copy: string;
    focusTitle: string;
    focusItems: Array<{ label: string; value: string }>;
  };
  sectionHeadings: {
    features: { eyebrow: string; title: string };
    workflow: { eyebrow: string; title: string };
    useCases: { eyebrow: string; title: string };
  };
  features: HomeFeature[];
  workflow: WorkflowStep[];
  projectPreview: {
    eyebrow: string;
    title: string;
    copy: string;
    note: string;
    items: ProjectPreviewItem[];
    primaryCta: { href: string; label: string };
  };
  useCases: string[];
  cta: {
    eyebrow: string;
    title: string;
    label: string;
    href: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    copy: string;
    navTitle: string;
    contactTitle: string;
    contactLabel: string;
    contactHref: string;
    githubLabel: string;
    githubHref: string;
  };
  meta: {
    title: string;
    description: string;
  };
};

export const enHomeMessages: HomeMessages = {
  navItems: [],
  hero: {
    eyebrow: 'ReadLab X',
    title: 'One live project, clearly presented.',
    copy:
      'ReadLab X is building reading-native products. For now, the official site keeps its focus on one public project: symposium-web.',
    bullets: [
      'Capture claims, passages, and questions without flattening context.',
      'Connect ideas across books, papers, and long-running research threads.',
      'Reuse reading outputs in writing, briefs, archives, and project systems.'
    ],
    primaryCta: {
      href: '/projects/',
      label: 'View detail'
    },
    secondaryCta: {
      href: 'https://readlab-x.github.io/symposium-web/',
      label: 'Open project'
    }
  },
  heroPanel: {
    label: 'Current project',
    title: 'Symposium Reading Platform',
    copy: 'A digital reading site for Plato’s Symposium, built as a navigable interface rather than a static text page.',
    focusTitle: 'Includes',
    focusItems: [
      { label: 'Live project', value: 'symposium-web' },
      { label: 'Format', value: 'Digital reading site' },
      { label: 'Entry', value: 'Text, themes, relations, search' }
    ]
  },
  sectionHeadings: {
    features: {
      eyebrow: 'Capabilities',
      title: 'A reading stack that respects depth.'
    },
    workflow: {
      eyebrow: 'Workflow',
      title: 'Built around an actual knowledge loop.'
    },
    useCases: {
      eyebrow: 'Use cases',
      title: 'Made for people who need their reading to compound.'
    }
  },
  features: [
    {
      title: 'Capture with intent',
      copy:
        'Save quotes, arguments, and reading traces in a structure that ' +
        'survives past the moment you highlighted them.'
    },
    {
      title: 'Synthesize across sources',
      copy:
        'Turn notes into connected ideas, compare perspectives, and build ' +
        'layered understanding instead of isolated snippets.'
    },
    {
      title: 'Ship reusable knowledge',
      copy:
        'Transform research into briefs, essays, study systems, and durable ' +
        'knowledge assets without rebuilding context every time.'
    }
  ],
  workflow: [
    {
      index: '01',
      title: 'Read',
      copy: 'Bring in books, papers, articles, and source material worth returning to.'
    },
    {
      index: '02',
      title: 'Extract',
      copy:
        'Capture passages, claims, and questions without flattening the original context.'
    },
    {
      index: '03',
      title: 'Connect',
      copy:
        'Cross-link themes, contradictions, and recurring ideas across your entire corpus.'
    },
    {
      index: '04',
      title: 'Reuse',
      copy:
        'Turn research into writing, briefs, memos, study plans, or next-step decisions.'
    }
  ],
  projectPreview: {
    eyebrow: 'Work',
    title: 'Symposium Reading Platform',
    copy:
      'A reading site for Plato’s Symposium, with entry points through text, speakers, themes, relations, and search.',
    note: 'Move through the text by speakers, themes, relationships, and search.',
    items: [
      {
        title: 'Symposium Reading Platform',
        status: 'Featured work',
        summary:
          'A digital reading experience for Plato’s Symposium, bringing together the primary text, speakers, themes, relationships, and full-text search.',
        tags: ['Classics', 'Interactive Reading', 'Full-text Search']
      }
    ],
    primaryCta: {
      href: '/projects/',
      label: 'Read more'
    }
  },
  useCases: [
    'Writers building source-backed essays and books',
    'Researchers turning reading into structured insight',
    'Students creating long-lived study systems',
    'Founders and operators building a private knowledge edge'
  ],
  cta: {
    eyebrow: 'ReadLab X',
    title: 'Building the infrastructure for better reading.',
    label: 'Visit GitHub',
    href: 'https://github.com/readlab-x'
  },
  footer: {
    eyebrow: 'ReadLab X',
    title: 'A quiet place for serious reading.',
    copy:
      'ReadLab X keeps the site focused on content, structure, and long-form thinking.',
    navTitle: 'Explore',
    contactTitle: 'Contact',
    contactLabel: 'Contact us',
    contactHref: 'mailto:6iedog@gmail.com',
    githubLabel: 'GitHub',
    githubHref: 'https://github.com/readlab-x'
  },
  meta: {
    title: 'ReadLab X | Knowledge tools for serious readers',
    description:
      'ReadLab X turns deep reading into a durable research workflow with ' +
      'tools for capture, synthesis, and structured knowledge.'
  }
};
