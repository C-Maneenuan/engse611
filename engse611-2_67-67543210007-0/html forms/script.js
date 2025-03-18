document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const dataList = document.createElement('ul'); 
    document.body.appendChild(dataList); 
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries()); 
      const listItem = document.createElement('li');
      listItem.textContent = 
        `ชื่อ: ${data.name}, อีเมล: ${data.email}, เบอร์โทร: ${data.phone}, หัวข้อ: ${data.subject}, ข้อความ: ${data.message}`;
      dataList.appendChild(listItem);
      form.reset(); 
    });  ``
  });