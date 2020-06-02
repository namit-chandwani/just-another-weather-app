import React from "react";
import Alert from "@material-ui/lab/Alert";

function EntryScreen(props) {
  return (
    <div style={{ color: !props.dark_mode && "#ffffff" }}>
      {props.error && (
        <Alert variant="filled" severity="error">
          Please enter a valid Location...
        </Alert>
      )}
      <h1 style={{ textAlign: "center" }}>
        Enter a Location Name in the search bar to continue...
      </h1>
    </div>
  );
}

export default EntryScreen;
