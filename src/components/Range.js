import React, { useState } from "react";
import { ProgressBar } from "primereact/progressbar";

const Range = props => {
  const [range, setRange] = useState(props.data.difficulty);

//   const dispalyValueTemplate = range => {
//     return (
//       <>
//         {range} / <b>100</b>
//       </>
//     );
//     }

  return (
    <ProgressBar
      value={range*10}
      showValue={false}
    //   displayValueTemplate={dispalyValueTemplate}
    ></ProgressBar>
  );
};

export default Range;
