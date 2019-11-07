import React from "react";
import { Link } from "@reach/router";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import {
  Details,
  Header,
  Title,
  Info,
  Description
} from "../styles/SubjectDetailsStyle";
import {
  IconPaw,
  IconTshirt,
  IconHamburger,
  IconCafe,
  IconGuitar,
  IconMenu
} from "../icons/Icons";

import { Tooltip } from "../styles/SubjectStyle";

const SubjectDetails = props => {
  const data = props.data;
  const id = props.subjectId;
  const results = data.find(subject => subject._id === id);
  return (
    <Details>
      <Header>
        <Link to="/subjects">
          <Button
            icon="pi pi-arrow-left"
            label="Back"
            style={{ color: "#053D57", backgroundColor: "#97BCC7" }}
          />
        </Link>
        <ToggleButton
          style={{ width: "80px", height: "35px" }}
          name="isSelected"
          onIcon="pi pi-check"
          offIcon="pi pi-times"
          checked={results.isSelected}
          onChange={() => {
            props.handleSelected(results._id);
          }}
          tooltip="Select"
          tooltipOptions={{ position: "bottom" }}
        />
      </Header>

      <Title>
        <p>{results.name}<span>{" - "}{results.professor}</span></p>
      </Title>

      <Info>
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
      </Info>

      <Description>
        <p>
          {results.description}
          {results.description}
          {results.description}
          {results.description}
          {results.description}
        </p>
      </Description>
    </Details>
  );
};

export default SubjectDetails;
