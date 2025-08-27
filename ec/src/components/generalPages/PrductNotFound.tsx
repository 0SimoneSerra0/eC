

export default function ProductNotFound() {
    return (
        <div className="relative w-[100vw] max-w-[var(--max-w-)] h-[calc(100vh-var(--header-h))] max-h-[var(--max-h)] flex flex-col justify-center items-center">
            <h1 className="mb-20 text-7xl">Ooops!</h1>
            <img src="/magnifying-lens.svg" alt="" className="absolute right-[5%] w-80 h-80" />
            <h2 className="text-3xl">We can't seem to find what you're looking for.</h2>
            <a href="/" className="text-blue-600 underline hover:text-blue-400">Go to HomePage</a>
        </div>
    );
}