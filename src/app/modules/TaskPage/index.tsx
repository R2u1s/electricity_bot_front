import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  useTheme
} from "@mui/material";
import styles from "./styles.module.css";
import useUserContext from "../../hooks/useUserContext";
import DynamicInputList from "@ui-components/DynamicInputList";
import Comment from "./Comment";
import Photo from "./Photo";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import DynamicDropdownList from "@ui-components/DynamicDropDownList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TaskDescription from "./TaskDescription";
import { TaskType, TTask } from "types/common";
import TaskBtns from "./TaskBtns";
import BackBtn from "@ui-components/telegram/BackButton";

const task: TTask = {
  id: 123,
  created_at: "11:12 сегодня",
  place: "C21",
  description:
    "описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки описание заявки",
  materials: "описание материалов описание материалов описание материалов",
  status: TaskType.inprogress,
};

const collegues = [
  "Электрик1",
  "Электрик2",
  "Электрик3",
  "Электрикwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww3",
  "Электрик4",
];

const TaskPage: FC = () => {

  const theme = useTheme();

  const navigate = useNavigate();
  useEffect(() => {
    BackBtn(`/${TaskType.new}`, navigate);
  }, []);

  const [materials, setMaterials] = useState<string[]>([]);
  const [purchased, setPurchased] = useState<string[]>([]);
  const [collChosen, setCollChosen] = useState<string[]>([]);

  return (
    <>
      <Box className={`${styles["task__content"]} right`}>
        <TaskDescription task={task} />

        <DynamicInputList
          title={"Материалы со склада"}
          buttonText={"Добавить материал со склада"}
          Icon={<WarehouseIcon fontSize="small" />}
          items={materials}
          setItems={setMaterials}
        />

        <DynamicInputList
          title={"Покупные материалы"}
          buttonText={"Добавить покупной материал"}
          Icon={<CurrencyRubleIcon fontSize="small" />}
          items={purchased}
          setItems={setPurchased}
        />

        <DynamicDropdownList
          title={"Выполнена совместно"}
          buttonText={"Добавить имя сотрудника"}
          Icon={<PersonAddIcon fontSize="small" />}
          items={collChosen}
          setItems={setCollChosen}
          options={collegues}
        />

        <Comment />

        <Photo />

        <TaskBtns task={task} />
      </Box>
    </>
  );
};

export default TaskPage;
