export default function PhoneListItem(props) {
	const { item } = props;
	const { name, surname, phone, id } = item;
	return (
		<tbody>
			<tr>
				<td>{name}</td>
				<td>{surname}</td>
				<td>{phone}</td>
				<td>
					<button onClick={() => props.onDeleteButtonClick(id)}>Delete</button>
				</td>
			</tr>
		</tbody>
	);
}
