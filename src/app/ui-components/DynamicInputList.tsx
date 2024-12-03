import React, { FC, ReactNode, useState } from "react";
import {
  Button,
  Stack,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./styles.module.css";
import DoneIcon from "@mui/icons-material/Done";

type TProps = {
  title: string;
  buttonText: string;
  Icon:ReactNode;
  items: string[];
  setItems: (items:string[]) => void;
};

const DynamicInputList: FC<TProps> = ({
  title,
  buttonText,
  Icon,
  items,
  setItems
}) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddClick = () => {
    setIsInputVisible(true);
    setEditIndex(null);
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleConfirmClick = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editIndex] = inputValue;
        setItems(updatedItems);
      } else {
        setItems([...items, inputValue]);
      }
      setInputValue("");
    }
    setIsInputVisible(false);
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setInputValue("");
    setIsInputVisible(false);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setInputValue(items[index]);
    setIsInputVisible(true);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        className={styles["dynamic-input__title"]}
      >
        {Icon}
        <Typography
          variant="h4"
          sx={{ padding: "4px 8px" }}
        >
          {title}
        </Typography>
      </Stack>
      <div className={styles["dynamic-input__list"]}>
        <List sx={{ padding: 0 }}>
          {items.map((item, index) => (
            <ListItem
              key={index}
              className={styles["dynamic-input__list-item"]}
              sx={{
                backgroundColor: theme.palette.background.paper,
              }}
            >
              {editIndex === index ? (
                <>
                  <TextField
                    fullWidth
                    multiline
                    value={inputValue}
                    onChange={handleInputChange}
                    className={styles["dynamic-input__text"]}
                    label="Введите значение"
                    sx={{
                      backgroundColor: theme.palette.background.paper,
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  />
                  <Stack
                    direction="row"
                    className={styles["dynamic-input__btns"]}
                  >
                    <IconButton
                      edge="end"
                      aria-label="confirm"
                      className={styles["dynamic-input__btn"]}
                      onClick={handleConfirmClick}
                    >
                      <DoneIcon fontSize="large" />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="cancel"
                      className={styles["dynamic-input__btn"]}
                      onClick={handleCancelClick}
                    >
                      <ClearIcon fontSize="large" />
                    </IconButton>
                  </Stack>
                </>
              ) : (
                <>
                  <ListItemText
                    primary={item}
                    className={styles["dynamic-input__text"]}
                    sx={{
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  />
                  <Stack
                    direction="row"
                    className={styles["dynamic-input__btns"]}
                  >
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      className={styles["dynamic-input__btn"]}
                      onClick={() => handleEdit(index)}
                    >
                      <EditIcon fontSize="medium" />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      className={styles["dynamic-input__btn"]}
                      onClick={() => handleDelete(index)}
                    >
                      <ClearIcon fontSize="large" />
                    </IconButton>
                  </Stack>
                </>
              )}
            </ListItem>
          ))}
        </List>

        {isInputVisible && editIndex === null && (
          <ListItem
            className={styles["dynamic-input__list-item"]}
            sx={{
              backgroundColor: theme.palette.background.paper,
              padding: 0,
            }}
          >
            <TextField
              fullWidth
              multiline
              value={inputValue}
              onChange={handleInputChange}
              label="Введите значение"
              className={styles["dynamic-input__text"]}
              sx={{
                backgroundColor: theme.palette.background.paper,
              }}
            />
            <Stack direction="row" className={styles["dynamic-input__btns"]}>
              <IconButton
                edge="end"
                aria-label="confirm"
                className={styles["dynamic-input__btn"]}
                onClick={handleConfirmClick}
              >
                <DoneIcon fontSize="large" />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="cancel"
                className={styles["dynamic-input__btn"]}
                onClick={handleCancelClick}
              >
                <ClearIcon fontSize="large" />
              </IconButton>
            </Stack>
          </ListItem>
        )}

        {!isInputVisible && (
          <Button
            variant="outlined"
            onClick={handleAddClick}
            className={styles["dynamic-input__add-btn"]}
            sx={{
              marginTop: items.length > 0 ? "8px" : "0",
            }}
          >
            <AddIcon fontSize="medium" />
            {buttonText}
          </Button>
        )}
      </div>
    </>
  );
};

export default DynamicInputList;
