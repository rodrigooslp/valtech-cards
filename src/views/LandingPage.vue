<template>
  <div class="landing-page container lg:px-16 xl:px-40">
    <div class="landing-page__content">

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="landing-page__item md:px-3 md:w-full">
          <card content="default" />
        </div>
      </div>

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="landing-page__item md:px-3 md:w-2/4">
          <card content="venice" />
        </div>
        <div class="landing-page__item md:px-3 md:w-1/4">
          <card content="berlin" />
        </div>
        <div class="landing-page__item md:px-3 md:w-1/4">
          <card content="barcelona" />
        </div>
      </div>

      <div class="md:flex md:flex-row md:-mx-3">
        <div class="landing-page__item md:px-3 md:w-1/4">
          <card content="paris" />
        </div>
        <div class="landing-page__item md:px-3 md:w-1/4">
          <card content="amsterdam" />
        </div>
        <div class="landing-page__item md:px-3 md:w-2/4">
          <card content="london" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Card from '@/components/widgets/Card'

export default {
  components: { Card }
}
</script>

<style lang="scss">
.landing-page {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;

  @at-root &__content {
    display: flex;
    flex-direction: column;
  }

  @at-root &__item {
    padding: 0.75rem 1.5rem;
  }
}
</style>
