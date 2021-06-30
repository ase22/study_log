const inputCity = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cityArray =[];

const cityData = fetch(endpoint).then(response=>response.json()).then(data => cityArray.push(...data));

console.log(cityArray);

// 사용자가 검색한 거에 포함되는 도시나 주가 있을 때 ul에 li으로 추가되야함
// 사용자가 입력하는거 이벤트 리스너로 받아야 함, 변화가 있을 때마다 바뀌어야함
// change감지되면 사용자가 입력한 텍스트를 포함하는 도시,주를 리스트화해서 ul에 넣기


function cityorstate() {
    // console.log(cityArray);
    const regexp = new RegExp(inputCity.value,'gi');
    const matched = cityArray.filter(place=>place.city.match(regexp) || place.state.match(regexp));
    const html = matched.map(place=>
        {return `
        <li>
            <span>${place.city} ${place.state}</span>
            <span>${place.population}</span>
        </li>
        `
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
    if (inputCity.value==='') {
        suggestions.innerHTML = `<li>Filter For A City</li>
        <li>Or A State</li>`;
    }
    
}

function displayMatches() {
    
}


// inputCity.addEventListener('change',cityorstate);
inputCity.addEventListener('keyup',cityorstate);