<template>
  <div class="w-full h-full relative">
    <card-background class="bg-center bg-cover w-full h-full absolute rounded-lg" :bg-class="body.class"></card-background>

    <card-default-content v-if="isDefaultContent" :title="body.title" :text="body.description"></card-default-content>
    <card-city-content v-else :title="body.title" :subtitle="body.subtitle" :text="body.description"></card-city-content>
  </div>
</template>

<script>
import CardBackground from '@/components/elements/CardBackground'
import CardDefaultContent from '@/components/blocks/CardDefaultContent'
import CardCityContent from '@/components/blocks/CardCityContent'

export default {
  props: {
    content: {
      type: String,
      default: 'default'
    }
  },
  components: {
    CardBackground,
    CardDefaultContent,
    CardCityContent
  },
  computed: {
    isDefaultContent () {
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
          class: 'card__background--default',
          description: 'Lorem ipsun dolor sit a met lorem dolor sit a met factius lorem ipsun dolor sit a met ipsun lorem amet'
        },
        venice: {
          title: 'ITALY',
          subtitle: 'VENICE',
          class: 'card__background--venice',
          description: 'Venice, the capital of northern Italy\'s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.'
        },
        berlin: {
          title: 'GERMANY',
          subtitle: 'BERLIN',
          class: 'card__background--berlin',
          description: 'Berlin, Germany’s capital, dates to the 13th century. The city\'s known for its art scene and modern landmarks.'
        },
        barcelona: {
          title: 'SPAIN',
          subtitle: 'BARCELONA',
          class: 'card__background--barcelona',
          description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.'
        },
        paris: {
          title: 'FRANCE',
          subtitle: 'PARIS',
          class: 'card__background--paris',
          description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture.'
        },
        amsterdam: {
          title: 'NETHERLANDS',
          subtitle: 'AMSTERDAM',
          class: 'card__background--amsterdam',
          description: 'Amsterdam is the Netherlands’ capital, known for its artistic heritage and elaborate canal system.'
        },
        london: {
          title: 'UNITED KINGDOM',
          subtitle: 'LONDON',
          class: 'card__background--london',
          description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
        }
      }
    }
  }
}
</script>
