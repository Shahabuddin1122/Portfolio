import React,{useEffect,useRef} from "react";
import style from "./Project.module.css";

const Project1 = () => {

  return (
    <div className={style.project1}>
      <div className={style.project1child} />
      <div className={style.project1item} ><p>Hardware</p></div>
      <div className={style.project1inner} />
      <div className={style.project1child1} > <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596438/shahabuddin/tlw1v7qjqkhl1br7srfk.jpg" alt="" /></div>
      <div className={style.project1child2} >  <video src="https://res.cloudinary.com/dkotituzn/video/upload/v1702596449/shahabuddin/nuak6yp3gsgrpyxslidy.mp4" controls muted autoPlay /></div>
      <img className={style.subtracticon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596429/shahabuddin/eng49exy2sdyj5nlxjga.svg" />
      <img className={style.subtracticon1} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/mzbr5u53amxf2w1iwe0o.svg" />
      <b className={style.project}>Project</b>
      <div className={style.thiscurtainopener}>{`This curtain opener automatically opens the curtain when the temperature increases, and users can also manually `}</div>
      <div className={style.openandclose}>
        open and close it. We use Arduino, a Bluetooth module, and a motor in
        this project.
      </div>
      <div className={style.div}>01</div>
      <div className={style.tempcurtainautomator}>TempCurtainAutomator</div>
      <div className={style.anarduinoproject}>
        An Arduino project that uses Bluetooth to automatically open a curtain
        based on temperature.
      </div>
    </div>
  );
};

export default Project1;
