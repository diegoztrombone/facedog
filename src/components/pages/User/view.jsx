import { useInfiniteQuery } from 'react-query'
import { userService } from '@/services'
import { useEffect, useState } from 'react'

const User = () => {
  const [allUsersFetched, setAllUsersFetched] = useState(false)
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage, isFetched } = useInfiniteQuery({
    queryKey: ['getAllUsersList'],
    queryFn: ({ pageParam = 0 }) => userService.getAllUsersList(pageParam),
    getNextPageParam: ({ data, page, limit, total }) => {
      if (data?.length === limit) {
        return page + 1
      } else return
    },
  })

  useEffect(() => {
    if (hasNextPage === true) {
      fetchNextPage()
    }

    if (hasNextPage === false) {
      setAllUsersFetched(true)
    }
  }, [hasNextPage, isFetchingNextPage])

  if (!allUsersFetched) {
    return <h2>CACA</h2>
  }
  return (
    <>
      <h2>TODO OK</h2>
    </>
  )
}

export default User
