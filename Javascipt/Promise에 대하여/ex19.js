const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });
const getEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 계란`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) =>{
    setTimeout(() => resolve(`${egg} => 후라이`),1000);
  });

getHen()
  .then(getEgg) //      .then(hen => getEgg(hen))를 좌와 같이 변경
  .then(cook) //        .then(egg => cook(egg))
  .then(console.log); //.then(result => console.log(result));