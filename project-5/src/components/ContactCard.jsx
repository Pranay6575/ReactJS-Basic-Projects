import { BsFillTrash3Fill } from 'react-icons/bs'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'

// eslint-disable-next-line react/prop-types
const ContactCard = ({contact}) => {
  return (
    <div
            key={contact.id}
            className="flex bg-yellow rounded-lg justify-between items-center p-2"
          >
            <div className="flex gap-1 p-1">
              <HiOutlineUserCircle className="text-red text-4xl" />
              <div className="">
                <h2 className="font-medium text-lg">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-2xl gap-2">
              <RiEditCircleLine />
              <BsFillTrash3Fill className="text-purple" />
            </div>
          </div>
  )
}

export default ContactCard
