import React from "react";

import "../style/About.scss";

export default function About() {
  return (
    <div className="container-about">
      <h2 className="title-about"> ABOUTE ME </h2>
      <div className="container-text-about">
        <p className="text-about">
          Hi, I'm Mateo Rios, an IT engineer from the Colombian Politécnico
          Jaime Isaza Cadavid, I am passionate about web development, so I
          currently work as a frontend developer. I love sports, being with
          family and friends, I like football, cycling, exercising and reading
          about technology related topics. "you can always be better"
        </p>
        <p className="text-about">
          I am a person who loves to learn more and more about this world of
          development technology, as well as learn from the people with whom I
          work. I love working in a work environment which is based on respect
          for the other, to develop great things.
        </p>
        <p className="text-about">
          I love sports, being with family and friends, I like football,
          cycling, exercising and reading about technology related topics.
        </p>
        <span className="sentence-about">
          "you can always be better" Tigger Woods
        </span>
      </div>
    </div>
  );
}
