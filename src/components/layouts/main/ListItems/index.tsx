import { FC } from "react";

// mui
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { useStyles } from "./style";
import { useData } from "./useData";

interface IListItems {
  isClose: boolean;
}

const ListItems: FC<IListItems> = ({ isClose }) => {
  const { classes } = useStyles({ isClose });
  const data = useData();

  const recievedMenuItems = data.menuItems.map((item) => ({
    id: item.name,
    caption: item.name,
    name: item.name,
    icon: item.icon,
    path: item.path,
  }));

  const menuItems = [...recievedMenuItems];

  return (
    <div className={classes.root}>
      <Divider />
      {menuItems.map((item, index) => {
        return (
          <span key={item.id}>
            <ListItem
              classes={{ root: classes.listItem }}
              onClick={() => data.navigateToPage(item.path)}
            >
              <div className={classes.itemIcon}>{item.icon}</div>
              <ListItemText
                className={classes.itemText}
                primary={item.caption}
              />
            </ListItem>
            <Divider />
          </span>
        );
      })}
    </div>
  );
};

export default ListItems;
