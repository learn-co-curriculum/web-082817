import React from "react";

function hoc(RenderedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <RenderedComponent />
        </div>
      );
    }
  };
}
