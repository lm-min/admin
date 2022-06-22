$(document).ready(function(){
  // 차트
  var ticksStyle = {fontColor:'#444',fontStyle:'bold'}

  new Chart(document.getElementById('testChart'), {
    data:{
      labels:['18th','20th','22nd','24th','26th','28th','30th'], 
      datasets:[
        { type:'line',
          label: 'This Week',
          data:[100,120,170,167,180,177,160],
          backgroundColor:'transparent',
          borderColor:'#007bff',
          pointBackgroundColor:'#007bff',
          fill:false
        },
        { type:'line',
          label: 'Last Week',
          data:[60,80,70,67,80,77,100],
          backgroundColor:'transparent',
          borderColor:'#ddd',
          pointBackgroundColor:'#ddd',
          fill: false
        }
      ]
    },
    options: {
      responsive: false,
      legend:{display:false},
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      hover: {
        mode: 'index',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines:{display:false},
          ticks: ticksStyle
        }],
        yAxes: [{
          display: true,
          gridLines:{display:false},
          ticks: $.extend(
            { beginAtZero:true,
              suggestedMax:200
            },
            ticksStyle
          )              
        }]
      }
    }
  }); 

  new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels:['JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
      datasets: [
        { label: 'This year',
          data:[1000,2000,3000,2500,2700,2500,3000],
          borderColor:'#007bff',
          backgroundColor:'#007bff',
        },
        { label: 'Last year',
          data:[700,1700,2700,2000,1800,1500,2000],
          borderColor:'#ddd',
          backgroundColor:'#ddd',
        }
      ]
    },
    options: {
      responsive: false,
      legend:{display:false},
      tooltips: {
        mode: 'index',
        intersect: true,
      },
      hover: {
        mode: 'index',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          ticks: ticksStyle,
          gridLines:{display:false},
        }],
        yAxes: [{
          display: true,
          gridLines:{display:false},
          ticks:$.extend(
            { beginAtZero:true,
              callback:function(value){
                if(value>=1000){
                  value/=1000 
                  value+='k'
                }
                return '$'+value
              } 
            },
            ticksStyle
            )
        }],
      }
    }
  });
  

});

