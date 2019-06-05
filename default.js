function main () {
	menu_init();
	random_init();
	print_papers(papers);
}

function menu_init () {
	// Define items in the menu
	var section_names = new Array();
	section_names.push("header");
	section_names.push("research");
	section_names.push("papers");
	section_names.push("talks");
	section_names.push("service");
	//section_names.push("links");
	var section_titles = new Array();
	section_titles.push("home");
	section_titles.push("research");
	section_titles.push("papers");
	section_titles.push("talks");
	section_titles.push("service");
	//section_titles.push("links");
	// Print menus
	for (var i = 0; i < section_names.length; i++) print_menu(i,section_names,section_titles);
}

function random_init () {
	choose_random_banner();
	choose_random_quote();
}

function choose_random_banner () {
	var banners = new Array();
	banners[0] = "u.png";
	banners[1] = "j.png";
	banners[2] = "r.png";
	banners[3] = "c.png";
	banners[4] = "s.png";
	banners[5] = "f.png";
	var min = 0;
	var max = 2;
	var r = Math.floor(Math.random() * (max - min + 1)) + min;
	var style = "background: url(" + banners[r] + ") no-repeat;";
	document.getElementById("header").setAttribute("style",style);
}

function choose_random_quote () {
	var begin = "<span class='quot'>";
	var middle = "</span><br /><span class='auth'>&mdash; ";
	var end = "</span>&nbsp;&nbsp;&nbsp;";
	var quotes = new Array();
	var auths = new Array();
	quotes[0] = "Why should I care about posterity?<br />What's posterity ever done for me?";
	auths[0] = "Groucho Marx";
	quotes[1] = "A mathematician's nightmare is a sequence n<sub>&epsilon;</sub><br />that tends to 0 as &epsilon; becomes infinity.";
	auths[1] = "Paul Halmos";
	quotes[2] = "Computers are useless. They can only give you answers.";
	auths[2] = "Pablo Picasso";
	quotes[3] = "In mathematics you don't understand things.<br />You just get used to them.";
	auths[3] = "Jon von Neumann";
	quotes[4] = "I can wire anything directly into anything!";
	auths[4] = "Professor Farnsworth";
	quotes[5] = "Reload this page to get a fancier quote.";
	auths[5] = "Math.Random()";
	var min = 0;
	var max = 3;
	var r = Math.floor(Math.random() * (max - min + 1)) + min;
	document.getElementById("quote").innerHTML = begin + quotes[r] + middle + auths[r] + end;
}

function print_menu(section,section_names,section_titles) {
	// Print the menu on corresponding section
	var htmlContent = new String();
	for (var i = 0; i < section_names.length; i++) {
		var name = section_names[i];
		var title = section_titles[i];
		if (i == section) {
			htmlContent += "\t\t<span class='selected'> <span class='scaap'>" + title.charAt(0).toUpperCase() + "</span>" + title.substring(1) + " </span>\n";
		} else {
			htmlContent += "\t\t<span class='menuitem'> <a href='#" + name + "'>" + title + "</a> </span>\n";
		}
	}
	if (section == 0) {
		var secNum = new String(section);
		document.getElementById("menu" + secNum).innerHTML = htmlContent;
	} else {
		document.getElementById(section_names[section]).innerHTML = htmlContent;
	}
}

function print_papers (papers) {
	var htmlContent = new String();
	htmlContent += "<p id='disclaimer'>Papers available here may be subject to copyright and are intended for personal, non-commercial use only.</p>\n\n"
	for (var i = 0; i < papers.length; i++) {
		htmlContent += papers[i].authors + "<br />\n";
		htmlContent += "<a href='" + papers[i].pdfurl + "'>" + papers[i].title + "</a><br />\n";
		htmlContent += "<i>" + papers[i].where + "</i>\n";
		if ("links" in papers[i]) {
			if (papers[i].links.length > 0) htmlContent += "<br />\n";
			for (var j = 0; j < papers[i].links.length; j++) {
				htmlContent += "<a style='font-size: 0.9em;' href='" + papers[i].links[j].url + "'>[" + papers[i].links[j].name + "]</a>\n";
			}
		}
		if ("extra" in papers[i]) htmlContent += papers[i].extra + "\n";
		if (i < papers.length - 1) htmlContent += "<br /><br />\n";
	}
	document.getElementById("paperscontent").innerHTML = htmlContent;
}
