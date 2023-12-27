import style from "./Project.module.css";

const Project5 = () => {
  return (
    <div className={style.project1}>
      <div className={style.project1child} />
      <div className={style.project1item} ><p>Software</p></div>
      <div className={style.project1inner} />
      <div className={style.project1child1} > <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1702624181/shahabuddin/drnrmkvwfqx7pvvlexu6.bmp" alt="" /></div>
      <div className={style.project1child2} > <video src="https://res.cloudinary.com/dkotituzn/video/upload/v1702596475/shahabuddin/jwqd0gxqjrtfc4dlqdkn.mp4" controls muted autoPlay /></div>
      <img className={style.subtracticon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596429/shahabuddin/eng49exy2sdyj5nlxjga.svg" />
      <img className={style.subtracticon1} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/mzbr5u53amxf2w1iwe0o.svg" />
      <b className={style.project}>Project</b>
      <div className={style.thiscurtainopener}>{`Welcome to our Pharmacy Management System, an integrated DBMS project catering to patients, doctors,managers, and employees. `}</div>
      <div className={style.openandclose}>
        Streamlining appointments, schedules, profiles, and billing for efficient healthcare operations.
      </div>
      <div className={style.div}>03</div>
      <div className={style.tempcurtainautomator}>{`Pharmacy   Management System`}</div>
      <div className={style.anarduinoproject}>
          Efficient Pharmacy Management System for seamless healthcare operations and enhanced user experiences.
      </div>
    </div>
  );
};

export default Project5;
