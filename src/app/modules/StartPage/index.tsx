import React, { FC } from "react";
import { Box } from "@mui/material";
import { List, useTheme } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import MenuItem, { MenuItemProps } from "../../ui-components/MenuItem";
import styles from "./styles.module.css";

import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuildIcon from "@mui/icons-material/Build";
import Task from "../../ui-components/Task";
import { TTaskProps } from "../../ui-components/Task";

const menuItems: MenuItemProps[] = [
  {
    link: "/new",
    label: "Новые заявки",
    icon: NotificationsIcon,
    qty: 3
  },
  {
    link: "/completed",
    label: "Выполненные заявки",
    icon: CheckCircleIcon,
    qty: 1
  },
  {
    link: "/materials",
    label: "Материалы",
    icon: BuildIcon,
  },
];

const currentTasks: TTaskProps[] = [
  {
    id: 12,
    created_at: "10:41",
    place: "В41",
    description:"Описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки"
  },
  {
    id: 123,
    created_at: "11:12",
    place: "C2",
    description:"описание заявки описание заявки"
  }
]

const StartPage: FC = () => {

  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="start"
    >
      <h2 className={styles["start__title"]}>Профиль сотрудника:</h2>
      <span className={styles["start__title"]}>Имя Фамилия</span>

      <List component="nav" className={styles["start__list"]}>
        {menuItems.map((el, index) => (
          <ListItem key={index} className={styles["start__el"]}>
            <MenuItem item={el} />
          </ListItem>
        ))}
      </List>

      <span className={styles["start__title"]}>Текущие заявки</span>
      <List component="nav" className={styles["start__list"]}>
        {currentTasks.map((el, index) => (
          <ListItem key={index} className={styles["start__task"]} style={{ borderBottom:`2px solid ${theme.palette.background.default}` }}>
            <Task item={el}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StartPage;
