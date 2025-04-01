// src/composables/usePostHog.ts
import posthog from 'posthog-js'

export function usePostHog() {
  posthog.init('phc_VwS2uebqx26YAMpCe1wMJzaVNqZnv4lGPZhnPRLBUTO', {
    api_host: 'https://us.i.posthog.com'
  })

  return {
    posthog
  }
}