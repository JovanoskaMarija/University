import React, { useState } from "react";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { OverlayPanel } from "primereact/overlaypanel";
import { Link } from "@reach/router";
import Range from "./Range";
import { IconPaw, IconHamburger, IconGuitar, IconMenu } from "../icons/Icons";

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
import { Separator } from "../styles/FiltersStyle";

const Subject = props => {
  const [showOptions, setShowOptions] = useState({});

  return (
    <Item>
      {/* SideColor shows the level of difficulty */}
      <SideColor
        isSelected={props.data.isSelected}
        difficulty={props.data.difficulty}
      />
      <Content>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Header>
            <DifficultyLevel
              difficulty={props.data.difficulty}
              isSelected={props.data.isSelected}
            >
              {props.data.difficulty}
            </DifficultyLevel>

            <p>{props.data.name} </p>
          </Header>
          <Separator>
            <Button
            icon="pi pi-ellipsis-h"
            onClick={e => showOptions.op.toggle(e)}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent"
            }}
          />
          <OverlayPanel ref={el => (showOptions.op = el)} dismissable={true}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ToggleButton
                style={{ width: "230px", height: "30px" }}
                name="isSelected"
                onLabel="Remove from my list"
                offLabel="Add to my list"
                //because checkbox is uncontrolled we set default checked value to be equal to the value assigned in the mock
                checked={props.data.isSelected}
                onChange={e => {
                  props.handleSelected(props.data._id);
                }}
                tooltip="Select"
                tooltipOptions={{ position: "bottom" }}
              />
              <Separator></Separator>
              <ToggleButton
                tooltip="Passed"
                tooltipOptions={{ position: "bottom" }}
                style={{ width: "230px", height: "30px" }}
                name="passed"
                onLabel="Unmark as passed"
                offLabel="Mark as passed"
                checked={props.data.isPassed}
                onChange={e => {
                  props.handlePassed(props.data._id);
                }}
              />
              <Separator></Separator>
              <ToggleButton
                style={{ width: "230px", height: "30px" }}
                name="isCurrentlyListening"
                onLabel="Unmark as currently listening"
                offLabel="Mark as currently listening"
               checked={props.data.isCurrentlyListening}
                onChange={e => {
                  props.handleCurrentlyListening(props.data._id);
                }}
                tooltip="Currently Listening"
                tooltipOptions={{ position: "bottom" }}
              />
            </div>
          </OverlayPanel>
          </Separator>
          
        </div>
        <div>
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
