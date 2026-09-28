<template>
  <header id="heaven" class="container">
    <nav class="top_nav" :aria-label="lang.navigation">
      <ul class="menu">
        <li>
          <a href="#about" class="active" :aria-label="lang.about_me" :title="lang.about_me">
            <svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
            </svg>
            <span class="menu-label">{{ lang.about_me }}</span>
          </a>
        </li>
        <li>
          <a href="#projects" :aria-label="lang.projects" :title="lang.projects">
            <svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="7" width="18" height="14" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v3h4v-3" />
            </svg>
            <span class="menu-label">{{ lang.projects }}</span>
          </a>
        </li>
        <li>
          <a href="#certificates" :aria-label="lang.certificates" :title="lang.certificates">
            <svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="8" r="5" />
              <path d="m8.5 12-1.5 10 5-3 5 3-1.5-10" />
            </svg>
            <span class="menu-label">{{ lang.certificates }}</span>
          </a>
        </li>
      </ul>

      <div class="net-and-lang">
        <ul class="networks">
          <li>
            <a href="https://github.com/prinick96" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg class="social-icon" width="19.5" height="19.5" aria-hidden="true" focusable="false">
                <use href="/images/social-icons.svg#github" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/brayan-narváez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg class="social-icon" width="19.5" height="19.5" aria-hidden="true" focusable="false">
                <use href="/images/social-icons.svg#linkedin" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/prinick.narvaez/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg class="social-icon" width="19.5" height="19.5" aria-hidden="true" focusable="false">
                <use href="/images/social-icons.svg#instagram" />
              </svg>
            </a>
          </li>
        </ul>

        <div class="switch" :aria-label="lang.language">
          <a
            href="/"
            lang="es"
            hreflang="es"
            @click.prevent="changeLang('es')"
            :aria-current="actual_lang === 'es' ? 'page' : undefined"
            :class="{ selected: actual_lang === 'es' }"
            >{{ lang.spanish }}</a
          >
          <a
            href="/en/"
            lang="en"
            hreflang="en"
            class="js-change-lang-en"
            @click.prevent="changeLang('en')"
            :aria-current="actual_lang === 'en' ? 'page' : undefined"
            :class="{ selected: actual_lang === 'en' }"
            >{{ lang.english }}</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useTopNav } from './hooks/useTopNav'

const { lang, actual_lang, changeLang } = useTopNav()
</script>
