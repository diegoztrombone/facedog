import { useInfiniteQuery, useQueryClient } from 'react-query'
import { userService } from '@/services'
import UserCard from '../UserCard'
import SearchBar from '@/components/atoms/SearchBar'
import { SidebarContainer } from './styled'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { IconButton } from '@mui/material'

const Sidebar = () => {
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

  const queryClient = useQueryClient()
  const getPostState = queryClient?.getQueryState('getPosts')

  const handleOnChange = () => {}

  if (isLoading || getPostState.isFetching) {
    return (
      <SidebarContainer>
        <CircularProgress />
      </SidebarContainer>
    )
  }

  const users = data?.pages.reduce((prev, page) => prev.concat(page.data), [])

  return (
    <SidebarContainer
      ishidden={focus ? 'scroll' : 'hidden'}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <SearchBar onChange={handleOnChange} />

      {users.map((user, index) => (
        <UserCard key={user.id + index} user={user} />
      ))}

      {hasNextPage && (
        <IconButton onClick={fetchNextPage} color='primary' aria-label='upload picture' component='label'>
          <MoreHorizIcon />
        </IconButton>
      )}
    </SidebarContainer>
  )
}

export default Sidebar
