"use client";
import React, { useState } from "react";
import MultipleImageInput from "./MultipleImageInput";
// import "./App.css";

const MultipleImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [icons, setSelectedIcons] = useState<string[]>([]);

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray: string[] = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages: string[]) =>
      previousImages.concat(imagesArray)
    );

    // FOR BUG IN CHROME
    if (event.target) {
      (event.target as HTMLInputElement).value = "";
    }
  };
  const onIconSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray: string[] = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedIcons((previousImages: string[]) =>
      previousImages.concat(imagesArray)
    );

    // FOR BUG IN CHROME
    if (event.target) {
      (event.target as HTMLInputElement).value = "";
    }
  };

  return (
    <div>
      <MultipleImageInput
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        onChange={onSelectFile}
      />
      <MultipleImageInput
        selectedImages={icons}
        setSelectedImages={setSelectedIcons}
        onChange={onIconSelectFile}
      />
    </div>
  );
};

export default MultipleImageUpload;
