import React,{useState} from 'react'
import { nanoid } from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../redux/actions/person'

 function Person(props) {
    
   const [name,setName] = useState('')
   const [age,setAge] = useState('')

   const handleChangeName = (e) => {
       setName(e.target.value)
   }

   const handleChangeAge = (e) => {
        setAge(e.target.value)
   }

   const addPerson = ()=>{
		const personObj = {id:nanoid(),name,age}
		props.addPerson(personObj)
        setName('')
        setAge('')
	}

    return (
        <div>
        <h2>我是Person组件,上方组件求和为{props.count}</h2>
        <input value = {name} onChange={handleChangeName} type="text" placeholder="输入名字" />
        <input value = {age} onChange={handleChangeAge}  type="text" placeholder="输入年龄" />
        <button onClick={addPerson} >添加</button>
        <ul>
            {
				props.persons.map((p)=>{
					return <li key={p.id}>{p.name}--{p.age}</li>
				})
			}
        </ul>
    </div>
    )
}

export default connect(
	state => ({
		persons:state.persons,
		count:state.count
	}),//映射状态
	{addPerson}//映射操作状态的方法
)(Person)
