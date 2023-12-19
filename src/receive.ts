const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true}));

app.post("/", (req: any, res: any) => {
	try {
		const	json_message = JSON.stringify(req.body);
		let		message_only = "";
		for (const c of json_message) {
			if (c == '\"' || c == ':' || c == '{' || c == '}') {
				continue;
			}
			message_only += c;
		}
		console.log(`message_only is:\n${(message_only)}`);
		const isTrue = message_only === "Hello";
		res.send(isTrue);
	}
	catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal server error");
	}
});

app.get("/status", (req: any, res: any) => {
	res.status(200).json({ status: "API is running" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
