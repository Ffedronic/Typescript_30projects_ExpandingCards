import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";

const Home: NextPage = () => {
  const expandingCardsImages = [
    {
      id: "1",
      name: "Explore The World",
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: "2",
      name: "Wild Forest",
      url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: "3",
      name: "Sunny Beach",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    },
    {
      id: "4",
      name: "City on Winter",
      url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    },
    {
      id: "5",
      name: "Mountains - Clouds",
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  ];

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
        {expandingCardsImages.map((item)=> <Card key={item.id} id={item.id} title={item.name} url={item.url}/>)}
      </section>
    </div>
  );
};

export default Home;
