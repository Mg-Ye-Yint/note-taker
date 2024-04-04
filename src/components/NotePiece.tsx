"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Note } from "@prisma/client";
import EditForm from "./EditForm";
import DeleteForm from "./DeleteForm";
import MenuBar from "./MenuBar";
import ViewNote from "./ViewNote";

const NotePiece = ({ note }: { note: Note }) => {
  const [menuBar, setMenuBar] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [callDelete, setCallDelete] = useState(false);

  const [readNote, setReadNote] = useState(false);

  const menuToggle = () => {
    setMenuBar(!menuBar);
  };

  return (
    <div className="relative p-2 flex flex-row gap-1 ">
      {editOpen && (
        <EditForm
          setEditOpen={setEditOpen}
          note={note}
          setMenuBar={setMenuBar}
        />
      )}

      <div className=" flex bg-white shadow-2xl border-slate-800 border-2 rounded-md justify-start flex-col hover:scale-105 size-[150px]">
        <div className="flex justify-between p-1 bg-gray-300 rounded-sm text-ellipsis ">
          <p className="overflow-ellipsis font-bold text-wrap break-words overflow-hidden">
            {note.title}
          </p>

          <MenuIcon
            className="text-black hover:bg-gray-400 active:bg-gray-500 rounded-md z-20"
            onClick={menuToggle}
          />
        </div>
        <div className="h-[2px] w-full bg-black relative"></div>
        <div className="p-1 w-full text-ellipsis overflow-y-scroll">
          <p className="text-wrap break-words">{note.description}</p>
        </div>
      </div>
      {menuBar && (
        <MenuBar
          setEditOpen={setEditOpen}
          setCallDelete={setCallDelete}
          setReadNote={setReadNote}
        />
      )}
      {readNote && <ViewNote setReadNote={setReadNote} note={note} />}
      {callDelete && <DeleteForm setCallDelete={setCallDelete} note={note} />}
    </div>
  );
};

export default NotePiece;
