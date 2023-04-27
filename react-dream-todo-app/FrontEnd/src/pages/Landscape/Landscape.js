import React, { useEffect, useState } from "react";
import Quote from "../../components/Quote/Quote";
import "./landscape.css";
import { FiRefreshCcw } from "react-icons/fi";

const numImagesAvailable = 988; //how many photos are total in the collection
const numItemsToGenerate = 1; //how many photos you want to display
const imageWidth = 1920; //image width in pixels
const imageHeight = 1080; //image height in pixels
const collectionID = 30697288; //Beach & Coastal, the collection ID from the original url

function renderGalleryItem(randomNumber) {
  fetch(
    `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`
  ).then((response) => {
    let body = document.querySelector("body");
    body.style.backgroundImage = `url(${response.url})`;
  });
}

const Landscape = () => {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomImageIndex);

    return () => {
      let body = document.querySelector("body");
      body.style.backgroundImage = "";
    };
  }, []);

  const refreshImage = () => {
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    renderGalleryItem(randomImageIndex);
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <Quote refresh={refresh} />
      <button
        className="refresh_button"
        style={{ position: "absolute", top: "2rem", right: "7rem" }}
        onClick={refreshImage}
      >
        <FiRefreshCcw />
      </button>
    </>
  );
};

export default Landscape;
