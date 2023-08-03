import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML-CSS",
    level: "advanced",
    color: "#0084ff",
  },
  {
    skill: "JAVASCRIPT",
    level: "advanced",
    color: "#6d77ff",
  },
  {
    skill: "SCSS",
    level: "advanced",
    color: "#0084ff",
  },
  {
    skill: "BOOTSTRAP",
    level: "advanced",
    color: "orangered",
  },
  {
    skill: "TAILWIND CSS",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "MATERIAL UI",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "NODE JS / NPM",
    level: "advanced",
    color: "#a96dec",
  },
  {
    skill: "GIT / GITHUB",
    level: "advanced",
    color: "#da581c",
  },
  {
    skill: "WEBPACK",
    level: "advanced",
    color: "#0084ff",
  },
  {
    skill: "REACT JS",
    level: "advanced",
    color: "#0084ff",
  },
  {
    skill: "GRAPHQL",
    level: "intermediate",
    color: "#da581c",
  },
  {
    skill: "TYPESCRIPT",
    level: "advanced",
    color: "#ec6ddb",
  },
  {
    skill: "REDUX TOOLKIT",
    level: "beginner",
    color: "orange",
  },
  {
    skill: "EXPRESS JS",
    level: "advanced",
    color: "#0084ff",
  },
  {
    skill: "MONGODB",
    level: "advanced",
    color: "#a96dec",
  },
  {
    skill: "JQUERY",
    level: "advanced",
    color: "#0084ff",
  },
  {
    skill: "REDUX",
    level: "beginner",
    color: "yellow",
  },
  {
    skill: "NEXT JS",
    level: "intermediate",
    color: "#0084ff",
  },
];

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

const Avatar = () => <img src="avatar.jpg" alt="" />;
const Intro = () => {
  return (
    <>
      <div className="intro">
        <h1>Mohamed Montaser</h1>
        <h4>
          Hello I'm Full-stack, Web Development Is My Passion, I Like To Create
          Websites That Helps People With A Good Ui To Make People Happy When
          They Use It, I Created Many Websites That Help People So Much
        </h4>
      </div>
    </>
  );
};

const SkillList = () => {
  let skillsLevel = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };
  
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          title={`${skill.skill} ${skillsLevel[skill.level]}`}
          bgColor={skill.color}
        />
      ))}
    </div>
  );
};
const Skill = ({ title, bgColor }) => {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      {title}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
