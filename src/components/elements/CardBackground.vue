<template>
  <div :class="bgClass"></div>
</template>

<script>
export default {
  props: {
    bgClass: {
      type: String
    }
  }
}
</script>
