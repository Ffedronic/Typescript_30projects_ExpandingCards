import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Card from "../components/Card";
import { expandingCardsImages } from "../helpers/expandingCards-util"

const Home: NextPage = () => {
  
  useEffect(() => {
    const panels: NodeListOf<Element> = document.querySelectorAll(".panel");
    panels[2].classList.add("active");
  }, []);

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
      <h1 className="title">Expanding Cards</h1>
      <section className="container">
        {expandingCardsImages.map((item) => (
          <Card key={item.id} id={item.id} title={item.name} url={item.url} />
        ))}
      </section>
    </div>
  );
};

export default Home;
