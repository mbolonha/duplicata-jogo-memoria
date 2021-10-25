import React from 'react'

// import { React } from '../dependencies'

const Form = ({
	handleSubmit,
	email,
	honey,
	handleHoneypotChange,
	handleEmailChange,
	wrapperRefSecond,
}) => {
	return (
		<>
			<form
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				target="_blank"
				onSubmit={(e) => handleSubmit(e, email, honey)}
				noValidate
				className="contact-us validate"
				ref={wrapperRefSecond}
				data-netlify="true"
			>
				<p className="hidden">
					<label>
						Don’t fill this out if you’re human:{' '}
						<input
							name="bot-field"
							onChange={(e) => handleHoneypotChange(e.target.value)}
							value={honey}
						/>
					</label>
				</p>
				<br />
				{/* <label htmlFor="name" className="contact-label">
									Nome:
								</label>
								<br />
								<input
									type="text"
									name="name"
									id="name"
									className="contact-us-name"
									placeholder="Nome Sobrenome"
								/> */}
				<br />
				<label htmlFor="mce-EMAIL" className="contact-label">
					E-mail:
				</label>
				<br />
				<input
					type="email"
					name="EMAIL"
					id="mce-EMAIL"
					className="contact-us-email"
					placeholder="email@empresarial.com"
					required
					onChange={(e) => handleEmailChange(e.target.value)}
					value={email}
				/>
				<br />
				{/* <label htmlFor="msg" className="contact-label">
									Mensagem:
								</label>
								<br />

								<textarea
									name="msg"
									id="msg"
									className="contact-us-msg"
									cols="30"
									rows="10"
									placeholder="Mensagem"
								></textarea> */}
				<br />
				{honey || email === '' ? null : (
					<>
						<input
							type="submit"
							value="Enviar"
							className="contact-us-button"
							name="subscribe"
							id="mc-embedded-subscribe"
							disabled={email ? false : true}
						/>
					</>
				)}
			</form>
		</>
	)
}

export default Form
