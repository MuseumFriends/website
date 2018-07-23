import React from "react";
import "../../less/components/PageHeading.less";

export default (props) => {
  return (
    <header class="page-heading">
      <span class="logo" />
      <h1>
        {props.name}
      </h1>
    </header>
  )
}