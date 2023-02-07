import { getPost } from '@/query'
import Sidebar from '@/components/molecules/Sidebar'
import SkeletonPostCard from '@/components/molecules/SkeletonPostCard'
import PostCard from '@/components/molecules/PostCard'
import { CardContainer, HomeContainer, GridContainer } from './styled'

const Home = () => {
  const { data: posts, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = getPost()

  const handleScroll = e => {
    const isBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight

    if (isBottom && hasNextPage) {
      fetchNextPage()
    }
  }

  console.log("Re-rendered")

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
          {posts?.map(post => (
            <PostCard key={post.id} post={post}></PostCard>
          ))}
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
