let list = [{
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
]
let actived = "" 
document.querySelector("#tw").innerHTML= list[0].title
document.querySelector("#tst").innerHTML= list[1].title
document.querySelector("#tpl").innerHTML= list[2].title
document.querySelector("#tex").innerHTML= list[3].title
document.querySelector("#tso").innerHTML= list[4].title
document.querySelector("#tse").innerHTML= list[5].title
actived = "weekly"
function over(x) {if(x.style.color != "white" ){x.style.color = "white"}}
function out(x) {if (x.style.color == "white" && actived != x.id){x.style.color = "hsl(236, 100%, 87%)"}}

function changeToDayly(){
  actived = "daily"
  select(actived)
}
function changeToWeekly() {
  actived = "weekly"
  select(actived)
}
function changeToMonthly() {
  actived = "monthly"
  select(actived)
}
function select(_actived){
  if(_actived == "daily"){
    document.querySelector("#cw").innerHTML = list[0].timeframes.daily.current + 'hrs'
    document.querySelector("#pw").innerHTML = 'Last day - ' + list[0].timeframes.daily.previous + 'hrs'
    document.querySelector("#cst").innerHTML = list[1].timeframes.daily.current + 'hrs'
    document.querySelector("#pst").innerHTML = 'Last day - ' + list[1].timeframes.daily.previous + 'hrs'
    document.querySelector("#cpl").innerHTML = list[2].timeframes.daily.current + 'hrs'
    document.querySelector("#ppl").innerHTML = 'Last day - ' + list[2].timeframes.daily.previous + 'hrs'
    document.querySelector("#cex").innerHTML = list[3].timeframes.daily.current + 'hrs'
    document.querySelector("#pex").innerHTML = 'Last day - ' + list[3].timeframes.daily.previous + 'hrs'
    document.querySelector("#cso").innerHTML = list[4].timeframes.daily.current + 'hrs'
    document.querySelector("#pso").innerHTML = 'Last day - ' + list[4].timeframes.daily.previous + 'hrs'
    document.querySelector("#cse").innerHTML = list[5].timeframes.daily.current + 'hrs'
    document.querySelector("#pse").innerHTML = 'Last day - ' + list[5].timeframes.daily.previous + 'hrs'
    document.querySelector("#daily").style.color = "white"; 
    document.querySelector("#weekly").style.color = " hsl(236, 100%, 87%)";
    document.querySelector("#monthly").style.color = " hsl(236, 100%, 87%)";
    }

    if(_actived == "weekly"){
      document.querySelector("#cw").innerHTML = list[0].timeframes.weekly.current + 'hrs'
      document.querySelector("#pw").innerHTML = 'Last week - ' + list[0].timeframes.weekly.previous + 'hrs'
      document.querySelector("#cst").innerHTML = list[1].timeframes.weekly.current + 'hrs'
      document.querySelector("#pst").innerHTML = 'Last week - ' + list[1].timeframes.weekly.previous + 'hrs'
      document.querySelector("#cpl").innerHTML = list[2].timeframes.weekly.current + 'hrs'
      document.querySelector("#ppl").innerHTML = 'Last week - ' + list[2].timeframes.weekly.previous + 'hrs'
      document.querySelector("#cex").innerHTML = list[3].timeframes.weekly.current + 'hrs'
      document.querySelector("#pex").innerHTML = 'Last week - ' + list[3].timeframes.weekly.previous + 'hrs'
      document.querySelector("#cso").innerHTML = list[4].timeframes.weekly.current + 'hrs'
      document.querySelector("#pso").innerHTML = 'Last week - ' + list[4].timeframes.weekly.previous + 'hrs'
      document.querySelector("#cse").innerHTML = list[5].timeframes.weekly.current + 'hrs'
      document.querySelector("#pse").innerHTML = 'Last week - ' + list[5].timeframes.weekly.previous + 'hrs'
      document.querySelector("#daily").style.color = " hsl(236, 100%, 87%)"; 
      document.querySelector("#weekly").style.color = "white";
      document.querySelector("#monthly").style.color = " hsl(236, 100%, 87%)";
    }
  
      if(_actived == "monthly"){
        document.querySelector("#cw").innerHTML = list[0].timeframes.monthly.current + 'hrs'
        document.querySelector("#pw").innerHTML = 'Last month - ' + list[0].timeframes.monthly.previous + 'hrs'
        document.querySelector("#cst").innerHTML = list[1].timeframes.monthly.current + 'hrs'
        document.querySelector("#pst").innerHTML = 'Last month - ' + list[1].timeframes.monthly.previous + 'hrs'
        document.querySelector("#cpl").innerHTML = list[2].timeframes.monthly.current + 'hrs'
        document.querySelector("#ppl").innerHTML = 'Last month - ' + list[2].timeframes.monthly.previous + 'hrs'
        document.querySelector("#cex").innerHTML = list[3].timeframes.monthly.current + 'hrs'
        document.querySelector("#pex").innerHTML = 'Last month - ' + list[3].timeframes.monthly.previous + 'hrs'
        document.querySelector("#cso").innerHTML = list[4].timeframes.monthly.current + 'hrs'
        document.querySelector("#pso").innerHTML = 'Last month - ' + list[4].timeframes.monthly.previous + 'hrs'
        document.querySelector("#cse").innerHTML = list[5].timeframes.monthly.current + 'hrs'
        document.querySelector("#pse").innerHTML = 'Last month - ' + list[5].timeframes.monthly.previous + 'hrs'
        document.querySelector("#daily").style.color = " hsl(236, 100%, 87%)"; 
        document.querySelector("#weekly").style.color = "hsl(236, 100%, 87%)";
        document.querySelector("#monthly").style.color = "white";
      }
    }
    select(actived)