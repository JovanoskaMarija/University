import React from "react";

import {
  IconAdd,
  IconPaw,
  IconTshirt,
  IconHamburger,
  IconCafe,
  IconGuitar,
  IconMenu
} from "../icons/Icons";

import {Item, SideColor, Icons, Tooltip} from '../styles/SubjectStyle'
const Subject = props => {
  return (
    <Item>
      <SideColor program={props.data.program} />

      <div>
        <h2>
          {props.data.name}
          <IconAdd />
        </h2>
        <h4>{props.data.professor}</h4>
        <p>{props.data.description}</p>
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
          {/* {props.data.attendance} */}
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
          {/* {props.data.attendance} */}
        </Icons>
      </div>
    </Item>
  );
};

export default Subject;
