import { useForm } from 'react-hook-form'

function Form() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name: </label>
            <input {...register('name', { required: "Name is required" })}/>
            <br />
            {errors.name && <span>{errors.name.message}</span>}
            <br />
            <label htmlFor="email">Email: </label>
            <input {...register('email', { required: "Email is required" })}/>
            <br />
            {errors.email && <span>{errors.name}</span>}
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form