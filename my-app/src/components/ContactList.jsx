import { useEffect, useState } from "react";
import PhoneListItem from "./PhoneListItem";
import "./ContactList.css";
import Form from "./Form";
import {
	createContact,
	deleteContact,
	getContactsList,
} from "../services/contactService";

export default function ConatactList() {
	const [phoneList, setPhoneList] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [state, setState] = useState({
		name: "",
		surname: "",
		phone: "",
	});

	useEffect(() => {
		getContactsList().then((data) => {
			setPhoneList(data);
		});
	}, []);

	const onDeleteButtonClick = (id) => {
		deleteContact(id);
		const newPhoneList = phoneList.filter((list) => list.id !== id);
		setPhoneList(newPhoneList);
	};

	const onAddContact = () => {
		setShowForm(!showForm);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createContact(state).then((data) => setPhoneList([...phoneList, data]));
		setShowForm(!showForm);
	};

	const handleInput = (e) => {
		e.preventDefault();
		setState((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<>
			<table className='table_phone'>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Телефон</th>
					</tr>
				</thead>
				{phoneList.map((data) => (
					<PhoneListItem
						key={data.id}
						item={data}
						onDeleteButtonClick={onDeleteButtonClick}
					/>
				))}
			</table>
			<button className='addAndHide-btn' onClick={onAddContact}>
				{showForm ? "Hide form" : "Add"}
			</button>
			{showForm ? (
				<Form
					handleSubmit={handleSubmit}
					handleInput={handleInput}
					onHideForm={onAddContact}
				/>
			) : null}
		</>
	);
}
