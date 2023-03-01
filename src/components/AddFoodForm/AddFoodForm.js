import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const { handleAddFood } = props;

  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(0);

  const handleNameChange = (event) => setName(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);
  const handleServingsChange = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const foodToAdd = {
      name,
      calories,
      image,
      servings,
    };

    handleAddFood(foodToAdd);
    setName('');
    setCalories('');
    setImage('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="text" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="text" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
