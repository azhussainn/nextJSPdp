"use client";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { setCustomizeData } from "@/store/pdpSlice";
import { getApiData, customizeApi } from "../utils";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const SizeList = ({ closeModal }) => {
  const size_list = useAppSelector(
    (state) => state.pdp.data.basic_details.size_list
  );
  const initialChoices = useAppSelector((state) => state.pdp.initialChoices);
  const size = initialChoices.size;
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const handlePress = async (size) => {
    const apiPayload = getApiData({ ...initialChoices, size });
    const apiResponse = await customizeApi(id, apiPayload);
    if (!apiResponse) return;
    dispatch(
      setCustomizeData({choicesData: { ...initialChoices, size }, ...apiResponse})
    );
    closeModal();
  };

  return size_list.map((ele) => (
    <div
      key={`ring_size_item_${ele}`}
      className="border-y p-2 flex items-center justify-between cursor-pointer"
      onClick={() => handlePress(ele)}
    >
      <p>{ele}</p>
      <div className="border border-black rounded h-6 w-6 flex items-center justify-center">
        {ele === size && <div className="h-3 w-3 bg-[#50d71e] rounded-full" />}
      </div>
    </div>
  ));
};

const SelectSize = () => {
  const modalRef = useRef(null);
  const size_list = useAppSelector((state) => state.pdp.data.basic_details.size_list);
  const initialChoices = useAppSelector((state) => state.pdp.initialChoices);
  const size = initialChoices.size;


  if (size_list && !size_list.length) return null;

  const toggleModal = () => {
    const modalElement = modalRef.current;
    if (modalElement.classList.contains("hidden")) {
      modalElement.classList.remove("hidden");
    } else {
      modalElement.classList.add("hidden");
    }
  };

  const closeModal = () => {
    modalRef.current.classList.add("hidden");
  };

  return (
    <div>

      <div className="flex items-center justify-between w-full">
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={toggleModal}
        > 
          {size  ? "Change Ring Size" : "Select Ring Size"}
        </button>
        <p>{size && "Your Ring Size is " + size}</p>
      </div>


      {/* Main modal */}
      <div
        tabIndex={-1}
        aria-hidden="true"
        ref={modalRef}
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div
          className="flex items-center justify-center  relative w-full h-full"
          onClick={closeModal}
        >
          <div
            className="z-[100] w-full max-w-2xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-0">
              {/* Modal header */}


                <div className="sticky bg-inherit flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
                  style={{ top : -20 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Select Your Size
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

              {/* Modal body */}
              <div className="p-6 space-y-6">
                <SizeList closeModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSize;
