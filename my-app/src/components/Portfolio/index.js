import React from "react";
import EventBuddyimg from "../../assets/projects/Event_Buddy.png"
import WeatherAppimg from "../../assets/projects/Weather_App.png"
import TouristBuddyimg from "../../assets/projects/Tourist_Buddy.png"


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/cmskorcz/bootcamp_project_2">
                {" "}
                <img
                  src={EventBuddyimg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Event-Buddy"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Event Buddy</h4>
              <p>
                  Event Buddy is an online event planner that allows you to post new events in your area.
                  You can create an account to post events, save current events, and comment on upcoming events.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://michael-ishmail.github.io/Weather-app/">
                {" "}
                <img
                  src={WeatherAppimg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-App"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather App</h4>
              <p>
                  Weather app is exactly what it says it is! Its an online weather application that finds the
                  5 day weather forecast for the location entered in the search bar.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bennyson9.github.io/Tourist-Buddy/">
                {" "}
                <img
                  src={TouristBuddyimg}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Tourist-Buddy"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tourist Buddy</h4>
              <p>
                  Tourist buddy is an online tourism application that allows you to find the nearest hotels, nearby events, and the weather forecast for
                  the location you are headed to. Just input the location, and the departure/arrival dates in the search bar!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;