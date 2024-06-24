// almost similar to the code in feed.jsx without the sidebar
import { useState, useEffect } from "react"
import { Box, Typography } from '@mui/material'
import { useParams } from "react-router-dom"

// we want to call fetchFromAPI as soon as our feed loads...we'll use useEffeck hook for this.
import { fetchFromAPI } from "../utils/fetchFromAPI"

// ./ b/c we are already in the components folder
import { Videos } from "./"


const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  // searchTerm is the query set in App.js for searchFeed
  const { searchTerm } = useParams()

  // a lifecycle hook which gets called when the component initially loads...code inside this func. will only run when we reload the page.
  // `search?part=snippet&q=${selectedCategory}` :remainder of the url to be called. q: query
  // the dependency array is given the value of selectedCategory b/c this func. will be recalled when a different category is selected.
  useEffect(() => {
    // we want to update selected category and then fetch videos based on the selected category
    // An asynchhronus function ⬇
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex:2, mr: { sm:'100px' } }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        {/* the dynamic code before span will set the text too the btn/category actually selected */}
        Search Results for: <span style={{ color: '#F31503' }}> {searchTerm} </span> videos
      </Typography>

    {/* data fetching from api in this part⬇ */}
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed