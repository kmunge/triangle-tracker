function checkinputs()
{
/* Var = parseInt(document.Name_Of_Element_Form.Field_Name(Input).value); */
/* Input Fields */
base = parseInt(document.Triangle_Inputs.input1.value);
height = parseInt(document.Triangle_Inputs.input2.value);
hypotenuse = parseInt(document.Triangle_Inputs.input3.value);

/*var sides = function(base,height,hypotenuse){
  return(base+height>hypotenuse && height + hypotenuse>base && hypotenuse + base>height)
}*/
if(height === base && height === hypotenuse) {
  alert ("it's equlateral");
} else if ( base === height || hypotenuse === base || hypotenuse === height) {
  alert ( "it's isoceles");
} else if ( base !== height && height !== base && hypotenuse !== height) {
  if (height + base > hypotenuse || base + hypotenuse > height || height + hypotenuse > base) {
      if ( height + base <= hypotenuse || hypotenuse + base <= height || hypotenuse + height <= base) {
          alert ("cannot form a triangle");
      } else {
          alert("it's a scalene");
      }
  }
}
}