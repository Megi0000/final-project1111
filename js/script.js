document.querySelector('.card').addEventListener('mouseover', function() {
  document.querySelector('.card-extra').style.transform = 'translateY(0)';
  document.querySelector('.card-image').style.transform = 'scale(1.1)';
 });
 
 document.querySelector('.card').addEventListener('mouseout', function() {
  document.querySelector('.card-extra').style.transform = 'translateY(100%)';
  document.querySelector('.card-image').style.transform = 'scale(1)';
 });

// burgerbar
let navBar = document.getElementById('navBar');
let burgerBar = document.getElementById('burger');

burgerBar.addEventListener('click', function() {
navBar.classList.toggle('activeNav');
  
})
// ჯს-ის სწავლაზე ჯჯერ-კიდევ ვმუშაობ ამიტომ სადაც აუცილებლად მოითხოვა მისი დამატება იქ ჩავამატე, ჩამოთვლილი კრიტერიუმებითან ვერ მოვახერხე მხა ბიბლიოთეკის და სერვერების ინფორმავციის მონაკვეთი :( 
