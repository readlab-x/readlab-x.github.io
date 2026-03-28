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
  };
  meta: {
    title: string;
    description: string;
  };
};

export const enHomeMessages: HomeMessages = {
  navItems: [
    { href: '#projects', label: 'Project' }
  ],
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
    eyebrow: 'Projects',
    title: 'Current project.',
    copy:
      'The official site currently shows one real project, and this is the one carrying the public face of ReadLab X.',
    note: 'More work may come later. For now, the homepage stays intentionally small.',
    items: [
      {
        title: 'Symposium Reading Platform',
        status: 'Live now',
        summary:
          'A digital reading site for Plato’s Symposium, connecting reading flow, characters, themes, relation graph, and search.',
        tags: ['Classics', 'Reading Interface', 'SvelteKit']
      }
    ],
    primaryCta: {
      href: '/projects/',
      label: 'View detail'
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
    label: 'Start the conversation',
    href: 'mailto:hello@readlabx.com'
  },
  footer: {
    eyebrow: 'ReadLab X',
    title: 'A quiet place for serious reading.',
    copy:
      'ReadLab X keeps the site focused on content, structure, and long-form thinking.',
    navTitle: 'Explore',
    contactTitle: 'Contact',
    contactLabel: 'Talk to us',
    contactHref: 'mailto:hello@readlabx.com'
  },
  meta: {
    title: 'ReadLab X | Knowledge tools for serious readers',
    description:
      'ReadLab X turns deep reading into a durable research workflow with ' +
      'tools for capture, synthesis, and structured knowledge.'
  }
};
