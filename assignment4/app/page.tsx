'use client'

import { Dog } from "@/types/dog";
import { useState, useEffect } from "react";

import { Select, MenuItem } from "@mui/material";

// TODO:
// Use a MUI select populated with the dog names
// When a user selects a dog, under the MUI Select, 
// have a next.js <Image> display the picture of the dog

export default function Home() {

  const [dogs, setDogs] = useState<Dog[]>([])

  const [selectedDog, setSelectedDog] = useState<string | undefined>(undefined)

  useEffect(() => {

    fetch("/api")
      .then((res) => res.json())
      .then((data) => setDogs(data.dogs))
  }, [])

  useEffect(() => {
    if (dogs.length > 0) {
      setSelectedDog(dogs[0].name)
    }
  }, [dogs])

  return (
    <main>
      <div>
        {
          selectedDog ?
            <div>
              <Select
                value={selectedDog}
                onChange={(e) => setSelectedDog(e.target.value)}
              >
                {
                  dogs.map((dog, i) => (
                    <MenuItem value={dog.name} key={i}>{dog.name}</MenuItem>
                  ))
                }
              </Select>
              <img src={dogs.filter((dog) => dog.name == selectedDog)[0].imageLink} />
            </div> :
            <></>
        }



      </div>
    </main>
  );
}
