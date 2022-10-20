import { Box, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface ScaffoldProps {
  title: string;
  viewAll?: boolean;
  path?: string;
  height?: string;
}

const Scaffold: React.FC<ScaffoldProps & PropsWithChildren> = ({
  children,
  title,
  viewAll = false,
  path,
  height = "50%"
}) => {
  return (
    <Box p={3} height={height} borderRadius={5} sx={{ background: "white" }}>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
        <Box gridColumn="span 2" alignSelf="flex-end">
          <Typography color="textSecondary">{title}</Typography>
        </Box>
        {viewAll && (
          <Box gridColumn="span 1" alignSelf="flex-end">
            <Link to={`/${path}`}>
              <Typography color="textSecondary" variant="body2">
                View All
              </Typography>
            </Link>
          </Box>
        )}
      </Box>

      <Box height="100%" sx={{ overflow: "scroll" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Scaffold;
