function reponse_choisie(x){
    return document.getElementById(x).checked
}

function Executions() {
    var cases = document.getElementsByName('choice');
    var resultat = [];
       for (var i = 0; i < cases.length; i++) {
          if (cases[i].checked) {
             resultat.push( cases[i].value)  ;
          }
       }
      var score = 0 ;
      for (var j = 0; j < cases.length; j++) {
      if (resultat[j]=="ceder+" ) score ++;
      if (resultat[j]=="4 mn") score ++;
      if (resultat[j]=="pro-pro") score ++;
      if (resultat[j]=="nF") score ++;
      if (resultat[j]=="tot") score ++;
      if (resultat[j]=="rdm") score ++;
      if (resultat[j]=="mt") score ++;
      if (resultat[j]=="λ/a") score ++;
      if (resultat[j]=="4cm") score ++;
      if (resultat[j]=="Pol") score ++;
      if (resultat[j]=="l/λ") score ++;
      if (resultat[j]=="β+") score ++;
      }
      
      $("#score").append("<div>"+"RESULTAT : " +score+" / 12"+"</div>")
      $("#qst1").append("<div>"+"La reponse correcte est: "+"cede un ou plusieurs protons H+"+"</div>")
      $("#qst2").append("<div>"+"La reponse correcte est: "+"4 min"+"</div>")
      $("#qst3").append("<div>"+"La reponse correcte est: "+"Propanoate de propyle"+"</div>")
      $("#qst4").append("<div>"+"La reponse correcte est: "+"Q=n(e-).F"+"</div>")
      $("#qst5").append("<div>"+"La reponse correcte est: "+"toujours totale"+"</div>")
      $("#qst6").append("<div>"+"La reponse correcte est: "+"Rouge de methyle (4,2 - 6,2)"+"</div>")
      $("#qst7").append("<div>"+"La reponse correcte est: "+"Ym(t) = Ys(t-τ)"+"</div>")
      $("#qst8").append("<div>"+"La reponse correcte est: "+"θ=λ/a"+"</div>")
      $("#qst9").append("<div>"+"La reponse correcte est: "+"4 cm"+"</div>")
      $("#qst10").append("<div>"+"La reponse correcte est: "+"Polonium"+"</div>")
      $("#qst11").append("<div>"+"La reponse correcte est: "+"t1/2=ln(2)/λ"+"</div>")
      $("#qst12").append("<div>"+"La reponse correcte est: "+"β+"+"</div>")
  }

