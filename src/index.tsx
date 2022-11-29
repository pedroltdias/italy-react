import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		
		<ChakraProvider>
			<Router />
		</ChakraProvider>

	</React.StrictMode>
);

