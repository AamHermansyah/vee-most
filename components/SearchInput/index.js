"use client";
import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ placeholder, height, width }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "4px 0px 4px 8px",
        display: "flex",
        alignItems: "center",
        width: width,
        border: "2px solid #868686",
        borderRadius: "50px",
        height: height,
        position: "relative",
      }}
      className="shadow-0"
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder={placeholder} />
      <IconButton
        type="div"
        sx={{
          p: "10px",
          backgroundColor: "#868686",
          height: height,
          width: height,
          position: "absolute",
          right: -2,
          top: -2,
        }}
        className="hover:bg-[#868686]"
        aria-label="search"
      >
        <SearchIcon
          sx={{
            color: "#ffffff",
          }}
        />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
