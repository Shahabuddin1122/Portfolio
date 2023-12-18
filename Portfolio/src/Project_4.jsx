import style from "./Project.module.css";

const Project4 = () => {
  return (
    <div className={style.project1}>
      <div className={style.project1child} />
      <div className={style.project1item} ><p>Software</p></div>
      <div className={style.project1inner} />
      <div className={style.project1child1} > <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596436/shahabuddin/bdb7xv5jdsh0ialjz0q7.png" alt="" /></div>
      <div className={style.project1child2} > <video src="https://res.cloudinary.com/dkotituzn/video/upload/v1702596462/shahabuddin/jeyezjmchpexuw2sxmsf.mp4" controls muted autoPlay /></div>
      <img className={style.subtracticon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596429/shahabuddin/eng49exy2sdyj5nlxjga.svg" />
      <img className={style.subtracticon1} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/mzbr5u53amxf2w1iwe0o.svg" />
      <b className={style.project}>Project</b>
      <div className={style.thiscurtainopener}>{`Welcome to our Java-based Hospital Management System, empowering patients to schedule appointments,book rooms,`}</div>
      <div className={style.openandclose}>
       and access bills, doctors to manage schedules and bills, and admins to oversee operations seamlessly. 
      </div>
      <div className={style.div}>02</div>
      <div className={style.tempcurtainautomator} style={{"wordBreak":"break-all"}} >{`Hospital   Management System`}</div>
      <div className={style.anarduinoproject} style={{"wordBreak":"break-all","width": "109px"}}>
      The Hospital Management System is a Java-based project aimed at optimizing and improving the efficiency of hospital operations. 
      </div>
    </div>
  );
};

export default Project4;
