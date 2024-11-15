import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';


const SignUp = () => {


  const [formData, setFormData ] = useState({});
  const [errorMessage, setErrorMessage ] = useState(null);
  const [loading, setLoading ] = useState(false);
  const navigate = useNavigate();


  const handleChange =(e) => {
    setFormData({ ...formData, [e.target.id] : e.target.value.trim() });
  }
  // console.log('formData : ', formData);

  const handleSubmit = async(e) => {

    e.preventDefault();
    if(!formData.username || !formData.password || !formData.email ){
      return setErrorMessage("please fill out all fields.");
    }
    try{
      setLoading(true);
      setErrorMessage(null)
      const res = await fetch('./api/auth/signup', {
        method : 'POST',
        headers : { 'Content-Type' : 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      // console.log('res data : ', res ,' res.success', res.ok);
      if(data.success === false) setErrorMessage(data.message);

      setLoading(false);
      if(res.ok) navigate("/sign-in");
    }
    catch(err){
      console.log('Error : /signup.jsx : ', err.message );
      setErrorMessage(data.message);
      setLoading(false);
    }
  }


  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* { left side  } */}
        <div className="flex-1">
          <Link to={'/'} className='font-bold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Tech</span>
          Blog
        </Link>

        <p className='text-sm mt-5'>This is a demo project. you can sign up with your email and password or with Google.</p> 
        </div>
        {/* { right side  } */}
        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={ handleSubmit }>
            <div>
              <Label value='Your username'  />
              <TextInput
                type='text' placeholder='Username' id='username' onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email'  />
              <TextInput
                type='email' placeholder='user@gmail.com' id='email' onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password'  />
              <TextInput
                type='password' placeholder='password' id='password' onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone={'purpleToPink'} type='submit' disabled={loading} >
              {
                loading ? (
                  <>
                    <Spinner size={'sm'} />
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign Up' 
              }
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have and account ?</span>
            <Link to={'/sign-in'}> Sign In</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5 ' color={'failure'}>{errorMessage}</Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SignUp
