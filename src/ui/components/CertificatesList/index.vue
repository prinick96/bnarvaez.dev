<template>
  <section id="certificates" class="container">
    <div class="certificates">
      <h2>{{ lang.certificates }}</h2>
      <p>{{ lang.all }}</p>

      <div class="list-of-certificates">
        <div class="certified" v-for="c in list_of_certificates" :key="c.title">
          <figure>
            <svg class="certifier-logo" width="99" height="99" role="img" :aria-label="c.certifier" focusable="false">
              <use :href="'/images/certifier-icons.svg#' + c.image" />
            </svg>
          </figure>
          <div class="certified_content">
            <div class="certified_data">
              <div class="title">{{ c.title }}</div>
              <div class="certifier">{{ c.certifier }}</div>
            </div>
            <div class="certified_time">
              <span class="date">{{ c.date }}</span>
              <a :href="'/certificates/' + c.file" target="_blank" rel="noopener noreferrer">{{ lang.see }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="load_more" v-show="can_load_more">
        <button class="button" @click="loadMore">{{ lang.load_more }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCertificatesList } from './hooks/useCertificatesList'

const { lang, list_of_certificates, can_load_more, loadMore } = useCertificatesList()
</script>
