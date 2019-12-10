<template>
  <div class="card__city-content card__city-content--position-relative"
    @mouseenter="showEnterAnimation"
    @mouseleave="showLeaveAnimation"
  >
    <card-overlay
      ref="card"
      class="card__overlay--position-absolute"
    />

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
      class="card__button--invisible card__button--zero-opacity"
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

<style lang="scss">
.card__city-content {
  height: 20rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @at-root &--position-relative {
    position: relative;
  }
}

@media (min-width: 768px) {
  .card__city-content {
    height: 24rem;
  }
}
</style>
