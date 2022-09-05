import React from "react";

type Props = {
  id: string;
  url: string;
  title: string;
};

function Card(props:Props) {
    const {id, title, url} = props
  return (
    <div
      id={`panel-${id}`}
      className="panel"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
