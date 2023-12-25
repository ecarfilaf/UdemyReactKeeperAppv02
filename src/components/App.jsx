import React from "react";
import reactDom from "react-dom";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
return ( 
	<div>
		<Heading />
		{notes.map((noteItem) => (
			 <Note		
			key={noteItem.key}
			title={noteItem.title}
			content={noteItem.content}
			/>
		))}
		<Footer />
	</div>
);
}

export default App;
