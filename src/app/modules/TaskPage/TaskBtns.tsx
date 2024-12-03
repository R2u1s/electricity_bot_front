import React, { FC, useState, useCallback, ReactNode } from "react";
import {
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import styles from "./styles.module.css";
import useUserContext from "../../hooks/useUserContext";
import { TTask } from "types/common";

type TProps = {
  task: TTask
}

const TaskBtns: FC<TProps> = ({task}) => {

  const theme = useTheme();

  const { confirmTask, declineTask } = useUserContext();

  return (
    <>
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
    </>
  );
};

export default TaskBtns;
