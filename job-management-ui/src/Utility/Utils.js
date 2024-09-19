export const DateFormat = ({ dateString }) => {
    const [year, month, day] = dateString.split('-');

    // Create a new Date object with the extracted values
    const date = new Date(year, month - 1, day); // month is 0-based in JavaScript Date

    // Define the options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Return the formatted date as "September 15, 2024"
    return date.toLocaleDateString('en-US', options);
};