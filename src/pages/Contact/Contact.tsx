import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { emailJsConfig } from "../Contact/config/emailJsConfig";
import "./Contact.css";
interface FormData {
	fullname: string;
	email: string;
	message: string;
}
interface FormErrors {
	fullname?: string;
	email?: string;
	message?: string;
}
const initialState: FormData = { fullname: "", email: "", message: "" };
const Contact = () => {
	const [formData, setFormData] = useState<FormData>(initialState);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		setFormData((previous) => ({ ...previous, [name]: value }));
		if (errors[name as keyof FormErrors]) {
			setErrors((previous) => ({ ...previous, [name]: "" }));
		}
	};
	const isValidEmail = (value: string): boolean =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	const validateForm = (): FormErrors => {
		const validationErrors: FormErrors = {};
		const fullname = formData.fullname.trim();
		const email = formData.email.trim();
		const message = formData.message.trim();
		if (!fullname) {
			validationErrors.fullname = "Name is required.";
		}
		if (!email) {
			validationErrors.email = "Email is required.";
		} else if (!isValidEmail(email)) {
			validationErrors.email = "Enter a valid email address.";
		}
		if (!message) {
			validationErrors.message = "Message is required.";
		}
		return validationErrors;
	};
	const handleSubmit = async (event: React.SubmitEvent) => {
		event.preventDefault();
		const validationErrors = validateForm();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setIsLoading(true);
		const { serviceId, templateId, publicKey } = emailJsConfig;
		if (!serviceId || !templateId || !publicKey) {
			console.error("EmailJS environment variables are not configured.");
			toast.error("Unable to send your message right now.", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			setIsLoading(false);
			return;
		}
		const templateParams = {
			fullname: formData.fullname.trim(),
			email: formData.email.trim(),
			message: formData.message.trim(),
		};
		try {
			await emailjs.send(serviceId, templateId, templateParams, publicKey);
			setFormData(initialState);
			setErrors({});
			toast.success("Message sent successfully!", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: "dark",
			});
		} catch (error) {
			console.error("Email could not be sent.", error);
			toast.error("Your message could not be sent. Please try again.", {
				position: "top-center",
				autoClose: 3000,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: "dark",
			});
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<main className='contact'>
			{" "}
			<header className='contact_header'>
				{" "}
				<h1>Contact</h1> <hr />{" "}
			</header>{" "}
			<section
				className='contact_map'
				aria-label='Location map'>
				{" "}
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12646201.004023945!2d-104.05824400058673!3d39.30068989979106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1714172491041!5m2!1sen!2sus'
					title='Map showing the location'
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				/>{" "}
			</section>{" "}
			<section className='contact_form_section'>
				{" "}
				<div className='contact_form_header'>
					{" "}
					<h2>Contact Form</h2>{" "}
					<p>
						{" "}
						Have a question or want to work together? Send me a message.{" "}
					</p>{" "}
				</div>{" "}
				<form
					className='contact_form'
					onSubmit={handleSubmit}
					noValidate>
					{" "}
					<div className='contact_form_fields'>
						{" "}
						<div className='contact_form_field'>
							{" "}
							<label htmlFor='fullname'>Full Name</label>{" "}
							<input
								id='fullname'
								type='text'
								name='fullname'
								placeholder='Enter your full name'
								value={formData.fullname}
								onChange={handleChange}
								autoComplete='name'
								aria-invalid={Boolean(errors.fullname)}
								aria-describedby={
									errors.fullname ? "fullname-error" : undefined
								}
							/>{" "}
							{errors.fullname && (
								<span
									id='fullname-error'
									className='contact_form_error'>
									{" "}
									{errors.fullname}{" "}
								</span>
							)}{" "}
						</div>{" "}
						<div className='contact_form_field'>
							{" "}
							<label htmlFor='email'>Email Address</label>{" "}
							<input
								id='email'
								type='email'
								name='email'
								placeholder='Enter your email address'
								value={formData.email}
								onChange={handleChange}
								autoComplete='email'
								aria-invalid={Boolean(errors.email)}
								aria-describedby={errors.email ? "email-error" : undefined}
							/>{" "}
							{errors.email && (
								<span
									id='email-error'
									className='contact_form_error'>
									{" "}
									{errors.email}{" "}
								</span>
							)}{" "}
						</div>{" "}
					</div>{" "}
					<div className='contact_form_field'>
						{" "}
						<label htmlFor='message'>Message</label>{" "}
						<textarea
							id='message'
							name='message'
							placeholder='Write your message...'
							value={formData.message}
							onChange={handleChange}
							rows={8}
							aria-invalid={Boolean(errors.message)}
							aria-describedby={errors.message ? "message-error" : undefined}
						/>{" "}
						{errors.message && (
							<span
								id='message-error'
								className='contact_form_error'>
								{" "}
								{errors.message}{" "}
							</span>
						)}{" "}
					</div>{" "}
					<button
						type='submit'
						className='contact_form_btn'
						disabled={isLoading}
						aria-busy={isLoading}>
						{" "}
						<span> {isLoading ? "Sending..." : "Send Message"} </span>{" "}
						<SendIcon
							className='contact_form_btn_send'
							aria-hidden='true'
						/>{" "}
					</button>{" "}
				</form>{" "}
			</section>{" "}
		</main>
	);
};
export default Contact;
