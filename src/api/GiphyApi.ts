import axios from 'axios';

// getting API key from .gitignore protected .env file
const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/search';

export const fetchGifs = async (searchTerm: string) => {
    try {
        // make the API request to fetch GIFs based on the search term
        const response = await axios.get(GIPHY_API_URL, {
            params: {
                ["api_key"]: GIPHY_API_KEY, // object to avoid ESLint error about camelcase, Giphy API needs snakecase
                q: searchTerm,
                limit: 12, // 12 per request
            },
        });

        // return both the GIFs and the formatted total count of results
        return {
            gifs: response.data.data,
            totalCount: response.data.pagination.total_count,
        };
    } catch (error) {
        console.error('Error fetching data from Giphy:', error);
        throw error; // rethrow the error after logging
    }
};
