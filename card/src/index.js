import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return (
    <div className="skill-list">
      <Skill title="HTML-CSS 💪" bgColor="#0084ff" />
      <Skill title="JAVASCRIPT 💪" bgColor="#6d77ff" />
      <Skill title="SCSS 💪" bgColor="#0084ff" />
      <Skill title="BOOTSTRAP 💪" bgColor="orangered" />
      <Skill title="TAILWIND CSS 💪" bgColor="yellow" />
      <Skill title="MATERIAL UI 💪" bgColor="orange" />
      <Skill title="NODE JS / NPM 💪" bgColor="#a96dec" />
      <Skill title="GIT / GITHUB 💪" bgColor="#da581c" />
      <Skill title="WEBPACK 💪" bgColor="#0084ff" />
      <Skill title="REACT JS 💪" bgColor="#0084ff" />
      <Skill title="GRAPHQL 🔥" bgColor="#da581c" />
      <Skill title="TYPESCRIPT 💪" bgColor="#ec6ddb" />
      <Skill title="REDUX TOOLKIT 👶" bgColor="orange" />
      <Skill title="EXPRESS JS 💪" bgColor="#0084ff" />
      <Skill title="MONGODB 💪" bgColor="#a96dec" />
      <Skill title="JQUERY 💪" bgColor="#0084ff" />
      <Skill title="READUX 👶" bgColor="yellow" />
      <Skill title="NEXT JS 👍" bgColor="orange" />
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
