import React, { useState } from 'react';
import TopThree from './TopThree'; // Import the TopThree component
import { peopleData } from "../hardcoded";

const Likes = () => {
  const [data, setData] = useState(peopleData); // Use peopleData as initialData

  const handleLike = (personId) => {
    const updatedData = data.map(person =>
      person.id === personId ? { ...person, likes: person.likes + 1 } : person
    );
    setData(updatedData);
    // Sort the data based on likes in descending order
    updatedData.sort((a, b) => b.likes - a.likes);
  };

  return (
    <div>
      <h1>Leaderboard</h1>
      {/* Render the top three using the TopThree component */}
      <TopThree topThreeData={data.slice(0, 3)} />
      <div className="flex flex-wrap">
        {data.map(person => (
          <div key={person.id} className="h-[260px] w-[130px] p-2 bg-yellow-500 border-2 rounded-md border-orange-500 m-2">
            <img className="w-[125px] h-[150px]" src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <div className="flex justify-center items-center text-xs flex-col">
              <p>{person.goal1}</p>
              <p>{person.goal2}</p>
              <p>{person.goal3}</p>
              <div className="flex items-center mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleLike(person.id)}>Like</button>
                <p className="ml-2">Likes: {person.likes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Likes;
