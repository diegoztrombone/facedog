import { useQuery } from 'react-query'
import { postService } from '@/services'

const Home = () => {
  const { data, error, isLoading } = useQuery('posts', postService.getPosts)

  return (
    <>
      <h2>USERS</h2>
    </>
  )
}

export default Home
