export default function getDates() {
    const today = new Date();
    const dates = [today.toLocaleDateString('en-GB', { timeZone: 'Europe/Madrid' })];
    
    for (let i = 1; i <= 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toLocaleDateString('en-GB', { timeZone: 'Europe/Madrid' }));
    }
    
    
    return { today: dates[0], tomorrow: dates[1], next: dates[2], nextNext: dates[3] };
}