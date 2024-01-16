import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePlayer } from "../API";

const cohortName = "2309-FTB-ET-WEB-PT";
export const BaseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export function SinglePlayerView() {
    const [player, setPlayer] = useState({})
    const {playerId} = useParams()
    const [id, setId] = useState()

    useEffect(() => {
        async function getPlayer(){
            const response = await fetch(`${BaseUrl}/players/${playerId}`);
            const result = await response.json();
           // const playerData = await getSinglePlayer(id)
            setPlayer(result.data.player)
            console.log(result.data.player);
        }
        getPlayer()
    }, [id])

    return (
        <div>
            <p>Name: {player.name}</p>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Team: {player.teamId}</p>
            <img src={player.imageUrl} alt={player.name} />
        </div>
    )
}