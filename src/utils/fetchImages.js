export const fetchImages = async (API_URL) => {
    // Fetch images from the Pollinations API
    await fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }

            return response;
        })
        .catch((error) => {
            console.error("Error fetching images:", error);
        });
};
