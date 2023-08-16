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
        // Aquí puedes realizar acciones basadas en el valor de búsqueda (searchValue)
        console.log('Search submitted:', searchValue);
        // También podrías llamar a una función de búsqueda aquí
        setSearchValue("");
    };
    
    return(

            <Box sx={{ width: '100%', alignItems:"center", padding:2}}>
                <form onSubmit={handleSubmit}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        height="100%"
                    >
                        <Typography sx={{ marginLeft: 2 }} variant="h2">
                        {title}
                        </Typography>
                        <Box display="flex" alignItems="center"  >
                            <TextField sx={{width: "15rem", marginInline:1}}
                                size="small"
                                label="Search"
                                variant="outlined"
                                value={searchValue}
                                onChange={handleSearchChange}
                            />
                            <SearchIcon />
                        <Button type="submit">
                        </Button>
                        </Box>
                    </Box>
                </form>
            </Box>

    )
}

