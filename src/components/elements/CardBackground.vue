<template>
  <div class="bg-index" :class="bgClass"></div>
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

<style lang="scss">
.bg-index {
  z-index: -2;
}

.webp {
  .bg-default {
    background-image: url('../../assets/img/bg-default.webp');
  }

  .bg-venice {
    background-image: url('../../assets/img/bg-venice.webp');
  }

  .bg-venice {
    background-image: url('../../assets/img/bg-venice.webp');
  }

  .bg-berlin {
    background-image: url('../../assets/img/bg-berlin.webp');
  }

  .bg-barcelona {
    background-image: url('../../assets/img/bg-barcelona.webp');
  }

  .bg-paris {
    background-image: url('../../assets/img/bg-paris.webp');
  }

  .bg-amsterdam {
    background-image: url('../../assets/img/bg-amsterdam.webp');
  }

  .bg-london {
    background-image: url('../../assets/img/bg-london.webp');
  }
}

.no-webp {
  .bg-default {
    background-image: url('../../assets/img/bg-default.jpg');
  }

  .bg-venice {
    background-image: url('../../assets/img/bg-venice.jpg');
  }

  .bg-berlin {
    background-image: url('../../assets/img/bg-berlin.jpg');
  }

  .bg-barcelona {
    background-image: url('../../assets/img/bg-barcelona.jpg');
  }

  .bg-paris {
    background-image: url('../../assets/img/bg-paris.jpg');
  }

  .bg-amsterdam {
    background-image: url('../../assets/img/bg-amsterdam.jpg');
  }

  .bg-london {
    background-image: url('../../assets/img/bg-london.jpg');
  }
}
</style>
