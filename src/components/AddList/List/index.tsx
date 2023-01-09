import React from 'react'
import {User} from '../../../model'

type Props = {
    items :User[],
    title:string,
    description?:string
}

const List:React.FC<Props> = ({items,title,description}) => {
    return (
        <>
            {title}
            {description}
            <div>
            {items?.map((item) => (
                <>{item.name}</>
            ))}
            </div>
        
        </>
    )
}

export default List