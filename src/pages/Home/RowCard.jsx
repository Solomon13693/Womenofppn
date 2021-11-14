import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function RowCard({card}) {
  return (
    <section
      class="abv2-feedback-section">

            <div class="abv2-feedback-wrapper">
    
                  <div class="single-item">
                    <div class="title">
                      <span className="text-primary" >{card.title}</span>
                    </div>
                    <div class="feedback-txt">
                      <p>{card.text}
                      </p>
                    </div>
                    <div class="clients-info">
                      <div class="img-wrapper">
                        <span class="client-thumb">
                          <img className="img-fluid" src={card.image} alt="" />
                        </span>
                      </div>
                      <div class="client-content">
                            <Link to={card.link}><button className="btn btn-secondary">Read More</button></Link>
                      </div>
                    </div>
                  </div>

            </div>

    </section>
  );
}

export default RowCard;
