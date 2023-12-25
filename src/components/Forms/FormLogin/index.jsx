import { Link } from 'react-router-dom'
import { logIn } from 'api/auth'
import { useDispatch } from 'react-redux'

export const FormLogin = () => {
	const dispatch = useDispatch()
    const handleSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget;
		dispatch(logIn({
			 email: form.elements.email.value,
        password: form.elements.password.value,
		}))
		form.reset()
    }
    return (
        <>
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
					Login
				</button>
            </form>
            <Link to='/registration'>Registration</Link>
        </>
    )
}