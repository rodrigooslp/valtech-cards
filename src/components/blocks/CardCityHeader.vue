<template>
  <div class="card__city-header">
    <card-title>{{ title }}</card-title>
    <card-subtitle>{{ subtitle }}</card-subtitle>
  </div>
</template>

<script>
import CardTitle from '@/components/elements/CardTitle'
import CardSubtitle from '@/components/elements/CardSubtitle'

export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  },
  components: {
    CardTitle,
    CardSubtitle
  }
}
</script>

<style>
.card__city-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
</style>
