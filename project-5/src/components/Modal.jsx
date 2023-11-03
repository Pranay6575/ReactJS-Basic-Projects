import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
const Modal = ({ open, close, children }) => {
  return createPortal(
    <>
      {open && (
        <>
          <div className="relative m-auto z-40 min-h-[200px] max-w-[80%] bg-white">
            <div className="flex justify-end p-3 cursor-pointer">
              <AiOutlineClose onClick={close} className="text-2xl" />
            </div>
            {children}
          </div>
          <div onClick={close} className="absolute top-0 z-30 h-screen w-screen backdrop-blur " />
        </>
      )}
    </>
  );
};

export default Modal;
