import { S_Card, S_CardMedia } from './styled'
import { dateFormater } from '@/utils'
import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

const PostCard = ({ post }) => {
  const { image, text, publishDate: date, owner } = post

  return (
    <>
      <S_Card>
        <CardHeader
          avatar={<Avatar src={owner.picture} />}
          title={`${owner.firstName} ${owner.lastName}`}
          subheader={dateFormater(date)}
        />
        <CardContent>
          <Typography variant='subtitule1' color='text.secondary'>
            {text}
          </Typography>
        </CardContent>
        <S_CardMedia component='img' image={image} alt={text} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'></Typography>
        </CardContent>
      </S_Card>
    </>
  )
}

export default PostCard
