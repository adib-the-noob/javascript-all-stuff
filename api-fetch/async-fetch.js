async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();