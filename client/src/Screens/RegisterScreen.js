import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox' 
import MessageBox from '../components/MessageBox' 

export default function Registercreen(props) {
    
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const redirect = props.location.search 
        ? props.location.search.split('=')[1]
        : '/'

    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo, loading, error } = userRegister

    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert('Password and confirm password are not match')
        }else{
            dispatch(register(name, email,password))
        }
        
    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    }, [props.history,redirect,userInfo])

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Criar conta</h1>
                </div>
                
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>} 
                
                    <div>
                    <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Digite o seu nome"
                    required
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
               
                <div>
                    <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite o seu email"
                    required
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Digite a sua senha"
                    required
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="confirmPassword">Confirme a Senha</label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Digite a sua senha novamente"
                    required
                    onChange={(e)=> setConfirmPassword(e.target.value)}/>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                       Registrar
                    </button>
                </div>
                <div>
                    <label/>
                    <div>
                        Já possuí uma conta?
                        <Link to={`/signin?redirect=${redirect}`}> Entrar</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
