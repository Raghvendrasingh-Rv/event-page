import React from "react";
import "./App.css";
import "./style/carousel.css";
import Heading from "./Components/heading";
import "./style/main.css";
import Card from "./Components/card";
import Menu from "./Components/menuApi";
import Photo from "./Components/photo.js";
import Video from "./Components/video.js";
import ImageSlider from "./Components/ImageSlider";
import SliderData from "./Components/SliderData";

function App() {
  const [menuData] = React.useState(Menu);
  return (
    <>
      <ImageSlider slides={SliderData} />;
      <div className="main">
        <Heading />
        <Card menuData={menuData} />
      </div>
      <Photo />
      <Video />
    </>
  );
}

export default App;
