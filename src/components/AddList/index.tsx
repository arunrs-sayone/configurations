import React, { useState } from 'react'
import InputField from './InputField'
import List from './List'
import {User} from '../../model'

const AddList = () => {

    const [items, additem] = useState<User[]>([])

    const onAdditem = (item:User) => {
        additem([...items, item])
    }

    return (
        <>
            <div>
               <InputField onAdditem={onAdditem}/>
               <List items={items} title='list' />
            </div>
          
        
        
        </>
    )
}

export default AddList