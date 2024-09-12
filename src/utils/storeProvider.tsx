'use client';

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";

interface IStoreProvider {
    children: React.ReactNode;
}

export const StoreProvider = ({ children }:IStoreProvider) => {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{ children }</Provider>
}