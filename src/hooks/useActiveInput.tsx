'use client'

import { useEffect, useState } from "react";

export const useActiveInput = () => {
    const [isInputChanged, setIsInputChanged] = useState<boolean>(false);

    useEffect(() => {
        self.addEventListener('click', (e:any) => {
            if (e.target.classList.contains('input-field')) {
                setIsInputChanged(true);
            } else {
                setIsInputChanged(false);
            }  
        })
    }, [])

    return isInputChanged;
}