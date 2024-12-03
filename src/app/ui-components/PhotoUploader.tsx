import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PhotoModal from "./PhotoModal";

interface Photo {
  id: number;
  url: string;
}

const defaultPreview:Photo = {
  id:NaN,
  url:''
}

const PhotoUploader: React.FC = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [preview, setPreview] = useState<Photo>();

  const onDeleteHandler = () => {
    preview && setPhotos(prev => prev.filter(item => item.id !== preview.id));
    handleCloseModal();
    setPreview(defaultPreview);
  }

  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newPhotos = Array.from(event.target.files).map((file, index) => ({
        id: photos.length + index,
        url: URL.createObjectURL(file),
      }));
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    }
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding:"4px 4px 20px 4px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {photos.map((photo, index) => (
          <Box
            key={index}
            sx={{
              width: "110px",
              height: "110px",
              overflow: "hidden",
            }}
            onClick={()=>{setPreview(photo);handleOpenModal()}}
          >
            <img
              src={photo.url}
              alt={`Фотография ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            />
          </Box>
        ))}
        <Button
          variant="outlined"
          component="label"
          sx={{
            borderRadius: "6px",
            width: "80px",
            height: "80px",
            margin: "15px"
          }}
        >
          <AddIcon fontSize="large" />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleAddPhoto}
            hidden
          />
        </Button>
      </Box>
      <PhotoModal
        open={modalOpen}
        onClose={handleCloseModal}
        onDelete={onDeleteHandler}
        imageUrl={preview ? preview.url : ''} // Замените на URL вашего изображения
      />
    </Box>
  );
};

export default PhotoUploader;
