import React, { useState } from "react";

import useTranslate from "hooks/useTranslate";
import useUser from "hooks/useUser";
import { useTranslation } from "react-i18next";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { useStyles } from "./style";
import { useData } from "./useData";

const Profile = () => {
  const { classes } = useStyles();
  const { handleChangeLanguage } = useTranslate();
  const { t } = useTranslation();
  useData();

  const { handleChangeUsername, username } = useUser();

  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("light");

  const handleLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  const handleTheme = (event: SelectChangeEvent) => {
    setTheme(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <TextField
          label="Username"
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
              id="demo-simple-select"
              value={language}
              label="Language"
              defaultValue="English"
              onChange={handleLanguage}
            >
              <MenuItem value={t("mainLayout.profile.english")}>
                <Button
                  onClick={() => {
                    handleChangeLanguage("en");
                  }}
                >
                  {t("mainLayout.profile.english")}
                </Button>
              </MenuItem>
              <MenuItem value={t("mainLayout.profile.farsi")}>
                <Button
                  onClick={() => {
                    handleChangeLanguage("fa");
                  }}
                >
                  {t("mainLayout.profile.farsi")}
                </Button>
              </MenuItem>
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
              value={theme}
              label="Theme"
              defaultValue="light"
              onChange={handleTheme}
            >
              <MenuItem value={t("mainLayout.profile.light")}>
                <Button
                  onClick={() => {
                    ("light");
                  }}
                >
                  {t("mainLayout.profile.light")}
                </Button>
              </MenuItem>
              <MenuItem value={t("mainLayout.profile.dark")}>
                <Button
                  onClick={() => {
                    ("dark");
                  }}
                >
                  {t("mainLayout.profile.dark")}
                </Button>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={classes.container}>
        <Button>{t("mainLayout.profile.save")}</Button>
      </div>
    </div>
  );
};

export default Profile;
