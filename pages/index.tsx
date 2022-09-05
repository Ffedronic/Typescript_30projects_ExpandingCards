import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";

const Home: NextPage = () => {
  
  const expandingCardsImages = [
    {
      id: "1",
      name: "Explore The World",
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      id: "2",
      name: "Wild Forest",
      url: "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
    },
    {
      id: "3",
      name: "Sunny Beach",
      url: "https://img.freepik.com/photos-premium/astronaute-dans-espace-exterieur-ouvert-planete-terre-etoiles-fournissent-arriere-plan-formant-espace-au-dessus-planete-terre-lever-du-soleil-coucher-du-soleil-notre-maison-iss-elements-image-fournie-par-nasa_150455-16829.jpg?w=2000",
    },
    {
      id: "4",
      name: "City on Winter",
      url: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
    },
    {
      id: "5",
      name: "Mountains - Clouds",
      url: "https://www.viago.ca/wp-content/uploads/2015/07/Plage-1024x684.jpg",
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
