import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

export default function ProfileScreen() {
    
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user} = userDetails
    const dispatch = useDispatch()

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile )
    const { success: successUpdate, error: errorUpdate,loading: loadingUpdate } = userUpdateProfile
    
    const submitHandler = (e)=>{
        e.preventDefault()
        
        if(password !== confirmPassword){
            alert('Password and Confirm Password are not matched')
        } else{
            dispatch(updateUserProfile({
                userId: user._id,
                name,
                email,
                password
            }))
        }
    }

    useEffect(()=>{
        if(!user){
            dispatch({type:USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id))
        }else {
            setName(user.name)
            setEmail(user.email)
           
        }
    },[dispatch, userInfo._id, user])

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {
                    loading
                    ? <LoadingBox></LoadingBox>
                    : error 
                    ? <MessageBox variant="danger">{error}</MessageBox> 
                    :
                    <>
                    {
                        loadingUpdate && <LoadingBox></LoadingBox>
                    }
                    {
                        errorUpdate &&  <MessageBox variant="danger">{error}</MessageBox> 

                    }
                    {
                        successUpdate &&  
                        <MessageBox variant="success">
                            Profile Update Successfully
                        </MessageBox> 
                    }
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Entre name"
                                value={name}
                                onChange={(e)=> setName(e.target.value)}
                                />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Entre email"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}

                                />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Entre password"
                                onChange={(e)=> setPassword(e.target.password)}

                                />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="confirmPassword"
                                placeholder="Entre Confirm Password"
                                onChange={(e)=> setConfirmPassword(e.target.confirmPassword)}

                            />
                        </div>
                        <div>
                            <label/>
                            <button className="primary" type="submit">
                                Update
                            </button>
                        </div>
                    </>

                }
            </form>
        </div>
    )
}
