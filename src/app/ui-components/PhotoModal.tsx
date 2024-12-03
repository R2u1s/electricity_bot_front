import React, { useEffect } from "react";
import { Modal, IconButton, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface PhotoModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void; // Колбэк для удаления фотографии
  imageUrl: string;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  open,
  onClose,
  onDelete,
  imageUrl,
}) => {
  const theme = useTheme();

  //////Реализация предотвращения перехода на предыдущую страницу по кнопке назад
  //вместо перехода закрываем модальное окно
  let previousUrl: string | null = null;

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (open) {
        window.history.pushState(null, "", window.location.href);
        onClose();
      }
    };

    if (open) {
      // Сохраняем текущий URL
      previousUrl = document.referrer;

      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      if (open) {
        window.history.back();
        window.removeEventListener("popstate", handlePopState);

        // Восстановление предыдущего URL
        if (previousUrl) {
          window.history.replaceState(null, "", previousUrl);
        }
      }
    };
  }, [open, onClose]);
  ///////////////////////////////////////////////////////////////////////////////

  // Обработчик клика для закрытия модального окна
  const handleClose = () => {
    onClose();
  };

  const handleDelete = () => {
    onDelete(); // Вызов колбэка удаления
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClose}
    >
      {/* Контейнер для изображения и иконки удаления */}
      <div
        style={{ position: "relative", maxWidth: "390px", maxHeight: "100%" }}
      >
        {/* Иконка удаления */}
        <IconButton
          style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
          onClick={(e) => {
            e.stopPropagation(); // Предотвращаем закрытие модального окна
            handleDelete();
          }}
        >
          <DeleteIcon
            fontSize="large"
            sx={{ color: theme.palette.grey[100] }}
          />
        </IconButton>

        {/* Изображение */}
        <img
          src={imageUrl}
          alt="Preview"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "8px",
          }}
        />
      </div>
    </Modal>
  );
};

export default PhotoModal;
