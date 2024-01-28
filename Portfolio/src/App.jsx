// App.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./app.module.css";
import Intro from "./intro.jsx";
import Education from "./Education.jsx";
import Table from "./Table.jsx";
import Project1 from "./Project_1.jsx";
import Project2 from "./Project_2.jsx";
import Project3 from "./Project_3.jsx";
import Project4 from "./Project_4.jsx";
import Project5 from "./Project_5.jsx";
import Services from "./services.jsx";
import Achievement from "./Achievement.jsx";
const App = () => {
  return (
    <>
      <input type="checkbox" id={style.checkboxcover} />
      <input type="checkbox" id={style.checkboxmaincover} />
      <input type="checkbox" id={style.checkboxpage1} />
      <input type="checkbox" id={style.checkboxpage2} />
      <input type="checkbox" id={style.checkboxpage3} />
      <input type="checkbox" id={style.checkboxpage4} />
      <input type="checkbox" id={style.checkboxpage5} />
      <input type="checkbox" id={style.checkboxbackcover} />
      <div className={style.book}>
        <div className={style.maincover} id={style.cover}>
          <div className={style.front}>
            <div className={style.top}>
              <div className={style.left}>
                <p>
                  S t o r y <span style={{ margin: "-5px" }}></span> b o o k
                </p>
              </div>
              <div className={style.right}>
                <img
                  src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596447/shahabuddin/nvvpbo1pktk9gf4icrpm.png"
                  alt=""
                />
              </div>
            </div>
            <div className={style.down}>
              <div className={style.header}>
                <h2>
                  <span className={style.highlight}>Get Touch in</span>
                </h2>
              </div>
              <div className={style.content}>
                <table className={style.tableStyle}>
                  <tbody>
                    <tr>
                      <td className={style.cellStyle}>
                        <h4>Address</h4>
                        <p>Sonir Akhra,Jatrabari, Dhaka,Bangladesh</p>
                      </td>
                      <td className={style.cellStyle}>
                        <h4>Github</h4>
                        <a href="https://github.com/Shahabuddin1122">
                          <p>https://github.com/Shahabuddin1122</p>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.cellStyle}>
                        <h4>Phone Number</h4>
                        <p>+8801982711168</p>
                      </td>
                      <td className={style.cellStyle}>
                        <h4>Facebook</h4>
                        <a href="https://www.facebook.com/shahabuddin.hridoy.98/">
                          <p>https://www.facebook.com/shahabuddin.hridoy.98/</p>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={style.label}>
              <label
                htmlFor={style.checkboxmaincover}
                className={style.covernext}
              >
                <p>Click to next</p>
              </label>
            </div>
          </div>
          <div className={style.back}>
            <label htmlFor={style.checkboxmaincover} className={style.prev}>
              <p>&lt;</p>
            </label>
          </div>
        </div>
        <div className={style.pages} id={style.page1}>
          <div className={style.front}>
            <Intro />
            <label htmlFor={style.checkboxpage1} className={style.next}>
              <p>&gt;</p>
            </label>
          </div>
          <div className={style.back}>
            <Education />
            <label htmlFor={style.checkboxpage1} className={style.prev}>
              <p>&lt;</p>
            </label>
          </div>
        </div>
        <div className={style.pages} id={style.page2}>
          <div className={style.front}>
            <Table />
            <label htmlFor={style.checkboxpage2} className={style.next}>
              <p>&gt;</p>
            </label>
          </div>
          <div className={style.back}>
            <Project1 />
            <label htmlFor={style.checkboxpage2} className={style.prev}>
              <p>&lt;</p>
            </label>
          </div>
        </div>
        <div className={style.pages} id={style.page3}>
          <div className={style.front}>
            <Project2 />
            <label htmlFor={style.checkboxpage3} className={style.next}>
              <p>&gt;</p>
            </label>
          </div>
          <div className={style.back}>
            <Project3 />
            <label htmlFor={style.checkboxpage3} className={style.prev}>
              <p>&lt;</p>
            </label>
          </div>
        </div>
        <div className={style.pages} id={style.page4}>
          <div className={style.front}>
            <Project4 />
            <label htmlFor={style.checkboxpage4} className={style.next}>
              <p>&gt;</p>
            </label>
          </div>
          <div className={style.back}>
            <Project5 />
            <label htmlFor={style.checkboxpage4} className={style.prev}>
              <p>&lt;</p>
            </label>
          </div>
        </div>
        <div className={style.pages} id={style.page5}>
          <div className={style.front}>
            <Achievement />
            <label htmlFor={style.checkboxpage5} className={style.next}>
              <p>&gt;</p>
            </label>
          </div>
          <div className={style.back}>
            <Services />
            <label htmlFor={style.checkboxpage5} className={style.prev}>
              <p>&lt;</p>
            </label>
          </div>
        </div>
        <div className={style.backcover}>
          <label
            htmlFor={style.checkboxbackcover}
            className={style.covernext}
          />
        </div>
      </div>
    </>
  );
};

export default App;
