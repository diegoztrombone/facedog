import { useInfiniteQuery } from 'react-query'
import { postService } from '@/services'

const getPost = () => {
  const {
    data: postData,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['getPosts'],
    queryFn: ({ pageParam = 0 }) => postService.getPosts(pageParam),
    getNextPageParam: ({ data, page, limit }) => {
      if (data?.length === limit) {
        return page + 1
      } else return
    },
  })

  const data = postData?.pages.reduce((prev, page) => prev.concat(page.data), [])

  return { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage }
}

export default getPost
