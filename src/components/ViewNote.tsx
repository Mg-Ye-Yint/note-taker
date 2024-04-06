import { Note } from "@prisma/client";
import { format } from "date-fns";
import { FaArrowLeft } from "react-icons/fa6";
import { enUS } from "date-fns/locale";

const ViewNote = ({
  note,
  setReadNote,
  setMenuBar,
}: {
  note: Note;
  setMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
  setReadNote: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const back = () => {
    setMenuBar(false);
    setReadNote(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-0 shadow-lg w-[400px]">
        <div className="bg-white flex flex-col h-auto justify-between items-start p-2 rounded-sm">
          <div className="bg-gray-400 w-full text-wrap break-words p-1">
            <p className="font-semibold">{note.title}</p>
          </div>
          <div className="bg-gray-300 w-full text-wrap break-words p-1">
            <p className="m-1">{note.description}</p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <FaArrowLeft
              className="text-blue-800 font-semibold hover:bg-gray-400 rounded-sm active:bg-gray-500 active:text-blue-900"
              onClick={back}
            />
            <p className="text-sm text-blue-800 font-semibold">
              {format(note.createdAt, "yyyy-MM-dd HH:mm:ss", { locale: enUS })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
