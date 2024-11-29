import React from 'react';
import {Box, LinearProgress} from "@mui/material";

const Loader = () => {
    return (
        <Box sx={{position: "fixed", top: 0, left: 0, zIndex: 2000, width: '100%', "& > * + *": {marginTop: 2}}}>
            <LinearProgress color="primary" />
        </Box>
    )
}

export default Loader
