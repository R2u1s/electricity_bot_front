import { FC, useState, useCallback, ReactNode } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import styles from "./styles.module.css";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import BuildIcon from "@mui/icons-material/Build";
import { TTask,TaskType } from "types/common";

type TProps = {
  task: TTask;
};

const TaskDescription: FC<TProps> = ({ task }) => {
  const theme = useTheme();

    //Определение цвета статуса в зависимости от значения
    const mapping = {
      [TaskType.new]: theme.palette.text.primary,
      [TaskType.completed]: theme.palette.success.dark,
      [TaskType.rejected]: theme.palette.error.dark,
      [TaskType.inprogress]: theme.palette.common.blue,
    };
  
    const colorStatus = mapping[task.status] || theme.palette.text.primary;

  return (
    <>
      <Stack className={styles["task__line"]}>
        <Typography
          variant="h2"
          style={{ minWidth: "100px", maxWidth: "100px" }}
          className="text_overflow_one"
        >
          №{task.id}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          Павильон:{" "}
          <span
            className={`text_size_medium text_weight_bold`}
            style={{ color: theme.palette.text.primary }}
          >
            {task.place}
          </span>
        </Typography>
      </Stack>
      <Stack className={styles["task__line"]}>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          Статус:{" "}
          <span
            className={`text_size_medium text_weight_bold`}
            style={{ color: colorStatus }}
          >
            {task.status}
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {task.created_at}
        </Typography>
      </Stack>
      <Box
        className={styles["task__description"]}
        sx={{
          "&": {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Stack direction="row" alignItems="center">
          <NotificationImportantIcon fontSize="small" />
          <Typography variant="h4" sx={{ padding: "4px 8px" }}>
            Проблема
          </Typography>
        </Stack>

        <Typography variant="body1">{task.description}</Typography>
      </Box>
      <Box
        className={styles["task__description"]}
        sx={{
          "&": {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Stack direction="row" alignItems={"center"}>
          <BuildIcon fontSize="small" />
          <Typography variant="h4" sx={{ padding: "4px 8px" }}>
            Материалы
          </Typography>
        </Stack>

        <Typography variant="body1">{task.materials}</Typography>
      </Box>
    </>
  );
};

export default TaskDescription;
