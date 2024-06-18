export default function IndexComponent() {
  return (
    <div className="">
      <header className="h-16 bg-blue p-4  flex justify-between content-center">
        <h1 className="text-3xl text-white font-bold ">Todo App</h1>
        <div>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            kaichi
          </button>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            daichi
          </button>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            morishun
          </button>
          <button className="w-fit h-8 text-white text-base bg-transparent border border-gray rounded-lg px-4 mx-2">
            naoya
          </button>
        </div>
      </header>
      <p className="m-0 text-gray-400">Tailwind CSSです</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">
        ボタン
      </button>
    </div>
  );
}
