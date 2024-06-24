import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed  } from './components'

const App = () => (
    <BrowserRouter>
    {/* box is like a div by default...you can change it to section by giving the component property */}
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />

            <Routes>
            <Route path="/" exact element={<Feed/>}/>
            {/* for a specific video page rather than the homepage like video/12345 */}
            <Route path="/video/:id"  element={<VideoDetail/>}/> 
            <Route path="/channel/:id"  element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>
            </Routes>
            
        </Box>
    </BrowserRouter>
);

export default App