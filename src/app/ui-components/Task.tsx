import React, { FC } from "react";
import {
  Box,
  Stack,
  Typography,
  useTheme,
  ListItemButton,
} from "@mui/material";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export type TTaskProps = {
  id: number;
  created_at: string;
  place: string;
  description: string;
};

type Props = {
  item: any;
};

const Task: FC<Props> = ({ item }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onClick = () => {
    if (item.id) navigate(`/task/${item.id}`);
    else if (item.action) item.action();
    else console.log("MenuItem has no link or action");
  };

  return (
    <ListItemButton
      onClick={onClick}
      className={`${styles["task"]}`}
      disableGutters
      sx={{
        color: theme.palette.text.primary,
        "&": {
          backgroundColor: theme.palette.background.paper,
        },
        "&.Mui-selected": {
          cursor: "default",
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.light,
          "&:hover": { backgroundColor: theme.palette.primary.light },
          "& .MuiListItemIcon-root": { color: theme.palette.text.primary },
        },
        "&:hover": {
          backgroundColor: theme.palette.grey[400],
          color: theme.palette.text.primary,
          "& .MuiListItemIcon-root": { color: theme.palette.text.primary },
        }
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="stretch"
        justifyContent="flex-start"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="stretch"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Typography
            variant="h4"
            style={{ minWidth: "100px", maxWidth: "100px" }}
            className="text_overflow_one"
          >
            №{item.id}
          </Typography>
          <Typography
            variant="h5"
            style={{
              flexGrow: "1",
              marginLeft: "0",
              maxHeight: "38px",
              maxWidth: "110px",
            }}
            className="text_overflow_two"
          >
            Павильон: {item.place}
          </Typography>
          <Typography variant="caption" style={{ marginLeft: "0" }}>
            {item.created_at}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          className="text_overflow_three"
          sx={{
            color: theme.palette.text.primary,
            "&": {
              marginTop: "6px !important",
              maxHeight: "60px",
              width: "100%",
              backgroundColor: "inherit",
              borderRadius: "8px",
            },
          }}
        >
          {item.description}
        </Typography>
      </Stack>
    </ListItemButton>
  );
};

export default Task;
