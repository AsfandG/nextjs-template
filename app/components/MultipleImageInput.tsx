import React from "react";

type Props = {
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MultipleImageInput = ({
  selectedImages,
  setSelectedImages,
  onChange,
}: Props) => {
  function deleteHandler(image: string) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  return (
    <section>
      <label>
        <div className="browse-text">Browse</div>
        <div className="choose-file-text">
          {selectedImages.length > 0 ? (
            <div>{`${selectedImages.length} ${
              selectedImages.length === 1 ? "File" : "Files"
            } Selected`}</div>
          ) : (
            "Choose File"
          )}
        </div>

        <input
          type="file"
          name="images"
          onChange={onChange}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>

      {/* <input type="file" multiple /> */}

      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGE
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image ">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default MultipleImageInput;
