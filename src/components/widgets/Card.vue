<template>
  <div class="card">
    <card-background :image="item.image" />

    <card-default-content
      v-if="isDefaultContent"
      :title="item.title"
      :text="item.description"
    />

    <card-city-content
      v-else
      :title="item.title"
      :subtitle="item.subtitle"
      :text="item.description"
    />
  </div>
</template>

<script>
import CardBackground from '@/components/elements/CardBackground'
import CardDefaultContent from '@/components/blocks/CardDefaultContent'
import CardCityContent from '@/components/blocks/CardCityContent'

export default {
  props: {
    content: String
  },
  components: {
    CardBackground,
    CardDefaultContent,
    CardCityContent
  },
  computed: {
    isDefaultContent () {
      return this.item === this.info.default
    },

    item () {
      const key = this.content
      const item = this.info[key]
      return item || this.info.default
    }
  },
  data () {
    return {
      info: {
        default: {
          title: 'FRONT-END',
          description: 'Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet'
        },
        venice: {
          title: 'ITALY',
          subtitle: 'VENICE',
          image: 'venice',
          description: 'Venice, the capital of northern Italy\'s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.'
        },
        berlin: {
          title: 'GERMANY',
          subtitle: 'BERLIN',
          image: 'berlin',
          description: 'Berlin, Germany’s capital, dates to the 13th century. The city\'s known for its art scene and modern landmarks.'
        },
        barcelona: {
          title: 'SPAIN',
          subtitle: 'BARCELONA',
          image: 'barcelona',
          description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.'
        },
        paris: {
          title: 'FRANCE',
          subtitle: 'PARIS',
          image: 'paris',
          description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture.'
        },
        amsterdam: {
          title: 'NETHERLANDS',
          subtitle: 'AMSTERDAM',
          image: 'amsterdam',
          description: 'Amsterdam is the Netherlands’ capital, known for its artistic heritage and elaborate canal system.'
        },
        london: {
          title: 'UNITED KINGDOM',
          subtitle: 'LONDON',
          image: 'london',
          description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.card {
  width: 100%;
  height: 20rem;
  max-height: 20rem;
  position: relative;
}

@media (min-width: 768px) {
  .card {
    height: 24rem;
    max-height: 24rem;

    @at-root &--large {
      height: 32rem;
      max-height: 32rem;
    }
  }
}
</style>
