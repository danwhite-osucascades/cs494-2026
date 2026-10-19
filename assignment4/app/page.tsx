'use client'

import { Dog } from "@/types/dog";
import { useState, useEffect } from "react";

import { Select, MenuItem, Box } from "@mui/material";
import Image from "next/image";

export default function Home() {

  const [dogs, setDogs] = useState<Dog[]>([])

  const [selectedDogName, setSelectedDogName] = useState<string | undefined>(undefined)

  const [selectedDog, setSelectedDog] = useState<Dog | undefined>(undefined)

  useEffect(() => {

    fetch("/api")
      .then((res) => res.json())
      .then((data) => setDogs(data.dogs))
  }, [])

  useEffect(() => {
    if (dogs.length > 0) {
      setSelectedDogName(dogs[0].name)
    }
  }, [dogs])

  useEffect(() => {
    if (selectedDogName) {
      setSelectedDog(dogs.filter((dog) => dog.name == selectedDogName)[0])
    }
  }, [selectedDogName])

  return (
    <main>
      <Box
        sx={{
          maxWidth: 700,
          mx: 'auto',
          px: { xs: 2, sm: 4 },
          py: { xs: 3, sm: 5 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
        }}
      >
        {selectedDogName && (
          <Box sx={{ width: '100%', maxWidth: 360 }}>
            <Select
              fullWidth
              value={selectedDogName}
              onChange={(e) => setSelectedDogName(e.target.value)}
              sx={{
                borderRadius: 2,
                bgcolor: 'background.paper',
              }}
            >
              {dogs.map((dog) => (
                <MenuItem value={dog.name} key={dog.name}>
                  {dog.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        )}

        {selectedDog && (
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              borderRadius: 3,
              boxShadow: 3,
              bgcolor: 'background.paper',
              lineHeight: 0,
            }}
          >
            <Image
              alt={selectedDog.name}
              src={selectedDog.imageLink}
              width={300}
              height={200}
              sizes="(max-width: 400px) 100vw, 300px"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        )}
      </Box>
    </main>
  );
}
