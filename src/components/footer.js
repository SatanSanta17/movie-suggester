import "./css/footer.css";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import TvIcon from "@mui/icons-material/Tv";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/trending");
    else if (value === 2) navigate("/movies");
    else if (value === 3) navigate("/tv-shows");
    else if (value === 4) navigate("/search");
  }, [value, navigate]);
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="footer-navigator"
      >
        <BottomNavigationAction
          className="Link"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          className="Link"
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          className="Link"
          label="Movies"
          icon={<MovieCreationIcon />}
        />
        <BottomNavigationAction
          className="Link"
          label="TV Shows"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          className="Link"
          label="Search"
          icon={<ManageSearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
