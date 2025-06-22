import { useContext, useEffect, useRef, useState } from "react";
import aiGen from "../../assets/images/ai.png"; // Assuming you have an image for AI generation
import singleSucces from "../../assets/sounds/singleSuccess.wav";
import success from "../../assets/sounds/success.mp3";
import { FormStateContext, stateContext } from "../../context/AppContext";
import { getRandom } from "../../utils/getRandomValue";
import { localPrompts } from "../../utils/localPrompts";
import ProgressBar from "../Shared/ProgressBar";
import {
    BlockedIcon,
    PenIcon,
    SendIcon,
    ThikAIIcon,
} from "../Shared/SVGComponents";
import ShowToastMsg from "../Shared/WarningMsg";

const SearchBar = () => {
    const { formContent, setFormContent } = useContext(FormStateContext);
    const { state, dispatch } = useContext(stateContext);
    const [showToast, setShowToast] = useState(false);
    const [msgType, setMsgType] = useState("");
    const { isLoading } = state;
    const [msg, setMsg] = useState("");
    const initialPlaceholders = useRef(Array(formContent.imageCount).fill());
    const successSound = new Audio(success);
    const SingleSound = new Audio(singleSucces);
    const enhancePrompt =
        "Enhance the prompt and no confirmation, no asking, just give the enhanced prompt: ";

    const handleInputChange = (e) => {
        setFormContent({
            ...formContent,
            prompt: e.target.value,
        });
    };
    const handleNegetiveInputChange = (e) => {
        setFormContent({
            ...formContent,
            negetivePrompt: e.target.value,
        });
    };

    // fetching images when the send button is clicked
    useEffect(() => {
        const placeholders = Array.from(
            { length: formContent.imageCount },
            (_, i) => ({
                src: null,
                alt: `Loading ${i + 1}/${formContent.imageCount}`,
                isLoading: true,
                id: `placeholder-${i}`,
            })
        );
        initialPlaceholders.current = placeholders;
    }, [formContent.imageCount]);

    const fetchImages = async () => {
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({
            type: "SET_GENERATED",
            payload: initialPlaceholders.current,
        });

        const images = [];
        for (let i = 0; i < formContent.imageCount; i++) {
            try {
                const seed = formContent.seed || getRandom(i);
                const url = `https://image.pollinations.ai/prompt/${formContent.prompt} avoid these contexts:${formContent.negetivePrompt} - ${i}?enhance=${formContent.isEnhanced}&width=${formContent.width}&height=${formContent.height}&seed=${seed}&nologo=true&model=${formContent.model}`;

                // const url = `https://pollinations.ai/p/${formContent.prompt}?width=${formContent.width}&height=${formContent.height}&seed=${seed}&model=${formContent.model}`;

                const response = await fetch(url);
                // error if fetch fails
                if (!response.ok) {
                    throw new Error("Failed to fetch images");
                }
                const imageData = {
                    src: response.url,
                    alt: `${formContent.prompt} - Variation ${i + 1}`,
                    seed: seed,
                    isLoading: false,
                    id: i + 1,
                };

                // finally pushing each image to the arr
                images.push(imageData);
                dispatch({
                    type: "SET_GENERATED",
                    payload: [
                        ...images,
                        ...initialPlaceholders.current.slice(images.length),
                    ],
                });
                dispatch({
                    type: "SET_PROGRESS",
                    payload: Math.floor(
                        ((i + 1) / formContent.imageCount) * 100
                    ),
                });
                SingleSound.volume = 0.3;
                SingleSound.play();
            } catch (error) {
                console.error("Error fetching image:", error);
                const errorImage = {
                    src: null,
                    alt: "Failed to load",
                    error: true,
                    isLoading: false,
                };
                images.push(errorImage);
                dispatch({
                    type: "SET_GENERATED",
                    payload: [
                        ...images,
                        ...initialPlaceholders.current.slice(images.length),
                    ],
                });
            } finally {
                const fullGenerated = ((i + 1) / formContent.imageCount) * 100;
                if (fullGenerated === 100) {
                    setMsg("All images generated successfully!");
                    successSound.volume = 0.3;
                    successSound.play();
                    setShowToast(true);
                    setMsgType("success");
                    setTimeout(() => {
                        setShowToast(false);
                    }, 3500);
                }
            }
        }
        dispatch({ type: "SET_LOADING", payload: false });
        return images;
    };

    const handleSendClick = async () => {
        if (!formContent.prompt.trim()) {
            setMsg("Please enter a prompt to generate images.");
            setShowToast(true);
            setMsgType("error");
            setTimeout(() => {
                setShowToast(false);
            }, 3500);
            return;
        }
        try {
            dispatch({
                type: "SET_PROGRESS",
                payload: 1,
            });
            setMsg("Generating, when done, you will get notified...");
            setShowToast(true);
            setMsgType("success");
            fetchImages();
        } catch (error) {
            console.error("Error fetching images:", error);
            setMsg("Failed to generate images. Please try again.");
            setShowToast(true);
        } finally {
            setTimeout(() => {
                setShowToast(false);
            }, 3500);
        }
        //    reset the prompt after sending
        setFormContent({
            ...formContent,
            prevPrompt: formContent.prompt,
            prompt: "",
        });
    };

    const getPrompt = async () => {
        if (isLoading) return; // prevent multiple click
        // preventing enhancement when input is empty.
        if (formContent.prompt.trim() === "") {
            setMsg("Please enter a prompt to generate images.");
            setShowToast(true);
            setMsgType("error");
            setTimeout(() => {
                setShowToast(false);
            }, 3500);
            return;
        }
        setMsg("Enhancing the prompt, wait a moment...");
        setShowToast(true);
        setMsgType("success");
        setTimeout(() => {
            setShowToast(false);
        }, 3500);
        dispatch({
            type: "SET_LOADING",
            payload: true,
        });
        // request GET url
        const url = `https://text.pollinations.ai/${
            enhancePrompt + "" + formContent.prompt
        }?json=true`;
        // try catch block
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                setMsg("Prompt enhance failed!");
                setShowToast(true);
                setMsgType("error");
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
                return;
            } else {
                setFormContent({
                    ...formContent,
                    prompt: data.enhanced_prompt,
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch({
                type: "SET_LOADING",
                payload: false,
            });
        }
    };

    return (
        <>
            {showToast && <ShowToastMsg msgType={msgType} msg={msg} />}
            <div className="relative mb-9 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
                <div className="flex items-center">
                    <div className="absolute top-[18px] left-4 pr-2 text-white/50">
                        {/* <SearchIcon /> */}
                        <PenIcon />
                    </div>
                    <div className="relative w-full">
                        <textarea
                            cols={1}
                            rows={3}
                            value={formContent.prompt}
                            onChange={handleInputChange}
                            onKeyDownCapture={(e) => {
                                if (e.key === "Enter" && e.shiftKey) {
                                    return; // Allow new line with Shift + Enter
                                }
                                if (e.key === "Enter") {
                                    if (isLoading) {
                                        setMsgType("warning");
                                        setMsg(
                                            "Please wait, images are Generating..."
                                        );
                                        setShowToast(true);
                                        return;
                                    }
                                    e.preventDefault();
                                    handleSendClick();
                                }
                            }}
                            type="text"
                            placeholder="Create with Prompts"
                            className="outline-none w-full py-4 px-2 pl-10 bg-transparent text-white placeholder-zinc-400 text-lg resize-none"
                        >
                            {" "}
                        </textarea>
                        <button
                            className={`absolute right-0 bottom-1 hover:-rotate-45 bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 p-4 mr-1 rounded-full ${
                                isLoading ? "" : "cursor-pointer"
                            }`}
                            onClick={() => {
                                if (isLoading) {
                                    setMsgType("warning");
                                    setMsg(
                                        "Please wait, images are loading..."
                                    );
                                    setShowToast(true);
                                    const timerID = setTimeout(() => {
                                        setShowToast(false);
                                    }, 3500);
                                    return () => clearTimeout(timerID);
                                }
                                handleSendClick();
                            }}
                        >
                            {isLoading ? (
                                <div className="animate-spin rounded-full h-6 w-6 bg-black border-b-2 border-blue-500 p-2"></div>
                            ) : (
                                <SendIcon />
                            )}
                        </button>
                        {/* auto generate button */}
                        <div className="absolute bottom-1 left-1 pr-2 text-white/80 flex items-center gap-2">
                            {/* generate prompts */}
                            <button
                                className="flex items-center gap-1 border border-zinc-700 bg-zinc-800/80 px-2 py-1 rounded-full text-sm hover:bg-zinc-700 transition-colors cursor-pointer"
                                onClick={() => {
                                    setFormContent({
                                        ...formContent,
                                        prompt: localPrompts(),
                                    });
                                }}
                            >
                                <ThikAIIcon />
                                Auto Prompt
                            </button>
                            <button
                                className=" flex items-center gap-1 border border-zinc-700 bg-zinc-800/80 px-2 py-1 rounded-full text-sm hover:bg-zinc-700 transition-colors cursor-pointer"
                                onClick={() => {
                                    getPrompt();
                                }}
                            >
                                <img
                                    src={aiGen}
                                    alt="aiGen"
                                    className="w-6 h-6"
                                />
                                Enhance Prompt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* taking negetive prompts from user (if need) */}
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Extra Instructions</h4>
            </div>
            <div className="relative mb-9 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
                <div className="flex items-center">
                    <div className="absolute top-[18px] left-3 pr-2 text-white/50">
                        <BlockedIcon />
                    </div>
                    <div className="relative w-full">
                        <textarea
                            cols={1}
                            rows={1}
                            value={formContent.negetivePrompt || ""}
                            onChange={handleNegetiveInputChange}
                            type="text"
                            placeholder="Use this with no keyowrd like 'no', etc. Ex: no violence, no nudity, no NSFW, no text"
                            className="outline-none w-full py-4 px-2 pl-10 bg-transparent text-white placeholder-zinc-400 text-lg resize-none"
                        >
                            {" "}
                        </textarea>
                    </div>
                </div>
            </div>
            {state.progress > 0 && <ProgressBar />}
        </>
    );
};

export default SearchBar;
