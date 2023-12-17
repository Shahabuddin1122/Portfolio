import style from "./Table.module.css";

const Table = () => {
    const categories = [
        {
          id: 1,
          name: 'Hardware based',
          items: ['TempCurtainAutomator', 'Design a 4 bit Microprocessor'],
        },
        {
          id: 2,
          name: 'Software based',
          items: ['Hospital Management System', 'Pharmacy Management System', 'Heritage Craft Connect', 'AI based personal Assistance'],
        },
      ];
  return (
    <>
        <div className={style.table}>
        <div className={style.tablechild} />
        <div className={style.projects}>Projects</div>
        <div className={style.tableitem} />
        <div className={style.tableof}>{`Table of `}</div>
        <div className={style.contents}>Contents</div>
        <img className={style.subtracticon} alt="" src="https://res.cloudinary.com/dkotituzn/image/upload/v1702596427/shahabuddin/q24faiooxoy7mgw3lpor.svg" />
        <img className={style.tableinner} alt="" src="/public/line-2.svg" />
            <div className={style.middle}>
                <ul className={style.upper}>
                    {categories.map(category => (
                        <li key={category.id}>
                        {category.name}
                        <ul className={style.inner}>
                            {category.items.map((item, index) => (
                            <li key={index}>{item}</li>
                            ))}
                        </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
    
  );
};

export default Table;
