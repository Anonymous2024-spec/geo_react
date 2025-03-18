function Filter({ peopleList, children }) {
  //   const chemists = people.filter((person) => person.profession === "chemist");
  const mappedChemists = peopleList?.map((people) => (
    <li>
      <h2>{people.name}</h2>
      <p>{people.profession}</p>
      {children}
    </li>
  ));
  return <ul>{mappedChemists}</ul>;
}

export default Filter;
