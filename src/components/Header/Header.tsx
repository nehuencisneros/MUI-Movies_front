import { Box, Typography, TextField, Button, Grid, Toolbar,  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import * as React from "react";


type HeaderProps = {
    title: string,
}

export const Header: React.FC<HeaderProps> = ({ title }) => {

    const [searchValue, setSearchValue] = React.useState('');

    const handleSearchChange = (event:any) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log('Search submitted:', searchValue);
        setSearchValue("");
    };
    
    return(

            <Box sx={{ width: '100%', padding:1}}>
                <form onSubmit={handleSubmit}>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        height="100%"
                    >
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

