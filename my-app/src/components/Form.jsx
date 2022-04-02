export default function Form(props) {
	const { handleSubmit, handleInput, onHideForm } = props;

	return (
		<form className='contact_form' action='' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Name'
				name='name'
				onChange={handleInput}
			/>
			<input
				type='text'
				placeholder='Surname'
				name='surname'
				onChange={handleInput}
			/>
			<input
				type='text'
				placeholder='Phone number'
				name='phone'
				onChange={handleInput}
			/>
			<button>Save</button>
			<button onClick={onHideForm}>Cancle</button>
		</form>
	);
}
