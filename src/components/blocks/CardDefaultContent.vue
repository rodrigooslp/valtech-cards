<template>
  <div class="card__default-content card__default-content--position-relative">
    <card-overlay class="card__overlay--position-absolute" />

    <card-title>{{ title }}</card-title>
    <valtech-logo />
    <card-text>{{ text }}</card-text>
  </div>
</template>

<script>
import CardOverlay from '@/components/elements/CardOverlay'
import CardTitle from '@/components/elements/CardTitle'
import CardText from '@/components/elements/CardText'
import ValtechLogo from '@/components/elements/ValtechLogo'

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
    ValtechLogo
  }
}
</script>

<style>
.card__default-content {
  height: 20rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card__default-content--position-relative {
  position: relative;
}

@media (min-width: 768px) {
  .card__default-content {
    height: 32rem;
  }
}
</style>
