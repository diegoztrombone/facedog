import { useQueryClient } from 'react-query'
const User = () => {
  const queryClient = useQueryClient()

  const { data } = queryClient.getQueryState('getAllUsersList')

  return (
    <>
      <h2>USERS</h2>
    </>
  )
}

export default User
