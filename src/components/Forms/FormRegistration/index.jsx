import { Link } from 'react-router-dom'

export const FormRegistration = ({ register }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget;
		const newUser = {
			name: e.target.elements.name.value,
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
		}
		register(newUser)
		form.reset();
	}
	return (
		<div className='' style={{ width: 500 }}>
			<form onSubmit={handleSubmit}>
				<Link type='button' className='' to='/'>
					go home
				</Link>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className=''>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className=''
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					<div id='emailHelp' className=''>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className=''>
					<label htmlFor='exampleInputName' className=''>
						Name
					</label>
					<input type='text' name='name' className='' id='exampleInputName' />
				</div>
				<div className=''>
					<label htmlFor='exampleInputPassword1' className=''>
						Password
					</label>
					<input
						name='password'
						type='password'
						className=''
						id='exampleInputPassword1'
					/>
				</div>
				<button type='submit' className=''>
					Register
				</button>
			</form>
			<Link to='/login'>Login</Link>
		</div>
	)
}