let day = document.querySelectorAll('.day')
let today = new Date().getDay() - 1
let todayColor = '#76b5bc'
day[today].style.backgroundColor = todayColor

/*
THIS IS DAY ORDER FROM HTML
0: <div class="mon day" title="17.45">​
1: <div class="tue day" title="34.92">​
2: <div class="wed day" title="52.36">​
3: <div class="thu day" title="31.07">​
4: <div class="fri day" title="23.39">​
5: <div class="sat day" title="43.28">​
6: <div class="sun day" title="25.48">
*/

/* 
THIS IS DAY ORDER FROM JS PERSPECTIVE
0 = SUNDAY
1 = MONDAY
2 = TUESDAY
3 = WEDNESDAY
4 = THURSDAY
5 = FRIDAY
6 = SATURDAY
*/
