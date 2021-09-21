import React, {useState} from 'react'
import { connect } from 'react-redux'
import { decrement,increment,incrementAsync } from '../redux/actions/count'

const CountUI = (props) => { 

    const [num, setNum] = useState(1)

    const handleChange = (e) => {
        setNum(e.target.value)
    }
    
	//加法
	const increment = ()=>{
		props.increment(num*1)
	}
	//减法
	const decrement = ()=>{
		props.decrement(num*1)
	}
	//奇数再加
	const incrementIfOdd = ()=>{
		if(props.count % 2 !== 0){
			props.increment(num*1)
		}
	}
	//异步加
	const incrementAsync = ()=>{
		props.incrementAsync(num*1,500)
	}

    return (
        <div>
            <h1>当前数字是:{props.count}</h1>
			<h2>我是Count下方的人数是{props.personCount}</h2>
            <select value={num} onChange={handleChange}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>&nbsp;
			<button onClick={increment}>+</button>&nbsp;
			<button onClick={decrement}>-</button>&nbsp;
			<button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
			<button onClick={incrementAsync}>异步加</button>&nbsp;
        </div>
    )
 }



 export default connect(
	state => ({
		count:state.count,
		personCount:state.persons.length
	}),
	{increment,decrement,incrementAsync}
)(CountUI)

