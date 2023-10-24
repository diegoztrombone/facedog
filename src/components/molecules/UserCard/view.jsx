import { S_Card } from './styled'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import { Skeleton } from '@mui/material'
import { CircularProgress } from '@mui/material'

const UserCard = ({ user, loading }) => {
  if (!user) {
    return (
      <>
        <S_Card>
          <CardHeader avatar={loading ? <CircularProgress /> : <Avatar />} title={<Skeleton variant='text' />} />
        </S_Card>
      </>
    )
  }
  const { firstName, lastName, picture } = user

  return (
    <>
      <S_Card>
        <CardHeader avatar={<Avatar src={picture} />} title={`${firstName} ${lastName}`} />
      </S_Card>
    </>
  )
}

export default UserCard
