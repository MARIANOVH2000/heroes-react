import { heroes } from "../data/heroes";

export const hetHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`publisher ${publisher} NO es correcto`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};
