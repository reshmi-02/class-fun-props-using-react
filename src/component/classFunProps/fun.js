import React from 'react'

const Fun=(check)=>{
    console.log(check);
    return(
        <div>
            <p>string={check.name}</p>
                <p>number={check.age}</p>
                <p>object={check.obj.age}</p>
                <p>array={check.arr[2]}</p>

                <p>array of object
                    {
                        check.arrobj.map((value,i)=>{
                            return(
                                <div key={i}>
                                    <p>name={value.name}</p>
                                    <p>age={value.age}</p>
                                </div>
                            )
                        })
                    }
                </p>
        </div>
    )
}

export default Fun