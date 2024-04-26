import style from "./Project.module.css";

const Project6 = () => {
  return (
    <div className={style.project1}>
      <div className={style.project1child} />
      <div className={style.project1item}>
        <p>Software</p>
      </div>
      <div className={style.project1inner} />
      <div className={style.project1child1}>
        <img
          src="https://res.cloudinary.com/dkotituzn/image/upload/v1713619474/shahabuddin/bgklbv04vbpqefs53vd3.png"
          alt=""
        />
      </div>
      <div className={style.project1child2}>
        <video
          src="https://res.cloudinary.com/dkotituzn/video/upload/v1714112902/shahabuddin/aii28jhqs2gkn6qubje1.mp4"
          controls
          muted
          autoPlay
        />
      </div>
      <img
        className={style.subtracticon}
        alt=""
        src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596429/shahabuddin/eng49exy2sdyj5nlxjga.svg"
      />
      <img
        className={style.subtracticon1}
        alt=""
        src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/mzbr5u53amxf2w1iwe0o.svg"
      />
      <b className={style.project}>Project</b>
      <div
        className={style.thiscurtainopener}
      >{`A WhatsApp Clone was developed using Next.js and Java Spring Boot. Users log in with their mobile numbers, authenticated via Twilio.`}</div>
      <div className={style.openandclose}>
        Users can chat, supported by a pull-based architecture, accommodating
        users messages seamlessly.
      </div>
      <div className={style.div}>04</div>
      <div className={style.tempcurtainautomator}>
        WhatsApp <br /> Clone
      </div>
      <div className={style.anarduinoproject}>
        The platform enables seamless, secure messaging between users.
      </div>
    </div>
  );
};

export default Project6;
