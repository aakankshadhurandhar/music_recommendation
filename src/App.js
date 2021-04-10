import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDB = {
  Devotional: [
    { name: "Hanuman Chalisa", rating: "5/5" },
    { name: "Ganesh Chalisa", rating: "5/5" },
   
  ],
  Romantic: [
    {
      name: "Tumse hi",
      rating: "5/5",
    },
    {
      name: "Tum hi aana",
      rating: "4.5/5",
    },
    
  ],
  Pop: [
    {
      name: "blood sweet tears",
      rating: "4.5/5",
    },
    {
      name: "Dynamite",
      rating: "4/5",
    },
    {
      name: "euphoria",
      rating: "5/5",
    },
  ],
  
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Devotional");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1> TopMusic 🎹  </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my collection of favourite music. Select a category to get
        started with.
      </p>

      <div>
        {Object.keys(musicDB).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedCategory].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}