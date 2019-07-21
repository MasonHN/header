import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ProductMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          color: "white",
          fontSize: "10px",
          padding: "0px",
          margin: "0px",
          width: "max-content"
        }}
      >
        {props.title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.choices.map(choice => (
          <MenuItem style={{ padding: "5px" }} onClick={handleClose}>
            {choice}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ProductMenu;
