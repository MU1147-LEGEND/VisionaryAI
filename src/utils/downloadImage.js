export const downloadImage = async (src, alt, dispatch = "") => {
    try {
        const response = await fetch(src, { mode: "cors" });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.setAttribute("download", alt + ".jpg");
        a.setAttribute("href", url);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        dispatch && dispatch({ type: "ADD_DOWNLOADED", payload: { alt, src, } });
        // Clean up the object URL after download
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Failed to download image:", error);
    }
};

// reference // https://dev.to/sbodi10/download-images-using-javascript-51a9