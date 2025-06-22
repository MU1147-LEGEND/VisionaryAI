/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import DownloadedFullPage from "./components/Downloaded/DownloadedFullPage";
import GeneratedFullPage from "./components/Generated/GeneratedFullPage";
import GlowEffect from "./components/Generated/GlowEffect";
import Header from "./components/Shared/Header";
import { FormStateContext, stateContext } from "./context/AppContext";
import { initialState, pollinationReducer } from "./reducers/reducer";
import Footer from "./components/Shared/Footer";

const App = () => {
    const [state, dispatch] = useReducer(pollinationReducer, initialState);
    const [formContent, setFormContent] = useState({
        prompt: "",
        prevPrompt: "", // storing the previous prompt for showing the user
        negetivePrompt: "", // Negative prompt for image generation
        imageCount: 9, // Default to 9 image, user can change this fron input
        isEnhanced: false, // Default to false, user can change this from input
        width: 1280, // Default width for generated images
        height: 720, // Default height for generated images
        seed: null,
        model: "flux", // Using 'flux' as default if model is not provided
    });

    return (
        <>
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <FormStateContext.Provider
                    value={{ formContent, setFormContent }}
                >
                    <stateContext.Provider value={{ state, dispatch }}>
                        <Header />
                        <GlowEffect />

                        {state.route === "create" ? (
                            <GeneratedFullPage />
                        ) : (
                            <DownloadedFullPage />
                        )}
                        <Footer />
                    </stateContext.Provider>
                </FormStateContext.Provider>
            </div>
        </>
    );
};

export default App;
