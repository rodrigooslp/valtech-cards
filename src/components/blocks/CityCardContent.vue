<template>
<div class="flex flex-col justify-center items-center h-full relative" @mouseenter="showEnterAnimation" @mouseleave="showLeaveAnimation">
  <card-overlay ref="card" class="absolute"></card-overlay>

  <div ref="title" class="flex flex-col justify-center items-center mt-8 mb-2">
    <card-title class="mb-2">{{ title }}</card-title>
    <card-subtitle>{{ subtitle }}</card-subtitle>
  </div>

  <card-description ref="description" class="max-h-0 opacity-0">{{ text }}</card-description>
  <card-button ref="button" class="mt-3 mb-6 opacity-0 invisible">Explore More</card-button>
</div>
</template>

<script>
import { gsap } from 'gsap'

import CardOverlay from '@/components/elements/CardOverlay'
import CardTitle from '@/components/elements/CardTitle'
import CardSubtitle from '@/components/elements/CardSubtitle'
import CardDescription from '@/components/elements/CardDescription'
import CardButton from '@/components/elements/CardButton'

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
    CardTitle,
    CardSubtitle,
    CardDescription,
    CardButton
  },
  mounted () {
    const { title, description, button, card } = this.$refs
    const timeline = gsap.timeline({ paused: true })

    timeline
      .add().to(card.$el, { backgroundImage: 'linear-gradient(#525252bf, #525252bf)', duration: 0.3 })
      .add().to(title, { y: '-0.5rem', duration: 0.3, ease: 'power3.out' }, '-=0.3')
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
