import style from "./miniproject1.module.css";
import LongCard from "./components/LongCard";
const miniProject1 = () => {
  const videoSrc = [
    {
      src: "https://res.cloudinary.com/dkotituzn/video/upload/v1706975933/shahabuddin/wprscmh3gadbfarkwnlb.mp4",
      name: "JWT",
      code: "ReactJs,Node,Mongodb",
      description:
        "In this code, I have done Register,Login and API check with JWT",
    },
    {
      src: "https://res.cloudinary.com/dkotituzn/video/upload/v1706974645/shahabuddin/m7uonlbpd8vokaiq3m1g.mp4",
      name: "Snake Games",
      code: "Python",
      description: "Here I build a Snake games using Python",
    },
    {
      src: "https://res.cloudinary.com/dkotituzn/video/upload/v1706974643/shahabuddin/npjsj7hxnyo1hd3bk9kc.mp4",
      name: "Login",
      code: "Html,Css,Java Script",
      description: "This is a static Login and Registration page",
    },
    {
      src: "https://res.cloudinary.com/dkotituzn/video/upload/v1706974648/shahabuddin/j70vsrq1ouahzmxmawfb.mp4",
      name: "portfolio",
      code: "Html,Css,Java Script",
      description:
        "This is a Dynamic portfolio website consist of Home,Skills,Blog and contract page ",
    },
    {
      src: "https://res.cloudinary.com/dkotituzn/video/upload/v1706974647/shahabuddin/yctganlpqrbbndgzbox2.mp4",
      name: "Grocery website",
      code: "Html,Css,Java Sccript",
      description: "This is a static grocery website",
    },
    {
      src: "https://res.cloudinary.com/dkotituzn/video/upload/v1706974705/shahabuddin/uqdqtylymjpxmm6mluev.mp4",
      name: "Pong Game",
      code: "Python",
      description: "Here I build a pong games using Python",
    },
    {
      src: "https://res.cloudinary.com/dkotituzn/video/upload/v1706975932/shahabuddin/qqqhzfyvrdpw7pmblmqz.mp4",
      name: "Auth0",
      code: "ReactJs",
      description:
        "This is a Dynamic website with custom UI and have the functionality of Auth0",
    },
  ];
  console.log(videoSrc[1].name);
  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <h2>Software</h2>
        </div>
        <div className={style.middle}>
          {(function () {
            const result = [];
            for (let i = 0; i < 3; i++) {
              result.push(
                <LongCard
                  key={i}
                  num={i}
                  src={videoSrc[i].src}
                  description={videoSrc[i].description}
                  name={videoSrc[i].name}
                  code={videoSrc[i].code}
                />
              );
            }
            return result;
          })()}
        </div>
        <div className={style.footer}></div>
      </div>
    </>
  );
};
export default miniProject1;
