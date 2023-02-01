import { S_Card, S_CardMedia } from './styled'
import CardHeader from '@mui/material/CardHeader'
import { Skeleton } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const PostCard = () => {
  return (
    <>
      <S_Card>
        <CardHeader
          avatar={
            <Skeleton variant='circular'>
              <Avatar />
            </Skeleton>
          }
          title={<Skeleton variant='text' />}
          subheader={<Skeleton variant='text' />}
        />
        <CardContent>
          <Skeleton variant='text' />
        </CardContent>
        <S_CardMedia>
          <Skeleton variant='rounded' width={700} height={500} />{' '}
        </S_CardMedia>
        <CardContent>
          <Typography variant='body2' color='text.secondary'></Typography>
        </CardContent>
      </S_Card>
    </>
  )
}

export default PostCard
