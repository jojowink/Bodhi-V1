import { CLASS_NAMES } from '@/config'

export default function multipleMath (h, cursor, block, token) {
  const { start, end } = token.range
  const content = this.highlight(h, block, start, end, token)

  return [
    h(`span.${CLASS_NAMES.MU_GRAY}.${CLASS_NAMES.MU_REMOVE}`, content)
  ]
}
