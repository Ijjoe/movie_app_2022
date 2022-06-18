import React from "react";
import PropTypes from "prop-types";

function Food({name,pic,rating}){
  //console.log(bb.fav)
  return (
  <div>
  <h2>I like Potato {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={pic} alt={name}/>

  </div>
  );
}


const foodILike = [
{
   id : 1,
  name : 'Kimchi',
  image: 'https://a0.muscache.com/im/pictures/2f15fd34-ad65-4b22-a276-50c298cbae3e.jpg?im_w=120'
  ,rating : 5
},
{
  id : 2,
  name : 'Samgyeopsal',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F1555%2FPNG%2F512%2Ffast-food-icons-freeburger_107425.png&imgrefurl=https%3A%2F%2Ficon-icons.com%2Fko%2F%25EC%2595%2584%25EC%259D%25B4%25EC%25BD%2598%2Ffast-%25EC%258B%259D%25ED%2592%2588-%25EB%25B2%2584%25EA%25B1%25B0-%25EC%259D%258C%25EC%258B%259D%2F107425&tbnid=3xTypimQszq2GM&vet=12ahUKEwjm4JCjqrb4AhVMZ5QKHYpnDV8QMygWegUIARCJAg..i&docid=mkgm1cIPDdlySM&w=512&h=512&q=%EC%9D%8C%EC%8B%9D%20%EC%95%84%EC%9D%B4%EC%BD%98&ved=2ahUKEwjm4JCjqrb4AhVMZ5QKHYpnDV8QMygWegUIARCJAg'
  ,rating : 4.9
},
{
  id : 3,
  name : 'Doncasu',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2210%2FPNG%2F512%2Fnoodles_food_icon_134141.png&imgrefurl=https%3A%2F%2Ficon-icons.com%2Fko%2F%25EC%2595%2584%25EC%259D%25B4%25EC%25BD%2598%2F%25EC%2588%2598-%25EC%259D%258C%25EC%258B%259D%2F134141&tbnid=ODvtSODG_OHIVM&vet=12ahUKEwjm4JCjqrb4AhVMZ5QKHYpnDV8QMyggegUIARCkAg..i&docid=siG4dqzIfN7bQM&w=512&h=512&q=%EC%9D%8C%EC%8B%9D%20%EC%95%84%EC%9D%B4%EC%BD%98&ved=2ahUKEwjm4JCjqrb4AhVMZ5QKHYpnDV8QMyggegUIARCkAg'
  ,rating : 3.5
},
{
  id : 4,
  name : 'Kimbap',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F161%2F457%2Fpng-transparent-computer-icons-salad-food-food-icon-food-heart-tomato.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fko%2Fsearch%3Fq%3D%25EC%259D%258C%25EC%258B%259D%2B%25EC%2595%2584%25EC%259D%25B4%25EC%25BD%2598&tbnid=-_8Lonm2T57HdM&vet=12ahUKEwjm4JCjqrb4AhVMZ5QKHYpnDV8QMygjegUIARCqAg..i&docid=aG58Qmrtx0G4gM&w=920&h=920&q=%EC%9D%8C%EC%8B%9D%20%EC%95%84%EC%9D%B4%EC%BD%98&ved=2ahUKEwjm4JCjqrb4AhVMZ5QKHYpnDV8QMygjegUIARCqAg'
  ,rating : 2
}

];

function App() {
  //console.log(foodILike.map(renderFood))
  return  (
  <div>
  
    {foodILike.map(bb =>
       <Food key={bb.id} name={bb.name} pic={bb.image} rating={bb.rating} />
    )}


    
  </div>);
    
}


 Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}


export default App;
