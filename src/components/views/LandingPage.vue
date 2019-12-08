<template>
  <div class="container py-6 md:px-40 md:mx-auto">
    <div class="flex flex-col">

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="py-3 px-6 item-header md:px-3 md:w-full">
          <info-card content="default"></info-card>
        </div>
      </div>

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="py-3 px-6 item md:px-3 md:w-2/4">
          <info-card content="venice"></info-card>
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <info-card content="berlin"></info-card>
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <info-card content="barcelona"></info-card>
        </div>
      </div>

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <info-card content="paris"></info-card>
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <info-card content="amsterdam"></info-card>
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-2/4">
          <info-card content="london"></info-card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import InfoCard from '@/components/blocks/InfoCard'

export default {
  components: { InfoCard }
}
</script>

<style lang="scss">
.item, .item-header {
  height: 20rem;
}

@media (min-width: 768px) {
  .item {
    height: 24rem;
  }

  .item-header {
    height: 32rem;
  }
}

</style>
