import React from "react";
import {
  IconPaw,
  IconTshirt,
  IconHamburger,
  IconCafe,
  IconGuitar,
  IconMenu
} from "../icons/Icons";

import {
  Item,
  SideColor,
  Header,
  Icons,
  Tooltip
} from "../styles/SubjectStyle";
import { ToggleButton } from "primereact/togglebutton";

const Subject = props => {
  return (
    <Item>
      <SideColor isSelected={props.data.isSelected} />
      <div>
        <Header isSelected={props.data.isSelected}>
          <h2>{props.data.name} </h2>
          <div>
            <ToggleButton
              style={{ width: "80px", height: "35px" }}
              name="isSelected"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              //becouse checkbox is uncontrolled we set default checked value to be equal to the value assigned in the mock
              checked={props.data.isSelected}
              onChange={e => {
                props.handleSelected(props.data.id);
              }}
              tooltip="Select"
              tooltipOptions={{ position: "bottom" }}
            />
            <ToggleButton
              tooltip="Passed"
              tooltipOptions={{ position: "bottom" }}
              style={{ width: "80px", height: "35px" }}
              name="passed"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              checked={props.data.isPassed}
              onChange={e => {
                props.handlePassed(props.data.id);
              }}
            />
          </div>
        </Header>

        <h4>{props.data.professor}</h4>
        <p>{props.data.description}</p>
        <Icons>
          <Tooltip
          // onClick={() => {
          //   console.log("rabotam");
          //   props.handlePassed(props.data.id);
          // }}
          >
            <span data-tooltip="Professor">
              <IconMenu />
            </span>
          </Tooltip>
          <Tooltip>
            <span data-tooltip="Attendance">
              <IconGuitar />
            </span>
          </Tooltip>
          <Tooltip>
            <span data-tooltip="Faculty">
              <IconHamburger />
            </span>
          </Tooltip>
        </Icons>
        <Icons>
          <Tooltip>
            <span data-tooltip="Program">
              <IconPaw />
            </span>
          </Tooltip>
          <Tooltip>
            <span data-tooltip="Projects">
              <IconTshirt />
            </span>
          </Tooltip>
          <Tooltip>
            <span data-tooltip="Exam">
              <IconCafe />
            </span>
          </Tooltip>
        </Icons>
      </div>
    </Item>
  );
};

export default Subject;
