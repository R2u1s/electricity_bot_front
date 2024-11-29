import React, {FC, PropsWithChildren} from 'react'


const MinimalLayout: FC<PropsWithChildren<{}>> = ({children}) => {
    return <>{children}</>
}

export default MinimalLayout
