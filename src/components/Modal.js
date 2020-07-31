import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { popIn } from "./AnimeTooltip";
import { closeModal } from "../reducers/modal";
import { CloseIcon } from "./Icons";

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

  .close-icon {
    margin: 1rem;
  }

  .close-icon svg {
    fill: ${(props) => props.theme.orange};
  }
`;

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper>
      <div className="close-icon" onClick={() => dispatch(closeModal())}>
        <CloseIcon />
      </div>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
