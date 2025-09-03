import React from "react";

export default function Input({ label, name, value, onChange, type = "text" }) {
    return (
        <div className="relative w-full">
            <input
                type={type}
                id={"floatingInput" + label}
                name={name}
                value={value}
                onChange={onChange}
                className="peer w-full border-0 border-b border-white/60 bg-transparent text-white/60 placeholder-transparent focus:border-white focus:outline-none focus:ring-0 p-2"
                placeholder=" "
                required
            />
            <label
                htmlFor={"floatingInput" + label}
                className="absolute left-2 font-[thin] -top-6 text-sm text-white/60 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:scale-100 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white"
            >
                {label}
            </label>
        </div>
    );
}
