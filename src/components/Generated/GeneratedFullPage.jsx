import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";
import SettingsPanel from "./SettingsPanel";
const GeneratedFullPage = () => {
    return (
        <main className="relative z-10">
            <h2 className="text-4xl font-bold mb-8">
                Let's create a masterpiece, Alvian!{" "}
                <span className="text-[1.8rem]">✨</span>
            </h2>

            <SearchBar/>
            <SettingsPanel />
            <ImageGrid />
        </main>
    );
};
export default GeneratedFullPage;
