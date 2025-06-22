export const deleteImage = (state, alt) => {
    
    state.downloaded.filter((img) => img.alt !== alt);
};
