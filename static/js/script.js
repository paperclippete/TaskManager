$(document).ready(function(){
    $('.collapsible').collapsible();
    $('select').material_select();
    due_date = Date.parse('{{task_due_date}}');
    $('#due_date').pickadate('picker').set('select', due_date, {format: 'dd/mm/yyyy'}).trigger('change');
});
  
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
    container: undefined // ex. 'body' will append picker to body
});


       