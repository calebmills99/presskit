export type Person = {
  slug: string;
  name: string;
  role: string;
  eyebrow: string;
  description: string;
  paragraphs: string[];
  note?: string;
  inFilm: boolean;
};

export const people: Person[] = [
  {
    slug: 'robyn-stewart',
    name: 'Robyn Stewart',
    role: 'Subject · American Airlines flight attendant since 1971',
    eyebrow: 'Mother',
    description:
      'Robyn Stewart, American Airlines flight attendant since 1971 and the subject of Golden Wings: Stewardess to Sky Queen.',
    inFilm: true,
    paragraphs: [
      'Robyn Stewart has flown for American Airlines since 1971. Mother. Gold Wings. More than fifty years in the cabin.',
      'She began before the Boeing 747\'s first commercial passenger flight and stayed aloft through deregulation, the golden age and its hangover, and September 11th. She buried her husband Henry in Frankfurt, walked into rehab, walked back out, and returned to the job she loved.',
      'Her son Caleb grew up in airport terminals and hotel lobbies, raised by a mother whose office was at 35,000 feet. This film is about her life in the air and the family that worked there with her.',
      'She trained at American Airlines Stewardess College beginning June 24, 1971. The public site keeps her story as she tells it: seniority, Rome and Tokyo and Frankfurt on the board, and a career that outlasted the men who said she would not last.',
    ],
  },
  {
    slug: 'jay-r-ricks',
    name: 'Jay R. Ricks',
    role: 'Papa · WWII aircrew · American Airlines flight engineer · 747 training',
    eyebrow: 'Papa',
    description:
      'Jay R. Ricks, Burlington boy, WWII aircrew with the 416th Bomb Group, American Airlines flight engineer, and builder of AA 747 training.',
    inFilm: true,
    paragraphs: [
      'Jay R. Ricks was Robyn\'s father and Caleb\'s grandfather. The family still calls him Papa. Before the jumbo jet, he was a Burlington boy who enlisted on September 4, 1940, before Pearl Harbor.',
      'In World War II he served with the 671st Bombardment Squadron, 416th Bomb Group, Ninth Air Force. The squadron flew Douglas A-20 Havocs and later A-26 Invaders. Jay\'s European window ran roughly April to October 1945. Discharge papers do not pin a single crew title, so the public record keeps navigator or bombardier as the likely aircrew role without forcing one.',
      'Some people found it odd that he kept an electric razor beside a recliner. It was a cockpit habit: above the flak, a face had to be smooth or the oxygen mask would not seal. Shave or die. On the ground that same precision turned into swing. Paired with Maxine, he danced well enough that Louis Armstrong once called him on stage.',
      'He made flight engineer at American Airlines by 1950, the same year Robyn was born. He later helped build American\'s Boeing 747 training program at the Flight Academy. Jock Bethune, who worked that program with him, put it plainly: Jay was the best.',
      'By 1971 Robyn was flying the same jetstreams. Not because he asked. Because that is how this family moves. The Golden Wings public bridge starts here: Papa\'s training, Robyn among early cabin crew, and a Burlington boy\'s precision carried into the golden age of the 747.',
    ],
  },
  {
    slug: 'jock-bethune',
    name: 'Jock Bethune',
    role: 'On camera · American Airlines media production · living witness',
    eyebrow: 'Witness',
    description:
      'Jock Bethune, American Airlines media production specialist interviewed for Golden Wings as a living witness to the 747 training era.',
    inFilm: true,
    paragraphs: [
      'Jock Bethune worked with Jay R. Ricks at American Airlines. Longtime voice of the airline in media production, he appears on camera to describe what Jay built during the jumbo jet rollout and why it mattered beyond one carrier.',
      'He was interviewed in August 2023, including material tied to the C.R. Smith Museum in the Dallas-Fort Worth area.',
      'On the parody poster series he is the recurring credit that keeps changing titles. In the documentary he is the living witness who can still say Jay\'s name out loud.',
    ],
  },
  {
    slug: 'millie-alford',
    name: 'Millie Alford',
    role: 'First director, American Airlines Stewardess College · development research',
    eyebrow: 'Stewardess College',
    description:
      "Rose Mildred 'Millie' Alford (1922-2000), pioneering American Airlines flight-service executive and first director of the Stewardess College.",
    inFilm: false,
    note: 'Not in the current picture-locked cut. Stewardess College / Millie Alford segment is in development. Only green-lit facts from verified_fact_sheet.md appear here.',
    paragraphs: [
      "Rose Mildred 'Millie' Alford (1922-2000) was a pioneering American Airlines flight-service executive and the first director of the airline's Stewardess College when it opened in Fort Worth in 1957.",
      'C.R. Smith appointed her to lead that training facility. She began as an American Airlines stewardess, rose into management, served about thirty-three years with the airline, and received the American Airlines Distinguished Service Award in 1963.',
      'Peter Stackpole photographed her for LIFE in 1958 as head of school at graduation. The August 25, 1958 LIFE essay "Glamor Girls of the Air" places her in that world. In 1964 she was a charter member of the FAA Women\'s Advisory Committee on Aviation. By 1969 trade press described her as the highest-ranking woman at any U.S. carrier while directing stewardess service for American.',
      'She appears on camera in a 1968 stewardess-college documentary in the Golden Wings archive. Robyn Stewart trained at the college beginning June 24, 1971. Robyn knew Millie by reputation and graduation presence: Millie attended graduations, stood for class photos, and called the trainees her girls. That institutional memory belongs in the research beside the film, not as a claim of private friendship.',
      'University of Montevallo Class of 1942; Distinguished Alumni Award, 1952. Memorial service June 15, 2000 at the American Airlines Training and Conference Center (Stewardess College) in Fort Worth.',
    ],
  },
];

export function getPerson(slug: string) {
  return people.find((p) => p.slug === slug);
}
