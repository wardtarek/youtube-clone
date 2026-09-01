import { Stack } from "@mui/material";
import React, { useContext } from "react";
import { categories } from "../../utils/constants";
import { darkContext } from "../../context/DarkModeContext";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const { darkModeValue } = useContext(darkContext);
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
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
            color: `${darkModeValue ? "#fff" : "#000"}`,
            width:"100%"
          }}
          key={category.name}
        >
          <span
            style={{
              color:
                category.name === selectedCategory
                  ? `${darkModeValue ? "#fff" : "#000"}`
                  : "red",
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
