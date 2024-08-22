"use client"
import { useForm, SubmitHandler, FieldValue, FieldValues } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";

import AuthContainer from "../containers/AuthContainer"
import Button from "../general/Button"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Link from "next/link";


const LoginClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>()


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  return (
    <AuthContainer>

        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
          <Heading text="Login" center/>
          <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required/>
          <Input placeholder="Password" type="password" id="password" register={register} errors={errors} required/>
          <Button text="Giriş" onClick={() => {}}/>
            <div className="text-center my-2 text-lg text-black"> <Link className="underline" href="/register"> Üye Ol  </Link>  </div>
          <div className="text-center my-2 font-bold text-lg">OR </div>
          <Button text="Google İle Giriş Yap" icon={FaGoogle} outline onClick={handleSubmit(onSubmit)}/>
         
        </div>



    </AuthContainer>




   
  )
}

export default LoginClient