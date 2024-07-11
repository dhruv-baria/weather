const Header = () => {
    return (
        <div>
            <div className="p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">

                <h1 className="flex items-center text-5xl font-extrabold dark:text-gray-50">🌦Weather<span className="bg-blue-100 text-blue-800 text-base font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">All cities</span></h1>
            </div>
            <div className="bg-gradient-to-r from-indigo-500  via-sky-500 via-30% to-emerald-500 to-90% p-3 text-l shadow-2xl">
                ☁ ⛅ ⛈ 🌤 🌥 🌦 🌧 🌫 🌝
            </div>
        </div>
    )
}

export default Header
