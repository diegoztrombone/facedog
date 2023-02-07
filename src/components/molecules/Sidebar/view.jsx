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
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)
  const debounceSearch = useDebounce(search, 500)

  const { status: getPostQueryStatus } = queryClient.getQueryState('getPosts')
  const { data, isFetching: allUsersFetched } = getAllUserList()

  useEffect(() => {
    if (!data) {
      console.log('NO DATA')
    }
    if (!debounceSearch) {
      setSearchLoading(false)
      setUsers(data)
      return
    }

    const result = data?.filter(user => {
      const name = `${user.firstName} ${user.lastName}`
      return name.toLowerCase().includes(debounceSearch.toLowerCase())
    })
    setUsers(result)
    setSearchLoading(false)
  }, [debounceSearch])

  const handleOnChange = e => {
    if (!searchLoading) setSearchLoading(true)
    console.log(e.target.value)
    setSearch(e.target.value)
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
      <SearchBar loading={searchLoading} onChange={handleOnChange} />
      <UserCardContainer>
        {users?.map((user, index) => (
          <UserCard key={user.id + index} user={user} />
        ))}
      </UserCardContainer>
    </SidebarContainer>
  )
}

export default Sidebar
