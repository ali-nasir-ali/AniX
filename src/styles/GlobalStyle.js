import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body::-webkit-scrollbar {
		width: 0.25rem;
	}

	body::-webkit-scrollbar-track {
		background: ${(props) => props.theme.bg};
	}

	body::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.blue};
	}

	body {
		font-size: 1rem;
		font-family: ${(props) => props.theme.font}, sans-serif;
		color: ${(props) => props.theme.primaryColor};
		background-color: ${(props) => props.theme.bg};
		line-height: 1.8;
		overflow-x: hidden;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	input, textarea {
		font-family: ${(props) => props.theme.font}, sans-serif;
		font-size: 1rem;
	}

	input:focus, textarea:focus, button:focus, video:focus {
			outline: none;
	}

	button {
		font-family: ${(props) => props.theme.font}, sans-serif;
		font-size: 1rem;
		cursor: pointer;
	}

	textarea {
		resize: none;
	}

	video[poster]{
    object-fit: cover;
  }

  .vjs-poster {
    background-size: cover;
    background-position: inherit;
  }
	

	@media screen and (max-width: 500px) {
		body {
			font-size: 0.9rem;
		}
	}
`;

export default GlobalStyle;
