import React, { FC, useState, useCallback, ReactNode } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import styles from "./styles.module.css";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import BuildIcon from "@mui/icons-material/Build";
import useUserContext from "../../hooks/useUserContext";

enum ButtonType {
  accept = "accept",
  decline = "decline",
}

const task = {
  id: 123,
  created_at: "11:12 сегодня",
  place: "C21",
  description: "описание заявки описание заявки",
  materials: "описание материалов",
};

const TaskPage: FC = () => {
  const theme = useTheme();

  const { confirmTask, declineTask } = useUserContext();

  return (
    <>
      <Box className={`${styles["task__content"]} right`}>
        <Stack className={styles["task__title"]}>
          <Typography
            variant="h2"
            style={{ minWidth: "100px", maxWidth: "100px" }}
            className="text_overflow_one"
          >
            №{task.id}
          </Typography>
          <Typography
            variant="h4"
            style={{
              flexGrow: "1",
              marginLeft: "0",
              maxHeight: "38px",
              maxWidth: "150px",
            }}
            className="text_overflow_two"
          >
            Павильон: {task.place}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          className={styles["task__time"]}
          sx={{
            margin: "8px 0",
            color: theme.palette.text.secondary,
          }}
        >
          {task.created_at}
        </Typography>
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
            onClick={()=>{declineTask(`Укажите причину отклонения заявки №${task.id}:`)}}
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
            onClick={()=>{confirmTask(`Уверены, что хотите взять заявку №${task.id} в работу?`)}}
          >
            Принять
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default TaskPage;
