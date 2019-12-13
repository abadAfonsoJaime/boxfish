import React from "react";
import { Box } from "@material-ui/core";

const AbsoluteWrapper = ({ children }) => {
    return (
        // <Box position="fixed">
        <Box position="absolute">
            {children}
        </Box>      
    )
}
export default AbsoluteWrapper;
