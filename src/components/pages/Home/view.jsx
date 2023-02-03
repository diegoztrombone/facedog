import { useInfiniteQuery } from 'react-query'
import { postService } from '@/services'
import Sidebar from '@/components/molecules/Sidebar'
import SkeletonPostCard from '@/components/molecules/SkeletonPostCard'
import PostCard from '@/components/molecules/PostCard'
import { CardContainer, HomeContainer, GridContainer } from './styled'
import { Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

const Home = () => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getPosts'],
    queryFn: ({ pageParam = 0 }) => postService.getPosts(pageParam),
    getNextPageParam: ({ data, page, limit }) => {
      if (data?.length === limit) {
        return page + 1
      } else return
    },
  })

  const handleScroll = e => {
    const isBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight

    if (isBottom && hasNextPage) {
      fetchNextPage()
    }
  }
  console.log('IS LOADING HOME', isLoading)
  if (isLoading) {
    return (
      <HomeContainer container spacing={0}>
        <GridContainer item md={9}>
          <CardContainer>
            <SkeletonPostCard></SkeletonPostCard>
          </CardContainer>
        </GridContainer>
        <GridContainer item md={3}>
          <Sidebar />
        </GridContainer>
      </HomeContainer>
    )
  }

  return (
    <HomeContainer container spacing={0} onScroll={handleScroll}>
      <GridContainer item md={9}>
        <CardContainer>
          {data?.pages.map((page, i) => page.data.map(post => <PostCard key={post.id} post={post}></PostCard>))}
          {isFetchingNextPage && <SkeletonPostCard></SkeletonPostCard>}
        </CardContainer>
      </GridContainer>
      <GridContainer item md={3}>
        <Sidebar />
      </GridContainer>
    </HomeContainer>
  )
}

export default Home
