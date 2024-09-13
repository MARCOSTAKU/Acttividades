interface IPokemon {
    id: number;
    name: string;
    abilities: Array<{
        ability: {
            name: string;
        };
    }>;
}
async function fetchData<Type>(url: string): Promise<Type> { 
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        throw error;
    }
}
async function fetchPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    try {
        const pokemonData = await fetchData<IPokemon>(url); 
        console.log('Nombre:', pokemonData.name);
        console.log('Habilidades:', pokemonData.abilities.map(ability => ability.ability.name).join(', '));
    } catch (error) {
        console.error('Error:', error);
    }
}
export {
    fetchData,
    fetchPokemon,
    IPokemon
}