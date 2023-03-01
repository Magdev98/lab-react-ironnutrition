import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import foodList from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodList);

  return (
    <div className="App">
      <h2>Food List</h2>
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
