<template>
  <div class="container py-6 md:px-40 md:mx-auto">
    <div class="flex flex-col">

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="py-3 px-6 item-header md:px-3 md:w-full">
          <card content="default" />
        </div>
      </div>

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="py-3 px-6 item md:px-3 md:w-2/4">
          <card content="venice" />
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <card content="berlin" />
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <card content="barcelona" />
        </div>
      </div>

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <card content="paris" />
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-1/4">
          <card content="amsterdam" />
        </div>
        <div class="py-3 px-6 item md:px-3 md:w-2/4">
          <card content="london" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Card from '@/components/items/Card'

export default {
  components: { Card }
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
