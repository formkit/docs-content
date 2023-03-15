import { arrowDown, arrowUp, check, circle, close, down, fileDoc, spinner, star, trash, fastForward, rewind, right, left } from "@formkit/icons"
import { generateClasses } from '@formkit/themes'
import theme from './theme.js'

const config = {
  config: {
    // pass our theme object to generateClasses
    classes: generateClasses(theme)
  },
  icons: {
    // include supporting icons from @formkit/icons
    arrowDown,
    arrowUp,
    close,
    checkboxDecorator: check,
    fileItem: fileDoc,
    fileRemove: close,
    noFiles: fileDoc,
    radioDecorator: circle,
    select: down,
    spinner,
    star,
    trash,
    fastForward,
    right,
    left,
    rewind
  }
}

export default config