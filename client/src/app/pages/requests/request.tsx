import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components";

interface RequestProps {}

const Request: React.FC<RequestProps> = () => {
  const { id } = useParams<Record<"*" | "id", string>>();

  return (
    <Box p={2}>
      <Header back title={`#${id}`} subtitle="Loan Request Details" />
    </Box>
  );
};

export default Request;
