import React from "react";

interface Inputs {
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  city?: string;
  password: string;
}

interface InputsProps {
  isSignIn: boolean;
  inputs: Inputs;
  handleInputsOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthModalInputs = ({
  isSignIn,
  inputs,
  handleInputsOnChange,
}: InputsProps) => {
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            id="firstName"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="first name"
            value={inputs.firstName}
            onChange={handleInputsOnChange}
          />
          <input
            type="text"
            id="lastName"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="last name"
            value={inputs.lastName}
            onChange={handleInputsOnChange}
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          id="email"
          className="w-[98%] rounded border p-2 py-3"
          placeholder="email"
          value={inputs.email}
          onChange={handleInputsOnChange}
        />
      </div>

      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            id="phoneNumber"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="phone number"
            value={inputs.phoneNumber}
            onChange={handleInputsOnChange}
          />
          <input
            type="text"
            id="city"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="city"
            value={inputs.city}
            onChange={handleInputsOnChange}
          />
        </div>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          id="password"
          className="w-[98%] rounded border p-2 py-3"
          placeholder="password"
          autoComplete="off"
          value={inputs.password}
          onChange={handleInputsOnChange}
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;
