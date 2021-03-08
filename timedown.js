const getRemainTime = deadLine =>{
    let now = new Date(),
        remainTime = (new Date(deadLine) - now + 1000)/1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinuts = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime /3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime /(3600 * 24))

    return{
        remainTime,
        remainSeconds,
        remainMinuts,
        remainHours,
        remainDays
    }
}
const countDown = (deadLine, element) =>{
    const el = document.getElementById(element)
    const timerUpdate = setInterval( () =>{
        let time = getRemainTime(deadLine)

        el.innerHTML = `<div class="time__down" id="time__down">
            <div class="days">${time.remainDays}
                <div class="txt">Days</div>
            </div>
            <div class="hours">${time.remainHours}
                <div class="txt">Hours</div>
            </div>
            <div class="minuts">${time.remainMinuts}
                <div class="txt">Minuts</div>
            </div>
            <div class="seconds">${time.remainSeconds}
                <div class="txt">Seconds</div>
            </div>
        </div>`


    }, 1000)
}

countDown('Apr 15 2021 18:00:00 GMT-0500','clock')