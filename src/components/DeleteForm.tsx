import { Note } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteForm = ({
  note,
  setCallDelete,
}: {
  note: Note;
  setCallDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const route = useRouter();

  const deleteNote = async () => {
    setCallDelete(false);
    try {
      await axios.delete(`/api/note/${note.id}`);
      route.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-0 shadow-lg w-[400px]">
        <div className="bg-white flex flex-col h-[100px] justify-between items-center p-2 rounded-sm">
          <p>Are you sure you want to delete this note?</p>
          <div className="flex flex-row justify-between w-80 p-2">
            <div onClick={() => setCallDelete(false)}>
              <p className="hover:text-yellow-400 active:text-yellow-600 font-semibold">
                Cancel
              </p>
            </div>
            <div onClick={deleteNote}>
              <p className="hover:text-red-500 active:text-red-700 font-semibold">
                Delete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
