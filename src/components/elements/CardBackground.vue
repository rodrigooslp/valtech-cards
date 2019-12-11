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
    imageSourceWebp () {
      let file = 'default'
      if (this.image) file = this.image
      return `img/bg-${file}.webp`
    },

    imageSourceJpg () {
      let file = 'default'
      if (this.image) file = this.image
      return `img/bg-${file}.jpg`
    }
  }
}
</script>

<style lang="scss">
$modifiers: 'venice', 'berlin', 'barcelona', 'paris', 'amsterdam', 'london';

.card__background {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  z-index: -2;
  object-fit: cover;

  @at-root &--position-absolute {
    position: absolute;
  }
}

</style>
