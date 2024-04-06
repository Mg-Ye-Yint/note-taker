import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MenuBar = ({
  setEditOpen,
  setCallDelete,
  setReadNote,
}: {
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCallDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setReadNote: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[4px] items-center justify-center">
        <FaEye
          className="hover:text-green-400 shrink-0 hover:bg-gray-400 active:text-green-500 active:bg-gray-500 rounded-md"
          size={20}
          onClick={() => setReadNote(true)}
        />
        <FaEdit
          className="hover:text-yellow-400 shrink-0 hover:bg-gray-400 active:text-yellow-500 active:bg-gray-500 rounded-md"
          size={20}
          onClick={() => {
            setEditOpen(true);
          }}
        />
        <MdDelete
          className="hover:text-red-70 shrink-0 hover:bg-gray-400 active:text-red-800 active:bg-gray-500 rounded-md"
          size={20}
          onClick={() => {
            setCallDelete(true);
          }}
        />
      </div>
    </div>
  );
};

export default MenuBar;
