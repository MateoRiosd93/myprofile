import React from "react";

import "../style/Education.scss";

export default function Education() {
  return (
    <div className="container-education">
      <h2 className="title-education"> EDUCATION</h2>
      <div className="container-study">
        <h2 className="study">
          Instición Educativa Primitivo Leal La Doctora
          <span className="date">Primaria 1999 - 2004</span>
          <span className="date">Secundaria 2004 - 2010</span>
        </h2>
      </div>
      <div className="container-study">
        <h2 className="study">
          Politécnico Colombiano Jaime Isaza Cadavid
          <span className="date">Software Engineer 2013 - 2019</span>
        </h2>
      </div>
      <div className="container-study">
        <h2 className="study">
          Bootcamps
          <span className="date">React WorkShop - Politécnico JIC 2019</span>
          <span className="date">
            React Top-gun-lab TEAM Internacional Ruta N
          </span>
        </h2>
      </div>
    </div>
  );
}
