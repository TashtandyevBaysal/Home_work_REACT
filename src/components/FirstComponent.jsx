import React from 'react'

export default function FirstComponent() {
     const num = 83;
     const text = "Baysal"


  return (
    <div>
        <div>
           HELLO WORLD!
        </div>
        <button>
          Кнопка
        </button>
        <ul>
            <li>JS1</li>
            <li>JS2</li>
            <li>JS3</li>
        </ul>
      <p>Число:{ num }</p>
      {["Текст:", text ]}
    </div>
  )
}
