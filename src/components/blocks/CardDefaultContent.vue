<template>
  <div class="card__default-content">
    <card-overlay class="card__overlay--color-light" />

    <card-title>{{ title }}</card-title>
    <card-logo />
    <card-text>{{ text }}</card-text>
  </div>
</template>

<script>
import CardOverlay from '@/components/elements/CardOverlay'
import CardTitle from '@/components/elements/CardTitle'
import CardText from '@/components/elements/CardText'
import CardLogo from '@/components/elements/CardLogo'

export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  components: {
    CardOverlay,
    CardTitle,
    CardText,
    CardLogo
  }
}
</script>

<style lang="scss">
.card__default-content {
  height: 20rem;
  max-height: 20rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

@media (min-width: 850px) {
  .card__default-content {
    height: 32rem;
    max-height: 32rem;
  }
}
</style>
