import { Stack } from "@mui/material"
// categories contain all stuff that will go in sidebar
import { categories } from "../utils/constants"

const selectedCategory = 'New'

const Sidebar = ( {selectedCategory, setSelectedCategory} ) => (
    <Stack direction="row" sx={{ overflow: "auto", height: { sx:'auto', md:'95%'}, flexDirection: {md: 'column'} }} >
        {categories.map((category) => (
            // category-btn className is defined in index.css
            // whenever we are mapping something in react, we have to give each property a key.
            <button className="category-btn" 
            // this onclick property fixes the highlighted category based on user's click
            onClick={() => setSelectedCategory(category.name)}
            style={{
                 background: category.name === selectedCategory && '#FC1503', color: 'white' }} 
                 key={category.name}
            >
                 {/* if the btn is selected, it's icon is white, if not selected ,icon is red */}
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                {/* if the btn is selected, it's opacity is 1, if not selected ,opacity is 0.8 */}
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar