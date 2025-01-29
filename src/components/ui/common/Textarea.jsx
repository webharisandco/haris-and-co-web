import React from 'react'

export default function Textarea() {
    return (
        <div class="relative w-full mt-1">
            <textarea
                id="floatingTextarea"
                rows="4"
                class="peer w-full border-0 border-b-2 border-white/60 bg-transparent text-white/60 placeholder-transparent focus:border-white focus:outline-none focus:ring-0 resize-none p-2 pt-4"
                placeholder=" "
            ></textarea>

            <label
                for="floatingTextarea"
                class="absolute left-2 font-thin -top-6 text-sm text-white/60 transform scale-100 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:scale-100 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white"
            >
                Message
            </label>
        </div>

    )
}
