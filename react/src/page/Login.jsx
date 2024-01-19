import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [inputData, setInputData] = useState()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


useEffect(()=>{
    axios.get('http://localhost:3001/users').
    then((res)=>
    {setInputData(res.data[0])
    console.log(res.data[0]);
    }).
    catch((err)=>console.log(err))
},[])

const login = (e) => {
    e.preventDefault()
    if(inputData.name===name && inputData.password===password){
        localStorage.setItem('token', name)
        navigate('/')
    }else{
        localStorage.setItem('token', "user")
        navigate('/')
    }
}

    return(
        <div className="container w-100 d-flex justify-content-center align-items-center py-5">
            <div className="card w-50">
                <div className="card-header" style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}>
                    <h3>Login</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={login}>
                        Username <br />
                        <input onChange={(e)=>setName(e.target.value)} className="form-control mb-2" type="text" />
                        Password <br />
                        <input onChange={(e)=>setPassword(e.target.value)} className="form-control mb-2" type="text" />
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <div>have you not account <a href="/register">register</a></div>
                            <button className="btn" style={{backgroundColor:"rgb(233, 69, 96)",color:"#fff"}}> Login </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login