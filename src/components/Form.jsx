import {useState} from 'react'

function Form() {
  const [formData, setformData] = useState({
    name: '',
    email: ''
  });

  function handleChange(e) {
    const { name, value } = e.target
    setformData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`${formData.name}, ${formData.email}`)
    setformData({name: '', email: ''})
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input name='name' type="text" value={formData.name} onChange={handleChange}/>
            <br />
            <label htmlFor="email">Email: </label>
            <input name='email' type="email" value={formData.email} onChange={handleChange}/>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form