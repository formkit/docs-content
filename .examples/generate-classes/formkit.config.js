import { generateClasses } from '@formkit/themes'

export default {
  config: {
    classes: generateClasses({
      global: { // applies to all input types
        outer: 'SHAZAM'
      },
      text: { // only applies to text input type
        outer: 'bizz',
        input: '$reset fizz'
      },
      email: { // only applies to email input type
        outer: 'bap',
        input: '$reset bop'
      }
    })
  }
}
