import { useState } from "react";
import styles from "./styles.module.css";
import { Stack, Typography, TextField, useTheme } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

function Comment() {
  const [comment, setComment] = useState<string>("");

  const theme = useTheme();

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        className={styles["task__additional"]}
      >
        <CommentIcon fontSize="small" />
        <Typography
          variant="h4"
          sx={{ padding: "4px 8px" }}
        >
          Комментарий
        </Typography>
      </Stack>
      <TextField
        fullWidth
        multiline
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        label="Введите значение"
        className={styles["dynamic-input__text"]}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
      />
    </>
  );
}

export default Comment;
