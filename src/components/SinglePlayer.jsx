import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePlayer } from "../API";

export function SinglePlayerView() {
    const [player, setPlayer] = useState({})
    const {playerId} = useParams()
    const [id, setId] = useState()

    useEffect(() => {
        async function getPlayer(){
            const playerData = await getSinglePlayer(id)
            setPlayer(playerData)
        }
        getPlayer()
    }, [id])

    return (
        <div>
            <input type="number" onChange={(event) => setId(event.target.value)} />
            <p>Name: {player.name}</p>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Team: {player.teamId}</p>
            <p>Photo: {player.imageUrl}</p>
        </div>
    )
}