import { MouseEventHandler } from "react";

type Props = {
  id: string;
  url: string;
  title: string;
  isActive: MouseEventHandler<HTMLImageElement>;
};

function Card(props: Props) {
  const { id, title, url, isActive } = props;
  return (
    <div
      id={`panel-${id}`}
      className="panel"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h2>{title}</h2>
      <img onClick={isActive} id={`image-${id}`} src={url} alt={title} />
    </div>
  );
}

export default Card;
