'use client'

import { useState, useEffect } from "react";

export default function Home() {

  const [message, setMessage] = useState<string>("")

  useEffect(() => {

    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))

  }, [])

  return (
    <main>
      <div>{message}</div>
    </main>
  );
}
