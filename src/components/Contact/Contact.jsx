import { BsFillPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css"
import { useDispatch} from "react-redux";
import { apiDeleteContacts } from "../../redux/contacts/contactsOperations";
import toast from "react-hot-toast";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Contact = ({ name, number, id, }) => {
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const onDeleteContact = (contactId) => {
		dispatch(apiDeleteContacts(contactId)).then(() => {
			toast.success(`Contact ${name} deleted successfully`)
		});
		setIsModalOpen(false);
	};
	const handleDeleteClick = () => {
		setIsModalOpen(true);
	};
	return (
		<li className={css.contactWrapper}>
			<ul className={css.contactList}>
				<li className={css.contactItem}>
					<BsFillPersonFill />
					{name}
				</li>
				<li className={css.contactItem}>
					<BsTelephoneFill />
					{number}
				</li>
			</ul>
			<button onClick={handleDeleteClick} type='button' className={css.contactBtn}>
        delete
			</button>
			{isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)}>
          <h3>Are you sure you want to delete {name}?</h3>
          <button
            onClick={() => onDeleteContact(id)}
            className={css.confirmBtn}
            type='button'
          >
            Yes, delete
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className={css.cancelBtn}
            type='button'
          >
            Cancel
          </button>
        </Modal>
      )}
		</li>
	);
};

export default Contact;
