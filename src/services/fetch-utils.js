export async function getPokemon() {
  const rawData = await fetch('http://localhost:8888/.netlify/functions/pokemon');

  const data = await rawData.json();

  return data;
} // No different than when we were using them for Supabase. Only grabs data from somewhere and giving it to you in React