import { S_Card } from './styled'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'


const UserCard = ({ user }) => {
  const { firstName, lastName, picture } = user

  return (
    <>
      <S_Card>
        <CardHeader
          avatar={<Avatar src={picture} />}
          title={`${firstName} ${lastName}`}
        />
      </S_Card>
    </>
  )
}

export default UserCard
