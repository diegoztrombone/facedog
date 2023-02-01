import { useQuery } from 'react-query'
import { postService } from '@/services'
import SkeletonPostCard from '@/components/molecules/SkeletonPostCard'
import PostCard from '@/components/molecules/PostCard'
import { CardContainer } from './styled'

const Home = () => {
  const { data, isError, isLoading, isFetched } = useQuery('posts', postService.getPosts)

  if (isLoading ) {
    return (
      <CardContainer>
        {Array.from({ length: 10 }).map(_ => (
          <SkeletonPostCard />
        ))}
      </CardContainer>
    )
  }

  return (
    <CardContainer>
      {data.data.map(post => (
        <PostCard post={post}></PostCard>
      ))}
    </CardContainer>
  )
}

export default Home
