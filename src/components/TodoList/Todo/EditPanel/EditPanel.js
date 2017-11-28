import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  background-color: #ffffff;
  margin: 8px 0;
`;

const EditButton = styled.button`
  background-color: #ffffff;
  padding: 4px;
  margin: 0 8px;
  border: none;
`;

const EditPanel = ({ className }) => (
  <Panel className={className}>
    <EditButton>
      <i className="fa fa-pencil-square-o" aria-hidden="true" />
    </EditButton>
    <EditButton><i className="fa fa-trash-o" aria-hidden="true"></i></EditButton>
  </Panel>
);

export default EditPanel;
