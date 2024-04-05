"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddForm = ({
  setNoteBox,
}: {
  setNoteBox: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeNoteBox = () => {
    setNoteBox(false);
  };
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const insertNote = async () => {
    const noteTitle = title.trim() !== "" ? title : "Untitled";
    if (description.trim() !== "") {
      setLoading(true);
      setNoteBox(false);
      const data = await axios.post("/api/note", {
        title: noteTitle,
        description,
      });
      router.refresh();
      setLoading(false);
    } else {
      window.alert("Description cannot be empty");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-0 shadow-lg w-[80%]">
        <p className="bg-white font-semibold mb-1 text-center">Add New Note</p>
        <div className="w-full h-[35px] flex flex-row relative mb-5">
          <input
            placeholder="Title"
            maxLength={60}
            className=" bg-white w-full px-1 h-[50px]"
            onChange={(e) => {
              if (e.target.value.length <= 60) {
                setTitle(e.target.value);
              }
            }}
          />

          <p
            className={`text-[14px]  top-[20px] right-1 text-center text-nowrap pt-3 absolute   ${
              title.length === 60 ? "text-red-500" : "text-black"
            }`}
          >
            {0 + title.length} / 60
          </p>
        </div>
        <textarea
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
            onClick={closeNoteBox}
          >
            {" "}
            Cancel{" "}
          </button>
          <button
            className="bg-white p-3 m-2 rounded-md flex justify-center items-center  hover:bg-green-400 hover:text-white  active:bg-green-500 active:text-gray-50"
            onClick={insertNote}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
