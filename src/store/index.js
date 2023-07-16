import { configureStore } from "@reduxjs/toolkit";
import pdpReducer from "./pdpSlice";

export const store = configureStore({
    reducer: {
        pdp: pdpReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
    })
});