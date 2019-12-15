<template>
  <div class="card__city-content"
    @mouseenter="showEnterAnimation"
    @mouseleave="showLeaveAnimation"
  >
    <card-overlay ref="card" />

    <card-city-header
      ref="header"
      :title="title"
      :subtitle="subtitle"
    />

    <card-description
      ref="description"
      class="card__description--zero-height card__description--zero-opacity card__description--grow"
    >
      {{ text }}
    </card-description>

    <card-button
      ref="button"
      class="card__button--position-bottom card__button--invisible card__button--zero-opacity"
    >
      Explore More
    </card-button>
  </div>
</template>

<script>
import { gsap } from 'gsap'

import CardOverlay from '@/components/elements/CardOverlay'
import CardDescription from '@/components/elements/CardDescription'
import CardButton from '@/components/elements/CardButton'
import CardCityHeader from '@/components/blocks/CardCityHeader'

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
    CardCityHeader
  },
  mounted () {
    const { header, description, button, card } = this.$refs
    const timeline = gsap.timeline({ paused: true })

    timeline
      .add().to(card.$el, { backgroundImage: 'linear-gradient(rgba(86, 86, 86, 0.6), rgba(86, 86, 86, 0.6))', duration: 0.3 })
      .add().to(this.$el, { boxShadow: '0 0 8px 4px rgba(0, 0, 0, 0.25)', duration: 0.3 }, '-=0.1')
      .add().to(header.$el, { y: '-0.5rem', duration: 0.3, ease: 'power3.out' }, '-=0.5')
      .add().to(description.$el, { maxHeight: '100%', opacity: 1, duration: 0.8, ease: 'sin.out' }, '-=0.4')
      .add().to(button.$el, { opacity: 1, visibility: 'visible', duration: 0.5, ease: 'sin.out' }, '-=0.9')

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

<style lang="scss">
.card__city-content {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: none;
}
</style>
