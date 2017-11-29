import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  background-color: #ffffff;
  margin: 8px 0;
`;

const EditButton = styled.button`
  background-color: #ffffff;
  cursor: pointer;
  padding: 4px;
  margin: 0 8px;
  border: none;
`;

const EditPanel = ({ className, onEdit, onRemove }) => (
  <Panel className={className}>
    <EditButton onClick={onEdit}>
      <i className="fa fa-pencil-square-o" aria-hidden="true" />
    </EditButton>
    <EditButton onClick={onRemove}>
      <i className="fa fa-trash-o" aria-hidden="true" />
    </EditButton>
  </Panel>
);

EditPanel.propTypes = {
  className: PropTypes.string,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
};

EditPanel.defaultProps = {
  className: "",
  onEdit: () => {},
  onRemove: () => {}
};

export default EditPanel;
