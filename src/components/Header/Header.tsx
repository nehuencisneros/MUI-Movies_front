import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import  React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { searchMovies } from "../../redux/slices/moviesSlice";
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
    title: string,
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    const [currentPage, setCurrentPage] = React.useState<number>();
    const navigate = useNavigate();
    
    const dispatch = useAppDispatch();

    const [searchValue, setSearchValue] = React.useState('');

    const handleSearchChange = (event:any) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        dispatch(searchMovies(searchValue))
        setCurrentPage(1)
        navigate("/")
        setSearchValue("");
    };
    
    return(
        <Box sx={{ width: '100%', padding:1}}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between">
                    <Typography sx={{ marginLeft: 2 }} variant="h1">
                        {title}
                    </Typography>
                    <Box display="flex" alignItems="center" sx={{width: "20rem",marginRight: 2}}  >
                        <Button type="submit">
                        </Button>
                        <TextField sx={{ marginRight:1, width: "15rem"}}
                            size="small"
                            label="Search"
                            variant="outlined"
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                        <SearchIcon sx={{marginRight:1}}/>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

