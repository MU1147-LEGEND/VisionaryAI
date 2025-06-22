import { useContext, useState } from "react";
import { FormStateContext, stateContext } from "../../context/AppContext";
import ImageCard from "./ImageCard";

const ImageGrid = () => {
    const { state } = useContext(stateContext);
    const { formContent } = useContext(FormStateContext);
    const prevPrompt = formContent.prevPrompt;
    const [showPrompt, setShowPrompt] = useState(false);

    return (
        <div>
            <h3 className="text-zinc-200 mb-4 font-bold text-lg select-none">
                Generated Images for the{" "}
                <span
                    className="border-b-4 hover:border-b-8 transition-all duration-300 border-r-fuchsia-800 border-b-emerald-600 px-1"
                    onMouseOver={() => {
                        setShowPrompt(true);
                    }}
                    onMouseOut={() => {
                        setShowPrompt(false);
                    }}
                >
                    Prompt
                </span>
                {/* hovering the prompt will display the custom title */}
                {showPrompt && prevPrompt && `: "${prevPrompt}"`}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {state?.generated?.map((image, index) => (
                    <ImageCard
                        key={index}
                        src={image?.src}
                        alt={image?.alt}
                        isLoading={image?.isLoading}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;
