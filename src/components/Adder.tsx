"use client";

import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import NotePiece from "./NotePiece";
import { Note } from "@prisma/client";
import AddForm from "./AddForm";

const Adder = ({ notes }: { notes: Note[] }) => {
  const [noteBox, setNoteBox] = useState(false);

  const openNoteBox = () => {
    setNoteBox(!noteBox);
  };

  return (
    <div>
      {noteBox && <AddForm setNoteBox={setNoteBox} />}
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center p-2"
        style={{ placeItems: "flex-start" }}
      >
        {" "}
        {notes.map((note, index) => {
          return <NotePiece key={index} note={note} />;
        })}
      </div>
      <p
        className="fixed text-black left-2 bottom-2 text-center font-semibold"
        onClick={openNoteBox}
      >
        &copy; 2024 Ye Yint Thway
      </p>

      <IoMdAddCircle
        className="size-[50px] right-2 bottom-2 fixed text-orange-200    hover:text-green-400 rounded-full active:text-green-500"
        onClick={openNoteBox}
      />
    </div>
  );
};

export default Adder;
