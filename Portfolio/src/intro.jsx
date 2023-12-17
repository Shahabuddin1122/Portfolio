import style from "./intro.module.css"

const Frame = () => {
  return (
    <div className={style.rectangleparent}>
      <div className={style.framechild} />
      <img className={style.frameitem} alt="" src='https://res.cloudinary.com/dkotituzn/image/upload/v1702596430/shahabuddin/idrfvp3czeg6goqvgnth.jpg' />
      <div className={style.frameinner} />
      <div className={style.hiimshahabuddincontainer}>
        <p className={style.hiim}>Hi, I’m</p>
        <p className={style.hiim}>Shahabuddin Akhon</p>
      </div>
      <div className={style.developerteacher}>Developer,Teacher</div>
      <div className={style.linediv} />
      <img className={style.lineicon} alt="" src="/line-2.svg" />
      <img className={style.framechild1} alt="" src="/line-2.svg" />
      <img className={style.framechild2} alt="" src="/line-2.svg" />
      <div className={style.rectanglediv} />
      <div className={style.aboutme}>About me</div>
      <div className={style.iaspiringcomputer}>
        I, aspiring computer science student from Bangladesh. determined to
        explore the limitless possibilities within the realm of coding while
        nurturing my passion for teaching.
      </div>
    </div>
  );
};

export default Frame;
