"use client";
import React, { useEffect, useState } from "react";
import "./metainput.css";

interface MetaDataItem {
  page: string;
  start_time: string;
}

const MetaInputs = () => {
  const [metaData, setMetaData] = useState<MetaDataItem[]>([
    { page: "", start_time: "" },
    { page: "", start_time: "" },
  ]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  // Function to remove a metadata field
  const handleRemoveMetadataField = (index: number) => {
    const newList = [...metaData];
    newList.splice(index, 1);
    setMetaData(newList);
  };

  const handleInputChange = (
    index: number,
    fieldName: keyof MetaDataItem,
    value: string
  ) => {
    const updatedMetaData = [...metaData];
    updatedMetaData[index][fieldName] = value;
    setMetaData(updatedMetaData);
  };

  function handleAddField() {
    setMetaData([...metaData, { page: "", start_time: "" }]);
  }

  function createSlug(inputString: string) {
    return inputString
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    const newSlug = createSlug(newTitle);
    setSlug(newSlug);
  };

  useEffect(() => {
    function fetchEbook() {
      const meta = [
        { page: "1", start_time: "0" },
        { page: "2", start_time: "14" },
      ];
      setMetaData(meta);
    }

    fetchEbook();
  }, []);

  return (
    <div className="container">
      <div>
        {metaData.map((item, index) => (
          <div key={index} className="inputs-row">
            <div className="page-input">
              <label htmlFor={`page-${index}`}>Page:</label>
              <input
                type="text"
                id={`page-${index}`}
                value={item.page}
                onChange={(e) =>
                  handleInputChange(index, "page", e.target.value)
                }
              />
            </div>
            <div className="time-input">
              <label htmlFor={`start_time-${index}`}>Start Time:</label>
              <input
                type="text"
                id={`start_time-${index}`}
                value={item.start_time}
                onChange={(e) =>
                  handleInputChange(index, "start_time", e.target.value)
                }
              />
            </div>

            {/* close button */}
            <button
              type="button"
              className="button remove-btn"
              onClick={() => handleRemoveMetadataField(index)}
            >
              &times;
            </button>
          </div>
        ))}
        <div className="btn-container">
          <button className="button add-btn" onClick={handleAddField}>
            Add New Field
          </button>
        </div>
      </div>

      {/* title input */}
      <div style={{ margin: "10px" }}>
        <label htmlFor="title" style={{ margin: "10px" }}>
          Title
        </label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <p>
          Generated Slug: <span style={{ marginLeft: "10px" }}>{slug}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default MetaInputs;
