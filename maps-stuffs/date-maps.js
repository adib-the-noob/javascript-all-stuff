const dates = ['2024-1-10', '2024-2-10', '2024-3-10', '2024-4-10'];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(elements){
    const parts = elements.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}