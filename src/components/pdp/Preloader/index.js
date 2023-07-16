"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setData } from "@/store/pdpSlice";

function Preloader({ data }){
    const loaded = useRef(false);
    if(!loaded.current){
        store.dispatch(setData(data));
        loaded.current = true;
    }
    return null;
}

export default Preloader;