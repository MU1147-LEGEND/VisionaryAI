export const WelcomeMessage = ({ text, emoji }) => {
    return (
        <h2 className="text-4xl font-bold mb-8">
            {text} <span className="text-2xl">{emoji}</span>
        </h2>
    );
};
export default WelcomeMessage;
