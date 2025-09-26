import React, { useState, useEffect } from 'react'

const words = ['Fearless', 'Authentic', 'People']

export default function TextReveal3D() {
  const [currentWord, setCurrentWord] = useState(0)
  const [prevword, setPrevWord] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevWord(currentWord)
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [currentWord])


  return (
    <div className="relative h-[600px] xl:h-[800px] w-full  items-center justify-end bg-white perspective hidden xl:flex">
      {words.map((word, index) => (
        <div
          key={word}
          className={`absolute left-0 w-full h-full flex items-center justify-end transition-all duration-500 ease-in-out ${
            index === currentWord ? 'rotate-x-0 opacity-100' : index === prevword ? 'rotate-x-270' :'rotate-x-90 opacity-0'
          }`}
          style={{ transformOrigin: 'center center -100px' }}
        >
          <p className="text-[180px] 2xl:text-[200px] text-black font-[boldtext] tracking-[-3mm]  text-center">
            {word}
          </p>
        </div>
      ))}
    </div>
  )
}

