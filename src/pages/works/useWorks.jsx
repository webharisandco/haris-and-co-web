import { useState, useEffect } from "react";

export default function useWorks(filterId) {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("/data/allWorksData.json") // fetch from public folder
      .then((res) => res.json())
      .then((data) => {
        if (!filterId || filterId === 1) {
          setWorks(data); // show all works
        } else {
          const filtered = data.filter(item => item.categoryId === filterId);
          setWorks(filtered);
        }
      })
      .catch(err => console.error(err));
  }, [filterId]);

  return works;
}
