"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";

import useAuth from "@/hooks/useAuth";
import { useRecoilState } from "recoil";
import { authState } from "../store/atoms";
import { Alert } from "@mui/material";

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
  const [disabled, setDisabled] = useState(true);
  const { signin, signup } = useAuth();
  const [auth, setAuth] = useRecoilState<{
    loading: boolean;
    data: any;
    error: any;
  }>(authState);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) {
        return setDisabled(false);
      }
    } else {
      if (Object.values(inputs).every((value) => !!value)) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [inputs]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAuth({ loading: false, data: null, error: null });
    setInputs({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      password: "",
    });
  };

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const handleInputsOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
    setAuth({ loading: false, data: null, error: null });
  };

  const handleOnAuth = async () => {
    setDisabled(true);

    if (isSignIn) {
      await signin({
        email: inputs.email,
        password: inputs.password,
      });
      setDisabled(false);
    } else {
      await signup(inputs);
      setDisabled(false);
    }
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
              {!auth.error ? (
                <h2 className="text-center text-2xl font-normal ">
                  {renderContent(
                    "Log Into Your Account",
                    "Create Your OpenTable Account"
                  )}
                </h2>
              ) : (
                <Alert severity="error">{auth.error}</Alert>
              )}

              <AuthModalInputs
                isSignIn={isSignIn}
                inputs={inputs}
                handleInputsOnChange={handleInputsOnChange}
              />
              <button
                className={`mb-5 flex  h-10 w-full items-center justify-center rounded p-3 text-sm font-semibold uppercase disabled:bg-gray-400 ${
                  !auth.loading
                    ? "bg-red-600 text-white"
                    : "bg-gray-300 text-slate-800"
                }`}
                disabled={disabled}
                onClick={handleOnAuth}
              >
                {auth.loading ? (
                  <>
                    <svg
                      className="mr-3 h-8 w-8 animate-spin rounded-full border-b-2 border-t-2  border-cyan-500"
                      viewBox="0 0 24 24"
                    ></svg>
                    Processing...
                  </>
                ) : (
                  renderContent("Sign In", "Create an account")
                )}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
