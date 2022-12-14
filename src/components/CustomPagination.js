import { createTheme, ThemeProvider } from "@material-ui/core";
import { Pagination } from "@mui/material";
import React from "react";
const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numberOfPages}
          // hideNextButton
          // hidePrevButton
          color="primary"
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
