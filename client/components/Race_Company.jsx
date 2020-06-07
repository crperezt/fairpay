import React from "react";
import { Container } from "@material-ui/core";

function Race(props) {
  return (
    <React.Fragment>
      <div hidden={props.value !== props.index || props.view === 1}>
        <div className="data_display_div">
          <h1>Inside race comparisons</h1>
          <h1>{props.graph}</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Race;
