const cardData = [
  {
    suit: "heart",
    value: 7,
  },
  {
    suit: "club",
    value: 8,
  },
  {
    suit: "club",
    value: 2,
  },
  {
    suit: "diamond",
    value: 2,
  },
  {
    suit: "diamond",
    value: 5,
  },
  {
    suit: "club",
    value: 10,
  },
];

// =========================================== 1 ==================================================== //

function findCard(value, suit) {
  const valarr = cardData.find((el) => el.value === value && el.suit === suit);
  return valarr ? true : false;
}
// console.log(findCard(55,"diamond"))

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
 */

// =============================================== 2 ================================================ //

function getSuits(cardData) {
  const ans = cardData.reduce((acc, curr) => {
    if (!acc.includes(curr.suit)) {
      acc.push(curr.suit);
    }

    return acc;
  }, []);
  return ans;
}

// console.log(getSuits(cardData));
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/

// ================================================ 3 =============================================== //



function countSuits(cardData) {
    return cardData.reduce((acc, curr) => {
    if(!acc[curr.suit]){
        acc[curr.suit] =1;
    }else{
        acc[curr.suit]++;
    }
    return acc;
    } , {})
      }
    
    // console.log(countSuits(cardData))
      /**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
 */

// ================================================= 4 ============================================== //

function getSuitsWithValues(cardData) {
    return cardData.reduce((acc, {suit, value}) => {
if(acc[suit]==undefined){
    acc[suit] =[ value];
}else{
    acc[suit].push(value); 
}
return acc;
}, {}) 
  }
  console.log(getSuitsWithValues(cardData));

/**
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]}
 *
 */
