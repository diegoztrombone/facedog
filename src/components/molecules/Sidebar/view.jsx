import { useState, useEffect } from 'react'
import { useQueryClient } from 'react-query'
import UserCard from '@/components/molecules/UserCard'
import SearchBar from '@/components/atoms/SearchBar'
import { SidebarContainer, UserCardContainer } from './styled'
import { getAllUserList } from '@/query'

const Sidebar = () => {
  const queryClient = useQueryClient()
  const [showScrollBar, setShowScrollbar] = useState(false)

  const { status: getPostQueryStatus } = queryClient.getQueryState('getPosts')
  const { data: users, isFetching: allUsersFetched } = getAllUserList()

  // INFINITE SCROLL HANDLE
  /* const handleScroll = e => {
    const isBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight

    if (isBottom && hasNextPage) {
      fetchNextPage()
    }
  } */

  const handleOnChange = () => {}

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
      //onScroll={handleScroll}
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
