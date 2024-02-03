import style from "./longcard.module.css";
const LongCard = ({ num, src, name, code, description }) => {
  return (
    <>
      <div className={style.card}>
        {num % 2 === 0 ? (
          <>
            <div className={style.left}>
              <video controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={style.right}>
              <h3>{name}</h3>
              <h5>{code}</h5>
              <p>{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className={style.right}>
              <h3>{name}</h3>
              <h5>{code}</h5>
              <p>{description}</p>
            </div>
            <div className={style.left}>
              <video controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default LongCard;
