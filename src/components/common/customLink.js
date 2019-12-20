import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

export default function CustomLink({ href, text }) {
  return (
    <Box my={10} style={{ cursor: "pointer" }}>
      <Link to={href} style={{ textDecoration: "none" }}>
        <Typography
          style={{ fontWeight: "bold" }}
          variant="h4"
          color="primary"
          align="start"
        >
          {text}
        </Typography>
      </Link>
    </Box>
  );
}
