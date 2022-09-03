import styles from "../styles/ExpandingCard.module.css"

function ExpandingCards() {
  return (
    <article className={styles.panel} style={{backgroundImage: `url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`}}>
      <h2>expanding Cards</h2>
    </article>
  );
}

export default ExpandingCards;
