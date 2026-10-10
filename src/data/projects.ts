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
  liveUrl: string;
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
  liveUrl: string;
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
    liveUrl: 'https://readlab-x.github.io/symposium-web/',
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
  },
  {
    slug: 'jiangxiang-school',
    liveUrl: 'https://readlab-x.github.io/jiangxiang-school/',
    year: '2026',
    status: {
      'zh-CN': '已上线',
      en: 'Live now'
    },
    title: {
      'zh-CN': '江相派',
      en: 'Jiangxiang School'
    },
    summary: {
      'zh-CN': '四本秘本的原文逐段注解，追踪江相派如何把可替换的星名、方位和断语组织成一套可批量生产的骗术模板。',
      en: 'A paragraph-by-paragraph annotated edition of four Jiangxiang manuals, tracing how interchangeable signs and phrases become a repeatable template for deception.'
    },
    eyebrow: {
      'zh-CN': '项目详情',
      en: 'Project detail'
    },
    headline: {
      'zh-CN': '把一套骗术秘本还原成可检视、可对照的文本现场。',
      en: 'Make a set of deception manuals inspectable as a structured, cross-referenced text.'
    },
    tags: {
      'zh-CN': ['原文注解', '民俗史料', '文本结构'],
      en: ['Text Annotation', 'Folk History', 'Textual Structure']
    },
    metrics: {
      'zh-CN': [
        { label: '定位', value: '数字史料注解网站' },
        { label: '文本', value: '四本秘本 / 122 段' },
        { label: '入口', value: '原文 / 注解 / 分歧记录' }
      ],
      en: [
        { label: 'Role', value: 'Digital source annotation site' },
        { label: 'Corpus', value: 'Four manuals / 122 passages' },
        { label: 'Entry points', value: 'Text / Notes / Source disputes' }
      ]
    },
    overviewTitle: {
      'zh-CN': '项目概览',
      en: 'Overview'
    },
    overview: {
      'zh-CN': [
        '江相派不是相术教程，而是一套围绕四本秘本搭建的数字史料阅读界面。网站保留 122 段原文，并逐段补充注解，让文本中的固定句式、可替换字段和行骗逻辑能够被直接检视。',
        '它把容易被神秘化的民俗材料还原为可阅读、可比较、可追溯的文本对象，也保留了不同来源对篇目归类的史料分歧。'
      ],
      en: [
        'Jiangxiang School is not a fortune-telling tutorial, but a digital source-reading interface built around four manuals. It preserves 122 original passages and annotates them one by one, making reusable syntax and the mechanics of deception inspectable.',
        'The project turns material often treated as mysterious folklore into a readable, comparable, and traceable textual object while preserving disagreements over how the sources are classified.'
      ]
    },
    sections: {
      'zh-CN': [
        {
          title: '项目在做什么',
          body: [
            '网站以原文为核心，逐段展示注解，并把田宅、财帛、迁徒、官禄等内容中的可替换字段标出来。读者可以看到同一结构如何通过替换星名或方向，生成看似不同的断语。',
            '页面同时记录来源之间的归类差异，让史料不确定性成为阅读界面的一部分。'
          ]
        },
        {
          title: '为什么它重要',
          body: [
            '这个项目把“知识界面”推进到另一种材料：不是经典文本的辅助阅读，而是对一套实际运作过的语言模板进行拆解。',
            '它展示了 ReadLab X 如何将复杂、易被误读的材料组织成清晰而可核验的公共阅读入口。'
          ]
        }
      ],
      en: [
        {
          title: 'What the project does',
          body: [
            'The site keeps the source text central, annotating each passage and marking interchangeable fields across houses, fortunes, travel, and office. Readers can see how changing a star name or direction produces apparently different readings from the same structure.',
            'It also records disagreements between sources, making uncertainty part of the reading interface.'
          ]
        },
        {
          title: 'Why it matters',
          body: [
            'The project applies the knowledge-interface approach to a different kind of material: it disassembles a language template that once operated as a practical system of deception.',
            'It shows how ReadLab X can turn complex and easily misread material into a clear, verifiable public reading entry point.'
          ]
        }
      ]
    },
    meta: {
      'zh-CN': {
        title: 'ReadLab X | 江相派',
        description: '四本江相秘本的原文逐段注解，记录可替换的骗术模板与史料分歧。'
      },
      en: {
        title: 'ReadLab X | Jiangxiang School',
        description: 'A paragraph-by-paragraph annotated edition of four Jiangxiang manuals, documenting reusable deception templates and source disputes.'
      }
    }
  }
];

const pageCopy = {
  'zh-CN': {
    navItems: [
      { href: '/', label: '首页' },
      { href: '/projects/', label: '项目集' }
    ],
    intro: {
      eyebrow: '项目档案',
      title: '项目档案',
      copy: 'ReadLab X 已发布的项目，按时间与状态列于此处。',
      note: '选择一个项目，进入详情页查看完整介绍。',
      homeLabel: '返回首页',
      homeHref: '/',
      sectionEyebrow: '项目目录',
      sectionTitle: '两种材料，两条进入文本的路径。'
    },
    detailBackLabel: '返回项目档案',
    meta: {
      title: 'ReadLab X | 项目档案',
      description: 'ReadLab X 已上线项目档案，收录会饮研读台与江相派两套阅读型数字项目。'
    }
  },
  en: {
    navItems: [
      { href: '/en/', label: 'Home' },
      { href: '/en/projects/', label: 'Projects' }
    ],
    intro: {
      eyebrow: 'Project archive',
      title: 'Project archive',
      copy: 'Published ReadLab X projects, listed by date and status.',
      note: 'Choose a project to open its full detail page.',
      homeLabel: 'Back to home',
      homeHref: '/en/',
      sectionEyebrow: 'Project directory',
      sectionTitle: 'Two kinds of material, two ways into the text.'
    },
    detailBackLabel: 'Back to project archive',
    meta: {
      title: 'ReadLab X | Projects',
      description:
        'The ReadLab X project archive features Symposium Reading Platform and Jiangxiang School, two live reading-oriented digital projects.'
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
    liveUrl: project.liveUrl,
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
