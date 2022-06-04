let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main= document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let arena = document.querySelector(".arena");
let mastery = document.querySelector(".mastery");

let location2 = document.querySelector(".location2"); //локация 2
let nojniBox = document.querySelector(".nojni"); //ачивка ножны

let location3 = document.querySelector(".location3")
let location4 = document.querySelector(".location4")
	
let player_status = {
	sword: 0,
	shield: 0,
	nojni: 0
}
let sword = document.querySelector(".sword")
let shield = document.querySelector(".shield")
let nojni = document.querySelector(".nojni")

let sword_txt = document.querySelector(".sword_txt")
let shield_txt = document.querySelector(".shield_txt")
let nojni_txt = document.querySelector(".nojni_txt")

let return2to1 = function(){
	main.style.display = "block";
	location2.style.display = "none";
	body.style.backgroundImage = "url(bg1.png)";
}
let return3to1 = function(){
	main.style.display = "block";
	location3.style.display = "none";
	body.style.backgroundImage = "url(bg1.png)";
}
let return4to1 = function(){
	main.style.display = "block";
	location4.style.display = "none";
	body.style.backgroundImage = "url(bg1.png)";
}

school.onclick = function(){
	main_player.style.top = "32%";
	main_player.style.left = "70%";

	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let talk = document.querySelector(".loc2_talk");
	let wrong = document.querySelectorAll(".loc2_variants");
	let write = document.querySelector(".loc2_pravilno");

	function changeLocation2(){
		main.style.display = "none";
		location2.style.display = "block";
		body.style.background = "green";

		 setTimeout(showtalk,1000);
		 setTimeout(showvar,1000);

		for(let i=0; i<5; i=i+1){
			wrong[i].onclick = function(){
				alert("непр")
			}
		}
		write.onclick = function(){
			return2to1()
			player_status.shield = 2;
			shield.style.display = "block";
			shield_txt.innerHTML = player_status.shield;
		}

		function showtalk(){
			talk.style.display = "block"
		}
		function showvar(){
			loc2_variants_block.style.display = "block"
		}
	}
	setTimeout(changeLocation2, 1000);
}
arena.onclick = function(){
	main_player.style.top = "25%";
	main_player.style.left = "35%";

	function changeLocation3(){
		main.style.display = "none";
		location3.style.display = "block";
		body.style.backgroundImage = "url(loc3/images/bg.jpg)";
		body.style.backgroundSize = "cover";
		let btn = document.querySelector('.btn');
		let en_name = document.querySelector('.enemy_name')
		let en_img = document.querySelector('.enemy_img');
		let en_dmg = document.querySelector('.enemy_damage');
		let en_hp = document.querySelector('.enemy_hp');
		let pl_name = document.querySelector('.player_name')
		let pl_img = document.querySelector('.player_img');
		let pl_dmg = document.querySelector('.player_damage');
		let pl_hp = document.querySelector('.player_hp');

		let randomizer = function(arg) {
			let random = Math.random() * arg + 1;
			let round = Math.round(random);
			return round
		}

		let img = ["url(loc3/images/1.png)","url(loc3/images/2.png)","url(loc3/images/3.png)","url(loc3/images/4.png)","url(loc3/images/5.png)","url(loc3/images/6.png)","url(loc3/images/7.png)","url(loc3/images/8.png)","url(loc3/images/9.png)"]

		let img_randomizer = function() {
			let random = Math.random() * 8;
			let round = Math.round(random);
			return round
		}

		let player = {
			name : "player",
			url : img[img_randomizer()],
			hp :randomizer(99)+player_status.shield,
			dmg : randomizer(24)+player_status.sword*2
		}
		let enemy = {
			name : "enemy",
			url : img[img_randomizer()],
			hp : randomizer(99),
			dmg : randomizer(24)
		}
		pl_img.style.backgroundImage = player.url;
		pl_hp.innerHTML = player.hp;
		pl_dmg.innerHTML = player.dmg;
		pl_name.innerHTML = player.name

		en_img.style.backgroundImage = enemy.url;
		en_hp.innerHTML = enemy.hp;
		en_dmg.innerHTML = enemy.dmg;
		en_name.innerHTML = enemy.name
	
		btn.onclick = function() {
			player.hp = player.hp - enemy.dmg;
			pl_hp.innerHTML = player.hp;
			if(player.hp<0) {
				alert("Ты проиграл")
				main.style.display = "block";
				location3.style.display = "none";
				body.style.backgroundImage = "url(bg1.png)";
			}
			enemy.hp = enemy.hp - player.dmg;
			en_hp.innerHTML = enemy.hp;
			if(enemy.hp<0) {
				alert("Ты выйграл")
				return3to1()
				sword.style.display = "block"
				player_status.sword = player_status.sword + 1;
				sword_txt.innerHTML = player_status.sword;
			}
		}
	}
	setTimeout(changeLocation3, 1000);
}
mastery.onclick = function(){
	main_player.style.top = "57%";
	main_player.style.left = "45%";

	function changeLocation4(){
		main.style.display = "none";
		location4.style.display = "block";
		body.style.background = "gray";

		let randomizer = function(arg) {
        let random = Math.random() * arg;
        let round = Math.round(random) 
        return round
	    }
	    let topSph = -150;
	    let id = 0
	    let tries = 4;
	    let you = document.querySelector(".you")
	    for(let i=0; i<10; i++){
	    	let sphere_div = document.createElement("div");
	    	document.body.appendChild(sphere_div);
	    	sphere_div.classList.add("sphere")
	    	sphere_div.style.left = randomizer(1000) + "px";
	    }
	    sphere_div = document.querySelectorAll(".sphere")

	    for(let i =0;i<10; i++){
	    	sphere_div[i].onclick = function(){
	    		sphere_div[i].style.display = "none";
	    		id = id +1;
	    		topSph = 0;
	    		if(id>=10){
	    			endGame()
	    		}
	    	}
	    }

	    let move = function(){
	    	topSph =topSph + 150;
	    	sphere_div[id].style.top = topSph + "px";

	    	if(topSph>=900){
	    		topSph = 0;
	    		sphere_div[id].style.display = "none";
	    		id = id + 1;
	    		console.log(id)
	    		tries = tries - 1;
	    		console.log(tries)
	    		if(tries==0){
	    			endGame()
	    			youLose()
	    		}
	    		if(id==10){
	    			endGame()
	    			youWin()
	    		} else{
	    			endGame()
	    			youLose()
	    		}
	    	}
	    }
	    let youWin = function(){
	    	you.style.backgroundImage = "url(loc4/youwin.png)"
	    	setTimeout(return4to1,2000)
	    	nojni.style.display = "block"
			player_status.nojni = player_status.nojni + 1;
			nojni_txt.innerHTML = player_status.nojni;
	    }
	    let youLose = function(){
	    	you.style.backgroundImage = "url(loc4/youlose.png)"
	    	setTimeout(return4to1,2000)
	    }
	    let Myint = setInterval(move,300)
	    let endGame = function(){
	    	clearInterval(Myint)
	    }
	}
		setTimeout(changeLocation4, 1000);
}
if(sword>0&shield>0&nojni>0){
	alerе("Ты победил")
}