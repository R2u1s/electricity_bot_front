import { useState } from "react";
import styles from "./styles.module.css";
import { Stack, Typography, TextField, useTheme } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import PhotoUploader from "@ui-components/PhotoUploader";

function Photo() {

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        className={styles["task__additional"]}
      >
        <CommentIcon fontSize="small" />
        <Typography variant="h4" sx={{ padding: "4px 8px" }}>
          Фото
        </Typography>
      </Stack>
      <PhotoUploader />
    </>
  );
}

export default Photo;
