function numbering(){
  document.open();
  for(i=0; i<10; i++){
    document.write("<p>Javascript를 열심해 배웁시다! "+i+"</p>");
    document.write(`<p>Number Count : ${i}</p>`);
  }
  document.close();
}
numbering();
