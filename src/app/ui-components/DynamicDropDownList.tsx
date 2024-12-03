import React, { FC, useState, useRef, useEffect } from 'react';
import {
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  useTheme,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './styles.module.css';

type TProps = {
  title: string;
  buttonText: string;
  Icon: React.ReactNode;
  items: string[];
  setItems: (items: string[]) => void;
  options: string[];
};

const DynamicDropdownList: FC<TProps> = ({
  title,
  buttonText,
  Icon,
  items,
  setItems,
  options,
}) => {
  const theme = useTheme();
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const handleAddClick = () => {
    setIsDropdownVisible(true);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    if (value && !items.includes(value)) {
      setItems([...items, value]);
      setIsDropdownVisible(false); // Hide dropdown after selection
    }
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        className={styles['dynamic-input__title']}
      >
        {Icon}
        <Typography variant="h4" sx={{ padding: '4px 8px' }}>
          {title}
        </Typography>
      </Stack>
      <div className={styles['dynamic-input__list']}>
        <List sx={{ padding: 0 }}>
          {items.map((item, index) => (
            <ListItem
              key={index}
              className={styles['dynamic-dropdown__list-item']}
              sx={{
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <ListItemText
                primary={item}
                className={styles['dynamic-input__text']}
                sx={{
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                className={styles['dynamic-input__btn']}
                onClick={() => handleDelete(index)}
              >
                <ClearIcon fontSize="large" />
              </IconButton>
            </ListItem>
          ))}
        </List>

        {isDropdownVisible ? (
          <ListItem
            className={styles['dynamic-dropdown__list-item']}
            sx={{
              backgroundColor: theme.palette.background.paper,
              padding: 0,
            }}
          >
            <Select
              fullWidth
              onChange={handleSelectChange}
              label="Выберите значение"
              className={styles['dynamic-input__text']}
              sx={{
                backgroundColor: theme.palette.background.paper,
              }}
            >
              {options
                .filter(option => !items.includes(option))
                .map(option => (
                  <MenuItem key={option} value={option} className={`${styles['dynamic-dropdown__option']}`}>
                    {<p className="text_overflow_one">{option}</p>}
                  </MenuItem>
                ))}
            </Select>
          </ListItem>
        ) : (
          <Button
            variant="outlined"
            onClick={handleAddClick}
            className={styles['dynamic-input__add-btn']}
            sx={{
              marginTop: items.length > 0 ? '8px' : '0',
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

export default DynamicDropdownList;