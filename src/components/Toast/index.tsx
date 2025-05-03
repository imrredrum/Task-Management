import type { Options } from '@zag-js/toast'
import { toaster } from '../ui/toaster'

export const showToast = (title: string, options?: Options) => {
  toaster.create({
    title,
    type: 'info',
    duration: 2000,
    closable: true,
    ...options,
  })
}
