function Modal({ title, text, textButton = "", onClick = () => {} }) {
  return (
    <div
      className="absolute w-full h-full bg-black
     flex justify-center items-center z-20 bg-opacity-30"
    >
      <div
        className=" border-2 border-black
       flex justify-center items-center
        w-96 h-64 bg-white relative"
      >
        <div className="flex flex-col border-2   h-full w-full">
          <h1 className="pt-2 text-center border-2 font-bold ">{title}</h1>
          <div className="pt-1 border-2 self-center text-center">{text}</div>
          <div className="flex justify-center">
            <button
              className="rounded-md border-2
            border-white bg-blue-500 text-white hover:bg-blue-400
            p-2  absolute bottom-3 "
              onClick={onClick}
            >
              {textButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
