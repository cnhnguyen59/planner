var currentDayEl = $('#currentDay')
var currentHour = moment().startOf('hour').format('HH')

currentDayEl.text(moment().format("MMM Do YY"))


function slotTemplate(timeSlot){
    var color = ''
    if (timeSlot.hour == currentHour){
        color = 'present'
    } else if (timeSlot.hour < currentHour) {
        color = 'past'
    } else {
        color = 'future'
    }

    return  `
    <div class='row'>
        <div class='col-lg-1 hour time-block'> ${timeSlot.time}</div>
        <div class='col-lg-10 ${color}'>
            <textarea >${timeSlot.text}</textarea>
        </div>
        <button class =' col-lg-1 saveBtn'><i class="fa fa-save"></i></button>
    </div>
    `
}


$('.container').html(
    `${timeSlots.map(slotTemplate).join('')}`
)

$('.row').on('click', 'button', (event)=>{
    event.preventDefault()
 /*    var targetEl = $(event.target)
    var parentRow = targetEl.parent('div') 
    var text = parentRow.children('textarea').val()
    console.log(targetEl)
    console.log(`text: ${text}`) */


    var text = event.target.parentElement.parentElement.children[1].children[0].value

    console.log(event.target)
    console.log(event.target.parentElement.parentElement.children[1].children[0].value)


})
