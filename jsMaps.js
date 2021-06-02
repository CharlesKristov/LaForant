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
        'imgdef' : 'assets/maps/valo1.jpg',
        'imgBP' : '',
        'imgMG1' : '',
        'imgMG2' : ''
      },
      {
        'mapname': 'SPLIT',
        'mapBP': 'SPLIT BLUEPRINT',
        'mapMG': 'SPLIT MAP GALLERY',
        'mapdef' : 'If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.',
        'MG1' : '',
        'MG2' : '',
        'imgdef' : '',
        'imgBP' : '',
        'imgMG1' : '',
        'imgMG2' : ''
      },
      {
        'mapname': 'HAVEN',
        'mapBP': 'HAVEN BLUEPRINT',
        'mapMG': 'HAVEN MAP GALLERY',
        'mapdef' : "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.",
        'MG1' : '',
        'MG2' : '',
        'imgdef' : '',
        'imgBP' : '',
        'imgMG1' : '',
        'imgMG2' : ''
      },
      {
        'mapname': 'ICEBOX',
        'mapBP': 'ICEBOX BLUEPRINT',
        'mapMG': 'ICEBOX MAP GALLERY',
        'mapdef' : '',
        'MG1' : '',
        'MG2' : '',
        'imgdef' : "Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.",
        'imgBP' : '',
        'imgMG1' : '',
        'imgMG2' : ''
      },
      {
        'mapname': 'BREEZE',
        'mapBP': 'BREEZE BLUEPRINT',
        'mapMG': 'BREEZE MAP GALLERY',
        'mapdef' : "Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.",
        'MG1' : '',
        'MG2' : '',
        'imgdef' : '',
        'imgBP' : '',
        'imgMG1' : '',
        'imgMG2' : ''
      },
      {
        'mapname': 'BIND',
        'mapBP': 'BIND BLUEPRINT',
        'mapMG': 'BIND MAP GALLERY',
        'mapdef' : "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.",
        'MG1' : '',
        'MG2' : '',
        'imgdef' : '',
        'imgBP' : '',
        'imgMG1' : '',
        'imgMG2' : ''
      },
    
    ];
    
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
    






};

