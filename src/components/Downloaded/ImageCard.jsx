import { useContext, useState } from "react";
import { DownloadIcon } from "../Shared/SVGComponents";
import { DeleteIcon } from "../Shared/SVGComponents";
import { downloadImage } from "../../utils/downloadImage";
import { stateContext } from "../../context/AppContext";

const ImageCard = ({ img }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const { src, alt } = img;
    const { dispatch } = useContext(stateContext);

    return (
        <div
            className="image-card rounded-xl overflow-auto cursor-pointer relative h-48 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
        >
            <div
                className="absolute bottom-2 right-2 p-1"
                onClick={() => {
                    downloadImage(src, alt);
                }}
            >
                <DownloadIcon />
            </div>
            <div
                className="absolute top-2 right-2 p-1"
                onClick={() => {
                    dispatch({ type: "DELETE_DOWNLOADED", payload: alt });
                }}
            >
                <DeleteIcon />
            </div>
            <div>
                {showOverlay && (
                    <div className="pointer-events-none absolute inset-0 bg-black/30 flex justify-center items-center">
                        <span className="text-white">Click to view</span>
                    </div>
                )}
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-48 object-cover"
                    onClick={() => {
                        window.open(src, "_blank");
                    }}
                />
            </div>
        </div>
    );
};

export default ImageCard;
