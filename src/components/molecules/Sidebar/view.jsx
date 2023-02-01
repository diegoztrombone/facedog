import { SidebarContainer, Container } from './styled'
import { userService } from '@/services'
import { useQuery } from 'react-query'
import UserCard from '../UserCard'
import { useState } from 'react'
import { useEffect } from 'react'

const Sidebar = () => {
  const { data: users, isError, isLoading, isFetched } = useQuery('getAllUsersList', userService.getAllUsersList)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    console.log("FOCUS", focus)
  }, [focus])

  if (isLoading) {
    return (
      <SidebarContainer>
        {/* {Array.from({length: 10}).map(_ => <UserCard user={}/>)} */}
        CARGANDO
      </SidebarContainer>
    )
  }

  return (
    <SidebarContainer isHidden={focus} onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
      {users.data.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </SidebarContainer>
  )
}

export default Sidebar
