'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//製造した車の種類
let numRed = 0;
let numGreen = 0;


window.myChart = new Chart()

const car = document.getElementsByTagName("button")[0];
car.addEventListener("click", charcter)

function charcter(){
    //下の絵文字
    const number = Number(document.getElementsByTagName("input")[0].value)
    const ptag = document.createElement('p');
    for (let i = 0; i < number; i++){
        let condition  = Math.random()
        if (condition > 0.1) {
            ptag.innerText += "🚗";
            numRed += 1; 
        }
        else {
            ptag.innerText += "🚙";
            numGreen += 1; 
        }
    }

    document.getElementsByClassName("box2")[0].appendChild(ptag);

    //円グラフ
    let ctx = document.getElementById('myChart');
    let percentage = numRed/(numRed+numGreen)*100 //
    if (myChart) {
        myChart.destroy();
      }
    
    window.myChart = new Chart(ctx, {
    label: 'My Dataset',
    type: 'pie',
    data: {
        labels: [
            'Red Car',
            'Green Car',
          ],
        datasets: [{
            data: [percentage, 100 - percentage],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 35)'
            ],
            borderWidth: 0
          }]
    }
    })
}
