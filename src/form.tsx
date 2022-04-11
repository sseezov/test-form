import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";

type Inputs = {
  login: string,
  password: string,
};

export default function Form() {
    let [sign, setSign] = useState('none');
    let [name, setName] = useState('none')

  const logName = (x:string)=>setName(x)
  const trueSign = ()=> setSign('true');
  const falseSign = ()=> setSign('false')
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data=>{
     if (data.login === 'steve.jobs@example.com'&& data.password === 'password'){
          trueSign()
     } else {
         falseSign();
         logName(data.login);

     }
 }  
  
  
         
  return (
      <div>      
              
        
              
    <form onSubmit={handleSubmit(onSubmit)}>
         {sign==='false'? <div className="error">{`no such user as ${name}`}</div> : console.log(true)}
      
      <label>Login <input {...register("login", { required: true })} /></label>
      {errors.login && <span>Обязательное поле</span>}
      
      <label>Password <input {...register("password", { required: true })} /></label>
      
      
      {errors.password && <span>Обязательное поле</span>}
       <span><label>
        <input
          name="remember"
          type="checkbox"   
                   
        />Запомнить меня
      </label></span>
      
      <input type="submit"/>
    </form>
    </div>
  );
}
