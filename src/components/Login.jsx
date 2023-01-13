import React, { useState } from 'react';
import {
	MDBRow,
	MDBCol,
	MDBInput,
	MDBCheckbox,
	MDBBtn,
	MDBIcon,
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
} from 'mdb-react-ui-kit';

export default function App() {
	const [iconsActive, setIconsActive] = useState('pill1');

	const handleIconsClick = (value: string) => {
		if (value === iconsActive) {
			return;
		}

		setIconsActive(value);
	};

	const [values, setValues] = useState({
		email: '',
		password: '',
		Name: '',
		Username: '',
	});
	const [submitted, setSubmitted] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleInputChange =
		(type) =>
		({ target }) => {
			setValues((values) => ({
				...values,
				[type]: target.value,
			}));
		};

	const isFormValid = () => {
		if (!values.email || !values.password || !values.Name || !values.Username) {
			return false;
		} else {
			return true;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		if (isFormValid()) {
			setShowSuccess(true);
		}
	};

	return (
		<div
			className='text-center'
			id='formm'
			class='register-form'
			onSubmit={handleSubmit}
		>
        			<MDBTabs pills justify className='mb-3'>
				<MDBCol>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleIconsClick('pill1')}
							active={iconsActive === 'pill1'}
						>
							<MDBIcon className='me-2' />
							Login
						</MDBTabsLink>
					</MDBTabsItem>
				</MDBCol>
				<MDBTabsItem>
					<MDBTabsLink
						onClick={() => handleIconsClick('pill2')}
						active={iconsActive === 'pill2'}
					>
						<MDBIcon className='me-2' />
						Register
					</MDBTabsLink>
				</MDBTabsItem>
			</MDBTabs>
			<MDBTabsContent>
				<MDBTabsPane show={iconsActive === 'pill1'}>
					<form>
						<div className='text-center mb-3'>
							<p>Sign up with:</p>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='facebook-f' />
							</MDBBtn>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='google' />
							</MDBBtn>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='twitter' />
							</MDBBtn>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='github' />
							</MDBBtn>
						</div>

						<p className='text-center'>or:</p>

						<MDBInput
							className='mb-4'
							type='email'
							id='form7Example1'
							label='Email address'
							disabled={showSuccess}
							value={values.email}
							onChange={handleInputChange('email')}
						/>
						{submitted && !values.email && (
							<span id='email-error'>Please enter a email</span>
						)}
						<MDBInput
							className='mb-4'
							type='password'
							id='form7Example2'
							label='Password'
							disabled={showSuccess}
							value={values.password}
							onChange={handleInputChange('password')}
						/>
						{submitted && !values.password && (
							<span id='password-error'>Please enter a last name</span>
						)}

						<MDBRow className='d-flex justify-content-center'>
							<MDBCol className='d-flex justify-content-center'>
								<MDBCheckbox
									id='form7Example3'
									label='Remember'
									defaultChecked
								/>
							</MDBCol>
							<MDBCol>
								<a href='#!'>Forgot password?</a>
							</MDBCol>
						</MDBRow>

						<MDBBtn type='submit' className='mb-4' block >
							Sign in
						</MDBBtn>

						<div className='text-center'>
							<p>
								Not a member? <a href='#!'>Register</a>
							</p>
						</div>
					</form>
				</MDBTabsPane>
				{/* PA????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????RTI 2  */}
				<MDBTabsPane show={iconsActive === 'pill2'}>
					<form>
						<div className='text-center mb-3'>
							<p>Sign up with:</p>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='facebook-f' />
							</MDBBtn>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='google' />
							</MDBBtn>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='twitter' />
							</MDBBtn>

							<MDBBtn floating color='secondary' className='mx-1'>
								<MDBIcon fab icon='github' />
							</MDBBtn>
						</div>

						<p className='text-center'>or:</p>

						<MDBInput
							className='mb-4'
							id='form8Example1'
							label='Name'
							disabled={showSuccess}
							value={values.Name}
							onChange={handleInputChange('Name')}
						/>
						{submitted && !values.Name && (
							<span id='Name-error'>Please enter a name</span>
						)}
						<MDBInput
							className='mb-4'
							type='email'
							id='form8Example3'
							label='Email address'
							disabled={showSuccess}
							value={values.email}
							onChange={handleInputChange('email')}
						/>
						{submitted && !values.email && (
							<span id='Name-error'>Please enter a email</span>
						)}
						<MDBInput
							className='mb-4'
							type='password'
							id='form8Example4'
							label='Password'
							disabled={showSuccess}
							value={values.password}
							onChange={handleInputChange('password')}
						/>
						{submitted && !values.password && (
							<span id='password-error'>Please enter a password</span>
						)}
						<MDBBtn type='submit' className='mb-4' block>
							Sign in
						</MDBBtn>
					</form>
				</MDBTabsPane>
			</MDBTabsContent>
		</div>
	);
}
