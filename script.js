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
	$("#from, #to, #calendar").val("");
	$("#btnSearch").click(function(){
		var fromStation = $("#from").val().split(" - ")[1];
		var toStation = $("#to").val().split(" - ")[1]; 
		var trainsArr = [];
		$.each(trains, function(index, value){
			for(key in value)
			{
				if (key == "stops")
				{
					if (jQuery.inArray(fromStation, value[key]) != -1 &&
					    jQuery.inArray(toStation, value[key]) != -1) 
					{
						trainsArr.push(value["number"]);
						trainsArr.push(value["name"]);
					}
				}
			}
		}); 
		// alert(trainsArr);
		var content;
		if (trainsArr.length == 0)
		{
			content = "<p><b>Sorry!!! There is no train in this route!</b></p>"
		}
		else 
		{
			content = "<table><tr><th>Train No:</th><th>Train Name:</th></tr>";
			for (var j=0;j<trainsArr.length;)
			{
				var k = 1;
				content += "<tr><td>" + trainsArr[j] + "</td><td>" + trainsArr[j+k] + "</td></tr>";
				j = j + 2;
			}
			content += "</table>";
		}
		$("#result").html(content);
		$("#table").css("display", "block");
	});
	$("#calendar").datepicker({dateFormat:"dd MM yy (DD)", minDate:new Date(), maxDate:"+2m"});
	$("#btnSearch").button();
	$("#from, #to").autocomplete({source:stations,
		select:function(event, ui){
			$(this).val(ui.item.label + " - " + ui.item.value);
			return false;
		}});
});
