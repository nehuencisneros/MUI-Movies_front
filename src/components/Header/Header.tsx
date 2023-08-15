import { Box, Button, Grid, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import * as React from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

type HeaderProps = {
    title: string,
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    const [ searchValue, setSearchValue ] = React.useState("")



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25)},
        marginRight: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': { width: '40ch'},
            },
        },
    }));

    React.useEffect(()=> {

    },[searchValue])

    const handlerSearch = (event:any) => {
        console.log(event.target.value)

    }

    const handleSubmit = () => {
        console.log(searchValue)
    }

    return(
        <div>
            <Box sx={{width:'100%', height:'100px'}}>
                <Grid 
                container 
                direction='row' 
                justifyContent="space-between" 
                alignItems='center'
                sx={{height:'100%'}}
                >
                    <Grid item>
                        <Typography sx={{marginLeft:3}} variant="h2">{title}</Typography>
                    </Grid>

                        <Search>
                            <SearchIconWrapper >
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}

                                onChange={handlerSearch}
                            />
                        </Search>

                </Grid>
            </Box>
        </div>
    )
}


// 
// import AppBar from '@mui/material/AppBar'
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// 
// import MenuIcon from '@mui/icons-material/Menu';







// export default function SearchAppBar() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//             <Toolbar>
//             <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="open drawer"
//                 sx={{ mr: 2 }}
//             >
//                 <MenuIcon />
//             </IconButton>
//             <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//             >
//                 MUI
//             </Typography>
//             <Search>
//                 <SearchIconWrapper>
//                 <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ 'aria-label': 'search' }}
//                 />
//             </Search>
//             </Toolbar>
//         </AppBar>
//         </Box>
//     );
// }