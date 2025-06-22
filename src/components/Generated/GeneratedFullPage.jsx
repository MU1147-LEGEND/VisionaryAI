import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";
import SettingsPanel from "./SettingsPanel";
import ai from "../../assets/images/ai.png";
const GeneratedFullPage = () => {
    return (
        <main className="relative z-10 mt-6">
            <h2 className="text-4xl font-bold mb-8">
                Express your imagination and see!{" "}
                <span className="text-[1.8rem]">
                    <img src={ai} alt="" className="h-10 w-10 inline select-none " draggable="false" />
                </span>
            </h2>

            <SearchBar />
            <SettingsPanel />
            <ImageGrid />
        </main>
    );
};
export default GeneratedFullPage;
