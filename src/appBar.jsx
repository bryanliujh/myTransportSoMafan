import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { sendLog } from "./utils";
import { debounce } from "lodash";
import ClearIcon from "@mui/icons-material/Clear";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ pageTitle }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#FCDC2A", borderColor: "#FCDC2A" }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <IconButton
            onClick={debounce(async () => {
              await sendLog({ target_type: "x_button" });
            }, 500)}
          >
            <ClearIcon style={{ color: "black", height: 30, width: 30 }} />
          </IconButton>

          <div
            style={{
              backgroundColor: "#FCDC2A",
              height: 40,
              fontSize: 16,
              color: "black",
              fontWeight: "bolder",
              alignContent: "center",
            }}
          >
            {pageTitle}
          </div>
          <IconButton
            onClick={() =>
              navigate({
                pathname: "/search-arrival",
                search: window.location.search,
              })
            }
          >
            <InfoIcon style={{ color: "black", height: 30, width: 30 }} />
          </IconButton>
        </div>
        <Toolbar style={{ backgroundColor: "#FCDC2A", borderColor: "#FCDC2A" }}>
          <Search style={{ flex: 1, borderRadius: 8 }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "grey" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
