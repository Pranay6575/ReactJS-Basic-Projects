import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";

const App = () => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true);
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactsData = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContactList(contactsData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getContacts();
  }, []);

  if (loading) return <div>Loading....</div>;

  return (
    <>
      <div className="max-w-[360px] mx-auto">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="absolute ml-2 text-white text-2xl cursor-pointer" />
            <input
              type="text"
              placeholder="Search Contact"
              className="pl-11 flex-grow h-10 bg-transparent border border-white rounded-md"
            />
          </div>

          <BsFillPlusCircleFill
            onClick={onOpen}
            className="text-white text-5xl cursor-pointer"
          />
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {contactList.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <Modal open={isOpen} close={onClose}>
        Hi
      </Modal>
    </>
  );
};

export default App;
