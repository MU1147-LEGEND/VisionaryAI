import ImageGrid from "./ImageGrid";
import WelcomeMessage from "./WelcomeMessage";

const DownloadedFullPage = () => {
    return (
        <>
            <main className="relative z-10 mt-6">
                <WelcomeMessage text={"Downloaded Images"} emoji={"🎉"} />
                <ImageGrid />
            </main>
        </>
    );
};
export default DownloadedFullPage;
