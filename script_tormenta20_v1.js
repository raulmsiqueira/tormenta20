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
    ap = document.forms.namedItem("iformPeri").elements; // ou document.forms.namedItem("iformPeri").elements
    mn = parseInt(inivel.value / 2);
    for(i=0;i<ap.length;i++){
        varId = ap[i].id;
        iperi = varId.match("iperi");
        imod = varId.match("imod");
        itr = varId.match("itr");
        ibonus = varId.match("ibonus");
        if(iperi !== null){
            p = i;
            pa = 0;
            st = 0;
            if(varId == "iperiAcro"){
                pa = parseInt(ipenArmd.value) + parseInt(ipenEsc.value);
            }
            if(varId == "iperiConh" || varId == "iperiAtua"){
                st = 1;
            }
        }
        if(imod !== null){
            a = parseInt(ap[i].innerHTML);
        }
        if(itr !== null){
            t = parseInt(ap[i].innerHTML);             
        }
        if(ibonus !== null){
            o = parseInt(ap[i].value);
            ap[p].innerHTML = mn + a + t + o + pa;
            if(st == 1  && t == 0){
                ap[p].innerHTML = 0;
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
    // ad = document.forms.namedItem("iformDef").elements;
    tp = itipoArmd.value;
    des = parseInt(iatDes.value);
    if(tp == 2 && des > 0){
        def = 10 + parseInt(iarmdDef.value) + parseInt(iescDef.value) + parseInt(ioutrDef.value);
    }else{
        def = 10 + des + parseInt(iarmdDef.value) + parseInt(iescDef.value) + parseInt(ioutrDef.value);
    }
    idefesa.innerHTML = def;
}