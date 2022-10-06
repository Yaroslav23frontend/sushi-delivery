import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import FormInput from "../UI/input/Input";
export default function Search() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  function onChange(e: { target: HTMLInputElement }) {
    setInput(e.target.value);
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input) {
      const temp: Array<string> = localStorage.getItem("searches")
        ? JSON.parse(localStorage.getItem("searches")!)
        : [];
      if (temp.length === 5) {
        temp.pop();
      }
      localStorage.setItem("searches", JSON.stringify([input, ...temp]));
      router.push(`/search?q=${input.replace(/ /g, "+")}`);
    }
  }
  return (
    <>
      {active && (
        <button
          onClick={() => setActive(false)}
          className="fixed z-20 opacity-0 top-0 left-0 block w-full h-full max-w-screen max-h-screen bg-black"
        >
          qw
        </button>
      )}
      <div className="fixed z-20 flex self-start justify-center items-center bottom-20 right-2 gap-2">
        {active && (
          <button
            onClick={() => setActive(false)}
            className="mb-3 flex justify-center items-center text-gray-700"
          >
            <RiCloseFill size={30} />
          </button>
        )}

        <form onSubmit={onSubmit} className="text-gray-100 w-full max-w-xs">
          <div className="flex z-20 justify-center items-center text-gray-400 focus-within:text-gray-600 gap-2">
            {active && (
              <FormInput
                type="text"
                name="Search"
                placeholder="Search"
                value={input}
                onChange={onChange}
                labelactive={"false"}
              />
            )}
          </div>
        </form>
        <button
          onClick={() => setActive(true)}
          className="z-10 my-2 rounded-full p-5 bg-gray-600 hover:bg-gray-800 active:bg-gray-900 text-white cursor-pointer"
        >
          <BsSearch size={22} />
        </button>
      </div>
    </>
  );
}
