let ar = [];
const sz = 170;
var spd;

// Controls The algorithm Speed

function val() {
  var speed;
  speed = document.getElementById("inp").value;
  spd = speed * 1000;
  //console.log(isNaN(speed), typeof speed);
  if (isNaN(speed)) alert("Wrong Speed"), parent.location.reload();
  else if (spd == 0) alert("Enter Speed");
  else bubblesort();
  //console.log(spd, speed);
}

// Generates Array

function fnc() {
  if(ar.length != sz)
  {for (var i = 0; i < sz; i++) {
    ar.push(Math.floor(Math.random() * 500 + 1));
    var ndiv = document.createElement("div");
    ndiv.classList.add("narray");
    //ndiv.innerHTML = ar[i];
    document.getElementById("array").appendChild(ndiv);
  }
  console.log(ar);

  for (var i = 0; i < ar.length; i++) {
    var ydiv = document.getElementsByClassName("narray");
    ydiv[i].style.height = ar[i] + "px";
  }}
  else{

    for (var i = 0; i < sz; i++) {
      ar[i] = Math.floor(Math.random() * 500 + 1);
      //var ndiv = document.createElement("div");
      //ndiv.classList.add("narray");
      //ndiv.innerHTML = ar[i];
      //document.getElementById("array").appendChild(ndiv);
    }
    console.log(ar);
  
    for (var i = 0; i < ar.length; i++) {
      var ydiv = document.getElementsByClassName("narray");
      ydiv[i].style.height = ar[i] + "px";
    }

  }


}

var x = document.getElementsByClassName("narray");
 function swap(j) {
  return new Promise((resolve) => {
    x[j].style.backgroundColor = "blue";
    x[j + 1].style.backgroundColor = "blue";
    x[j].style.height = ar[j + 1] + "px";
    x[j + 1].style.height = ar[j] + "px";

    var temp = ar[j];
    ar[j] = ar[j + 1];
    ar[j + 1] = temp;

    setTimeout(() => {
      resolve();
    }, spd);
  });
}

// BubbleSort

async function bubblesort() {
  for (var i = 0; i < ar.length; i++) {
    for (var j = 0; j < ar.length - i - 1; j++) {
      x[j].style.backgroundColor = "red";
      x[j + 1].style.backgroundColor = "red";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, spd)
      );

      if (ar[j] > ar[j + 1]) {
        await swap(j);
      }
      //console.log("swap out");
      x[j].style.backgroundColor = "white";
      x[j + 1].style.backgroundColor = "white";
    }

    x[ar.length - i - 1].style.backgroundColor = "lightgreen";
  }
}

//Merge Sort

async function ms() {
  console.log(ar);
  
  if(ifsorted())
  {
    window.parent.location.reload();
  }

  var speed;
  speed = document.getElementById("inp").value;
  spd = speed * 1000;
  console.log(spd,speed);
  if (isNaN(speed)) alert("Wrong Speed"), parent.location.reload();
  else if (spd == 0) alert("Enter Speed");
  else await mergesort(0, ar.length - 1);

  if(ifsorted()){for(var u = 0 ;u<ar.length;u++)
  {
    x[u].style.backgroundColor = "lightgreen";
  }
  alert("Array is Sorted");

  console.log(ar);}
}

var b = [];
function ifsorted()
{
  for(var u = 0;u<ar.length;u++)
  {
    if(ar[u]>ar[u+1]) return false;
  }
  return true;
}


async function merge(start, mid, end) {

    let i = start;
    let j = mid + 1;

    let t = start;
    x[start].style.backgroundColor = "pink";
    //x[mid].style.backgroundColor = "pink";
   //x[mid+1].style.backgroundColor = "pink";
    x[end].style.backgroundColor = "pink";

   await new Promise ((resolve) =>
      setTimeout(() => {
        resolve();
      }, spd)
      );
    
    while (i <= mid && j <= end) {
      
     var a = i;
    if(end-i>1)
     {for(a = i+1;a<end;a++)
     { x[i].style.backgroundColor = "blue";
      x[j].style.backgroundColor = "blue";}
    }
      else{
        for(a = i;a<=end;a++)
     { x[i].style.backgroundColor = "blue";
      x[j].style.backgroundColor = "blue";}
      }

      if (ar[i] <= ar[j]) {

        
        b[t] = ar[i];
         i++;
      }
      else {
        b[t] = ar[j]; 
        j++;
      }

      t++;
    }

    while (i <= mid) {
      b[t] = ar[i]; i++; t++ ; 
     }

    while (j <= end) {
      b[t] = ar[j]; j++; t++;
    }

    for (t = start; t <= end; t++) {
      await mswap(t);

    }
   
    x[start].style.backgroundColor = "blue";
    x[end].style.backgroundColor = "blue";

}

function mswap(t)
{
    var nspd = spd/1000;
    if(nspd<0) nspd = 100;
    console.log(spd,nspd);
    return new Promise ((resolve)=>
    setTimeout(() => {
      x[t].style.height = b[t] + "px";
    ar[t] = b[t];
    resolve();
    }, nspd)
    );
  
  
}

async function mergesort(start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
     await mergesort(start, mid);
     await mergesort(mid + 1, end);
     await merge(start, mid, end);

    await new Promise((resolve)=>{
      setTimeout(() => {
        resolve();
      }, spd);
    });
  }
}
