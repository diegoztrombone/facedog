import { useQuery } from 'react-query'
import { postService } from '@/services'
import { CardContainer } from './styled'
import PostCard from '@/components/molecules/PostCard'

const Home = () => {
  const { data, isError, isLoading } = useQuery('posts', postService.getPosts)

  if (isLoading) {
    return <CardContainer>CARGANDO</CardContainer>
  }

  if (isError) {
    return <CardContainer>ERROR</CardContainer>
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
