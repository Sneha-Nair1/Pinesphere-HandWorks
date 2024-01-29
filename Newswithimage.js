document.addEventListener('DOMContentLoaded', initializeNews);

async function fetchNews() {
    const apiKey = '39ad9de4-d972-4195-9c83-b7d4c590a260'; // Replace with your NewsAPI key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
            return data.articles;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching news:', error.message);
        return [];
    }
}

function initializeNews() {
    const newsContainer = document.getElementById('newsContainer');

    fetchNews().then(newsData => {
        newsData.forEach(newsItem => {
            const newsElement = createNewsElement(newsItem);
            newsContainer.appendChild(newsElement);
        });
    });
}

function createNewsElement(newsItem) {
    const newsWrapper = document.createElement('div');
    newsWrapper.className = 'news-item';

    const imageElement = document.createElement('img');
    imageElement.src = newsItem.urlToImage || 'placeholder.jpg'; // Use a placeholder image if actual image not available
    imageElement.alt = 'News Image';

    const newsContent = document.createElement('div');
    newsContent.className = 'news-content';

    const titleElement = document.createElement('h2');
    titleElement.textContent = newsItem.title || 'No Title';

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = newsItem.description || 'No description available.';

    newsContent.appendChild(titleElement);
    newsContent.appendChild(descriptionElement);

    newsWrapper.appendChild(imageElement);
    newsWrapper.appendChild(newsContent);

    return newsWrapper;
}
