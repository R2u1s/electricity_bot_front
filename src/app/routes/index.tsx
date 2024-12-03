import React, {lazy} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Loadable from '../ui-components/Loadable';
import MainLayout from "../layout/Main";
import { TaskType } from '../_types/common';

/* import useUserContext from "@hooks/useUserContext"; */

export const signInPath = '/auth/signIn';

const EmptyPage = Loadable(lazy(() => import("../modules/_EmptyPage/views")));
const StartPage = Loadable(lazy(() => import("../modules/StartPage")));
const ListTaskPage = Loadable(lazy(() => import("../modules/ListTaskPage")));
const TaskPage = Loadable(lazy(() => import("../modules/TaskPage")));

const AppRoutes = () => {
/*     const { user, uiState } = useUserContext()
    const redirectElement = <Navigate to={user?.isLoggedIn ? uiState.rootPath : signInPath}/> */

    //исользуем один компонент для рендера списка новых заявок и списка выполненных
    //поэтому чтобы в этом компоненте определять, что он должен показывать, прописываем
    //путь через константу enum, чтобы она была в одном месте во избежание ошибок
    const urlNewTasks = `/${TaskType.new}`;
    const urlCompletedTasks = `/${TaskType.completed}`;

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>} >
                <Route index element={<StartPage />} />
            </Route>
            <Route path={urlNewTasks} element={<MainLayout/>} >
                <Route index element={<ListTaskPage />} />
            </Route>
            <Route path={urlCompletedTasks} element={<MainLayout/>} >
                <Route index element={<ListTaskPage />} />
            </Route>
            <Route path={"/task/:id"} element={<MainLayout/>} >
                <Route index element={<TaskPage />} />
            </Route>
            <Route path={signInPath} element={<div>No authorized</div>} />
            <Route path="/*" element={<EmptyPage/>}/>
        </Routes>
    );
};

export default AppRoutes;