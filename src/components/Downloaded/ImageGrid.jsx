import { useContext } from "react";
import { stateContext } from "../../context/AppContext";
import ImageCard from "./ImageCard";

const ImageGrid = () => {
    const { state } = useContext(stateContext);
    const uniqueImages = state.downloaded.filter((img, index, self) => {
        return index === self.findIndex((i) => i.src === img.src);
    });

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {uniqueImages.length === 0 ? (
                    <div className="col-span-5 text-center text-gray-500 text-3xl">
                        No images downloaded yet.
                    </div>
                ) : (
                    uniqueImages?.map((image, index) => (
                        <ImageCard key={index} img={image} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ImageGrid;
