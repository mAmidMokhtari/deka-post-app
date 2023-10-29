import React, { FC, useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton, Snackbar } from "@mui/material";

// local
import Context from "./context";

const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string | null>("");
  const [openNotification, setOpenNotification] = useState(false);

  const handleChangeUsername = (username: string) => {
    setUsername(username);
    window.localStorage.setItem("username", username);
  };

  const handleOpenNotification = () => setOpenNotification(true);
  const handleCloseNotification = () => setOpenNotification(false);

  useEffect(() => {
    const username = window.localStorage.getItem("username");
    if (username) return setUsername(username);
    return handleOpenNotification();
  }, []);

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseNotification}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const renderNoUsername = () => {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openNotification}
        autoHideDuration={4000}
        onClose={handleCloseNotification}
        action={action}
      >
        <Alert
          onClose={handleCloseNotification}
          severity="warning"
          sx={{ width: "100%" }}
        >
          This is a warning message!
        </Alert>
      </Snackbar>
    );
  };

  return (
    <Context.Provider
      value={{
        username,
        handleChangeUsername,
      }}
    >
      {children}
      {renderNoUsername()}
    </Context.Provider>
  );
};

export default UserProvider;
