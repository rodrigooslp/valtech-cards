<template>
  <div class="w-full h-full relative" @mouseenter="showEnterAnimation" @mouseleave="showLeaveAnimation">
    <div class="bg-center bg-cover w-full h-full absolute rounded-lg" :class="body.class"></div>
    <div ref="card" class="h-full overlay rounded-lg">
      <div class="flex flex-col justify-center items-center h-full">

        <slot v-if="isContentDefault">
          <h2 class="mb-2 heading">{{ body.heading }}</h2>
          <img class="h-8 mt-1 mb-3" :src="require('@/assets/img/logo.svg')">
          <h4 class="mt-2 px-8 text-center md:px-56 description">{{ body.description }}</h4>
        </slot>

        <slot v-else>
          <div ref="title" class="flex flex-col justify-center items-center mt-8">
            <h2 class="mb-2 heading">{{ body.heading }}</h2>
            <h1 class="text-white font-semibold title">{{ body.title }}</h1>
          </div>

          <h4 ref="description" class="opacity-0 mt-2 px-8 text-center flex-grow md:px-10 description">{{ body.description }}</h4>
          <button ref="button" class="opacity-0 text-white border border-solid border-white px-4 py-1 mt-3 rounded focus:outline-none mb-6 button">Explore More</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    content: {
      type: String,
      default: 'default'
    }
  },
  mounted () {
    const { title, description, button, card } = this.$refs
    const timeline = gsap.timeline({ paused: true })

    if (title && description && button) {
      timeline
        .add()
        .to(card, { backgroundImage: 'linear-gradient(#525252bf, #525252bf)', duration: 0.3 })
        .add()
        .to(title, { y: '-0.5rem', duration: 0.3, ease: 'power3.out' }, '-=0.3')
        .add()
        .to(description, { maxHeight: '100%', opacity: 1, duration: 0.8, ease: 'sin.out' }, '-=0.2')
        .add()
        .to(button, { opacity: 1, duration: 0.2, ease: 'sin.out' }, '-=0.7')

      timeline.progress(1).progress(0)
    }

    this.timeline = timeline
  },
  computed: {
    isContentDefault () {
      return this.body === this.text.default
    },

    body () {
      const key = this.content
      const body = this.text[key]
      return body || this.text.default
    }
  },
  methods: {
    showEnterAnimation () {
      this.timeline.play()
    },
    showLeaveAnimation () {
      this.timeline.reverse()
    }
  },
  data () {
    return {
      timeline: null,
      text: {
        default: {
          heading: 'FRONT-END',
          class: 'bg-default',
          description: 'Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet'
        },
        venice: {
          heading: 'ITALY',
          title: 'VENICE',
          class: 'bg-venice',
          description: 'Venice, the capital of northern Italy\'s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.'
        },
        berlin: {
          heading: 'GERMANY',
          title: 'BERLIN',
          class: 'bg-berlin',
          description: 'Berlin, Germany’s capital, dates to the 13th century. The city\'s known for its art scene and modern landmarks.'
        },
        barcelona: {
          heading: 'SPAIN',
          title: 'BARCELONA',
          class: 'bg-barcelona',
          description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.'
        },
        paris: {
          heading: 'FRANCE',
          title: 'PARIS',
          class: 'bg-paris',
          description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture.'
        },
        amsterdam: {
          heading: 'NETHERLANDS',
          title: 'AMSTERDAM',
          class: 'bg-amsterdam',
          description: 'Amsterdam is the Netherlands’ capital, known for its artistic heritage and elaborate canal system.'
        },
        london: {
          heading: 'UNITED KINGDOM',
          title: 'LONDON',
          class: 'bg-london',
          description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.button {
  font-size: 0.95rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
}

.title {
  font-size: 1.6rem;
}

.heading {
  color: #ffffffbf;
}

.description {
  max-height: 0;
  font-size: 0.95rem;
  color: #ffffffbf;
}

.overlay {
  background-image: linear-gradient(#33333380, #33333380);
}

.webp {
  .bg-default {
    z-index: -1;
    background-image: url('../../assets/img/bg-default.webp');
  }

  .bg-venice {
    z-index: -1;
    background-image: url('../../assets/img/bg-venice.webp');
  }

  .bg-venice {
    z-index: -1;
    background-image: url('../../assets/img/bg-venice.webp');
  }

  .bg-berlin {
    z-index: -1;
    background-image: url('../../assets/img/bg-berlin.webp');
  }

  .bg-barcelona {
    z-index: -1;
    background-image: url('../../assets/img/bg-barcelona.webp');
  }

  .bg-paris {
    z-index: -1;
    background-image: url('../../assets/img/bg-paris.webp');
  }

  .bg-amsterdam {
    z-index: -1;
    background-image: url('../../assets/img/bg-amsterdam.webp');
  }

  .bg-london {
    z-index: -1;
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
