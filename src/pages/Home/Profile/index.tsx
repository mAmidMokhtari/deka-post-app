import React from "react";

import useUser from "hooks/useUser";
import { useTranslation } from "react-i18next";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useStyles } from "./style";
import { useData } from "./useData";

const Profile = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const { handleChangeUsername, username } = useUser();
  const data = useData();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TextField
          label={t("mainLayout.profile.username")}
          value={username}
          onChange={(e) => handleChangeUsername(e.target.value)}
        />
      </div>
      <div className={classes.container}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("mainLayout.profile.language")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id={data.language}
              value={data.language}
              label="Language"
              defaultValue={data.language}
              onChange={data.handleLanguage}
            >
              <MenuItem value="en">{t("mainLayout.profile.english")}</MenuItem>
              <MenuItem value="fa">{t("mainLayout.profile.farsi")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={classes.container}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {t("mainLayout.profile.theme")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.theme}
              label="Theme"
              defaultValue={data.theme}
              onChange={data.handleTheme}
            >
              <MenuItem value="light">{t("mainLayout.profile.light")}</MenuItem>
              <MenuItem value="dark">{t("mainLayout.profile.dark")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={classes.container}>
        <Button onClick={data.saveChangeHandler}>
          {t("mainLayout.profile.save")}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
