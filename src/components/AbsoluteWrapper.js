import React from "react";
import { Box } from "@material-ui/core";

const AbsoluteWrapper = ({ children }) => {
  return (
    // <Box position="fixed">
    <Box mt={5} position="absolute" zIndex="tooltip">
      {children}
    </Box>
  );
};
export default AbsoluteWrapper;
