import { useEffect, useState } from "react";
import { getAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

const cohortName = "2309-FTB-ET-WEB-PT";
export const BaseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export function AllPlayers() {
  const [playerRoster, setPlayerRoster] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(`${BaseUrl}/players`);
        const result = await response.json();
        setPlayerRoster(result.data.players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    }
    getPlayers();
  }, []);

  const handleSearch = () => {
    // Filter players based on the search query
    const filteredPlayers = playerRoster.filter((player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPlayerRoster(filteredPlayers);
  };

  const handleDelete = (playerId) => { // Will not delete the player from the API, just from the current session.
    const updatedRoster = playerRoster.filter((player, idx) => idx !== playerId);
    setPlayerRoster(updatedRoster);
  };


  return (
    <div>
      <h1>All Players on the Roster!</h1>

      <input
        type="text"
        placeholder="Search for players"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ol>
        {playerRoster.map((player, idx) => (
          <li key={idx}>
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} />
            <button
              onClick={() => {
                const playerId = player.id;
                nav(`/players/${playerId}`);
              }}
            >
              See Details!
            </button>
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
