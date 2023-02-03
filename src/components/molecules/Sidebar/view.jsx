import { useState } from 'react'
import { useInfiniteQuery, useQueryClient } from 'react-query'
import { userService } from '@/services'
import UserCard from '@/components/molecules/UserCard'
import SearchBar from '@/components/atoms/SearchBar'
import { SidebarContainer } from './styled'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CircularProgress from '@mui/material/CircularProgress'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Box } from '@mui/system'

const Sidebar = () => {
  const queryClient = useQueryClient()
  const [focus, setFocus] = useState(false)

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['getAllUsersList'],
    queryFn: ({ pageParam = 0 }) => userService.getAllUsersList(pageParam),
    getNextPageParam: ({ data, page, limit, total }) => {
      if (data?.length === limit) {
        return page + 1
      } else return
    },
  })

  const { isFetching: isGetPostFetching } = queryClient.getQueryState('getPosts')

  const handleOnChange = () => {}

  if (isLoading && isGetPostFetching) {
    return (
      <SidebarContainer>
        <CircularProgress />
      </SidebarContainer>
    )
  }

  /* const users = data?.pages.reduce((prev, page) => prev.concat(page.data), []) */

  const users = data?.pages[0].data ?? []

  return (
    <SidebarContainer
      ishidden={focus ? 'scroll' : 'hidden'}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <SearchBar onChange={handleOnChange} />
      <Box sx={{width: '100%'}}>
      <InfiniteScroll
        dataLength={users.length}
        hasMore={true}
        loader={<h4>que dices</h4>}
      >
        {users.map((user, index) => (
          <UserCard key={user.id + index} user={user} />
        ))}
      </InfiniteScroll>
      </Box>
    </SidebarContainer>
  )
}

export default Sidebar
