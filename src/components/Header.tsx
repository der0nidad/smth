import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

type Props = {
  pageTitle: string;
};
const Header: React.FC<Props> = ({ pageTitle }) => {
  // TODO добавить стили
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
