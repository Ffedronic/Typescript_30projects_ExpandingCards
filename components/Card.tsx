import { CardProps, isActive } from "../helpers/expandingCards-util";

function Card(props: CardProps) {
  const { id, title, url } = props;
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
