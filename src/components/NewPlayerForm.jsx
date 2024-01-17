import { useState } from "react";

const cohortName = "2309-FTB-ET-WEB-PT";
export const BaseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function NewPlayerForm() {
  const initialPlayerState = {
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  };

  const [player, setPlayer] = useState(initialPlayerState);

  async function handleAddPlayer(event) {
    event.preventDefault();

    try {
      const response = await fetch(`${BaseUrl}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      });
      const result = await response.json();
      console.log("handleAddPlayer", result);
    } catch (error) {
      console.error("Cannot add player", error);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayer((prevPlayer) => ({ ...prevPlayer, [name]: value, }));
  };

  return (
    <div>
      <h1>New Player Form</h1>
      <form>
        <label>
          Puppy's Name:
          <input
            type="text"
            name="name"
            value={player.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Puppy's Breed:
          <input
            type="text"
            name="breed"
            value={player.breed}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Puppy's Game Day Status:
          <input
            type="text"
            name="status"
            value={player.status}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Puppy's Picture:
          <input
            type="text"
            name="imageUrl"
            value={player.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        <button className="button" onClick={handleAddPlayer}>
          Add Puppy to the Roster!
        </button>
      </form>
    </div>
  );
}


