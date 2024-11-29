import React, {FC, PropsWithChildren} from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop:FC<PropsWithChildren<any>> = ({children}) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>
};

export default ScrollToTop;
