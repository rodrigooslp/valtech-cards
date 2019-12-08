<template>
  <div class="w-full h-full">
    <div class="bg" :class="backgroundClass">
      <div class="flex flex-col justify-center items-center h-full">
        <h2 class="mb-2 heading">{{ body.heading }}</h2>
        <img v-if="content === 'default'" class="h-8 mt-1 mb-3" :src="require('@/assets/img/logo.svg')">
        <h1 class="text-white font-semibold title">{{ body.title }}</h1>
        <h4 v-if="content === 'default'" class="px-8 text-center description md:px-56">{{ body.description }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    backgroundClass () {
      switch (this.content) {
        case 'venice': return 'bg-venice'
        case 'berlin': return 'bg-berlin'
        case 'barcelona': return 'bg-barcelona'
        case 'paris': return 'bg-paris'
        case 'amsterdam': return 'bg-amsterdam'
        case 'london': return 'bg-london'
        default: return 'bg-default'
      }
    },
    body () {
      const key = this.content
      const body = this.text[key]
      return body || this.text.default
    }
  },
  data () {
    return {
      text: {
        default: {
          heading: 'FRONT-END',
          description: 'Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet'
        },
        venice: {
          heading: 'ITALY',
          title: 'VENICE',
          description: 'Venice, the capital of northern Italy\'s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.'
        },
        berlin: {
          heading: 'GERMANY',
          title: 'BERLIN',
          description: 'Berlin, Germany’s capital, dates to the 13th century. The city\'s known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.'
        },
        barcelona: {
          heading: 'SPAIN',
          title: 'BARCELONA',
          description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.'
        },
        paris: {
          heading: 'FRANCE',
          title: 'PARIS',
          description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.'
        },
        amsterdam: {
          heading: 'NETHERLANDS',
          title: 'AMSTERDAM',
          description: 'Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age.'
        },
        london: {
          heading: 'UNITED KINGDOM',
          title: 'LONDON',
          description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.title {
  font-size: 1.6rem;
}

.heading {
  color: #ffffffbf;
}

.description {
 font-size: 0.95rem;
 color: #ffffffbf;
}

.bg {
  height: 100%;
  background-position: center;
  background-size: cover;
  border-radius: .5rem;
}

.webp {
  .bg-default {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-default.webp')
  }

  .bg-venice {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-venice.webp')
  }

  .bg-berlin {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-berlin.webp')
  }

  .bg-barcelona {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-barcelona.webp')
  }

  .bg-paris {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-paris.webp')
  }

  .bg-amsterdam {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-amsterdam.webp')
  }

  .bg-london {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-london.webp')
  }
}

.no-webp {
  .bg-default {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-default.jpg')
  }

  .bg-venice {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-venice.jpg')
  }

  .bg-berlin {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-berlin.jpg')
  }

  .bg-barcelona {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-barcelona.jpg')
  }

  .bg-paris {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-paris.jpg')
  }

  .bg-amsterdam {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-amsterdam.jpg')
  }

  .bg-london {
    background-image: linear-gradient(rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)), url('../../assets/img/bg-london.jpg')
  }
}

</style>
