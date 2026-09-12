export type PosterFeature = {
  id: string;
  title: string;
  image: string;
  alt: string;
  paragraphs: string[];
};

export type GalleryPoster = {
  id: string;
  title: string;
  image: string;
  alt: string;
};

/** Nine featured parody one-sheets, blog order. */
export const featuredPosters: PosterFeature[] = [
  {
    id: 'bttf',
    title: 'Back to the Future: Where the Boeing 747 Flight Path Begins',
    image: '/posters/bttf.jpg',
    alt: 'Golden Wings Boeing 747 reimagined as Back to the Future movie poster',
    paragraphs: [
      'The countdown started with Back to the Future, because Golden Wings is a film about going back in time. Back to the era when the Boeing 747 interior was a destination in itself. Back to 1971, when a young woman from Hungry Hollow, Iowa walked onto an American Airlines 747 for the first time and never looked back.',
      "Roads? Where we're going, we don't need roads. Golden Wings is paved with memories.",
    ],
  },
  {
    id: 'forrest-gump',
    title: 'Forrest Gump: The Flight Attendant Who Just Kept Showing Up',
    image: '/posters/forrest-gump.jpg',
    alt: 'Boeing 747 flight attendant Forrest Gump parody poster',
    paragraphs: [
      'A bench on a runway. A Boeing 747 lifting off into a golden sky. A flight attendant watching it go.',
      "Sometimes the most extraordinary flight attendant stories belong to ordinary people who just kept showing up. Robyn Stewart didn't set out to become the longest-serving flight attendant in American Airlines history. She just never stopped flying. Fifty-four years later, she's still here.",
    ],
  },
  {
    id: 'up',
    title: 'Up: Fly High, Hold Fast to Dreams',
    image: '/posters/up.jpg',
    alt: 'Golden Wings Boeing 747 Up movie poster with balloons',
    paragraphs: [
      "This poster took the longest to get right, because you can't mess Up. A thousand balloons lifting a Boeing 747 into the clouds. A compass. A globe. Maps and a leather journal. The artifacts of a flight attendant career spent in motion, from the Boeing 747 cabin to every corner of the world.",
      'Fly high, hold fast to dreams.',
    ],
  },
  {
    id: 'top-gun',
    title: 'Top Gun: Maverick at Gate B12',
    image: '/posters/top-gun.jpg',
    alt: 'Boeing 747 flight attendant Top Gun parody poster on tarmac',
    paragraphs: [
      "Robyn Stewart didn't need a fighter jet to be a maverick. She just needed a boarding pass and five decades of showing up. The golden hour tarmac, the jets in the background, and a flight attendant walking toward the Boeing 747 like she owns the whole runway.",
      'Because she does.',
    ],
  },
  {
    id: 'barbie',
    title: 'Barbie: Aviation Barbie in a Historically Accurate Boeing 747',
    image: '/posters/barbie.jpg',
    alt: 'Golden Wings Aviation Barbie Boeing 747 movie poster',
    paragraphs: [
      'This one is a personal favorite. We went back to the archives and found a photo of Robyn from 1971, her first year in the Boeing 747 cabin, wearing her original cream-and-navy American Airlines uniform. The Barbie on the poster wears a historically accurate recreation of that exact uniform, down to the piping.',
      "If Robyn Stewart isn't Flight Attendant Barbie, nobody is.",
      'Jock Bethune, the 81-year-old aviation legend known as "Mr. American Airlines," got the Ken treatment too. His review? "Love it!!!" Three exclamation points. From a man of that generation, that\'s a standing ovation.',
    ],
  },
  {
    id: 'roger-rabbit',
    title: 'Who Flew Roger Rabbit? A Boeing 747 in Toontown',
    image: '/posters/roger-rabbit.jpg',
    alt: 'Who Flew Roger Rabbit cartoon Boeing 747 poster',
    paragraphs: [
      "Who Framed Roger Rabbit mixed animation and live action in a way nobody had ever seen before. That's exactly what Golden Wings does with these posters: mixing two worlds that shouldn't coexist and making magic anyway.",
      'The Boeing 747 went full cartoon for this one, reimagined as an anthropomorphic aircraft in the style of Benny the Cab, with Roger hanging out the cockpit window. The flight attendant stands in the foreground, arms crossed, completely unbothered by the chaos. Professional as always. That\'s a flight attendant story in itself.',
    ],
  },
  {
    id: 'poltergeist',
    title: 'Poltergeist: 50 Year Fright Path',
    image: '/posters/poltergeist.jpg',
    alt: 'Golden Wings Boeing 747 Poltergeist parody poster',
    paragraphs: [
      '"Their legacy is here. They\'re here."',
      "This one comes with a real flight attendant story. During one of Robyn's very first Boeing 747 assignments flying to San Juan, a passenger brought a deceased relative in a garment bag. Not checked luggage. In the cabin. From New York to Puerto Rico. Some stories were too wild even for the documentary, but they live on in poster form.",
      'Tia did NOT have a boarding pass.',
    ],
  },
  {
    id: 'troop',
    title: 'Troop Golden Wings: Den Mother of the Skies',
    image: '/posters/troop.jpg',
    alt: 'Troop Golden Wings flight attendant Beverly Hills parody poster',
    paragraphs: [
      "Troop Beverly Hills is glamour as rebellion. It's being told you don't belong and showing up anyway in a bedazzled beret. Sound familiar?",
      "This is the only poster in the series where the headshots were fully incorporated into the world. Every other poster keeps Robyn and Jock in framed photos at the bottom. But you can't stand outside Troop Beverly Hills. You have to BE in it. So Robyn became the Den Mother of the Skies. And Jock earned the Martini Merit Badge.",
      'This one is a masterpiece. We said it.',
    ],
  },
  {
    id: 'lego',
    title: 'The LEGO Movie: From Hungry Hollow to the World',
    image: '/posters/lego.jpg',
    alt: 'Golden Wings Boeing 747 LEGO Movie parody poster',
    paragraphs: [
      'LEGO began in a small carpenter\'s workshop in Billund, Denmark and grew into something the whole world recognized. Golden Wings traces a remarkably similar path, starting in the tiny town of Hungry Hollow, Iowa and traveling the globe aboard the iconic Boeing 747.',
      "When you flew on that bird, you couldn't help but feel like everything is awesome.",
    ],
  },
];

