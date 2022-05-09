import React from "react";

function Footer(props) {
  return (
    <ul>
      {props.footerInfo.map(info => {
        return <li>{info}</li>;
      })}
    </ul>
  );
}
export default Footer;
