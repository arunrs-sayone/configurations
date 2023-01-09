import React, { useState } from 'react'
import {User} from '../../../model'

type Props = {
    onAdditem:(item:User) => void
}


const InputField:React.FC<Props> = ({onAdditem}) => {

    const [user, setuser] = useState<string>('')

    const changevalue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setuser(e.target.value)
    }

    const submit = () => {
        onAdditem({name:user,id:1})
        setuser('')
    }

    return (
        <div>
            <input onChange={changevalue} value={user}/>
            <div onClick={submit}>Add</div>
        </div>
     )
}

export default InputField