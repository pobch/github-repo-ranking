import { css } from 'styled-components'

export const MEDIA = {
  DESKTOP: (...args) => {
    return css`
      @media screen and (min-width: 576px) {
        ${css(...args)}
      }
    `
  }
}
