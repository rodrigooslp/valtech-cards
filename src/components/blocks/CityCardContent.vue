<template>
<div class="flex flex-col justify-center items-center h-full relative" @mouseenter="showEnterAnimation" @mouseleave="showLeaveAnimation">
  <card-overlay ref="card" class="absolute"></card-overlay>

  <city-card-header ref="header" class="mt-8 mb-2" :title="title" :subtitle="subtitle"></city-card-header>
  <card-description ref="description" class="max-h-0 opacity-0">{{ text }}</card-description>

  <card-button ref="button" class="mt-3 mb-6 opacity-0 invisible">Explore More</card-button>
</div>
</template>

<script>
import { gsap } from 'gsap'

import CardOverlay from '@/components/elements/CardOverlay'
import CardDescription from '@/components/elements/CardDescription'
import CardButton from '@/components/elements/CardButton'
import CityCardHeader from '@/components/blocks/CityCardHeader'

export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    text: {
      type: String
    }
  },
  components: {
    CardOverlay,
    CardDescription,
    CardButton,
    CityCardHeader
  },
  mounted () {
    const { header, description, button, card } = this.$refs
    const timeline = gsap.timeline({ paused: true })

    timeline
      .add().to(card.$el, { backgroundImage: 'linear-gradient(#525252bf, #525252bf)', duration: 0.3 })
      .add().to(header.$el, { y: '-0.5rem', duration: 0.3, ease: 'power3.out' }, '-=0.3')
      .add().to(description.$el, { maxHeight: '100%', opacity: 1, duration: 0.8, ease: 'sin.out' }, '-=0.2')
      .add().to(button.$el, { opacity: 1, visibility: 'visible', duration: 0.2, ease: 'sin.out' }, '-=0.7')

    timeline.progress(1).progress(0)

    this.timeline = timeline
  },
  methods: {
    showEnterAnimation () {
      this.timeline.play()
    },
    showLeaveAnimation () {
      this.timeline.reverse()
    }
  },
  data () {
    return {
      timeline: null
    }
  }
}
</script>

<style>
.max-h-0 {
  max-height: 0;
}
</style>
