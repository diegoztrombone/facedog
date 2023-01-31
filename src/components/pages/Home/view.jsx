import { useAuthContext } from "@/context/AuthContext"

const Home = () => {
  const user = useAuthContext()
  console.log(user)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
