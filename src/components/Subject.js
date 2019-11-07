import React from "react";
import { ToggleButton } from "primereact/togglebutton";
import { Link } from "@reach/router";
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
  Content,
  Header,
  Description,
  Icons,
  Tooltip
} from "../styles/SubjectStyle";

const Subject = props => {

  console.log(props.data.isSelected)

  return (
    <Item>
      <SideColor isSelected={props.data.isSelected} />
      <Content>
        <Header isSelected={props.data.isSelected}>
          <h2>{props.data.name} </h2>
          <div>
            <ToggleButton
              style={{ width: "80px", height: "35px"}}
              name="isSelected"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              //because checkbox is uncontrolled we set default checked value to be equal to the value assigned in the mock
              checked={props.data.isSelected}
              onChange={e => {
                props.handleSelected(props.data._id);
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

        <h3>{props.data.professor}</h3>
        <div>
          <Description>{props.data.description}
          <Link to={`/subjects/${props.data._id}`}>
            <span>Read More</span>
          </Link>
          </Description>
         
        </div>
        <Icons>
          <Tooltip>
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
      </Content>
    </Item>
  );
};

export default Subject;
