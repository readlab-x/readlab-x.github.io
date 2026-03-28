import type { HomeMessages } from './en';

export const zhCNHomeMessages: HomeMessages = {
  navItems: [{ href: '#projects', label: '项目' }],
  hero: {
    eyebrow: 'ReadLab X',
    title: '只展示一个已上线项目。',
    copy:
      'ReadLab X 正在构建面向阅读的产品。当前官网不铺陈概念，只聚焦一个真实公开项目：会饮研读台。',
    bullets: [
      '记录论点、段落和问题，同时保留原始语境。',
      '在书籍、论文和长期研究之间建立真正可复用的连接。',
      '把阅读成果转化为写作、简报、档案和项目系统。'
    ],
    primaryCta: {
      href: '/projects/',
      label: '查看详情'
    },
    secondaryCta: {
      href: 'https://readlab-x.github.io/symposium-web/',
      label: '打开项目'
    }
  },
  heroPanel: {
    label: '当前项目',
    title: '会饮研读台',
    copy: '围绕柏拉图《会饮》搭建的数字研读网站，把文本阅读做成可以进入和跳转的界面。',
    focusTitle: '包含',
    focusItems: [
      { label: '文本', value: '原文阅读' },
      { label: '索引', value: '人物、主题、关系' },
      { label: '检索', value: '全文搜索' }
    ]
  },
  sectionHeadings: {
    features: {
      eyebrow: '能力',
      title: '一套尊重深度的阅读工作流。'
    },
    workflow: {
      eyebrow: '流程',
      title: '围绕真实的知识循环来设计。'
    },
    useCases: {
      eyebrow: '场景',
      title: '适合需要让阅读持续复利的人。'
    }
  },
  features: [],
  workflow: [],
  projectPreview: {
    eyebrow: '项目',
    title: '当前项目。',
    copy: '官网目前只展示一个真实项目，它也是 ReadLab X 现阶段最重要的公开作品。',
    note: '后续项目会再慢慢加入。现在先把这个项目讲清楚。',
    items: [
      {
        title: '会饮研读台',
        status: '已上线',
        summary:
          '围绕柏拉图《会饮》搭建的数字研读网站，连接原文阅读、人物索引、主题地图、关系图与全文搜索。',
        tags: ['古典学', '阅读界面', 'SvelteKit']
      }
    ],
    primaryCta: {
      href: '/projects/',
      label: '查看详情'
    }
  },
  useCases: [],
  cta: {
    eyebrow: 'ReadLab X',
    title: '为更好的阅读搭建基础设施。',
    label: '开始交流',
    href: 'mailto:hello@readlabx.com'
  },
  footer: {
    eyebrow: 'ReadLab X',
    title: '给认真阅读的人留出安静空间。',
    copy: '官网只保留必要的信息、项目入口和联系路径。',
    navTitle: '浏览',
    contactTitle: '联系',
    contactLabel: '联系团队',
    contactHref: 'mailto:hello@readlabx.com'
  },
  meta: {
    title: 'ReadLab X | 会饮研读台',
    description: 'ReadLab X 当前公开展示的核心项目是会饮研读台，一套围绕《会饮》构建的数字研读网站。'
  }
};
