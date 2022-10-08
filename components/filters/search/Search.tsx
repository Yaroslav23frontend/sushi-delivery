import { useRouter } from "next/router";
import { useState } from "react";
import FormInput from "../../UI/input/Input";
export default function Search() {
  const router = useRouter();
  const [input, setInput] = useState(`${router.query.q ? router.query.q : ""}`);
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
    <form onSubmit={onSubmit} className="w-full">
      <FormInput
        type="text"
        name="Search"
        placeholder="Search"
        value={input}
        onChange={onChange}
        labelactive={"false"}
      />
      <div className="flex w-full z-20 justify-center items-center text-gray-400 focus-within:text-gray-600 gap-2"></div>
    </form>
  );
}
