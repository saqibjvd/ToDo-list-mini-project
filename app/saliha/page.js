"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    const body = JSON.stringify({
      middle_name: "هلالی",
      last_name: "Popal"
    });
    fetch("/saliha/popal", {
      method: "POST",
      body: body
    },
    )
    .then((response) => {
      return response.json();
    })
    .then((response_json) => {
      setName(response_json.name);
    });
  })
  return (
    <h1>Hello {name}</h1> 
  );
}
