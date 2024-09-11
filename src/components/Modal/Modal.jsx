import { useEffect } from "react";
import css from "./Modal.module.css";

const Modal = ({ onCloseModal, children }) => {
	useEffect(() => {
		const handleKeydown = (event) => {
			if (event.code === "Escape") {
				onCloseModal();
			}
		};
		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [onCloseModal]);

	const onHandleBackDropClick = (event) => {
		if (event.target === event.currentTarget) {
			onCloseModal();
		}
	};

	return (
		<div
			className={css.backdrop}
			onClick={onHandleBackDropClick}
		>
			<div className={css.modal}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
