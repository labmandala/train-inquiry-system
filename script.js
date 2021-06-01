var stations = [
	{ label: "Trivandrum", value: "TVN" },
	{ label: "Vellore", value: "VLR" },
	{ label: "Kottayam", value: "KYM" },
	{ label: "Hyderabad", value: "HDB" },
	{ label: "Ernakulam", value: "ERK" },
	{ label: "Coimbatore", value: "CBR" },
	{ label: "Thrissur", value: "THR" },
	{ label: "Chennai", value: "CHN" },
	{ label: "Bangalore", value: "BNG" },
	{ label: "Palakkad", value: "PLD" },
	{ label: "Mangalore", value: "MNG" }
];

var trains = [
	{
		name: "Venad Express",
		number: 16153,
		stops: ["THR", "ERK", "KYM", "TVN"]
	},
	{
		name: "Trivandrum Chennai Express",
		number: 2017,
		stops: ["CHN", "CBR", "THR", "ERK", "TVN"]
	},
	{
		name: "Coimbatore Express",
		number: 80339,
		stops: ["CBR", "BNG", "PLD", "HDB", "KYM"]
	},
	{
		name: "Mangalore Special",
		number: 1832,
		stops: ["MNG", "VLR", "PLD", "BNG", "TVN"]
	},
	{
		name: "Rajadhani Express",
		number: 5686,
		stops: ["VLR", "PLD", "HDB", "CHN"]
	},
	{
		name: "Triveni Special",
		number: 9655,
		stops: ["THR", "PLD", "HDB", "CHN", "CBR"]
	},
	{
		name: "Kalindi Express",
		number: 125,
		stops: ["THR", "ERK", "KYM", "VLR", "MNG"]
	}
];

$(document).ready(function () {
	$("#btnSearch").button();
});
