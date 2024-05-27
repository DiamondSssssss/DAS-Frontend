// @ts-nocheck
import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";
import ChevronDown from "../asset/ChevronDown.svg";

export default function DropDown(props) {
  const [selected, setSelected] = useState(props.data[0]);

  useEffect(() => {
    if (props.data.length > 0) {
      if (props?.defaultDifficult) {
        if (props?.defaultDifficult !== null) {
          setSelected(props.data[props?.defaultDifficult]);
        }
      } else {
        if (props?.name) {
          setSelected((prev) => {
            return { ...prev, name: props?.name, value: null };
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof props?.onSelected === "function") {
      props?.onSelected(selected);
    }
  }, [selected]);

  return (
    <div
      className={`flex justify-center h-fit w-fit font-semibold font-inter ${
        props?.hidden ? "hidden" : ""
      }`}
    >
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
        }}
      >
        <div className="relative">
          <Listbox.Button
            className={` relative w-full cursor-default rounded-[20px] bg-white pl-3 pr-9 text-left shadow-md border-blue_base border-[2px] sm:text-sm ${props?.className}`}
          >
            <span className="block truncate text-blue_base">
              {selected?.name}
            </span>
            <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 pr-2 right-0 ">
              <img className=" h-4 w-4 text-blue_base" src={ChevronDown} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute left-0 right-0 mx-auto mt-1 max-h-60 max-w-[250px] w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 sm:text-sm">
              {props?.data.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative flex cursor-default select-none py-2 pl-5 pr-4 font-semibold font-inter ${
                      active ? "bg-white text-blue_base" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person?.name}
                      </span>
                      {selected ? (
                        <span className="inset-y-0 left-0 flex items-center pl-3 text-blue_base">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
