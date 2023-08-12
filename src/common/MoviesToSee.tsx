import React from "react";
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppSelector } from "../redux/hooks";
import { CardDrawer } from "../components/CardDrawer/CardDrawer";

interface ReviewProps {
    open: boolean;
    handleDrawer: () => void;
}

export const MoviesToSee: React.FC<ReviewProps> = ({open, handleDrawer}) => {
    const toSee = useAppSelector(state => state.drawer)



    return(
        <Drawer anchor={'right'} open={open}>
            <Box sx={{ width: '23em', p: 2 }}>
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
                    {   toSee.length > 0 &&
                            toSee.map(({id, image, title, rating}) => (
                                <CardDrawer
                                    key={id}
                                    id={id}
                                    image={image}
                                    title={title}
                                    rating={rating}
                                />
                            )
                        )
                    }
                </Box>
        </Drawer>
    )
}