import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import Search from "../components/search_bar";
import "../styles/info_bar_styles.css";

const InfoBar = props => {
  return (
    <div>
      <img className="logo" id="hiddenLogo" src={require("../logo.png")} />
      <AppBar color="white" position="static">
        <Toolbar>
          <img className="logo" src={require("../logo.png")} />
          <div id="searchDiv">
            <Search
              productInfo={props.productInfo}
              updateUuid={props.updateUuid}
            />
          </div>
          <div id="searchIconDiv">
            <SearchIcon style={{ color: "white", marginLeft: "35px" }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default InfoBar;
