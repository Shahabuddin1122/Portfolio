import style from "./Project.module.css";

const Project1 = () => {
  return (
    <div className={style.project1}>
      <div className={style.project1child} />
      <div className={style.project1item} ><p>Hardware</p></div>
      <div className={style.project1inner} />
      <div className={style.project1child1} > <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596440/shahabuddin/vu9xgxk7qfmy3aeprqwv.jpg" alt="" /></div>
      <div className={style.project1child2} > <video src="https://res.cloudinary.com/dkotituzn/video/upload/v1702596446/shahabuddin/yr9rg2co0nnxvwp1a4bq.mp4" controls muted autoPlay /></div>
      <img className={style.subtracticon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596429/shahabuddin/eng49exy2sdyj5nlxjga.svg" />
      <img className={style.subtracticon1} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/mzbr5u53amxf2w1iwe0o.svg" />
      <b className={style.project}>Project</b>
      <div className={style.thiscurtainopener}>{`In this 4-bit microprocessor project, it comprises three separate portions: the left contains the memory unit, `}</div>
      <div className={style.openandclose}>
      the right contains the ALU unit, and the last portion contains the Sequence Controller.
      </div>
      <div className={style.div}>02</div>
      <div className={style.tempcurtainautomator}>4 bit microprocessor</div>
      <div className={style.anarduinoproject}>
            Efficient 4-bit microprocessor for basic logic and arithmetic operations, along with jump and HLT operations.
      </div>
    </div>
  );
};

export default Project1;
