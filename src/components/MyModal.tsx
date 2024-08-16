/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

import {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useState,
} from "react";
import { RxCross2 } from "react-icons/rx";

export default function MyModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [movies, setMovies] = useState([]);
  const [item, setItem] = useState("");

  function closeModal() {
    setIsOpen(false);
    setMovies([]);
  }

  async function onChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setItem(e.target.value);
    const response = await fetch("http://localhost:3000/api/search-movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: e.target.value }),
    });

    if (response.ok) {
      const data = await response.json();

      setMovies(data.data);
    }
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all relative">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Search any movie
                  </Dialog.Title>
                  <div className="mt-10">
                    <input
                      className="py-4 px-8 border rounded-full text-black w-full bg-gray-100"
                      placeholder="Search for Movies..."
                      onChange={onChange}
                    />
                  </div>
                  <div className="absolute right-3 top-3" onClick={closeModal}>
                    <RxCross2 className="w-6 h-6 text-black hover:cursor-pointer" />
                  </div>

                  <div>
                    <div>
                      {movies.map((movie: any, idx) => (
                        <div key={movie.title + idx}>
                          <Result
                            imgUrl={movie.image}
                            title={movie.title}
                            id={movie.imdbid}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function Result({
  imgUrl,
  title,
  id,
}: {
  imgUrl: string;
  title: string;
  id: string;
}) {
  return (
    <div className="grid grid-cols-[18%,82%] gap-3 my-3">
      <div className="w-14 h-14 flex justify-center items-center object-contain">
        <img src={imgUrl} alt={title} className="h-full object-contain" />
      </div>
      <div className="flex items-center">
        <Link href={"/movie/" + id} className="text-black hover:text-gray-900">
          {title}
        </Link>
      </div>
    </div>
  );
}
