<template>
  <picture class="card__background">
    <source :srcset="imageSourceWebp" type="image/webp">
    <source :srcset="imageSourceJpg" type="image/jpeg">
    <img class="card__background" :src="imageSourceJpg" :alt="image">
  </picture>
</template>

<script>
export default {
  props: {
    image: String
  },
  computed: {
    backgroundName () {
      if (!this.valid.includes(this.image)) return 'default'
      return this.image
    },

    imageSourceWebp () {
      return `/img/bg-${this.backgroundName}.webp`
    },

    imageSourceJpg () {
      return `/img/bg-${this.backgroundName}.jpg`
    }
  },
  data () {
    return {
      valid: ['default', 'venice', 'berlin', 'barcelona', 'paris', 'amsterdam', 'london']
    }
  }
}
</script>

<style lang="scss">

.card__background {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  z-index: -2;
  object-fit: cover;
  position: absolute;
}

</style>
