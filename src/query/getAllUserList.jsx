import { useState, useEffect, useMemo } from 'react'
import { useInfiniteQuery } from 'react-query'
import { userService } from '@/services'
const getAllUserList = () => {
  const [allUsersFetched, setAllUsersFetched] = useState(false)

  const {
    data: userData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['getAllUsersList'],
    queryFn: ({ pageParam = 0 }) => userService.getAllUsersList(pageParam),
    getNextPageParam: ({ data, page, limit }) => {
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

  const data = useMemo(() => {
    return userData?.pages.reduce((prev, page) => prev.concat(page.data), [])
  }, [allUsersFetched])

  return { data, isFetching: allUsersFetched }
}

export default getAllUserList
