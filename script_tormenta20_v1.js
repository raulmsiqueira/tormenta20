function funcClasse(){
    cp = iclassePrsn.value;
    pv = 0;
    pm = 0;
    nv = parseInt(inivel.value);
    con = parseInt(iatCon.value);  
    if(cp == 1){
        pv = 8 + (con * nv) + ((nv - 1) * 2);
        pm = 6 * nv;
    }else if(cp == 2){
        pv = 24 + (con * nv) + ((nv - 1) * 6);
        pm = 3 * nv;
    }
    else if(cp == 3 || cp == 10 || cp == 11){
        pv = 12 + (con * nv) + ((nv - 1) * 3);
        pm = 4 * nv;
    }else if(cp == 4){
        pv = 16 + (con * nv) + ((nv - 1) * 4);
        pm = 3 * nv;
    }else if(cp == 5 || cp == 8 || cp == 13){
        pv = 16 + (con * nv) + ((nv - 1) * 4);
        pm = 4 * nv;
    }else if(cp == 6 || cp == 9 || cp == 12 || cp == 14){
        pv = 20 + (con * nv) + ((nv - 1) * 5);
        pm = 3 * nv;
    }else{
        pv = 16 + (con * nv) + ((nv - 1) * 4);
        pm = 5 * nv;
    }
    ipvMax.innerHTML = pv;
    ipmMax.innerHTML = pm;
}

function funcNivel(){
    nv = parseInt(inivel.value);
    mnv = parseInt(nv / 2);
    ap = document.forms.namedItem("iformPeri").elements;     
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        imNv = varId.match("imNv");
        if(imNv !== null){
            ap[i].innerHTML = mnv;
        }
    }
    funcSomaPeri();
    funcClasse();
}
function funcTreino(cb){     
    nv = parseInt(inivel.value);
    if(cb === false){
        varTr = 0;
    }else if(nv < 7){
        varTr = 2;
    }else if(nv < 15){
        varTr = 4;
    }else{
        varTr = 6;
    }    
    return varTr;
}
function funcSomaPeri(){
    ap = document.forms.namedItem("iformPeri").elements; // ou document.forms[i].elements
    nv = parseInt(inivel.value);
    mn = parseInt(nv / 2);
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        iperi = varId.match("iperi");
        imod = varId.match("imod");
        itr = varId.match("itr");
        ibonus = varId.match("ibonus");
        icb = varId.match("icb");
        if(icb !== null){
            if(ap[i].checked === false){
                t = 0;
            }else if(nv < 7){
                t = 2;
            }else if(nv < 15){
                t = 4;
            }else{
                t = 6;
            }            
        }
        if(iperi !== null){
            p = i;
            pa = 0;
            st = 0;
            if(varId == "iperiAcro" || varId == "iperiFurt" || varId == "iperiLadi"){
                pa = parseInt(ipenArmd.value) + parseInt(ipenEsc.value);
            }
            if(varId == "iperiAdes" || varId == "iperiAtua" || varId == "iperiConh" || varId == "iperiGuer" || varId == "iperiJoga" || varId == "iperiLadi" || varId == "iperiMist" || varId == "iperiNobr" || varId == "iperiOfic" || varId == "iperiPilo" || varId == "iperiReli"){
                st = 1;
            }
        }
        if(imod !== null){
            a = parseInt(ap[i].innerHTML);
        }
        if(itr !== null){
            ap[i].innerHTML = t;             
        }
        if(ibonus !== null){
            o = parseInt(ap[i].value);
            ap[p].innerHTML = mn + a + t + o + pa;
            if(st == 1  && t == 0){
                ap[p].innerHTML = "";
            }
        }               
    }        
}
function funcBonusFor(){
    ap = document.forms.namedItem("iformPeri").elements;     
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        varNull = varId.match("imodFor");
        
        if(varNull !== null){
            ap[i].innerHTML = iatFor.value;
        }     
    }
    funcSomaPeri();    
}
function funcBonusDes(){
    ap = document.forms.namedItem("iformPeri").elements;     
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        varNull = varId.match("imodDes");
        
        if(varNull !== null){
            ap[i].innerHTML = idesDef.innerHTML = iatDes.value;
        }     
    }
    funcSomaPeri();
}
function funcBonusCon(){
    ap = document.forms.namedItem("iformPeri").elements;     
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        varNull = varId.match("imodCon");
        
        if(varNull !== null){
            ap[i].innerHTML = iatCon.value;
        }     
    }
    funcSomaPeri();
    funcClasse();
}
function funcBonusInt(){
    ap = document.forms.namedItem("iformPeri").elements;     
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        varNull = varId.match("imodInt");
        
        if(varNull !== null){
            ap[i].innerHTML = iatInt.value;
        }     
    }
    funcSomaPeri();
}
function funcBonusSab(){
    ap = document.forms.namedItem("iformPeri").elements;     
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        varNull = varId.match("imodSab");
        
        if(varNull !== null){
            ap[i].innerHTML = iatSab.value;
        }     
    }
    funcSomaPeri();
}
function funcBonusCar(){
    ap = document.forms.namedItem("iformPeri").elements;     
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        varNull = varId.match("imodCar");
        
        if(varNull !== null){
            ap[i].innerHTML = iatCar.value;
        }     
    }
    funcSomaPeri();
}
function funcDef(){    
    tp = itipoArmd.value;
    des = parseInt(iatDes.value);
    if(tp == 2){
        // Armaduras pesadas não somam Destreza na Defesa ou não somam a Destreza positiva?
        def = 10 + parseInt(iarmdDef.value) + parseInt(iescDef.value) + parseInt(ioutrDef.value);
    }else{
        def = 10 + des + parseInt(iarmdDef.value) + parseInt(iescDef.value) + parseInt(ioutrDef.value);
    }
    idefesa.innerHTML = def;
}
function funcNvParaXp(){
    nv = parseInt(inivel.value);
    xp = 0;
    // xp = parseInt(iexp.value); ?
    axp = [];
    for (i = 0; i < nv; i++) {
        xp = xp + (i * 1000);
        axp[i]= xp;       
    }
    alert(`Exp = ${xp} e Nv = ${axp.length}`);
    // iexp.value = xp;
}
function funcXpParaNv(){
    xp = window.prompt("Insira o xp:");
    // xp = parseInt(iexp.value); ?
    x = 0;
    nv = 0;
    do {
        nv++;
        x = x + nv * 1000;
    } while (x <= xp);
    alert(`Nível = ${nv}`);
    // inivel.value = nv;
}