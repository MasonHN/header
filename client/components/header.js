import React from "react";
import InfoBar from "./info_bar.js";

const Header = props => {
  return (
    <div>
      <InfoBar productInfo={props.productInfo} updateUuid={props.updateUuid} />
    </div>
  );
};

export default Header;
