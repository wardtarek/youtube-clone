import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          style={{
            backgroundColor: category.name === selectedCategory && "#FC1503",
            color: "#fff",
            
          }}
          key={category.name}
        >
            <span
              style={{
                color: category.name === selectedCategory ? "#fff" : "red",
                marginRight: "10px",
                display: "flex",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
