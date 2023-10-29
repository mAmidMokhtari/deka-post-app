import { useTranslation } from "react-i18next";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Card, IconButton, TextField, Typography } from "@mui/material";

import { useStyles } from "./style";
import { useData } from "./useData";

const Todo = () => {
  const data = useData();
  const { t } = useTranslation();
  const { classes } = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <div className={classes.title}>
        <Typography variant="h1" textAlign="center">
          {t("mainLayout.todo.todo list")}
        </Typography>
        {!data.isAddTodo ? (
          <AddCircleOutlineIcon
            color="success"
            onClick={() => data.setIsAddTodo(true)}
          />
        ) : (
          <RemoveCircleOutlineIcon
            color="error"
            onClick={data.handleCancelAdd}
          />
        )}
      </div>
      <div className={classes.container}>
        {data.todo.map((item, index) => (
          <div className={classes.item}>
            {item.id === data.selectedTodoId ? (
              <TextField
                label="edit"
                onChange={data.editTodoChangeHandler}
                value={data.selectedTodoValue}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  data.handleEdit(data.selectedTodoId, data.selectedTodoValue)
                }
                className={classes.input}
              />
            ) : (
              <Typography variant="h3">
                {item.title} #{index + 1}
              </Typography>
            )}
            <div className={classes.actions}>
              {item.id === data.selectedTodoId ? (
                <IconButton onClick={data.handleCancelEdit}>
                  <EditOffIcon color="info" />
                </IconButton>
              ) : (
                <IconButton onClick={() => data.handleEditItem(item)}>
                  <EditIcon color="info" />
                </IconButton>
              )}
              <IconButton onClick={() => data.handleRemove(item.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </div>
          </div>
        ))}
        {data.isAddTodo && (
          <TextField
            label="todo"
            onChange={data.newTodoChangeHandler}
            value={data.newTodo}
            onKeyDown={(e) => e.key === "Enter" && data.handleAdd(data.newTodo)}
            className={classes.input}
          />
        )}
      </div>
    </Card>
  );
};

export default Todo;
