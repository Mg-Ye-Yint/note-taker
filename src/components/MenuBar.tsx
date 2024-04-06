import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

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
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <RemoveRedEyeIcon
          className="hover:text-green-400 hover:bg-gray-400 active:text-green-500 active:bg-gray-500 rounded-md"
          onClick={() => setReadNote(true)}
        />
        <EditIcon
          className="hover:text-yellow-400 hover:bg-gray-400 active:text-yellow-500 active:bg-gray-500 rounded-md"
          onClick={() => {
            setEditOpen(true);
          }}
        />
        <DeleteIcon
          className="hover:text-red-700 hover:bg-gray-400 active:text-red-800 active:bg-gray-500 rounded-md"
          onClick={() => {
            setCallDelete(true);
          }}
        />
      </div>
    </div>
  );
};

export default MenuBar;
