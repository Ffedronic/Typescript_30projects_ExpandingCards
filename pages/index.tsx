import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Expanding Cards</title>
        <meta
          name="description"
          content="Expanding cards created from the Brad Traversy's example."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HomePage</h1>
      <section className="container">
        <div
          id={`panel-1`}
          className="panel"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
          }}
        >
          <h2>Explore The World</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
