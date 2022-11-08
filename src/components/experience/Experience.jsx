import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>reacJS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML 5</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>reacJS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>HTML 5</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
