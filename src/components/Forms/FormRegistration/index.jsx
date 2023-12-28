import { Link } from 'react-router-dom'
import css from './registration.module.css'
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
		<div className={css.formsignup} style={{ width: 500 }}>
			<form onSubmit={handleSubmit}>
				<Link type='button' className={css.link} to='/'>
					go home
				</Link>
				<div className={css.emailelm}>
					<label htmlFor='exampleInputEmail1' className=''>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className={css.formstyling}
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
					<input className={css.formstyling} type='text' name='name'  id='exampleInputName' />
				</div>
				<div className=''>
					<label htmlFor='exampleInputPassword1' className=''>
						Password
					</label>
					<input
						name='password'
						type='password'
						className={css.formstyling}
						id='exampleInputPassword1'
					/>
				</div>
				<button type='submit' className={css.signupbtn}>
					Register
				</button>
			</form>
			<Link className={css.link} to='/login'>Login</Link>
		</div>
	)
}