import { useContext } from "react";
import { stateContext } from "../../context/AppContext";

const ProgressBar = () => {
    const { state } = useContext(stateContext);
    return (
        <div className="w-full bg-gray-800 rounded-full h-2.5  relative mb-2.5 ">
            <div className="bg-stroke dark:bg-dark-3 h-2.5 w-full rounded-2xl relative">
                <div
                    className="bg-green-500 h-full rounded-2xl transition-all duration-300"
                    style={{
                        width: `${Math.min(100, Math.max(0, state.progress))}%`,
                    }}
                ></div>
                <span
                    className="bg-green-600 absolute -top-7 rounded-sm px-1 py-1 text-sm text-white transition-all duration-300 -mt-1"
                    style={{
                        left: `calc(${Math.min(100, Math.max(0, state.progress))}% - 18px)`,
                    }}
                >
                    <span className="bg-green-600 absolute bottom-[-4px] left-1/2 z-10 h-2 w-2 -translate-x-1/2 rotate-45 "></span>
                    {Math.round(state.progress)}%
                </span>
            </div>
        </div>
    );
};
export default ProgressBar;
