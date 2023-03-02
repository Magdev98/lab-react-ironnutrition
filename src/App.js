import './App.css';
import React, { useState } from 'react';
//import { Card, Row, Col, Divider, Input, Button } from "antd";
import foodList from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import Search from './components/Search/Search';

function App() {
  const [foods, setFoods] = useState(foodList);
  const [searchBar, setsearchBar] = useState('');

  const handleAddFood = (addFood) => {
    const copy = [...foods];
    copy.push(addFood);
    setFoods(copy);
  };

  // Iteration 6 - Delete food
  const handleDelete = (el) => {
    const deletedFood = foods.filter((food) => {
      return food.name !== el.name;
    });
    setFoods(deletedFood);
  };

  // Filter food for search query
  const filteredFood = foods.filter((food) => {
    return food.name.toLowerCase().includes(searchBar.toLowerCase());
  });

  return (
    <div className="App">
      <h2>Food List</h2>
      <AddFoodForm handleAddFood={handleAddFood} />
      <Search {...{ searchBar, setsearchBar }} />

      <div className="display-food">
        {filteredFood.map((food) => {
          /* return (
          <div key={food.name}>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="" />
          </div>
        );
      })} */

          //Iteration 3 | Render a List of FoodBox Components
          return (
            <FoodBox key={food.name} food={food} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}

// function Example() {
//   // After importing the components we can render them directly:
//   return (
//     <div>
//       <Row>
//         <Col>
//           <Divider>Fancy Input</Divider>
//           <Input value={""} onChange={() => {}} />
//         </Col>

//         <Col>
//           <Card title={"Fancy Card"}>
//             <Button onClick={() => {}}>Fancy Button</Button>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }

export default App;
