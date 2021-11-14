import React from "react";
import '../breadcrumbs/breadcrumb.css'
import {Link} from 'react-router-dom'

function Breadcrumb({title}) {
  return (
    <div class="breadcrumbs overlay">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="breadcrumbs-content">
              <h1 class="page-title">{title}</h1>
              <p>Let's Get Together and Work</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12">
            <ul class="breadcrumb-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
