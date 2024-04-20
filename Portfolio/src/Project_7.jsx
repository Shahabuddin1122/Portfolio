import style from "./Project.module.css";

const Project7 = () => {
    return (
        <div className={style.project1}>
            <div className={style.project1child} />
            <div className={style.project1item} ><p>Software</p></div>
            <div className={style.project1inner} />
            <div className={style.project1child1} > <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1713624654/shahabuddin/tiz1myvnpldzlq9uhx5b.png" alt="" /></div>
            <div className={style.project1child2} > <video src="https://res.cloudinary.com/dkotituzn/video/upload/v1713619589/shahabuddin/rhcke1motjaaapkqaxx.mp4" controls muted autoPlay /></div>
            <img className={style.subtracticon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596429/shahabuddin/eng49exy2sdyj5nlxjga.svg" />
            <img className={style.subtracticon1} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/mzbr5u53amxf2w1iwe0o.svg" />
            <b className={style.project}>Project</b>
            <div className={style.thiscurtainopener}>{`The platform integrates JWT and NextAuth for secure authentication, advanced filtering for precise product selection, and streamlined  `}</div>
            <div className={style.openandclose}>
                bidding, enhancing user experience and facilitating secure SSL Commerz payments.
            </div>
            <div className={style.div}>05</div>
            <div className={style.tempcurtainautomator}>{`Bidding Platform`}</div>
            <div className={style.anarduinoproject}>
                A bidding platform with Spring Boot and Next.js for post addition, product selection, bidding, and SSL Commerz-enabled payments.
            </div>
        </div>
    );
};

export default Project7;
