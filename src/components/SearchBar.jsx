import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  // use state to update the search term whenever typed
  const [ searchTerm, setSearchTerm ] = useState('')

  // To navigate to a specific url
  const navigate = useNavigate()

  const handleSubmit= (e) => {
    // when a form is submitted,it reloads the page but we don't want that.
    e.preventDefault();
    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper 
    component="form" 
    onSubmit={handleSubmit} 
    sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl:2, boxShadow: 'none', mr: {sm:5} }}>

      <input className="search-bar" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) }/>
      <IconButton type="submit" sx={{ p:'10px', color: 'red'}}>
        <Search/> 
      </IconButton>
     
    </Paper>
  )
}

export default SearchBar