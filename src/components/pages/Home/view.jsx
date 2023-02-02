import { useQuery } from 'react-query'
import { postService } from '@/services'
import SkeletonPostCard from '@/components/molecules/SkeletonPostCard'
import { Grid } from '@mui/material'
import PostCard from '@/components/molecules/PostCard'
import { CardContainer, HomeContainer } from './styled'
import Sidebar from '@/components/molecules/Sidebar'

const Home = () => {
  const { data, isLoading } = useQuery('getPosts', postService.getPosts)

  if (isLoading) {
    return (
      <HomeContainer container spacing={0}>
        <Grid item md={9}>
          <CardContainer>
            <SkeletonPostCard></SkeletonPostCard>
          </CardContainer>
        </Grid>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
      </HomeContainer>
    )
  }

  return (
    <HomeContainer container spacing={0}>
      <Grid item md={9}>
        <CardContainer>
          {data?.data.map(post => (
            <PostCard key={post.id} post={post}></PostCard>
          ))}
        </CardContainer>
      </Grid>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
    </HomeContainer>
  )
}

export default Home
