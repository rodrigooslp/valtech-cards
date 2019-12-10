<template>
  <div class="card__background" :class="bgClass"></div>
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
.card__background {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-position: center;
  background-size: cover;
  z-index: -2;
}

.card__background--position-absolute {
  position: absolute;
}

.webp {
  .card__background--default {
    background-image: url('../../assets/img/bg-default.webp');
  }

  .card__background--venice {
    background-image: url('../../assets/img/bg-venice.webp');
  }

  .card__background--venice {
    background-image: url('../../assets/img/bg-venice.webp');
  }

  .card__background--berlin {
    background-image: url('../../assets/img/bg-berlin.webp');
  }

  .card__background--barcelona {
    background-image: url('../../assets/img/bg-barcelona.webp');
  }

  .card__background--paris {
    background-image: url('../../assets/img/bg-paris.webp');
  }

  .card__background--amsterdam {
    background-image: url('../../assets/img/bg-amsterdam.webp');
  }

  .card__background--london {
    background-image: url('../../assets/img/bg-london.webp');
  }
}

.no-webp {
  .card__background--default {
    background-image: url('../../assets/img/bg-default.jpg');
  }

  .card__background--venice {
    background-image: url('../../assets/img/bg-venice.jpg');
  }

  .card__background--berlin {
    background-image: url('../../assets/img/bg-berlin.jpg');
  }

  .card__background--barcelona {
    background-image: url('../../assets/img/bg-barcelona.jpg');
  }

  .card__background--paris {
    background-image: url('../../assets/img/bg-paris.jpg');
  }

  .card__background--amsterdam {
    background-image: url('../../assets/img/bg-amsterdam.jpg');
  }

  .card__background--london {
    background-image: url('../../assets/img/bg-london.jpg');
  }
}
</style>
