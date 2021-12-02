// Sets current date on page
var currentDayEl = $('#currentDay')
currentDayEl.text(moment().format("MMM Do YY"))

//Creates and styles time slots and buttons on page
var output = ''
timeSlots.forEach((timeSlot, i) => {

    var currentHour = moment().startOf('hour').format('HH')
    var color = ''
    if (timeSlot.hour == currentHour){
        color = 'present'
    } else if (timeSlot.hour < currentHour) {
        color = 'past'
    } else {
        color = 'future'
    }

    output+=  `
    <div class='row'>
        <div class='col-lg-1 hour time-block'> ${timeSlot.time}</div>
        <textarea id = ${i} class='col-lg-10 ${color}' >${timeSlot.text}</textarea>
        <button class =' col-lg-1 saveBtn'><i class="fa fa-save"></i></button>
    </div>
    `
    }
)

$('.container').html(
    output 
)

//Saves tasks in text area
$('.row').on('click', 'button', (event)=>{
    var task = event.currentTarget.parentElement.children[1].value
    var timeID = event.currentTarget.parentElement.children[1].id
    
    timeSlots[timeID].text = task
    
    localStorage.setItem('timeSlots', JSON.stringify(timeSlots))
}) 