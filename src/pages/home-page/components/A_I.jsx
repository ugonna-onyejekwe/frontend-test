import { GiCheckMark } from "react-icons/gi";
import { A_I_Info, M_A_I_Info } from "../../../components/data";

export const A_I = () => {
  return (
    <>
      <p className="a_i_heading">
        <b> Angel Investors & Venture Capital</b> (Invest from $50k and above)
      </p>
      <div className="wrapper">
        {A_I_Info.map((i, key) => {
          return (
            <div className="box" key={key}>
              <h3>{i.header}</h3>
              {i.list.map((item, key) => {
                return (
                  <p key={key}>
                    <span className="icon">
                      <GiCheckMark />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
