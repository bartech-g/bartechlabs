import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const homeSchema = z.object({
  seo: z.object({
    title: z.string(),
    description: z.string()
  }),
  alert: z.object({
    title: z.string()
  }),
  hero: z.object({
    kicker: z.string(),
    heading: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string()
  }),
  process: z.object({
    title: z.string(),
    aside: z.string(),
    steps: z.array(z.object({
      title: z.string(),
      text: z.string()
    }))
  }),
  work: z.object({
    title: z.string(),
    aside: z.string(),
    items: z.array(z.object({
      name: z.string(),
      what: z.string(),
      stack: z.string(),
      year: z.string(),
      url: z.string()
    }))
  }),
  about: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
    stackLabel: z.string(),
    stack: z.array(z.object({
      label: z.string(),
      value: z.string()
    }))
  }),
  contact: z.object({
    title: z.string(),
    intro: z.string(),
    email: z.string(),
    projectTypes: z.array(z.string())
  })
})

// One collection per locale, queried as `home_${locale}`
export default defineContentConfig({
  collections: {
    home_en: defineCollection({ type: 'data', source: 'en/home.yml', schema: homeSchema }),
    home_hu: defineCollection({ type: 'data', source: 'hu/home.yml', schema: homeSchema })
  }
})
