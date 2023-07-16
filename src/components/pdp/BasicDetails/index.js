"use client";

import { useSelector } from "react-redux";
import BasicDetails from "./SSRbasicDetails";

const ClientWrapper = () => {
    const data = useSelector((state) => state.pdp.data);
    return (
        <BasicDetails data={data}/>
    )
}

export default ClientWrapper;