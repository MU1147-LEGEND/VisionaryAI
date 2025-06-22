import { useContext, useEffect, useState } from "react";
import { FormStateContext } from "../../context/AppContext";

const SettingsPanel = () => {
    const { formContent, setFormContent } = useContext(FormStateContext);
    const [models, setModels] = useState([]);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (Number(value) < 0) {
            // prevent negative values
            return;
        }

        setFormContent({
            ...formContent,
            [id]: value,
        });
    };

    // Function to handle aspect ratio preset clicks

    const handleAspectRatioClick = (aspectRatio) => {
        const [width, height] = aspectRatio.split(":").map(Number);
        // reference: https://calculatorhub.app/3-2-aspect-ratio/#:~:text=The%203%3A2%20aspect%20ratio%20is%20a%20screen%20or,by%20height%20and%20getting%20a%20value%20of%201.5.
        setFormContent({
            ...formContent,
            width,
            height,
        });
    };

    // getting the models from api useEffect
    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await fetch(
                    "https://image.pollinations.ai/models"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch models");
                }
                const data = await response.json();
                setModels(data);
            } catch (error) {
                console.error("Error fetching models:", error);
            }
        };
        fetchModels();
    }, []);

    // Aspect ratio
    const aspectRatio = [
        { label: "1:1", value: "1024:1024" },
        { label: "16:9", value: "1280:720" },
        { label: "4:3", value: "1440:1080" },
        { label: "3:2", value: "1620:1080" },
    ];

    return (
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4 select-none">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Advanced Settings</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Model Selection */}
                <div>
                    <label
                        htmlFor="model"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Model
                    </label>
                    <select
                        id="model"
                        className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        onChange={handleInputChange}
                        value={formContent.model || "flux"}
                    >
                        {models?.map((model) => (
                            <option
                                key={model}
                                className="bg-zinc-900"
                                value={model}
                            >
                                {model}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Seed Input */}
                <div>
                    <label
                        htmlFor="seed"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Seed (for reproducible results)
                    </label>
                    <input
                        type="number"
                        id="seed"
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Random"
                        onChange={handleInputChange}
                    />
                </div>

                {/* Width Input */}
                <div>
                    <label
                        htmlFor="width"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Width
                    </label>
                    <input
                        type="number"
                        id="width"
                        value={formContent.width || ""}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* Height Input */}
                <div>
                    <label
                        htmlFor="height"
                        className="block text-sm font-medium text-zinc-700 mb-1"
                    >
                        Height
                    </label>
                    <input
                        type="number"
                        id="height"
                        value={formContent.height || ""}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* Aspect Ratio Presets */}
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Aspect Ratio Presets
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {aspectRatio.map(({ label, value }) => {
                            // desctructuring and converting to number the value to get width and height
                            const [w, h] = value.split(":").map(Number);
                            const isActive =
                                Number(formContent.width) === w &&
                                Number(formContent.height) === h;
                            return (
                                <button
                                    key={value}
                                    className={`bg-zinc-900/10 px-3 py-3 text-xs rounded transition-colors hover:bg-zinc-800 ${
                                        isActive
                                            ? "ring-2 ring-blue-500 bg-zinc-800 text-blue-400 font-semibold"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleAspectRatioClick(value)
                                    }
                                    type="button"
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>
                {/* enhance setting */}
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Enhance
                    </label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="enhance"
                            value=""
                            class="hidden peer"
                            onChange={(e) =>
                                setFormContent({
                                    ...formContent,
                                    isEnhanced: e.target.checked,
                                })
                            }
                        />
                        <label
                            for="enhance"
                            class="inline-flex items-center justify-between w-full py-2 px-4 text-white/70 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <div class="block">
                                <div class="w-full text-lg font-semibold select-none">
                                    Enhance{" "}
                                    {formContent.isEnhanced ? "On" : "Off"}
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                {/* image count */}
                <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Image Count
                    </label>
                    <div className="flex flex-wrap gap-2">
                        <input
                            type="number"
                            id="imageCount"
                            value={formContent.imageCount || ""}
                            onChange={handleInputChange}
                            className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Number of images to generate"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPanel;
