import { useContext, useState } from "react";
import { stateContext } from "../../context/AppContext";
import { DownloadIcon } from "../Shared/SVGComponents";
import Loading from "./Loading";
import { downloadImage } from "../../utils/downloadImage";
const ImageCard = ({ src, alt, isLoading }) => {
    const { dispatch } = useContext(stateContext);
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div
            className="image-card rounded-xl overflow-auto cursor-pointer relative h-48 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
        >
            <div
                className="absolute bottom-2 right-2 p-1"
                onClick={() => {
                    downloadImage(src, alt, dispatch);
                }}
            >
                <DownloadIcon />
            </div>

            {isLoading ? (
                <Loading />
            ) : src ? (
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
            ) : (
                <div className="text-red-500 absolute inset-0 flex items-center justify-center">
                    Failed to load
                </div>
            )}
        </div>
    );
};

export default ImageCard;
