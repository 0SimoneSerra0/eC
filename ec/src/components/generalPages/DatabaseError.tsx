

export default function DBError() {
    return (
        <div>
            <div className="relative w-[100vw] max-w-[var(--max-w-)] h-[calc(100vh-var(--header-h))] max-h-[var(--max-h)] flex flex-col justify-center items-center">
                <h1 className="mb-20 text-7xl">Ooops!</h1>
                <h2 className="text-3xl">Looks like our servers encountered an error, please send us a feedback at fake@email.com</h2>
                <a href="/" className="text-blue-600 underline hover:text-blue-400">Go to HomePage</a>
            </div>
        </div>
    );
}