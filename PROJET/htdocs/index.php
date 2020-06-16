<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Utiliser des API</title>
  <link rel="stylesheet" href="/CSS/index.css">
</head>

<body >
  <!-- animatedArc(canvas0, 0 , 75); -->

  <input type="search" name="CODE BARRE" id="searchCodeBarre">
  <button id="button" onclick="">RECHERCHER</button>

  <h1 id="titre">VALEURS NUTRITIONNELS</h1>
  <div id="macros">
  </div>

  <canvas id="canvas0" width="200" height="200" style="border: solid 3px black" >
  Your browser does not support the HTML canvas tag.</canvas>

  <h1 id="titre">VALEURS NUTRITIONNELS</h1>


  <table border="1" style="border-collapse: collapse; width: 100%;">
    <tbody>
      <tr>
        <td >PROTEINE</td>
        <td >GLUCIDE</td>
        <td >LIPIDE</td>
        <td >CALORIES</td>
      </tr>
      <tr>
        <td id="tauxProteine"></td>
        <td id="tauxGlucide"></td>
        <td id="tauxLipide"></td>
        <td id="tauxCalories"></td>
      </tr>
    </tbody>
  </table>



</body>


</html>





<script src="//code.jquery.com/jquery-1.12.0.min.js"> </script>
<script type="text/javascript" src="/JS/indexCanvas.js"></script>
<script type="text/javascript" src="/JS/index.js"></script>
<script type="text/javascript" src="/JS/indexReturnMacro.js"></script>
<script type="text/javascript" src="/JS/indexAppelFonction.js"></script>
