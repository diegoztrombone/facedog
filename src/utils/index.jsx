import { format } from 'date-fns'

export const dateFormater = date => {
  return format(new Date(date), 'PPPP')
}

export const debounce = (fn, delay = 1000) => {
  let timeoutId

  return (...arg) => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn(...arg)
    }, delay)
  }
}

export const providersCompose = providers =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ))
