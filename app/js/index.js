let ALL = document.getElementById("b_ALL");
let PAINT = document.getElementById("b_PAINT");
let WEB_DESIGN = document.getElementById("b_WEB DESIGN");
let LOGO = document.getElementById("b_LOGO");
let MOTION = document.getElementById("b_MOTION");
var Btn = [ALL,PAINT,WEB_DESIGN,LOGO,MOTION];

let ALL_Elements = {
img1:{
    categoru_name: "PAINT",
    img_path: document.getElementById("img1")
},
img2:{
    categoru_name: "PAINT",
    img_path: document.getElementById("img2")
},
img3:{
    categoru_name: "WEB DESIGN",
    img_path: document.getElementById("img3")
},
img4:{
    categoru_name: "LOGO",
    img_path: document.getElementById("img4")
},
img5:{
    categoru_name: "MOTION",
    img_path: document.getElementById("img5")
},
img6:{
    categoru_name: "WEB DESIGN",
    img_path: document.getElementById("img6")
},

};

ALL.addEventListener('click',() => {
   let Int = Btn.some(Element => {
    return Element.style.borderBottom =="2px solid rgb(101, 255, 222)"
   });
   console.log(Int);
   if(Int === true){
    Btn.forEach((Element) =>{
    let off = Element.style.borderBottom = "none";
    })
    ALL.style.borderBottom ="2px solid rgb(101, 255, 222)";
    document.getElementById("row").className = "row_2"
for (let key in ALL_Elements) {
    ALL_Elements[key].img_path.style.display = "flex"; 
  }
   }

   else{
    ALL.style.borderBottom ="2px solid rgb(101, 255, 222)";
    document.getElementById("row").className = "row_2"
    for (let key in ALL_Elements) {
        ALL_Elements[key].img_path.style.display = "flex"; 
      }
   }
});


PAINT.addEventListener('click', () => {
    let Int = Btn.some(Element => {
        return Element.style.borderBottom =="2px solid rgb(101, 255, 222)"
       });
       console.log(Int);
       if(Int === true){
        Btn.forEach((Element) =>{
        let off = Element.style.borderBottom = "none";
        })
        PAINT.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
    for (let key in ALL_Elements) {
        ALL_Elements[key].img_path.style.display = "none"; 
    for(let key in ALL_Elements){
            if(ALL_Elements[key].categoru_name === "PAINT"){
            ALL_Elements[key].img_path.style.display = "flex";
            }
            }
      }
       }
    
       else{
        PAINT.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
        for (let key in ALL_Elements) {
            ALL_Elements[key].img_path.style.display = "PAINT"; 
          }
        for (let key in ALL_Elements) {
            if(ALL_Elements[key].categoru_name === "PAINT"){
                ALL_Elements[key].img_path.style.display = "flex";
                }
          }
       }
});


WEB_DESIGN.addEventListener("click",() => {
    let Int = Btn.some(Element => {
        return Element.style.borderBottom =="2px solid rgb(101, 255, 222)"
       });
       console.log(Int);
       if(Int === true){
        Btn.forEach((Element) =>{
        let off = Element.style.borderBottom = "none";
        })
        WEB_DESIGN.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
    for (let key in ALL_Elements) {
        ALL_Elements[key].img_path.style.display = "none"; 
    for(let key in ALL_Elements){
            if(ALL_Elements[key].categoru_name === "WEB DESIGN"){
            ALL_Elements[key].img_path.style.display = "flex";
            }}
        }
       }
    
       else{
        WEB_DESIGN.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
        for (let key in ALL_Elements) {
            ALL_Elements[key].img_path.style.display = "WEB DESIGN"; 
          }
        for (let key in ALL_Elements) {
            if(ALL_Elements[key].categoru_name === "WEB DESIGN"){
                ALL_Elements[key].img_path.style.display = "flex";
                }
          }
       }
});

LOGO.addEventListener("click", () => {
    let Int = Btn.some(Element => {
        return Element.style.borderBottom =="2px solid rgb(101, 255, 222)"
       });
       console.log(Int);
       if(Int === true){
        Btn.forEach((Element) =>{
        let off = Element.style.borderBottom = "none";
        })
        LOGO.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
    for (let key in ALL_Elements) {
        ALL_Elements[key].img_path.style.display = "none"; 
    for(let key in ALL_Elements){
            if(ALL_Elements[key].categoru_name === "LOGO"){
            ALL_Elements[key].img_path.style.display = "flex";
            }
            }
      }
       }
    
       else{
        LOGO.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
        for (let key in ALL_Elements) {
            ALL_Elements[key].img_path.style.display = "LOGO"; 
          }
        for (let key in ALL_Elements) {
            if(ALL_Elements[key].categoru_name === "LOGO"){
                ALL_Elements[key].img_path.style.display = "flex";
                }
          }
       }
});

MOTION.addEventListener("click", () => {
    let Int = Btn.some(Element => {
        return Element.style.borderBottom =="2px solid rgb(101, 255, 222)"
       });
       console.log(Int);
       if(Int === true){
        Btn.forEach((Element) =>{
        let off = Element.style.borderBottom = "none";
        })
        MOTION.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
    for (let key in ALL_Elements) {
        ALL_Elements[key].img_path.style.display = "none"; 
    for(let key in ALL_Elements){
            if(ALL_Elements[key].categoru_name === "MOTION"){
            ALL_Elements[key].img_path.style.display = "flex";
            }
            }
      }
       }
    
       else{
        MOTION.style.borderBottom ="2px solid rgb(101, 255, 222)";
        document.getElementById("row").className = "row_1"
        for (let key in ALL_Elements) {
            ALL_Elements[key].img_path.style.display = "MOTION"; 
          }
        for (let key in ALL_Elements) {
            if(ALL_Elements[key].categoru_name === "MOTION"){
                ALL_Elements[key].img_path.style.display = "flex";
                }
          }
       }
});