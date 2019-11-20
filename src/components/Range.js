import React, { useState } from "react";
import { ProgressBar } from "primereact/progressbar";

const Range = props => {
  const [range, setRange] = useState(props.data.difficulty);

  return (
    <ProgressBar
      value={range*10}
      showValue={false}
    ></ProgressBar>
  );
};

export default Range;
