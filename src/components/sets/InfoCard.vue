<template>
  <div class="w-full h-full relative" @mouseenter="showEnterAnimation" @mouseleave="showLeaveAnimation">
    <card-background class="bg-center bg-cover w-full h-full absolute rounded-lg" :bg-class="body.class"></card-background>
    <div ref="card" class="h-full overlay rounded-lg">
      <default-card-content v-if="isContentDefault" :title="body.title" :text="body.description"></default-card-content>
      <div v-else class="flex flex-col justify-center items-center h-full">

        <div ref="title" class="flex flex-col justify-center items-center mt-8 mb-2">
          <card-title class="mb-2">{{ body.title }}</card-title>
          <card-subtitle>{{ body.subtitle }}</card-subtitle>
        </div>

        <card-description ref="description" class="max-h-0 opacity-0">{{ body.description }}</card-description>
        <card-button ref="button" class="mt-3 mb-6 opacity-0">Explore More</card-button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import CardTitle from '@/components/elements/CardTitle'
import CardSubtitle from '@/components/elements/CardSubtitle'
import CardDescription from '@/components/elements/CardDescription'
import CardButton from '@/components/elements/CardButton'
import CardBackground from '@/components/elements/CardBackground'
import DefaultCardContent from '@/components/blocks/DefaultCardContent'

export default {
  props: {
    content: {
      type: String,
      default: 'default'
    }
  },
  components: {
    CardTitle,
    CardSubtitle,
    CardDescription,
    CardButton,
    CardBackground,
    DefaultCardContent
  },
  mounted () {
    const { title, description, button, card } = this.$refs
    const timeline = gsap.timeline({ paused: true })

    if (title && description && button) {
      timeline
        .add().to(card, { backgroundImage: 'linear-gradient(#525252bf, #525252bf)', duration: 0.3 })
        .add().to(title, { y: '-0.5rem', duration: 0.3, ease: 'power3.out' }, '-=0.3')
        .add().to(description.$el, { maxHeight: '100%', opacity: 1, duration: 0.8, ease: 'sin.out' }, '-=0.2')
        .add().to(button.$el, { opacity: 1, duration: 0.2, ease: 'sin.out' }, '-=0.7')

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

.overlay {
  background-image: linear-gradient(#33333380, #33333380);
}

</style>
