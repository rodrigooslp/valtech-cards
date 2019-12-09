<template>
  <div class="w-full h-full relative">
    <card-background class="bg-center bg-cover w-full h-full absolute rounded-lg" :bg-class="body.class"></card-background>

    <div class="h-full rounded-lg">
      <default-card-content v-if="isContentDefault" :title="body.title" :text="body.description"></default-card-content>
      <city-card-content v-else :title="body.title" :subtitle="body.subtitle" :text="body.description"></city-card-content>
    </div>
  </div>
</template>

<script>
import CardBackground from '@/components/elements/CardBackground'
import DefaultCardContent from '@/components/blocks/DefaultCardContent'
import CityCardContent from '@/components/blocks/CityCardContent'

export default {
  props: {
    content: {
      type: String,
      default: 'default'
    }
  },
  components: {
    CardBackground,
    DefaultCardContent,
    CityCardContent
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
  data () {
    return {
      text: {
        default: {
          title: 'FRONT-END',
          class: 'bg-default',
          description: 'Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet'
        },
        venice: {
          title: 'ITALY',
          subtitle: 'VENICE',
          class: 'bg-venice',
          description: 'Venice, the capital of northern Italy\'s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.'
        },
        berlin: {
          title: 'GERMANY',
          subtitle: 'BERLIN',
          class: 'bg-berlin',
          description: 'Berlin, Germany’s capital, dates to the 13th century. The city\'s known for its art scene and modern landmarks.'
        },
        barcelona: {
          title: 'SPAIN',
          subtitle: 'BARCELONA',
          class: 'bg-barcelona',
          description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.'
        },
        paris: {
          title: 'FRANCE',
          subtitle: 'PARIS',
          class: 'bg-paris',
          description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture.'
        },
        amsterdam: {
          title: 'NETHERLANDS',
          subtitle: 'AMSTERDAM',
          class: 'bg-amsterdam',
          description: 'Amsterdam is the Netherlands’ capital, known for its artistic heritage and elaborate canal system.'
        },
        london: {
          title: 'UNITED KINGDOM',
          subtitle: 'LONDON',
          class: 'bg-london',
          description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.max-h-0 {
  max-height: 0;
}
</style>
