const deadline_details = new Date(2023, 2, 19, 8, 30, 60);
const days = document.getElementById("time_value_days");
const hrs = document.getElementById("time_value_hrs");
const mins = document.getElementById("time_value_mins");
const secs = document.getElementById("time_value_secs");
const Status = document.getElementById("Status");
console.log(deadline_details)
function update() {
  const current_details = new Date();
  const deadline_time = deadline_details.getTime();
  const current_time = current_details.getTime();
  const diff_time = deadline_time - current_time;
  const one_sec = 1000;
  const one_min = 60 * 1000;
  const one_hr = 60 * 60 * 1000;
  const one_day = 24 * 60 * 60 * 1000;
  
  //⭐The below code brings the value of reamaining days 
  let number_of_days_left = Math.floor(diff_time / one_day);

  //⭐The below code brings the value of reamaining hr,min,sec left "after counting the complete number of days" .  
  let number_of_hr_left = Math.floor((diff_time % one_day) / one_hr);
  let number_of_min_left = Math.floor((diff_time % one_hr) / one_min);
  let number_of_sec_left = Math.floor((diff_time % one_min) / one_sec);

  if (diff_time < 0) {
    clearInterval(update);
    Status.innerHTML = `You missed the offer`;
    days.innerHTML = `<h3>0</h3>`;
    hrs.innerHTML = `<h3>0</h3>`;
    mins.innerHTML = `<h3>0</h3>`;
    secs.innerHTML = `<h3>0</h3>`;
  } else {
    days.innerHTML = `<h3>${number_of_days_left}</h3>`;
    hrs.innerHTML = `<h3>${number_of_hr_left}</h3>`;
    mins.innerHTML = `<h3>${number_of_min_left}</h3>`;
    secs.innerHTML = `<h3>${number_of_sec_left}</h3>`;
  }
}
update();
 setInterval(update, 1000);
