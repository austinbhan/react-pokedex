export async function getPokemon(filter) {
  const rawData = await fetch(`/.netlify/functions/pokemon?pokeQuery=${filter}`);

  const data = await rawData.json();

  return data;
} // No different than when we were using them for Supabase. Only grabs data from somewhere and giving it to you in React

export async function getBusinesses(filter) {
  const rawData = await fetch(`/.netlify/functions/yelp?yelpQuery=${filter}`);

  const data = await rawData.json();

  return data;
}