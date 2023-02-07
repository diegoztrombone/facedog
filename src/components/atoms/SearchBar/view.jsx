import { SearchBarContainer } from './styled'
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CircularProgress from '@mui/material/CircularProgress'
import { Box } from '@mui/material'

const SearchBar = ({ onChange, loading }) => {
  return (
    <>
      <SearchBarContainer>
        <Box>{loading ? <CircularProgress size={24} /> : <SearchIcon />}</Box>
        <TextField onChange={onChange} label='Search' variant='standard' sx={{ width: '100%' }} />
      </SearchBarContainer>
    </>
  )
}

export default SearchBar
