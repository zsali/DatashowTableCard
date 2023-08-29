import React from "react";
import { Button } from "react-bootstrap";
import TableComponent from "./TableComponent";

const DataInTable = ({ setHandleDisplay, data }) => {
  return (
    <>
      <Button
        variant="secondary"
        size="lg"
        onClick={() => setHandleDisplay(undefined)}
      >
        Go Back
      </Button>
      <TableComponent data={data} />
    </>
  );
};

export default DataInTable;
