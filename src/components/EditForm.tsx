"use client";

import { Note } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditForm = ({
  note,
  setEditOpen,
  setMenuBar,
}: {
  note: Note;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [title, setTitle] = useState(note.title);

  const [description, setDescription] = useState(note.description);

  const route = useRouter();

  console.log(note.id);

  const editFinish = async () => {
    const noteTitle = title.trim() !== "" ? title : "Untitled";
    if (description.trim() !== "") {
      try {
        setMenuBar(false);
        setEditOpen(false);
        await axios.patch(`/api/note/${note.id}`, {
          title: noteTitle,
          description,
        });
        route.refresh();
      } catch (error) {
        console.log(error);
      }
    } else {
      window.alert("Description can't be empty");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-0 shadow-lg w-[80%]">
        <p className="bg-white font-semibold mb-1 text-center">Edit Note</p>

        <p className=" bg-white font-semibold px-1">Title</p>

        <div className="w-full h-[35px] flex flex-row relative">
          <input
            value={title}
            maxLength={60}
            className=" bg-white w-full px-1 h-[60px]"
            onChange={(e) => {
              if (e.target.value.length <= 60) {
                setTitle(e.target.value);
              }
            }}
          />
          <p
            className={`text-[14px]  top-[25px] right-1 text-center text-nowrap pt-3 absolute  ${
              title.length === 60 ? "text-red-500" : "text-black"
            }`}
          >
            {0 + title.length} / 60
          </p>
        </div>
        <p className="bg-white font-semibold px-1">Description</p>
        <textarea
          value={description}
          placeholder="Description"
          className=" bg-white h-[220px] w-full px-1"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <div
          style={{
            height: "50px",
          }}
          className="flex  bg-orange-200 justify-evenly"
        >
          <button
            className="bg-white p-3 m-2 rounded-md flex justify-center items-center hover:bg-red-400 hover:text-white active:bg-red-500 active:text-gray-50"
            onClick={() => {
              setEditOpen(false);
              setMenuBar(false);
            }}
          >
            {" "}
            Cancel{" "}
          </button>
          <button
            className="bg-white p-3 m-2 rounded-md flex justify-center items-center  hover:bg-green-400 hover:text-white active:bg-green-500 active:text-gray-50"
            onClick={editFinish}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
