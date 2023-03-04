import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url,{
            method:'POST',
            headers :{
               'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })


    } ;
    return (
        <div className='w-50 mx-auto'>
            <h1>Please add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}className ='d-flex flex-column'>
                <input className='mb-2 rounded'placeholder='Name'type='text'  {...register("name")} />
                <textarea className='mb-2'placeholder='Description'type='text' {...register("description", { required: true })}></textarea>
                <input className='mb-2'placeholder='Price'type='number' {...register("price")} />
                <input className='mb-2'placeholder='Photo Url'type='text' {...register("img")} />
                {/* <input type="Add Service" /> */}
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;