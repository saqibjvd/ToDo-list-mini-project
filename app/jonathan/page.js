'use client'  // this is a next.js directive that allows you to use 'useEffect'

import { useEffect, useState } from 'react'

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    const body = JSON.stringify({
      middle_name: "象昇",
      last_name: "Zheng",
    });
    fetch(
      "/jonathan/zheng", { method: "POST", body: body },
    ).then((response) => {
      return response.json();
    }).then((response_json) => {
      setName(response_json.name);
    });
  });
  return (
    <h1>Hello {name}</h1> 
  );
}
