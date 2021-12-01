var currentDayEl = $('#currentDay')
var timeSlots = [
    {"time": "8:00 am"}
]

currentDayEl.text(moment().format("MMM Do YY"))

/* function slotTemplate(){
    return `
    <div class='slot'>
        <div class='time'></div>
        <textarea></textarea>
        <button><i class="fa fa-save"></i></button>
    </div>
    `
} */

$('.container').html(
    `
    <div class='row'>
        <div class='time'> 8:00 am</div>
        <textarea></textarea>
        <button class ='saveBtn'><i class="fa fa-save"></i></button>
    </div>
    `
)

