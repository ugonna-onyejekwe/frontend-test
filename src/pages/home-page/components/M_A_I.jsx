import { GiCheckMark } from "react-icons/gi";
import { M_A_I_Info } from "../../../components/data";

export const M_A_I = () => {
  return (
    <>
      <p className="m_a_i_heading">
        <b> Micro Angel Investors & Service incubators </b>
        (Invest from $500 & above)
      </p>{" "}
      <div className="wrapper">
        {M_A_I_Info.map((i, key) => {
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
