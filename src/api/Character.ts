export const fetchCharacters = async (queryKey: any, page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${queryKey[page]}`
  );

  return response.json();
};
