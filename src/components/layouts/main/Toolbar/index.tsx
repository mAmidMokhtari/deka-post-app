import { FC } from "react";

// mui
import MuiDrawer from "@mui/material/Drawer";

// locals
import { useStyles } from "./style";

export interface IToolbar {
  open: boolean;
  children: React.ReactNode;
}

const Toolbar: FC<IToolbar> = ({ open, children }) => {
  const { classes } = useStyles();

  return (
    <MuiDrawer
      variant="permanent"
      classes={{
        root: [open ? classes.root : classes.closeRoot].join(" "),
        paper: [
          classes.paper,
          open ? classes.openPaper : classes.closePaper,
        ].join(" "),
      }}
    >
      {children}
    </MuiDrawer>
  );
};

export default Toolbar;
