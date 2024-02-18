import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div className="mb-10">
      <h3 className="font-semibold text-4xl text-center" >{greeting}</h3>
      {/* <button className="border-2 rounded-lg px-4 py-1 font-semibold text-[--primary-color] border-[--primary-color] my-4 hover:opacity-80" 
      onClick={() => setGreeting(randomMessage())}>
        Nuevo saludo 🖖
      </button> */}
    </div>
  );
}