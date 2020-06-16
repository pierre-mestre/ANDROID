document.getElementById('button').onclick = function() {

    
    recherche(searchCodeBarre);
    // document.getElementById('tauxProteine').textContent=getProtein();
    // document.getElementById('tauxGlucide').textContent=getGlucide();
    // document.getElementById('tauxLipide').textContent=getFat();
    // document.getElementById('tauxCalories').textContent=getCalorie();
    // pct=[getProtein(),getGlucide(),getFat()];
    pct=[9.2,43,2.2];
    //animatedArc("canvas0", 0 , pct);
    drawCanvasArc("canvas0", pct)

};
