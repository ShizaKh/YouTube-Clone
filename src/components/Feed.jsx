import { useState, useEffect } from "react"
import { Box, Stack, Typography } from '@mui/material'

// we want to call fetchFromAPI as soon as our feed loads...we'll use useEffeck hook for this.
import { fetchFromAPI } from "../utils/fetchFromAPI"

// ./ b/c we are already in the components folder
import { Sidebar , Videos } from "./"


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])

  // a lifecycle hook which gets called when the component initially loads...code inside this func. will only run when we reload the page.
  // `search?part=snippet&q=${selectedCategory}` :remainder of the url to be called. q: query
  // the dependency array is given the value of selectedCategory b/c this func. will be recalled when a different category is selected.
  useEffect(() => {
    // we want to update selected category and then fetch videos based on the selected category
    // An asynchhronus function ⬇
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: {sm: 'column', md: 'row'} }}>

      {/* Sidebar Area */}
      {/* the whole page upto 92vh will have a background of black...b/c in App.js all elements are wrapped in box with bg:black */}
      <Box sx={{ height: {sx: 'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px: {sx:0, md:2 }}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className="copyright" variant="body2" sx={{ mt:1.5, color: "#fff" }}>
          Copyright 2024 React Learning
        </Typography>
      </Box>

      {/* Videos Area */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex:2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {/* the dynamic code before span will set the text too the btn/category actually selected */}
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

      {/* data fetching from api in this part⬇ */}
        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed