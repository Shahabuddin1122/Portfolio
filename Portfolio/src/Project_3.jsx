import style from "./Project.module.css";

const Project3 = () => {
  return (
    <div className={style.project1}>
      <div className={style.project1child} />
      <div className={style.project1item} ><p>Software</p></div>
      <div className={style.project1inner} />
      <div className={style.project1child1} > <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596438/shahabuddin/ulgakjq58lsyipkm5jlg.png" alt="" /></div>
      <div className={style.project1child2} > <video src="https://res.cloudinary.com/dkotituzn/video/upload/v1702623851/shahabuddin/ye1dl46mfrfqepsmeq9p.mp4" controls muted autoPlay /></div>
      <img className={style.subtracticon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596429/shahabuddin/eng49exy2sdyj5nlxjga.svg" />
      <img className={style.subtracticon1} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/mzbr5u53amxf2w1iwe0o.svg" />
      <b className={style.project}>Project</b>
      <div className={style.thiscurtainopener}>{`Heritage Craft Connect, a comprehensive MERN stack platform, fosters rural artisans,enabling seamless product transactions,exploring craft `}</div>
      <div className={style.openandclose}>
       histories, and facilitating community engagement for both buyers and sellers. 
      </div>
      <div className={style.div}>01</div>
      <div className={style.tempcurtainautomator}>Heritage Craft Connect</div>
      <div className={style.anarduinoproject}>
             Explore Heritage Craft Connect: Empowering artisans, connecting buyers, crafting excellence.
      </div>
    </div>
  );
};

export default Project3;
