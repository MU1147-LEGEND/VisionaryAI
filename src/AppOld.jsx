import logo from "./assets/logo.svg";
import { SearchIcon, SendIcon } from "./components/SVGComponents";

const App = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Header/Logo */}
                <header className="flex items-center mb-12 justify-between">
                    <div className="flex items-center">
                        <img src={logo} className="h-10" />
                    </div>
                    <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                        <a
                            href="./index.html"
                            className="hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all"
                        >
                            Create Image
                        </a>
                        <a
                            href="./downloaded.html"
                            className="hover:text-zinc-200 cursor-pointer transition-all"
                        >
                            Downloaded
                        </a>
                    </ul>
                </header>
                {/* Glow */}
                <div className="fixed -bottom-1/4 -right-0 ">
                    <div className="h-96 w-96 bg-gradient-to-r from-pink-600 to-indigo-400 rotate-90 rounded-full blur-[180px] "></div>
                </div>
                {/* Main Content */}
                <main className="relative z-10">
                    {/* Welcome Message */}
                    <h2 className="text-4xl font-bold mb-8">
                        Let's create a masterpiece, Alvian!{" "}
                        <span className="text-2xl">👋</span>
                    </h2>
                    {/* Search Input */}
                    <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
                        <div className="flex items-center">
                            <div className="pl-5 pr-2">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                placeholder="Create with Prompts"
                                className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
                            />
                            <button className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full">
                                <SendIcon />
                            </button>
                        </div>
                    </div>
                    {/* Suggestions Section */}
                    {/* Settings Panel */}
                    <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
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
                                >
                                    <option
                                        className="bg-zinc-900"
                                        value="flux"
                                        selected=""
                                    >
                                        Flux
                                    </option>
                                    <option
                                        className="bg-zinc-900"
                                        value="turbo"
                                    >
                                        Turbo
                                    </option>
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
                                    defaultValue={1024}
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
                                    defaultValue={1024}
                                    className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                            {/* Aspect Ratio Presets */}
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-1">
                                    Aspect Ratio Presets
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                                        1:1
                                    </button>
                                    <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                                        16:9
                                    </button>
                                    <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                                        4:3
                                    </button>
                                    <button className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors">
                                        3:2
                                    </button>
                                </div>
                            </div>
                            {/* No Logo Toggle */}
                        </div>
                    </div>
                    {/* Image Presets Section */}
                    <div>
                        <h3 className="text-zinc-200 mb-4 font-bold text-lg">
                            Result
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {/* Image Card 1 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-1.jpeg"
                                    alt="Anime character in kimono"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 2 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-2.jpeg"
                                    alt="Portrait with yellow background"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 3 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-3.jpeg"
                                    alt="Fantasy landscape with castle"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 4 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-4.jpeg"
                                    alt="Colorful anime character"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 5 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-5.jpeg"
                                    alt="Abstract art"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 1 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-1.jpeg"
                                    alt="Anime character in kimono"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 2 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-2.jpeg"
                                    alt="Portrait with yellow background"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 3 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-3.jpeg"
                                    alt="Fantasy landscape with castle"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 4 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-4.jpeg"
                                    alt="Colorful anime character"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            {/* Image Card 5 */}
                            <div className="image-card rounded-xl overflow-hidden cursor-pointer relative">
                                <div className="absolute bottom-2 right-2  p-1 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-image-down-icon lucide-image-down"
                                    >
                                        <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                        <path d="m14 19 3 3v-5.5" />
                                        <path d="m17 22 3-3" />
                                        <circle cx={9} cy={9} r={2} />
                                    </svg>
                                </div>
                                <img
                                    src="./assets/images/ai-image-5.jpeg"
                                    alt="Abstract art"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
export default App;
