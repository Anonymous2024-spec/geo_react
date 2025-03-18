import propTypes from "prop-types";
function Lists() {
  const fruits = [
    { name: "Apple", calories: 96 },
    { name: "Orange", calories: 65 },
    { name: "Banana", calories: 45 },
    { name: "Coconut", calories: 20 },
    { name: "Pineapple", calories: 70 },
  ];

  const lisItems = fruits.map((fruit) => (
    <li>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));

  return <ul>{lisItems}</ul>;
}

Lists.propTypes = {};
export default Lists;
