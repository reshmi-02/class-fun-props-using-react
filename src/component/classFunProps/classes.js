import React,{Component} from 'react'
import Fun from './fun.js'
class Classes extends Component{
render(){
    let x="props"
    let a=20;
    let obj={
        age:20
    }
    let arr=[1,2,3]
    let arrobj=[
        {
            name:"resh",
            age:23
        },
        {
            name:"pree",
            age:24
        }
    ]
    return(
        <div>
            <h1>Class to Function component</h1>
          <Fun name={x} age={a} obj={obj} arr={arr} arrobj={arrobj}/>
        </div>
    )
       

    
}
}

export default Classes