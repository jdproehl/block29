import { useState } from "react";

const cohortName = "2309-FTB-ET-WEB-PT";
export const BaseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function newPlayerForm() {

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState ('bench');
    const [imageUrl, setImageUrl] = useState("");

async function handleAddPlayer (event) {
    event.preventDefault ();

    try {
        const response = await fetch (`${BaseUrl}/players`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                breed,
                status,
                imageUrl,
            }),
        })
        const result = await response.json();
        console.log ('handleAddPlayer', result);
        window.location.reload();
    } catch (error) {
        console.error("Cannot add player");
    }
}

    return (
    <div>
        <h1>New Player Form</h1>
    <form>
    <label>
      Puppy's Name:
      <input type="text" name="name" onChange={(event) => setName(event.target.value)}/>
    </label>
    <label>
      Puppy's Breed:
      <input type="text" name="breed" onChange={(event) => setBreed(event.target.value)}/>
    </label>
    <label>
      Puppy's Game Day Status:
      <input type="text" name="status" onChange={(event) => setStatus(event.target.value)}/>
    </label>
    <label>
      Puppy's Picture:
      <input type="text" name="imageUrl" onChange={(event) => setImageUrl(event.target.value)}/>
    </label>
    <button className="button" onClick={handleAddPlayer}>Add Puppy to the Roster!</button>
  </form>
      </div>
    );
  }