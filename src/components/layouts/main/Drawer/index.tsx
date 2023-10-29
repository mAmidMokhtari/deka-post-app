import { FC } from "react";

// icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
// mui
import { Drawer as MuiDrawer, IconButton, Toolbar } from "@mui/material";

// locals
import { useStyles } from "./style";

export interface IDrawer {
  open: boolean;
  children: React.ReactNode;
  onToggle: () => void;
}

const Drawer: FC<IDrawer> = ({ open = true, children, onToggle }) => {
  const { classes } = useStyles();

  return (
    <>
      <Toolbar
        classes={{
          root: !open ? classes.toolbarMobile : classes.toolbarMobileOpen,
        }}
      >
        <IconButton onClick={onToggle}>
          <MenuIcon color="inherit" />
        </IconButton>
      </Toolbar>
      <MuiDrawer
        variant="permanent"
        classes={{
          root: [
            classes.root,
            open ? classes.openRoot : classes.closeRoot,
          ].join(" "),
          paper: [
            classes.paper,
            open ? classes.openPaper : classes.closePaper,
          ].join(" "),
        }}
      >
        <Toolbar classes={{ root: classes.toolbar }}>
          <IconButton onClick={onToggle}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        {children}
      </MuiDrawer>
    </>
  );
};

export default Drawer;
