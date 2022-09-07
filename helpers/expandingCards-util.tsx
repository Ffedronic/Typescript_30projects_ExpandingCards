export type CardProps = {
  id: string;
  url: string;
  title: string;
};

export const expandingCardsImages = [
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

export function isActive(event: MouseEvent & HTMLImageElement) {
  removeActive();
  
  const id = getId(event.target as MouseEvent & HTMLImageElement);
  
  addActive(id);
}

function getId(target: MouseEvent & HTMLImageElement) {
  const id: string = target.getAttribute("id")!.replace("image-", "");
  
  return id;
}

function addActive(id: string) {
  const panel: HTMLElement = document.getElementById(`panel-${id}`)!;
  
  panel.classList.add("active");
}

function removeActive() {
  const panels: NodeListOf<Element> = document.querySelectorAll(".panel")!;
  
  for (let panel of panels) {
    panel.classList.remove("active");
  }
}
