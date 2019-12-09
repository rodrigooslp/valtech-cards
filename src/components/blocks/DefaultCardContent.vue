<template>
  <div class="flex flex-col justify-center items-center h-full rounded-lg relative">
    <card-overlay ref="card" class="absolute"></card-overlay>

    <card-title>{{ title }}</card-title>
    <valtech-logo class="mt-3 mb-5"></valtech-logo>
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
