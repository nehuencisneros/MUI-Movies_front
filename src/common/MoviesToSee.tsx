import React from "react";
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface ReviewProps {
    open: boolean;
    handleDrawer: () => void;
}

export const MoviesToSee: React.FC<ReviewProps> = ({open, handleDrawer}) => {
    
    return(
        <Drawer anchor={'right'} open={open}>
            <Box sx={{ width: '25em', p: 2 }}>
                    <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                    <Typography variant="h5">Movies To See</Typography>
                    <IconButton color="primary" onClick={() => handleDrawer()}>
                        <CloseRoundedIcon />
                    </IconButton>
                    </Stack>
                    <Divider sx={{ my: 1.5 }} />
                </Box>
        </Drawer>
    )
}