interface CardData {
  id: number;
  title: string;
  url: string;
}

export function isValid(urlToTest: string) {
  try {
    new URL(urlToTest);
    return urlToTest;
  } catch {
    const error =
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
    return error;
  }
}

export const backgroundImages: CardData[] = [
  {
    id: 1,
    title: "A bee",
    url: isValid(
      "https://cdn.pixabay.com/photo/2022/08/28/09/29/bee-7416162_960_720.jpg"
    ),
  },
  {
    id: 2,
    title: "A bread",
    url: isValid(
      "https://cdn.pixabay.com/photo/2012/02/29/12/17/bread-18987_960_720.jpg"
    ),
  },
  {
    id: 3,
    title: "A bird",
    url: isValid(
      "https://cdn.pixabay.com/photo/2022/08/10/06/15/birds-7376432_960_720.jpg"
    ),
  },
  {
    id: 4,
    title: "A lion",
    url: isValid(
      "https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_960_720.jpg"
    ),
  },
  {
    id: 5,
    title: "A Cafe in Greece",
    url: isValid(
      "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg"
    ),
  },
];
