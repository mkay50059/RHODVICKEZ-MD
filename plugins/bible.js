const axios = require('axios');

// Function to fetch a Bible verse from the Bible API
async function fetchBibleVerse(book, chapter, verse) {
    const url = `https://bible-api.com/${book}%20${chapter}:${verse}`;
    try {
        const response = await axios.get(url);
        return response.data.text;
    } catch (error) {
        console.error("Error fetching the Bible verse:", error);
        return "Sorry, I couldn't find that verse.";
    }
}

// Function to handle the .bible command
async function handleBibleCommand(command) {
    const commandParts = command.split(' ');
    if (commandParts.length !== 2) {
        return "Invalid format. Use .bible <book> <chapter>:<verse>";
    }

    const [book, chapterVerse] = commandParts;
    const [chapter, verse] = chapterVerse.split(':');

    if (!book || !chapter || !verse) {
        return "Invalid format. Use .bible <book> <chapter>:<verse>";
    }

    const verseText = await fetchBibleVerse(book, chapter, verse);
    return `${book} ${chapter}:${verse} - ${verseText}`;
}

// Example usage
const command = ".bible john 3:16";
handleBibleCommand(command).then(console.log);
