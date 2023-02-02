
import { SearchBarContainer } from './styled';
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({onChange}) => {
  return (
    <>
      <SearchBarContainer>
        <SearchIcon />
        <TextField onChange={onChange} label='Search' variant='standard' sx={{width: '100%'}} />
      </SearchBarContainer>
    </>
  )
}

export default SearchBar
