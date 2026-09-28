import type { SkillCategory, SkillTabId } from './types.ts'

export const DEFAULT_SKILL_TAB: SkillTabId = 'ai'

export const SKILL_CATEGORIES = [
  {
    id: 'ai',
    label: 'ai',
    items: [
      {
        icon: 'openai',
        name: 'OpenAI',
      },
      {
        icon: 'anthropic',
        name: 'Anthropic',
      },
      {
        icon: 'langchain',
        name: 'LangChain',
      },
      {
        icon: 'langgraph',
        name: 'LangGraph',
      },
      {
        icon: 'mcp',
        name: 'MCP',
      },
      {
        icon: 'rag',
        name: 'RAG',
      },
      {
        icon: 'embeddings',
        name: 'Embeddings',
      },
      {
        icon: 'tool-calling',
        name: 'Tool Calling',
      },
    ],
  },
  {
    id: 'design',
    label: 'design',
    items: [
      {
        icon: 'clean_arch',
        name: 'Clean Architecture',
      },
      {
        icon: 'hexagonal',
        name: 'Hexagonal',
      },
      {
        icon: 'cqrs',
        name: 'CQRS',
      },
      {
        icon: 'ddd',
        name: 'Domain-Driven Design',
      },
      {
        icon: 'event-driven',
        name: 'Event-Driven',
      },
      {
        icon: 'solid',
        name: 'SOLID',
      },
      {
        icon: 'mvc',
        name: 'MVC',
      },
      {
        icon: 'micro',
        name: 'Microservices',
      },
      {
        icon: 'api',
        name: 'API Design',
      },
    ],
  },
  {
    id: 'back_end',
    label: 'back',
    items: [
      {
        icon: 'go',
        name: 'Go',
      },
      {
        icon: 'js',
        name: 'JavaScript',
      },
      {
        icon: 'python',
        name: 'Python',
      },
      {
        icon: 'node',
        name: 'Node.js',
      },
      {
        icon: 'echo',
        name: 'Echo Go',
      },
      {
        icon: 'fastapi',
        name: 'FastAPI',
      },
      {
        icon: 'django',
        name: 'Django',
      },
      {
        icon: 'pydantic',
        name: 'Pydantic',
      },
      {
        icon: 'python',
        name: 'asyncio',
      },
      {
        icon: 'celery',
        name: 'Celery',
      },
      {
        icon: 'express',
        name: 'Express JS',
      },
      {
        icon: 'php',
        name: 'PHP',
      },
      {
        icon: 'symfony',
        name: 'Symfony',
      },
    ],
  },
  {
    id: 'front_end',
    label: 'front',
    items: [
      {
        icon: 'vue',
        name: 'Vue JS',
      },
      {
        icon: 'react',
        name: 'React JS',
      },
      {
        icon: 'svelte',
        name: 'Svelte',
      },
      {
        icon: 'js',
        name: 'JavaScript',
      },
      {
        icon: 'ts',
        name: 'TypeScript',
      },
      {
        icon: 'css3',
        name: 'CSS',
      },
      {
        icon: 'sass',
        name: 'SASS',
      },
      {
        icon: 'postcss',
        name: 'PostCSS',
      },
      {
        icon: 'webpack',
        name: 'Webpack',
      },
      {
        icon: 'vite',
        name: 'Vite',
      },
      {
        icon: 'html5',
        name: 'HTML',
      },
      {
        icon: 'pug',
        name: 'Pug',
      },
      {
        icon: 'next',
        name: 'Next.js',
      },
    ],
  },
  {
    id: 'db',
    label: 'db',
    items: [
      {
        icon: 'mysql',
        name: 'MySQL',
      },
      {
        icon: 'postgre',
        name: 'PostgreSQL',
      },
      {
        icon: 'cockroach',
        name: 'CockroachDB',
      },
      {
        icon: 'mongodb',
        name: 'MongoDB',
      },
      {
        icon: 'couch',
        name: 'CouchDB',
      },
      {
        icon: 'redis',
        name: 'Redis',
      },
      {
        icon: 'postgre',
        name: 'pgvector',
      },
      {
        icon: 'qdrant',
        name: 'Qdrant',
      },
      {
        icon: 'sqlalchemy',
        name: 'SQLAlchemy',
      },
      {
        icon: 'pandas',
        name: 'pandas',
      },
      {
        icon: 'numpy',
        name: 'NumPy',
      },
    ],
  },
  {
    id: 'tools',
    label: 'tools',
    items: [
      {
        icon: 'docker',
        name: 'Docker',
      },
      {
        icon: 'kubernetes',
        name: 'Kubernetes',
      },
      {
        icon: 'heroku',
        name: 'Heroku',
      },
      {
        icon: 'netlify',
        name: 'Netlify',
      },
      {
        icon: 'vercel',
        name: 'Vercel',
      },
      {
        icon: 'git',
        name: 'Git',
      },
      {
        icon: 'composer',
        name: 'Composer',
      },
      {
        icon: 'npm',
        name: 'NPM',
      },
      {
        icon: 'photoshop',
        name: 'Adobe Photoshop',
      },
      {
        icon: 'xd',
        name: 'Adobe XD',
      },
      {
        icon: 'figma',
        name: 'Figma',
      },
      {
        icon: 'jira',
        name: 'Jira',
      },
      {
        icon: 'uv',
        name: 'uv',
      },
      {
        icon: 'ruff',
        name: 'Ruff',
      },
    ],
  },
  {
    id: 'test',
    label: 'test',
    items: [
      {
        icon: 'gopher',
        name: 'Go *testing.T',
      },
      {
        icon: 'vitest',
        name: 'Vitest',
      },
      {
        icon: 'jest',
        name: 'Jest',
      },
      {
        icon: 'phpunit',
        name: 'PHPUnit',
      },
      {
        icon: 'selenium',
        name: 'Selenium',
      },
      {
        icon: 'cypress',
        name: 'Cypress',
      },
      {
        icon: 'pytest',
        name: 'pytest',
      },
      {
        icon: 'langsmith',
        name: 'LangSmith',
      },
      {
        icon: 'mlflow',
        name: 'MLflow',
      },
    ],
  },
] as const satisfies readonly SkillCategory[]
