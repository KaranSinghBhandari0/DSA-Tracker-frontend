import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Topics() {
  const { topics, selectedTopic, setSelectedTopic} = useContext(UserContext);

  return (
    <div className="sidebar">
          {topics.map((topic, index) => (
            <p
              key={index}
              onClick={() => setSelectedTopic(topic)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "rgb(131, 9, 246)")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor =
                  selectedTopic === topic ? "rgb(131, 9, 246)" : "#3d3d3d")
              }
              style={{
                backgroundColor: selectedTopic === topic ? "rgb(131, 9, 246)" : "#3d3d3d"
              }}
            >
              {topic}
            </p>
          ))}
    </div>
  )
}
