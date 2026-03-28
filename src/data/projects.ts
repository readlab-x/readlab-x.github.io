import type { Locale } from '../i18n/config';
import { getHomeMessages, getLocalizedHref } from '../utils/i18n';

export type ProjectCardData = {
  slug: string;
  year: string;
  status: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectSection = {
  title: string;
  body: string[];
};

export type ProjectDetailContent = {
  slug: string;
  year: string;
  status: string;
  title: string;
  summary: string;
  eyebrow: string;
  headline: string;
  tags: string[];
  metrics: ProjectMetric[];
  overviewTitle: string;
  overview: string[];
  sections: ProjectSection[];
  backLabel: string;
  backHref: string;
  meta: {
    title: string;
    description: string;
  };
};

export type ProjectsPageContent = {
  navItems: Array<{ href: string; label: string }>;
  intro: {
    eyebrow: string;
    title: string;
    copy: string;
    note: string;
    homeLabel: string;
    homeHref: string;
    sectionEyebrow: string;
    sectionTitle: string;
  };
  projects: ProjectCardData[];
  footer: ReturnType<typeof getHomeMessages>['footer'];
  meta: {
    title: string;
    description: string;
  };
};

type LocalizedProject = {
  slug: string;
  year: string;
  status: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  eyebrow: Record<Locale, string>;
  headline: Record<Locale, string>;
  tags: Record<Locale, string[]>;
  metrics: Record<Locale, ProjectMetric[]>;
  overviewTitle: Record<Locale, string>;
  overview: Record<Locale, string[]>;
  sections: Record<Locale, ProjectSection[]>;
  meta: Record<Locale, { title: string; description: string }>;
};

const projectCatalog: LocalizedProject[] = [
  {
    slug: 'symposium-web',
    year: '2026',
    status: {
      'zh-CN': '已上线',
      en: 'Live now'
    },
    title: {
      'zh-CN': '会饮研读台',
      en: 'Symposium Reading Platform'
    },
    summary: {
      'zh-CN': '围绕柏拉图《会饮》搭建的数字研读网站，把原文阅读、人物索引、主题地图、关系图与全文搜索组织成一套可进入、可跳转、可对照的阅读界面。',
      en: 'A digital reading site built around Plato’s Symposium, combining close reading, character index, theme map, relation graph, and full-text search into one navigable interface.'
    },
    eyebrow: {
      'zh-CN': '项目详情',
      en: 'Project detail'
    },
    headline: {
      'zh-CN': '把一部经典文本做成可穿行、可对照、可持续研究的阅读现场。',
      en: 'Turn a classical text into a readable, cross-linked, and research-ready digital surface.'
    },
    tags: {
      'zh-CN': ['文本研读', '古典学', '知识界面'],
      en: ['Close Reading', 'Classics', 'Knowledge Interface']
    },
    metrics: {
      'zh-CN': [
        { label: '定位', value: '数字研读网站' },
        { label: '技术', value: 'SvelteKit 静态站' },
        { label: '入口', value: '阅读 / 人物 / 主题 / 关系 / 搜索' }
      ],
      en: [
        { label: 'Role', value: 'Digital reading site' },
        { label: 'Stack', value: 'Static SvelteKit app' },
        { label: 'Entry points', value: 'Reading / Characters / Themes / Relations / Search' }
      ]
    },
    overviewTitle: {
      'zh-CN': '项目概览',
      en: 'Overview'
    },
    overview: {
      'zh-CN': [
        'symposium-web 不是一个普通的文本展示页，而是一座围绕《会饮》展开的数字研读台。它把原文阅读、人物索引、主题地图、关系图和全文搜索组织成一套互相跳转的界面，让阅读不只停留在线性翻页。',
        '这个项目很适合代表 ReadLab X 当前的方向，因为它同时体现了内容秩序、知识入口设计和长期研究型阅读的产品化表达。'
      ],
      en: [
        'symposium-web is not a simple text presentation page. It is a digital reading platform around Plato’s Symposium, where close reading, character index, theme map, relation graph, and search are connected into a single navigable experience.',
        'It represents ReadLab X well because it combines editorial structure, knowledge-interface design, and product thinking for serious reading.'
      ]
    },
    sections: {
      'zh-CN': [
        {
          title: '项目在做什么',
          body: [
            '用户可以按发言顺序进入原文，也可以从人物、主题和关系图切入文本，在不同阅读路径之间来回切换。',
            '它不是把辅助信息堆在旁边，而是让注解、索引和检索都成为进入文本的正式入口。'
          ]
        },
        {
          title: '为什么它重要',
          body: [
            '这个项目证明 ReadLab X 不只是谈“阅读工作流”，而是已经在构建真正可用的阅读型产品表面。',
            '对官网来说，它也是目前最具体、最有说服力的代表项目，足够承接品牌叙事。'
          ]
        }
      ],
      en: [
        {
          title: 'What the project does',
          body: [
            'Readers can move through the text in speaking order, or enter through characters, themes, and relation graphs, switching between multiple reading paths.',
            'Annotations, indexes, and search are not side utilities here. They are formal entry points into the text itself.'
          ]
        },
        {
          title: 'Why it matters',
          body: [
            'The project shows that ReadLab X is not only talking about reading workflows, but already building concrete reading-native product surfaces.',
            'For the official site, it is also the most persuasive live project available right now and should carry the core narrative.'
          ]
        }
      ]
    },
    meta: {
      'zh-CN': {
        title: 'ReadLab X | 会饮研读台',
        description: '围绕柏拉图《会饮》构建的数字研读网站，连接原文阅读、人物索引、主题地图、关系图与全文搜索。'
      },
      en: {
        title: 'ReadLab X | Symposium Reading Platform',
        description: 'A digital reading site for Plato’s Symposium, connecting close reading, character index, theme map, relation graph, and full-text search.'
      }
    }
  }
];

const pageCopy = {
  'zh-CN': {
    navItems: [
      { href: '/#features', label: '能力' },
      { href: '/#workflow', label: '流程' },
      { href: '/#use-cases', label: '场景' },
      { href: '/projects/', label: '项目档案' }
    ],
    intro: {
      eyebrow: '项目档案',
      title: '当前项目：会饮研读台。',
      copy:
        '现阶段官网只展示一个真实项目。它不是概念稿，而是一套已经上线的数字研读网站，用来展示 ReadLab X 如何把严肃阅读做成可进入、可导航、可研究的界面。',
      note:
        '随着后续项目出现，这里会继续扩展。但现在最重要的是把现有代表作讲清楚。',
      homeLabel: '返回首页',
      homeHref: '/',
      sectionEyebrow: '当前项目',
      sectionTitle: '先把唯一真实的项目讲清楚。'
    },
    detailBackLabel: '返回项目档案',
    meta: {
      title: 'ReadLab X | 项目档案',
      description: '当前官网展示的核心项目是会饮研读台，一套围绕《会饮》构建的数字研读网站。'
    }
  },
  en: {
    navItems: [
      { href: '/en/#features', label: 'Capabilities' },
      { href: '/en/#workflow', label: 'Workflow' },
      { href: '/en/#use-cases', label: 'Use cases' },
      { href: '/en/projects/', label: 'Projects' }
    ],
    intro: {
      eyebrow: 'Project archive',
      title: 'Current project: symposium-web.',
      copy:
        'The official site currently presents one real project. It is not a concept piece, but a live digital reading site that shows how ReadLab X turns serious reading into a navigable interface.',
      note:
        'More projects may arrive later. For now, the important thing is to present the strongest existing work clearly.',
      homeLabel: 'Back to home',
      homeHref: '/en/',
      sectionEyebrow: 'Current project',
      sectionTitle: 'Start by explaining the one real project well.'
    },
    detailBackLabel: 'Back to project archive',
    meta: {
      title: 'ReadLab X | Projects',
      description:
        'The official site currently features symposium-web, a digital reading site for Plato’s Symposium.'
    }
  }
} satisfies Record<
  Locale,
  Omit<ProjectsPageContent, 'projects' | 'footer' | 'meta'> & {
    detailBackLabel: string;
    meta: { title: string; description: string };
  }
>;

function getProjectHref(locale: Locale, slug: string) {
  return getLocalizedHref(locale, `/projects/${slug}/`);
}

function localizeProjects(locale: Locale): ProjectCardData[] {
  return projectCatalog.map((project) => ({
    slug: project.slug,
    year: project.year,
    status: project.status[locale],
    title: project.title[locale],
    summary: project.summary[locale],
    tags: project.tags[locale],
    href: getProjectHref(locale, project.slug)
  }));
}

export function getProjectsPageContent(locale: Locale): ProjectsPageContent {
  const content = pageCopy[locale];
  const homeMessages = getHomeMessages(locale);

  return {
    navItems: content.navItems,
    intro: {
      ...content.intro,
      homeHref: getLocalizedHref(locale, content.intro.homeHref)
    },
    projects: localizeProjects(locale),
    footer: homeMessages.footer,
    meta: content.meta
  };
}

export function getProjectSlugs() {
  return projectCatalog.map((project) => project.slug);
}

export function getProjectDetail(locale: Locale, slug: string): ProjectDetailContent {
  const project = projectCatalog.find((entry) => entry.slug === slug);

  if (!project) {
    throw new Error(`Unknown project slug: ${slug}`);
  }

  const content = pageCopy[locale];

  return {
    slug: project.slug,
    year: project.year,
    status: project.status[locale],
    title: project.title[locale],
    summary: project.summary[locale],
    eyebrow: project.eyebrow[locale],
    headline: project.headline[locale],
    tags: project.tags[locale],
    metrics: project.metrics[locale],
    overviewTitle: project.overviewTitle[locale],
    overview: project.overview[locale],
    sections: project.sections[locale],
    backLabel: content.detailBackLabel,
    backHref: getLocalizedHref(locale, '/projects/'),
    meta: project.meta[locale]
  };
}
