

export default function Header(): React.ReactNode {
    return (
        <header className="relative w-full max-w-[var(--max-w)] flex items-center justify-between">
            <a href="/"><img src="ec-logo.svg" alt="" className="w-20 h-auto rounded-2xl hover:cursor-pointer" /></a>

            <div className="">

            </div>

            <input 
                className="h-[10%] mr-5 border-2 border-black"
                type="text"
                
            />
        </header>
    );
}