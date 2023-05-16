"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    password: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const handleInputsOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`rounded border  p-2 font-semibold
        ${renderContent(
          `bg-gray-200 text-blue-300 hover:bg-gray-300 hover:text-blue-400`,
          `bg-blue-400 text-white hover:bg-blue-500 hover:text-gray-100`
        )}
        `}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="h-[70vh] p-2">
            <div className="mb-2 border-b pb-2 text-center font-bold uppercase">
              <p className="text-sm">
                {renderContent("Sign In", "Create an account")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-center text-2xl font-normal ">
                {renderContent(
                  "Log Into Your Account",
                  "Create Your OpenTable Account"
                )}
              </h2>

              <AuthModalInputs
                isSignIn={isSignIn}
                inputs={inputs}
                handleInputsOnChange={handleInputsOnChange}
              />
              <button
                className="mb-5 w-full rounded bg-red-600 p-3 text-sm uppercase text-white disabled:bg-gray-400"
                // disabled={true}
                onClick={() => console.log(inputs)}
              >
                {renderContent("Sign In", "Create an account")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
