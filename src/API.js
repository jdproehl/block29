const cohortName = "2309-FTB-ET-WEB-PT";
export const BaseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function getAllPlayers() {
    try {
        const response = await fetch(`${BaseUrl}/players`);
        const result = await response.json()
        console.log(result);
        return result
    } catch(error) {
        console.log(error)
    }
}

export async function getSinglePlayer(playerId) {
    try {
        const response = await fetch(`${BaseUrl}/players/${playerId}`)
        const data = await response.json()
        console.log(data);
        return data
    } catch(error) {
        console.log(error)
    }
}
