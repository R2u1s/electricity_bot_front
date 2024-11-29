import React, {FC, useState} from "react"
import {Box} from "@mui/material"
import {Theme} from "@mui/material/styles";
import styles from "./styles.module.css"
import {Outlet} from "react-router-dom";
/* import useUserContext from "@hooks/useUserContext"; */
import { Navigate } from 'react-router-dom';
import {signInPath} from "../../routes";

const MainLayout:FC = () => {
/*     const {user} = useUserContext() */

    return (
        true ?
            <Box component="div" sx={{display: "flex", backgroundColor: (theme:Theme) => theme.palette.background.default}}>
                <main className={styles['content']}>
                    <Outlet/>
                </main> 
            </Box>
            :
            <Navigate to={signInPath}/>
    )
}

export default MainLayout
