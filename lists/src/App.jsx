import { useState } from 'react'

import { Card } from "flowbite-react";

export function App() {
  const [texts, setTexts] = useState([
    {title: "Noteworthy technology acquisitions 2021", paragraph: "Here are the biggest enterprise technology acquisitions of 2021 so far...", id: 1},
    {title: "Noteworthy technology acquisitions 2022", paragraph: "Here are the biggest enterprise technology acquisitions of 2022 so far...", id: 2},
    {title: "Noteworthy technology acquisitions 2023", paragraph: "Here are the biggest enterprise technology acquisitions of 2023 so far...", id: 3}
  ])

  return (
    <>
    {texts.map((text) => (
      <Card key={text.id} className="max-w-sm mb-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {text.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {text.paragraph}
        </p>
      </Card>
    ))}
    </>
  );
}


export default App
