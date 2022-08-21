import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

// Images
import KlexTheCalc from "../../assets/klex-the-calc.webp";
import CustomerFileManager from "../../assets/customer-file-manager.webp";
import TradieJS from "../../assets/tradie-js.webp";
import SundayMarkets from "../../assets/sunday-markets.webp";
import FretScales from "../../assets/fretscales.webp";
import WeatherApp from "../../assets/weather-app.webp";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <p className="sub-heading">
        Interested in seeing what I have done? Check out some of my projects below!
      </p>
      <div className="project-grid">
        <ProjectCard
          title="Klex the Calc"
          imageSource={KlexTheCalc}
          imageAlt="Klex the Calc gameplay"
          technologies={["GD Script", "Python"]}
          text="Klex-the-Calc is third-person, 2D adventure game where the user
              takes on the role of Klex, a budding young calculator who has lost
              his parts during an alien invasion."
          sourceCodeURL="https://github.com/dan-tibbotts/klex-the-calc"
        />
        <ProjectCard
          title="Customer File Manager"
          imageSource={CustomerFileManager}
          imageAlt="Customer File Manager screenshot"
          technologies={["C#", "SQLite", "DapperORM"]}
          text="Developed as an assessment for the Event-driven programming course, Customer File Manager was
              created to allow users to connect local documents and files against a customers account using Dapper ORM and SQLite for data storage/retrival."
          sourceCodeURL="https://github.com/dan-tibbotts/customer-file-manager"
        />
        <ProjectCard
          title="Tradie Job Site"
          imageSource={TradieJS}
          imageAlt="Tradie Job Site projects view screenshot"
          technologies={["Django", "Python", "SQLite"]}
          text="Developed as part of the Server-side development course, Tradie Job Site is a Django
          web application targeted towards trades staff to manage their projects, capture data and images directly from site."
          sourceCodeURL="https://github.com/dan-tibbotts/tradie-jobsite"
        />

        <ProjectCard
          title="Sunday Markets"
          imageSource={SundayMarkets}
          imageAlt="Sunday Markets My Products screenshot"
          technologies={["React", "Express", "MongoDB"]}
          text="Created as a team project with another student Nicholas Harding for the Diploma in Software
          Development project, Sunday Markets is an e-commerce site for market stall owners to conduct business online."
          sourceCodeURL="https://github.com/dan-tibbotts/sunday-markets"
        />

        <ProjectCard
          title="FretScales"
          imageSource={FretScales}
          imageAlt="FretScales screenshot"
          technologies={["HTML5", "PHP", "Bootstrap"]}
          text="FretScales is an online guitar fretboard where guitarists can quickly and easily identify the notes on the fretboard for any major or minor scale."
          sourceCodeURL="https://github.com/dan-tibbotts/fretscales"
        />

        <ProjectCard
          title="Weather App"
          imageSource={WeatherApp}
          imageAlt="WeatherApp screenshot"
          technologies={["React", "OpenWeatherAPI"]}
          text="This application uses the OpenWeather API to get the temperature and weather for a user defined location."
          sourceCodeURL="https://github.com/dan-tibbotts/weather-app"
        />
      </div>
    </section>
  );
};

export default Projects;
