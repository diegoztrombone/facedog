import { useState } from 'react'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import { userService } from '@/services'
import UserCard from '@/components/molecules/UserCard'
import SearchBar from '@/components/atoms/SearchBar'
import { SidebarContainer, UserCardContainer } from './styled'


const Sidebar = () => {
  const queryClient = useQueryClient()
  const [showScrollBar, setShowScrollbar] = useState(false)

  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getAllUsersList'],
    queryFn: ({ pageParam = 0 }) => userService.getAllUsersList(pageParam),
    getNextPageParam: ({ data, page, limit, total }) => {
      if (data?.length === limit) {
        return page + 1
      } else return
    },
  })

  const { isLoading: isGetPostsLoading } = queryClient.getQueryState('getPosts')

  const handleScroll = e => {
    const isBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight

    if (isBottom && hasNextPage) {
      fetchNextPage()
    }
  }

  const handleOnChange = () => {}

  if (isLoading || isGetPostsLoading) {
    return (
      <SidebarContainer>
        <SearchBar />
        {Array.from({ length: 10 }).map((_, i) => (
          <UserCard key={`usercard-null-${i}`} user={null} />
        ))}
      </SidebarContainer>
    )
  }

  const users = data?.pages.reduce((prev, page) => prev.concat(page.data), [])

  return (
    <SidebarContainer
      $scrollbar={showScrollBar}
      onMouseEnter={() => setShowScrollbar(true)}
      onMouseLeave={() => setShowScrollbar(false)}
      onScroll={handleScroll}
    >
      <SearchBar onChange={handleOnChange} />
      <UserCardContainer>
        {users?.map((user, index) => (
          <UserCard key={user.id + index} user={user} />
        ))}
        {isFetchingNextPage && <UserCard user={null} loading />}
      </UserCardContainer>
    </SidebarContainer>
  )
}

export default Sidebar
