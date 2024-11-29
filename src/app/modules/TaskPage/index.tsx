import React, { FC, useState, useCallback, ReactNode } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import styles from "./styles.module.css";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import BuildIcon from "@mui/icons-material/Build";
import useUserContext from "../../hooks/useUserContext";

enum TaskType {
  new = "Новая",
  completed = "Выполнена",
  rejected = "Отклонена",
}

const task = {
  id: 123,
  created_at: "11:12 сегодня",
  place: "C21",
  description: "описание заявки описание заявки",
  materials: "описание материалов",
  status: TaskType.rejected
};

const TaskPage: FC = () => {
  const theme = useTheme();

  const { confirmTask, declineTask } = useUserContext();

  //Определение цвета статуса в зависимости от значения
  const mapping = {
    [TaskType.new]: theme.palette.text.primary,
    [TaskType.completed]: theme.palette.success.dark,
    [TaskType.rejected]: theme.palette.error.dark,
  };

  const colorStatus = mapping[task.status] || theme.palette.text.primary;

  return (
    <>
      <Box className={`${styles["task__content"]} right`}>
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
            Павильон: <span className={`text_size_medium text_weight_bold`} style={{ color: theme.palette.text.primary }}>{task.place}</span>
          </Typography>
        </Stack>
        <Stack className={styles["task__line"]}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Статус: <span className={`text_size_medium text_weight_bold`} style={{ color: colorStatus }}>{task.status}</span>
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
            <Typography variant="h5" sx={{ padding: "4px 8px" }}>
              Проблема
            </Typography>
          </Stack>

          <Typography variant="body1">
            Описание проблемы описание проблемы описание проблемы описание
            проблемы описание проблемы описание проблемы описание проблемы
            описание проблемы описание проблемы описание проблемы
          </Typography>
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
            <Typography variant="h5" sx={{ padding: "4px 8px" }}>
              Материалы
            </Typography>
          </Stack>

          <Typography variant="body1">
            Описание материалов описание материалов описание материалов
          </Typography>
        </Box>
        <Stack
          direction="row"
          padding="12px 0"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          gap="8px"
        >
          <Button
            variant="contained"
            size="large"
            className={styles["task__button"]}
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.paper,
            }}
            onClick={() => {
              declineTask(`Укажите причину отклонения заявки №${task.id}:`);
            }}
          >
            Отклонить
          </Button>
          <Button
            variant="contained"
            size="large"
            className={styles["task__button"]}
            sx={{
              backgroundColor: theme.palette.common.blue,
            }}
            onClick={() => {
              confirmTask(
                `Уверены, что хотите взять заявку №${task.id} в работу?`
              );
            }}
          >
            Принять
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default TaskPage;
