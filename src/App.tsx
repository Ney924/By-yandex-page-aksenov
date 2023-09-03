import React from "react";
import "./App.css";
import { ImInScool } from "./components/ImInScool";
import { Story } from "./components/Story";
import { Link } from "./components/Link";
import { Accordion } from "react-bootstrap";
import { MyVideo } from "./components/MyVideo";

function App() {
  const data = [
    {
      text: "моё последнее фото из старшей школы",
    },
    {
      text: "как я стал программистом",
    },
    {
      text: "ссылки",
    },
  ];

  return (
    <div className="App">
      <div style={{width: '1500px'}}>
      <h2 className="title">ЗАДАНИЕ ДЛЯ ЯНДЕКСА</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4 className="title-accordion">
              моё последнее фото из старшей школы
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            <ImInScool />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4 className="title-accordion">как я стал программистом</h4>
          </Accordion.Header>
          <Accordion.Body>
            <Story />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4 className="title-accordion">ссылки</h4>
          </Accordion.Header>
          <Accordion.Body>
            <Link />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4 className="title-accordion">видео</h4>
          </Accordion.Header>
          <Accordion.Body>
            <MyVideo />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>
  );
}

export default App;
