"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    const body = JSON.stringify({
      last_name: "Javed",
    });
    fetch("/saqib/route", {
      method: "POST",
      body: body,
    })
      .then((response) => {
        return response.json();
      })
      .then((response_json) => {
        setName(response_json.name);
      });
  });
  return <h1>Hello {name}</h1>;
}
