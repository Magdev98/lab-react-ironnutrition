import './App.css';
import React, { useState } from 'react';
//import { Card, Row, Col, Divider, Input, Button } from "antd";
import foodList from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import Search from './components/Search/Search';

function App() {
  const [foods, setFoods] = useState(foodList);

  const handleAddFood = (addFood) => {
    const copy = [...foods];
    copy.push(addFood);
    setFoods(copy);
  };

  // Filter food for search query
  // const searchFood = (query) => {
  // const filteredFood = foods.filter((food) =>
  // food.name.toLowerCase().includes(query.toLowerCase)
  //  );
  // };

  return (
    <div className="App">
      <h2>Food List</h2>
      <AddFoodForm handleAddFood={handleAddFood} />
      <Search /*  handleSearch={handleSearch} */ />

      <div className="display-food">
        {foods.map((food) => {
          /* return (
          <div key={food.name}>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="" />
          </div>
        );
      })} */

          //Iteration 3 | Render a List of FoodBox Components
          return <FoodBox key={food.name} food={food} />;
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
