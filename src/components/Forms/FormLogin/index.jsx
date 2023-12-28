import { Link } from 'react-router-dom'
import { logIn } from 'api/auth'
import { useDispatch } from 'react-redux'
import css from './formlogin.module.css'

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
        <form className={css.formlogin} onSubmit={handleSubmit}>
            <Link type='button' className={css.link} to='/'>
					go home
				</Link>
				<div className={css.emailelm}>
					<label className={css.textlabel} htmlFor='exampleInputEmail1'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className={css.formstyling}
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					<div id='emailHelp' className={css.notice}  >
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className=''>
					<label className={css.textlabel} htmlFor='exampleInputPassword1' >
						Password
					</label>
					<input
						className={css.formstyling}
						name='password'
						type='password'
						id='exampleInputPassword1'
					/>
				</div>
				<button className={css.btnanimate } type='submit'>
					Login
				</button>
				<Link className={css.link} to='/registration'>Registration</Link>
				
            </form>
            
        </>
    )
}