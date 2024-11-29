import { FC } from "react";
import {
  ListItemIcon,
  ListItemText,
  Typography,
  SvgIconTypeMap,
  ListItemButton,
  useTheme,
  List,
  Stack,
} from "@mui/material";
import styles from "./styles.module.css";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export type MenuItemProps = {
  icon?: OverridableComponent<SvgIconTypeMap<any, "svg">> & { muiName: string };
  label?: string;
  link?: string;
  action?: () => void;
  qty?: number;
};

type Props = {
  item: MenuItemProps;
};

const MenuItem: FC<Props> = ({ item }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSelected = false;
  const ItemIcon = item.icon || InsertDriveFileIcon;

  const ItemText = (
    <Typography variant={isSelected ? "h5" : "body1"} color="inherit">
      {item.label || " "}
    </Typography>
  );

  const onClick = () => {
    if (item.link) {
      setTimeout(() => {
        navigate(item.link!);
      }, 150);
    } else if (item.action) {
      item.action();
    } else {
      console.log("MenuItem has no link or action");
    }
  };

  return (
    <ListItemButton
      onClick={onClick}
      className={styles["listItemButton"]}
      selected={isSelected}
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
          "&:hover": { backgroundColor: theme.palette.grey[900] },
          "& .MuiListItemIcon-root": { color: theme.palette.text.primary },
        },
        "&:hover": {
          backgroundColor: theme.palette.grey[400],
          color: theme.palette.text.primary,
          "& .MuiListItemIcon-root": { color: theme.palette.text.primary },
        },
      }}
    >
      <ListItemIcon className={styles["listItemIcon"]}>
        <ItemIcon fontSize="medium" />
      </ListItemIcon>
      <ListItemText primary={ItemText} style={{ flexGrow: "1" }} />
      <Stack
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        {item.qty && (
          <ListItemText
            secondary={item.qty}
            secondaryTypographyProps={{ fontWeight: 'bold', fontSize: '16px' }}
          />
        )}
        <ListItemIcon className={styles["listItemIcon"]}>
          <KeyboardArrowRightIcon fontSize="medium" />
        </ListItemIcon>
      </Stack>
    </ListItemButton>
  );
};

export default MenuItem;
