import React, { useState, useRef } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Form from '../components/Form'
// import sgMail from '@sendgrid/mail'
// import { React } from '../dependencies'
// import fetch from 'node-fetch'

const { SgmModule } = require('./SgmModule')

const FormContainer = () => {
	const [email, setEmail] = useState('')
	const [honey, setHoney] = useState('')
	const [mcRes, setMcRes] = useState('')
	const [msg, setMsg] = useState('')
	const [success, setSuccess] = useState('')
	const wrapperRefSecond = useRef(null)
	SgmModule('SEND')
	console.log('SEND CABOU DE ir')
	console.log(process.env.MAILCHIMP_ENDPOINT)

	const handleMcRes = (msgReceived, resReceived) => {
		console.log(mcRes)
		setMcRes(resReceived)
		handleMsg(msgReceived, resReceived)
		handleSuccess(resReceived)
	}
	const handleMsg = (msgNow, resReceived) => {
		console.log('msgNow: ')
		console.log(msgNow)
		console.log('resReceived: ')
		console.log(resReceived)
		let msgNull = null
		if (resReceived === 'error') {
			msgNull = 'E-mail inválido ou já cadastrado.'
		}
		if (resReceived === 'success') {
			msgNull = 'Lembrete definido. Até logo!'
		}
		setMsg(msgNull)
	}
	const handleSuccess = (successNow) => {
		setSuccess(successNow)
	}

	const handleEmailChange = (emailTyping) => {
		setEmail(emailTyping)
	}
	const handleHoneypotChange = (honeyTyping) => {
		setHoney(honeyTyping)
	}
	const handleSubmit = async (e, email, honey) => {
		e.preventDefault()
		alert('submitting')

		console.log('e: ')
		console.log(e)
		honey ||
			(await addToMailchimp(email, {
				PATHNAME: '/fale-conosco',
				FNAME: 'Nome',
				LNAME: 'Sobrenome',
			}).then(({ msg, result }) => {
				handleMcRes(msg, result)
			}))

		alert('MC submitted')

		/*
		sgMail.setApiKey(process.env.SENDGRID_API_KEY)
		const msg = {
			to: 'vendas@edu4dev.com.br', // Change to your recipient
			from: 'vendas@edu4dev.com.br', // Change to your verified sender
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		}
		sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent')
				alert('SG submitted')
			})
			.catch((error) => {
				console.error(error)
				alert('SG error')
			})*/
	}
	const successHTMLstyle = {
		color: 'green',
		fontWeight: 900,
		marginBottom: 0,
	}
	const errorHTMLstyle = {
		color: 'red',
		marginBottom: 0,
		fontWeight: 900,
	}
	console.log(wrapperRefSecond)

	return (
		<>
			{msg ? (
				<p style={success === 'success' ? successHTMLstyle : errorHTMLstyle}>
					{msg}
				</p>
			) : null}
			{success !== 'success' ? (
				<Form
					handleSubmit={handleSubmit}
					email={email}
					honey={honey}
					handleHoneypotChange={handleHoneypotChange}
					handleEmailChange={handleEmailChange}
					wrapperRefSecond={wrapperRefSecond}
				/>
			) : (
				<>
					<br />
				</>
			)}
		</>
	)
}
export default FormContainer
