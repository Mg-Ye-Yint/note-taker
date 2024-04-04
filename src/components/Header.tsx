import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Header = () => {
  return (
    <div className="items-center flex w-full py-3 justify-center gap-2 bg-orange-200">
      <p className="font-bold text-xl text-slate-800">Your Personal Notes</p>
      <EditNoteIcon className="text-slate-800 h-10 w-10" />
    </div>
  );
};

export default Header;
