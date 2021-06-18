window.onload = function() {

    
    var modal = document.getElementById("ZoomImage");
    
    var img = document.getElementById("NormalImg");
    var modalImg = document.getElementById("popImg");
    var captionText = document.getElementById("teks");

    
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    var span = document.getElementsByClassName("X");
    
    span[0].onclick = function() { 
      modal.style.display = "none";
    }

    var modal2 = document.getElementById("ZoomImage2");
    
    var img2 = document.getElementById("NormalImg2");
    var modalImg2 = document.getElementById("popImg2");
    var captionText = document.getElementById("teks2");

    
    img2.onclick = function(){
      modal2.style.display = "block";
      modalImg2.src = this.src;
      captionText.innerHTML = this.alt;
    }

    span[1].onclick = function() { 
      modal2.style.display = "none";
    }

    var modal3 = document.getElementById("ZoomImage3");
    
    var img3 = document.getElementById("NormalImg3");
    var modalImg3 = document.getElementById("popImg3");
    var captionText = document.getElementById("teks3");

    
    img3.onclick = function(){
      modal3.style.display = "block";
      modalImg3.src = this.src;
      captionText.innerHTML = this.alt;
    }

    span[2].onclick = function() { 
      modal3.style.display = "none";
    }

    var modal4 = document.getElementById("ZoomImage4");
    
    var img4 = document.getElementById("NormalImg4");
    var modalImg4 = document.getElementById("popImg4");
    var captionText = document.getElementById("teks4");

    
    img4.onclick = function(){
      modal4.style.display = "block";
      modalImg4.src = this.src;
      captionText.innerHTML = this.alt;
    }

    span[3].onclick = function() { 
      modal4.style.display = "none";
    }
    
    var arrmaps=[
      {
        'mapname': 'ASCENT',
        'mapBP': 'ASCENT BLUEPRINT',
        'mapMG': 'ASCENT MAP GALLERY',
        'mapdef' : 'An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.',
        'MG1' : 'MID ENTRANCE',
        'MG2' : 'B BOMBSITE',
        'img1' : 'assets/maps/ascent-featured.png',
        'imgBP' : 'assets/maps/ascentBP.jpg',
        'imgGal1' : 'assets/maps/ascent1mid.jpg',
        'imgGal2' : 'assets/maps/valorant-map-ascent-siteB_01.jpg'
      },
      {
        'mapname': 'SPLIT',
        'mapBP': 'SPLIT BLUEPRINT',
        'mapMG': 'SPLIT MAP GALLERY',
        'mapdef' : 'If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.',
        'MG1' : 'Attackers Spawn',
        'MG2' : 'Defenders Spawn',
        'img1' : 'assets/maps/split-featured.png',
        'imgBP' : 'assets/maps/Valorant-Split-map-v2.png',
        'imgGal1' : 'assets/maps/split1.jpeg',
        'imgGal2' : 'assets/maps/split2-2.jpeg'
      },
      {
        'mapname': 'HAVEN',
        'mapBP': 'HAVEN BLUEPRINT',
        'mapMG': 'HAVEN MAP GALLERY',
        'mapdef' : "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.",
        'MG1' : 'Mid Entrance',
        'MG2' : 'A Bombsite',
        'img1' : 'assets/maps/haven-featured.png',
        'imgBP' : 'assets/maps/haven-minimap-2.png',
        'imgGal1' : 'assets/maps/haven2.jpeg',
        'imgGal2' : 'assets/maps/haven4.jpeg'
      },
      {
        'mapname': 'ICEBOX',
        'mapBP': 'ICEBOX BLUEPRINT',
        'mapMG': 'ICEBOX MAP GALLERY',
        'mapdef' : 'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming. ',
        'MG1' : 'B Bombsite',
        'MG2' : 'A Bombsite',
        'img1' : 'assets/maps/Icebox_transparentbg_for_Web.png',
        'imgBP' : 'assets/maps/Icebox_1a.jpeg',
        'imgGal1' : 'assets/maps/icebox_4.jpeg',
        'imgGal2' : 'assets/maps/icebox8.jpeg'
      },
      {
        'mapname': 'BREEZE',
        'mapBP': 'BREEZE BLUEPRINT',
        'mapMG': 'BREEZE MAP GALLERY',
        'mapdef' : "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
        'MG1' : 'A Bombsite',
        'MG2' : 'B Bombsite',
        'img1' : 'assets/maps/breeze-featured_v1.png',
        'imgBP' : 'assets/maps/breeze_1a.jpeg',
        'imgGal1' : 'assets/maps/breeze_1.jpeg',
        'imgGal2' : 'assets/maps/breeze_12.jpeg'
      },
      {
        'mapname': 'BIND',
        'mapBP': 'BIND BLUEPRINT',
        'mapMG': 'BIND MAP GALLERY',
        'mapdef' : "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.",
        'MG1' : 'A Bombsite',
        'MG2' : 'B Bombsite',
        'img1' : 'assets/maps/bind-featured.png',
        'imgBP' : 'assets/maps/bind-minimap-2.png',
        'imgGal1' : 'assets/maps/bind4.jpeg',
        'imgGal2' : 'assets/maps/bind5.jpeg'
      },
    
    ];

    var urlParameter = new URL(window.location.href).searchParams.get('map') || 'all';

    if(!urlParameter) {
      throw new Error("Parameter isn't defined.");
    }
    
    if(urlParameter === 'all') {
      document.getElementById("mapname").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[0].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[0].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[0].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[0].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[0].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[0].MG2;
      document.getElementById("NormalImg").src = arrmaps[0].img1;
      document.getElementById("NormalImg2").src = arrmaps[0].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[0].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[0].imgGal2;
    }else {
      var currentMapIndex = arrmaps.findIndex(function (map) {
        return urlParameter.toUpperCase() === map.mapname.toUpperCase();
      })

      document.getElementById("mapname").innerHTML = arrmaps[currentMapIndex].mapname;
      document.getElementById("teks").innerHTML = arrmaps[currentMapIndex].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[currentMapIndex].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[currentMapIndex].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[currentMapIndex].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[currentMapIndex].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[currentMapIndex].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[currentMapIndex].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[currentMapIndex].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[currentMapIndex].MG2;
      document.getElementById("NormalImg").src = arrmaps[currentMapIndex].img1;
      document.getElementById("NormalImg2").src = arrmaps[currentMapIndex].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[currentMapIndex].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[currentMapIndex].imgGal2;
    }

    var funcAscent = document.getElementById("funcAscent");

    funcAscent.onclick = function() {
      document.getElementById("mapname").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[0].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[0].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[0].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[0].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[0].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[0].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[0].MG2;
      document.getElementById("NormalImg").src = arrmaps[0].img1;
      document.getElementById("NormalImg2").src = arrmaps[0].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[0].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[0].imgGal2;
    }
    var funcSplit = document.getElementById("funcSplit");

    funcSplit.onclick = function() {
      document.getElementById("mapname").innerHTML = arrmaps[1].mapname;
      document.getElementById("teks").innerHTML = arrmaps[1].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[1].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[1].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[1].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[1].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[1].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[1].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[1].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[1].MG2;
      document.getElementById("NormalImg").src = arrmaps[1].img1;
      document.getElementById("NormalImg2").src = arrmaps[1].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[1].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[1].imgGal2;
    }

    var funcHaven = document.getElementById("funcHaven");
    
    funcHaven.onclick = function() {
      document.getElementById("mapname").innerHTML = arrmaps[2].mapname;
      document.getElementById("teks").innerHTML = arrmaps[2].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[2].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[2].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[2].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[2].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[2].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[2].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[2].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[2].MG2;
      document.getElementById("NormalImg").src = arrmaps[2].img1;
      document.getElementById("NormalImg2").src = arrmaps[2].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[2].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[2].imgGal2;
    }
    var funcIcebox = document.getElementById("funcIcebox");

    funcIcebox.onclick = function() {
      document.getElementById("mapname").innerHTML = arrmaps[3].mapname;
      document.getElementById("teks").innerHTML = arrmaps[3].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[3].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[3].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[3].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[3].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[3].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[3].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[3].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[3].MG2;
      document.getElementById("NormalImg").src = arrmaps[3].img1;
      document.getElementById("NormalImg2").src = arrmaps[3].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[3].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[3].imgGal2;
    }
    var funcBreeze = document.getElementById("funcBreeze");
    
    funcBreeze.onclick = function() {
      document.getElementById("mapname").innerHTML = arrmaps[4].mapname;
      document.getElementById("teks").innerHTML = arrmaps[4].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[4].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[4].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[4].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[4].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[4].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[4].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[4].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[4].MG2;
      document.getElementById("NormalImg").src = arrmaps[4].img1;
      document.getElementById("NormalImg2").src = arrmaps[4].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[4].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[4].imgGal2;
    }
    var funcBind = document.getElementById("funcBind");
    
    funcBind.onclick = function() {
      document.getElementById("mapname").innerHTML = arrmaps[5].mapname;
      document.getElementById("teks").innerHTML = arrmaps[5].mapname;
      document.getElementById("teks2").innerHTML = arrmaps[5].mapname;
      document.getElementById("teks3").innerHTML = arrmaps[5].mapname;
      document.getElementById("teks4").innerHTML = arrmaps[5].mapname;
      document.getElementById("mapdef").innerHTML = arrmaps[5].mapdef;
      document.getElementById("mapBP").innerHTML = arrmaps[5].mapBP;
      document.getElementById("mapMG").innerHTML = arrmaps[5].mapMG;
      document.getElementById("MG1").innerHTML = arrmaps[5].MG1;
      document.getElementById("MG2").innerHTML = arrmaps[5].MG2;
      document.getElementById("NormalImg").src = arrmaps[5].img1;
      document.getElementById("NormalImg2").src = arrmaps[5].imgBP;
      document.getElementById("NormalImg3").src = arrmaps[5].imgGal1;
      document.getElementById("NormalImg4").src = arrmaps[5].imgGal2;
    }
    
  };

