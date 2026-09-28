<template>
  <section id="about" class="container">
    <div class="about">
      <div class="about__presentation">
        <p class="greeting" v-html="say_hello"></p>
        <h1>Brayan Narváez</h1>
        <h2 class="js-web-developer">{{ lang.develop }}</h2>
      </div>

      <div class="about__profile">
        <div class="about__stats">
          <ul>
            <li>
              <div class="stat">
                <div class="quantity">
                  {{ years_of_experience }}
                </div>
                <div class="subtitle">
                  {{ lang.years_exp }}
                </div>
              </div>
            </li>
            <li>
              <div class="stat">
                <div class="quantity">{{ clients_satisfied }}%</div>
                <div class="subtitle">
                  {{ lang.clients_success }}
                </div>
              </div>
            </li>
            <li>
              <div class="stat">
                <div class="quantity">{{ projects_finished }}+</div>
                <div class="subtitle">
                  {{ lang.projects_finished }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="about__photo">
          <figure class="about__photo-image" role="img" :aria-label="lang.photo_label"></figure>
          <small v-html="love_code"></small>
        </div>
        <div class="about__education">
          <div class="box">
            <span class="title">{{ lang.about_me }}</span>
            <p v-html="lang.am_develop"></p>
            <p>
              <span v-html="lang.live_in"></span> <strong>{{ years_old }} {{ lang.years }}</strong>{{ ' ' }}
              <span v-html="lang.started"></span>
            </p>
          </div>
          <div class="box education">
            <span class="title">{{ lang.studies }}</span>
            <figure>
              <img
                src="/images/ucab.png"
                width="258"
                height="39"
                alt="Universidad Católica Andrés Bello (UCAB)"
                title="Universidad Católica Andrés Bello (UCAB)"
              />
            </figure>
            <span class="subtitle">{{ lang.engineering }}</span>
          </div>
        </div>
      </div>

      <div class="lets-talk">
        <a href="tel:+34683296063">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 3.5L5 17.5"
              stroke="white"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 13.77V3.5H8.73"
              stroke="white"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ lang.chat }}</span>
        </a>
        <div class="border"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAboutMe } from './hooks/useAboutMe'

const { lang, years_old, years_of_experience, clients_satisfied, projects_finished, say_hello, love_code } =
  useAboutMe()
</script>
