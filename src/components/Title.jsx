export default function Title() {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide relative text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
          Angel Movie World
        </span>
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-gray-300 via-pink-200 to-gray-300 rounded-full opacity-80"></span>
      </h1>
    </div>
  );
}
