let age = 70  ;
let ticket = 800;

let children = age <10;
let student  = true ;
let senior = age > 60 ;

if( children === true )
{ticket =  0;}
else if ( student )
{ticket = ticket / 2 ;}
else if (senior === true &  !student)
{ticket = ((85 / 100 ) * 800 );}

else { ticket = ticket;}

console.log(ticket);
