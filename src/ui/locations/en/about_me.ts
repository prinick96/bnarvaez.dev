import type { TranslationShape } from '../../../core/i18n/types.ts'
import type es from '../es/about_me.ts'

const about_me = {
  hi: '👋 Hello, my name is',
  develop: 'AI Engineer & Software Architect',
  meta_description:
    'AI Engineer & Software Architect. AI solutions in production, software architecture and development with Go, JavaScript and Python.',
  years_exp: 'Years in software development',
  clients_success: 'Satisfied customers',
  projects_finished: 'Finished projects',
  love_coding: 'I &#60;Love to write&gt; code',
  about_me: 'About Me',
  am_develop:
    'I am an <strong class="bg bg--backend">AI Engineer</strong> and <strong class="bg bg--frontend">Software Architect</strong>🔥. My strengths are <strong class="bg bg--golang">Go</strong>, <strong class="bg bg--js">JavaScript / Node.js</strong> and <strong class="bg bg--python">Python</strong>. I bring <strong class="bg bg--ai">LLMs, agents and RAG</strong> to production, with <strong class="bg bg--backend">backend</strong> and <strong class="bg bg--frontend">frontend</strong> development in <strong class="bg bg--vue">Vue</strong> and <strong class="bg bg--react">React</strong>.',
  live_in: 'I am currently living in <strong>Almería, Spain</strong>🌍<br /> I am',
  years: 'years old',
  started: 'and I started programming when I was 10 years old👦',
  studies: 'Studies',
  engineering: 'Software Engineer (2014 - 2019)',
  chat: "Let's talk!",
  photo_label: 'Brayan Narváez in Japan',
} satisfies TranslationShape<typeof es>

export default about_me
