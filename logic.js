let gog = document.getElementById("gog");

let input = document.getElementById("input");

let para = document.getElementById("para");

let but = document.getElementById("btn");

let spin = document.getElementById("spin");

// MEANING

async function update() {
	para.innerText = "";

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "4fe0237a16msh79b05c35d4cc929p15d943jsnf54c7ff59c05",
			"X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
		},
	};
	spin.setAttribute("class", "spinner-border");
	await fetch(
		`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${input.value}`,
		options
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (result) {
			if (result.definition != undefined && result.definition != "") {
				para.innerText = result.definition;
				spin.removeAttribute("class");
			} else if (result.definition == undefined) {
				para.innerText = "Please enter something...";
				spin.removeAttribute("class");
			} else {
				para.innerText = "Please enter a valid word....";
				spin.removeAttribute("class");
			}
		})
		.catch(function () {
			para.innerText = "Please enter valid word....";
		});
}

but.addEventListener("click", update);

// GOOGLE

function google() {
	if (input.value != "") {
		gog.setAttribute(
			"href",
			`https://www.google.com/search?q=${input.value}+meaning&sxsrf=AJOqlzXwcE_9iOIWVkyRtLP5OROOPZq_LA%3A1674045079018&ei=l-bHY4BUuaGx4w_l8bGoAQ&ved=0ahUKEwjA-5byj9H8AhW5UGwGHeV4DBUQ4dUDCA8&oq=${input.value}+meaning&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAEoECEYYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAA&sclient=gws-wiz-serp`
		);
	} else {
		const toastLiveExample = document.getElementById("liveToast");

		const toast = new bootstrap.Toast(toastLiveExample);

		toast.show();
		gog.removeAttribute("href");
	}
}

gog.addEventListener("click", google);

// POPOVER
