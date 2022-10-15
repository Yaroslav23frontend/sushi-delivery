import { useState } from "react";
import Search from "./search/Search";
import { RiFilterFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { FiltersProps } from "./types";
export default function Filters({ filters }: FiltersProps) {
  const [filter, setFilter] = useState(filters?.filter.toLowerCase());
  const [sort, setSort] = useState(filters?.sort);
  const [perPage, setPerPage] = useState(filters?.per_page);
  const router = useRouter();
  function onChangeFilter(e: { target: HTMLSelectElement }) {
    setFilter(e.target.value.toLowerCase());
  }
  function onChangeSort(e: { target: HTMLSelectElement }) {
    setSort(e.target.value);
  }
  function onChangePerPage(e: { target: HTMLSelectElement }) {
    setPerPage(e.target.value);
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filter !== "" || sort !== "" || perPage !== "") {
      await router.push(
        `/?${filter && `filter=${filter}`}${sort && `&sort=${sort}`}${
          perPage && `&per_page=${perPage}&page=1`
        }`
      );
    }
  };
  return (
    <div className="w-full p-2">
      <div className="flex justify-start">
        <Search />
      </div>
      <form onSubmit={onSubmit}>
        <div className="w-full flex flex-wrap justify-start items-center gap-2">
          <select
            value={filter}
            onChange={onChangeFilter}
            className="block p-2  w-30 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-black shadow-lg"
          >
            <option value="sushi-sets">Sushi Sets</option>
            <option value="sushi-rolls">Sushi Rolls</option>
            <option value="nigiri-sushi">Nigiri Sushi</option>
            <option value="drinks">Drinks</option>
            <option value="all" defaultValue="all">
              All
            </option>
          </select>
          <select
            value={sort}
            onChange={onChangeSort}
            className="block p-2  w-30 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-black shadow-lg"
          >
            <option value="low">low to high</option>
            <option value="high">high to low</option>
          </select>
          <select
            value={perPage}
            onChange={onChangePerPage}
            className="block p-2  w-30 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-black shadow-lg"
          >
            <option value="5">5</option>
            <option defaultValue="10">10</option>
            <option value="15">15</option>
          </select>
          <button
            name="Filter"
            type="submit"
            className="border border-gray-300 p-2 rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100 active:bg-gray-100"
          >
            <RiFilterFill size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
