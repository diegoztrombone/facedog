import { format } from 'date-fns'

export const dateFormater = date => {
  return format(new Date(date), 'PPPP')
}

export const providersCompose = providers =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ))
