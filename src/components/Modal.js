import React from "react";
import styled from "styled-components";
import { popIn } from './AnimeTooltip';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.modalOverlay};
  z-index: 2;
  animation: ${popIn} 0.3s ease-in-out;

	.img-modal {
		width: 700px;
		height: 400px;
		margin: 100px auto;
	}

	.img-modal img {
		width: 700px;
		height: 400px;
		object-fit: cover;
	}
`;

const Modal = ({children}) => {

  return (
		<ModalWrapper>
			{children}
    </ModalWrapper>
  );
};

export default Modal;
