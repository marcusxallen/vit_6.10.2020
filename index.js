// wait till HTML loads then run this { } JavaScript
document.addEventListener('DOMContentLoaded', function(){

    let button = document.querySelector('#search-button');
    let input = document.querySelector('#search-input');

    button.addEventListener('click', function(){
        console.log(input.value);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${input.value}`).then(function (result) {
            console.log(result.data.sprites.front_default);
            pokePic.src=result.data.sprites.front_default;
            pokePic2.src = result.data.sprites.back_default;
        })
        .catch(function(error){
            console.log(error)
            pokePic.src = 'https://vivianpetersoops.com/wp-content/uploads/2017/11/oops-orange.jpg'
    })
  });
});