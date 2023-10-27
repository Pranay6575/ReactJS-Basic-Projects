import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ open, close, children }) => {
  return (
    <>
      {open && (
        <>
          <div className="relative m-auto z-50 min-h-[200px] max-w-[80%] bg-white">
            <div className="flex justify-end p-3 cursor-pointer">
              <AiOutlineClose onClick={close} className="text-2xl" />
            </div>
          </div>
          <div onClick={close} className="absolute top-0 z-40 h-screen w-screen backdrop-blur " />
        </>
      )}
    </>
  );
};

export default Modal;
