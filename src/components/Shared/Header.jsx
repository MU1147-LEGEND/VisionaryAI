import { useContext } from "react";
import logo from "../../assets/visionary.png";
import { stateContext } from "../../context/AppContext";

const Header = () => {
    const { state, dispatch } = useContext(stateContext);

    const handleRouteChange = (path) => {
        dispatch({ type: "SET_ROUTE", payload: path });
        // set the url location to /path
        window.history.pushState({}, "", `/${path}`);
    };
    let activeStyle = "font-medium text-zinc-200";
    return (
        <>
            <header className="flex items-center mb-6 justify-between z-50">
                <div className="flex items-center">
                    <img src={logo} className="h-20" alt="Logo" />
                </div>
                <nav>
                    <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
                        <li>
                            <button
                                onClick={() => {
                                    handleRouteChange("create");
                                }}
                                className={
                                    "hover:text-zinc-200 cursor-pointer transition-all " +
                                    (state.route === "create"
                                        ? activeStyle
                                        : "")
                                }
                            >
                                Create Image
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    handleRouteChange("downloaded");
                                }}
                                className={
                                    "hover:text-zinc-200 cursor-pointer transition-all " +
                                    (state.route === "downloaded"
                                        ? activeStyle
                                        : "")
                                }
                            >
                                Downloaded
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr />
        </>
    );
};

export default Header;
