const GlowEffect = () => {
    return (
        <>
            <div className="fixed -left-1/3 -right-0 z-0 pointer-events-none">
                <div className="h-96 w-96 bg-gradient-to-r from-red-400 to-indigo-600 rotate-90 rounded-full blur-[180px]"></div>
            </div>
            <div className="fixed -top-1/3 -right-0 z-0 pointer-events-none">
                <div className="h-96 w-96 bg-gradient-to-r from-pink-400 to-indigo-600 rotate-90 rounded-full blur-[180px]"></div>
            </div>
            <div className="fixed -bottom-1 -right-0 z-0 pointer-events-none">
                <div className="h-56 w-56 bg-gradient-to-r from-cyan-400 to-indigo-600 rotate-90 rounded-full blur-[180px]"></div>
            </div>
        </>
    );
};

export default GlowEffect;
