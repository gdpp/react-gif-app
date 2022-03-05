import React, { useState } from 'react';

//Components
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = () => {
  const [categories, setCategories] = useState(['One Punch Man']);

  return (
    <div className="container">
      <h1 className="title">Gif App</h1>
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default GifApp;
