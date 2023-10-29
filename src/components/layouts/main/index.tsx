import { FC, memo, ReactNode, useState } from "react";

import Drawer from "./Drawer";
import ListItems from "./ListItems";
import { useStyles } from "./style";

interface IDashboardProps {
  children: ReactNode;
}

const MainLayout: FC<IDashboardProps> = ({ children }) => {
  const { classes } = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.root}>
      <Drawer open={open} onToggle={() => setOpen(!open)}>
        <ListItems isClose={!open} />
      </Drawer>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default memo(MainLayout);
