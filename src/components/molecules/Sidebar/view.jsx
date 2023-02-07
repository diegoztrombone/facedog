import { useState, useEffect } from 'react'
import { useQueryClient } from 'react-query'
import UserCard from '@/components/molecules/UserCard'
import SearchBar from '@/components/atoms/SearchBar'
import { SidebarContainer, UserCardContainer } from './styled'
import { getAllUserList } from '@/query'
import useDebounce from '@/hooks/useDebounce'

const Sidebar = () => {
  const queryClient = useQueryClient()
  const [showScrollBar, setShowScrollbar] = useState(false)

  const { status: getPostQueryStatus } = queryClient.getQueryState('getPosts')
  const { data: users, isFetching: allUsersFetched } = getAllUserList()

  const handleOnChange = e => {
    const value = useDebounce(e.target.value, 1000)
    console.log('>>>', value)
  }

  if (!allUsersFetched || getPostQueryStatus === 'loading') {
    return (
      <SidebarContainer>
        <SearchBar />
        {Array.from({ length: 10 }).map((_, i) => (
          <UserCard key={`usercard-null-${i}`} user={null} />
        ))}
      </SidebarContainer>
    )
  }

  return (
    <SidebarContainer
      scroll={showScrollBar}
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
    >
      <SearchBar onChange={handleOnChange} />
      <UserCardContainer>
        {users?.map((user, index) => (
          <UserCard key={user.id + index} user={user} />
        ))}
      </UserCardContainer>
    </SidebarContainer>
  )
}

export default Sidebar
