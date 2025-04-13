import { ChevronLeft, ChevronRight } from "lucide-react";
import "./carousel.css";
import { useState } from "react";

const carouselData = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    title: "Serene Tree",
    content:
      "A solitary tree stands tall in the midst of a tranquil field, symbolizing strength and solitude.",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/05/08/beach-1867285_1280.jpg",
    title: "Sunset Beach",
    content:
      "Golden hues paint the sky as the sun sets over a peaceful beach, offering a moment of reflection.",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "Historic Bridge",
    content:
      "An ancient stone bridge arches gracefully over a flowing river, connecting past and present.",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2017/01/20/00/30/mountains-1993644_1280.jpg",
    title: "Majestic Mountains",
    content:
      "Snow-capped peaks rise against a clear blue sky, embodying nature's grandeur and majesty.",
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
    title: "Autumn Avenue",
    content:
      "A tree-lined avenue showcases vibrant autumn colors, inviting leisurely strolls and contemplation.",
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "Urban Skyline",
    content:
      "Skyscrapers reach towards the heavens, reflecting the ambitions and achievements of modern society.",
  },
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "Desert Dunes",
    content:
      "Rolling sand dunes under a clear sky illustrate the vastness and beauty of desert landscapes.",
  },
  {
    id: 8,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "Forest Trail",
    content:
      "A winding path through dense forest invites exploration and a connection with nature.",
  },
  {
    id: 9,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "City Lights",
    content:
      "The city comes alive at night with sparkling lights, showcasing its vibrant energy and life.",
  },
  {
    id: 10,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "Ocean Waves",
    content:
      "Gentle waves lap against the shore, providing a soothing soundtrack to coastal serenity.",
  },
  {
    id: 11,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "Countryside Road",
    content:
      "A quiet road meanders through the countryside, surrounded by fields and open skies.",
  },
  {
    id: 12,
    image:
      "https://cdn.pixabay.com/photo/2015/03/26/09/54/bridge-690731_1280.jpg",
    title: "Snowy Forest",
    content:
      "Snow blankets the forest floor, creating a peaceful winter wonderland untouched by time.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="carousel-container">
      <button
        className="carousel-left-btn"
        onClick={() => {
          if (currentIndex > 0) {
            setCurrentIndex((currentIndex - 1) % carouselData.length);
          }
        }}
        disabled={currentIndex === 0}
      >
        <ChevronLeft
          width={50}
          height={50}
          color={currentIndex === 0 ? "#777777" : "#000"}
        />
      </button>
      <div className="carousel-content-container">
        {carouselData
          .slice(currentIndex, currentIndex + 3)
          .map((item, index) => (
            <div key={`carousel-${index}`} className="carousel-item">
              {/* {item?.image ? (
                <img
                  src={item.image}
                  alt={`carouse-${index}`}
                  className="carousel-image"
                />
              ) : ( */}
              <span className="carousel-image">Image {item.id}</span>
              {/* )} */}
              <div className="carousel-item-content">
                <div className="carousel-title">{item.title}</div>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
      </div>
      <button
        className="carousel-right-btn"
        onClick={() => {
          if (currentIndex < carouselData.length)
            setCurrentIndex(currentIndex + 1);
        }}
        disabled={currentIndex === carouselData.length}
      >
        <ChevronRight
          width={50}
          height={50}
          color={currentIndex === carouselData.length ? "#777777" : "#000"}
        />
      </button>
    </div>
  );
};

export default Carousel;
