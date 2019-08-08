import React from "react";

import '../style/Experience.scss';

export default function Experience() {
  return (
    <div className="container-experience">
      <h2 className="title-experience"> EXPERIENCE </h2>
      <div className="container-web-developer">
        <h4 className="title-web-works"> WEB DEVELOPER </h4>
        <p className="text-experience">
          As a developer we have had about 1 year of experience in which I have
          learned too much thanks to being participating in bootcamps such as
          the React WorkShop made by the Colombian Politécnico Jaime Isaza
          Cadavid and the Top-gun-lab React bootcamp made by Team Internacional
          in RutaN
        </p>
        <p className="text-experience">
          besides this learning too much on platforms that have excellent
          courses such as EDteam and Udemy. It is also important to read the
          documentation of what is being learned since our learning is very
          helpful and powerful.
        </p>
      </div>
      <div className="container-works">
        <h4 className="title-web-works"> WORKS </h4>
        <span className="text-works"> ~ Final React WorkShop Project </span>
        <span className="text-works"> ~ Final React Top-gun-lab Project </span>
      </div>
    </div>
  );
}