const featuredIds = new Set(featuredPosters.map((p) => p.id));

/** Secondary gallery: remaining parody one-sheets (not in the nine, not official/promo). */
export const morePosters: GalleryPoster[] = [
  { id: 'airplane', title: 'Airplane!', image: '/posters/airplane.jpg', alt: 'Golden Wings Airplane parody poster' },
  { id: 'avatar', title: 'Avatar', image: '/posters/avatar.jpg', alt: 'Golden Wings Avatar parody poster' },
  { id: 'chicago', title: 'Chicago', image: '/posters/chicago.jpg', alt: 'Golden Wings Chicago parody poster' },
  { id: 'close-encounters', title: 'Close Encounters', image: '/posters/close-encounters.jpg', alt: 'Golden Wings Close Encounters parody poster' },
  { id: 'et', title: 'E.T.', image: '/posters/et.jpg', alt: 'Golden Wings E.T. parody poster' },
  { id: 'giant', title: 'Giant', image: '/posters/giant.jpg', alt: 'Golden Wings Giant parody poster' },
  { id: 'gremlin-wings', title: 'Gremlin Wings', image: '/posters/gremlin-wings.jpg', alt: 'Golden Wings Gremlin Wings parody poster' },
  { id: 'harry-potter', title: 'Harry Potter', image: '/posters/harry-potter.jpg', alt: 'Golden Wings Harry Potter parody poster' },
  { id: 'id4', title: 'Independence Day', image: '/posters/id4.jpg', alt: 'Golden Wings Independence Day parody poster' },
  { id: 'indiana-jones', title: 'Indiana Jones', image: '/posters/indiana-jones.jpg', alt: 'Golden Wings Indiana Jones parody poster' },
  { id: 'jaws', title: 'Jaws', image: '/posters/jaws.jpg', alt: 'Golden Wings Jaws parody poster' },
  { id: 'jumanji', title: 'Jumanji', image: '/posters/jumanji.jpg', alt: 'Golden Wings Jumanji parody poster' },
  { id: 'jurassic-park', title: 'Jurassic Park', image: '/posters/jurassic-park.jpg', alt: 'Golden Wings Jurassic Park parody poster' },
  { id: 'lotr', title: 'The Lord of the Rings', image: '/posters/lotr.jpg', alt: 'Golden Wings Lord of the Rings parody poster' },
  { id: 'minecraft', title: 'Minecraft', image: '/posters/minecraft.jpg', alt: 'Golden Wings Minecraft parody poster' },
  { id: 'nine-to-five', title: '9 to 5', image: '/posters/nine-to-five.jpg', alt: 'Golden Wings 9 to 5 parody poster' },
  { id: 'planet-apes', title: 'Planet of the Apes', image: '/posters/planet-apes.jpg', alt: 'Golden Wings Planet of the Apes parody poster' },
  { id: 'scream', title: 'Scream', image: '/posters/scream.jpg', alt: 'Golden Wings Scream parody poster' },
  { id: 'star-wars', title: 'Star Wars', image: '/posters/star-wars.jpg', alt: 'Golden Wings Star Wars parody poster' },
  { id: 'toy-story', title: 'Toy Story', image: '/posters/toy-story.jpg', alt: 'Golden Wings Toy Story parody poster' },
  { id: 'tron', title: 'Tron', image: '/posters/tron.jpg', alt: 'Golden Wings Tron parody poster' },
  { id: 'wicked', title: 'Wicked', image: '/posters/wicked.jpg', alt: 'Golden Wings Wicked parody poster' },
  { id: 'xanadu', title: 'Xanadu', image: '/posters/xanadu.jpg', alt: 'Golden Wings Xanadu parody poster' },
].filter((p) => !featuredIds.has(p.id));

export const officialPoster = {
  image: '/posters/official-4x5.jpg',
  alt: 'Official Golden Wings key art, 4x5',
  download: '/posters/official-4x5.jpg',
};
