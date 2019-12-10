<template>
<div class="flex flex-col justify-center items-center">
  <card-title class="mb-2">{{ title }}</card-title>
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
