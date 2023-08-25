import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Footer } from "./App";
import ReactDOM from "react-dom/client";
import "./App.css";
import Me from "./Me.jpg";

function Full() {
  return (
    <>
      <Layout />
      <div className="">
        <nav class="row">
          <div className="col-sm-3">
            <></>
          </div>

          <div className="col-sm-5">
            <Contact />
          </div>

          <div class="col-sm-4 ">
            <></>
          </div>
        </nav>
      </div>
      <Footer />
    </>
  );
}

function Contact() {
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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Game" emoji="🎮" color="cyan" />
      <Skill skill="Sleep" emoji="😴" color="orange" />
      <Skill skill="Html" emoji="🤔" color="yellow" />
      <Skill skill="python" emoji="😇" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2 className="Name">นายปิติกรณ์ บุปผาชาติ
      </h2>

      <p className="Name">
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบในเทคโนโลยีและคอมพิวเตอร์
        เวลาว่าง เล่นเกม ฟังเพลง ดูAnime และก็นอน
      </p>

    </div>
  );
}

function Avatar() {
  return <img src={Me} alt="Me" className="img-thumbnail" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

export default Full;
