export const filterMonsters = (monsters, payload) => {
  console.log("pay", monsters);
  console.log("sear", payload);

  const filteredArray = monsters.filter(monster => {
    console.log("search", payload);
    return monster.name.toLowerCase().includes(payload.toLowerCase());
  });

  return filteredArray;
};
