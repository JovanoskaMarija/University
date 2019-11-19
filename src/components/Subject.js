import React from "react";
import { ToggleButton } from "primereact/togglebutton";
import { Link } from "@reach/router";
import Range from "./Range";
// import { Button } from "primereact/button";
// import { OverlayPanel } from "primereact/overlaypanel";
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
  Tooltip,
  DifficultyLevel
} from "../styles/SubjectStyle";

const Subject = props => {
  return (
    <Item>
      {/* SideColor shows the level of difficulty */}
      <SideColor
        isSelected={props.data.isSelected}
        difficulty={props.data.difficulty}
      />
      <Content>
        <Header isSelected={props.data.isSelected}>
          <DifficultyLevel
          
            difficulty={props.data.difficulty}
            isSelected={props.data.isSelected}
          >
            {props.data.difficulty}
          </DifficultyLevel>

          <p>{props.data.name} </p>
          <div>
            {/* <Button
              icon="pi pi-ellipsis-h"
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
              onClick={e => this.op.toggle(e)}
            /> */}
            <ToggleButton
              style={{ width: "80px", height: "30px" }}
              name="isSelected"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              // onLabel="Unselect Subject"
              // offLabel="Select Subject"
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
              // style={{ width: "160px", height: "30px" }}
              style={{ width: "80px", height: "30px" }}
              name="passed"
              onIcon="pi pi-check"
              offIcon="pi pi-times"
              // onLabel="Unmark as passed"
              // offLabel="Mark as passed"
              checked={props.data.isPassed}
              onChange={e => {
                props.handlePassed(props.data._id);
              }}
            />
          </div>
        </Header>
        <div>
            Popularity: {props.data.studentsAttending}
          <Description>
            {props.data.description}
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
          <Tooltip>
            <span data-tooltip="Program">
              <IconPaw />
            </span>
          </Tooltip>
        </Icons>
        <br />
        <Range data={props.data} />
      </Content>
    </Item>
  );
};

export default Subject;
