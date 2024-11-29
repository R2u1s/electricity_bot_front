import React, { FC, useEffect, useState } from "react";
import { Box, List, ListItem, useTheme } from "@mui/material";
import Task, { TTaskProps } from "../../ui-components/Task";
import { TaskType } from '../../_types/common';

import styles from "./styles.module.css";

const newTasks: TTaskProps[] = [
  {
    id: 12,
    created_at: "10:41",
    place: "В41",
    description:
      "Описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки",
  },
  {
    id: 123,
    created_at: "11:12",
    place: "C21",
    description: "описание заявки описание заявки",
  },
  {
    id: 41,
    created_at: "09:34",
    place: "A4",
    description:
      "описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки",
  },
  {
    id: 2,
    created_at: "16:01",
    place: "F16",
    description:
      "описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки",
  },
];

const completedTasks: TTaskProps[] = [
  {
    id: 3,
    created_at: "08:30",
    place: "Г13",
    description: "Описание заявки",
  },
];

enum Title {
  new = 'Новые заявки:',
  completed = 'Выполненные заявки:'
}

const New: FC = () => {
  const theme = useTheme();

  //для страниц новых и завершенных заявок используем один компонент
  //поэтому здесь опеределяем какой из списков выводить на основе url
  const [arrayOfTasks, setArrayOfTasks] = useState<TTaskProps[] | undefined>(
    []
  );

  const lastPart = window.location.pathname.split("/").pop();

  useEffect(() => {
    if (lastPart === TaskType.new) {
      setArrayOfTasks(newTasks);
    } else if (lastPart === TaskType.completed) {
      setArrayOfTasks(completedTasks);
    }
  }, [lastPart]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
      className="right"
    >
      <h2 className={styles["start__title"]}>
        {lastPart === TaskType.new && Title.new}
        {lastPart === TaskType.completed && Title.completed}
      </h2>

      <List component="nav" className={styles["start__list"]}>
        {arrayOfTasks &&
          arrayOfTasks.length > 0 &&
          arrayOfTasks.map((el, index) => (
            <ListItem
              key={index}
              className={styles["start__task"]}
              style={{
                borderBottom: `2px solid ${theme.palette.background.default}`,
              }}
            >
              <Task item={el} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default New;
