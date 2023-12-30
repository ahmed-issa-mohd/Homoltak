let selection = document.getElementById('select1');
let result;
selection.addEventListener('change', (e) => {
    result = selection.options[selection.selectedIndex].text;
    console.log(result)
})



function emailSend() {
    var name = document.getElementById('name').value;
    var size = document.getElementById('size').value;
    var mobile = document.getElementById('mobile').value;
    var cars = document.getElementById('cars').value;


    var table = `<table style=' border-collapse: collapse; width: 100%; text-align: center;direction: rtl;' >
    <tr>
        <th style="padding: 20px;  background-color: #065e5e; color: white;">اسم الشركة</th>
        <th style="padding: 20px;  background-color: #065e5e; color: white;">نوع النقل</th>
        <th style="padding: 20px;  background-color: #065e5e; color: white;">حجم المركبة</th>
        <th style="padding: 20px;  background-color: #065e5e; color: white;">شكل التعاقد</th>
        <th style="padding: 20px;  background-color: #065e5e; color: white;">رقم الجوال </th>
        <th style="padding: 20px;  background-color: #065e5e; color: white;">عدد السيارات المطلوبة</th>
    </tr>

    <tr>
        <td style="border: 1px solid #ddd; padding: 8px; ">${name}</td>
        <td style="border: 1px solid #ddd; padding: 8px; ">${result}</td>
        <td style="border: 1px solid #ddd; padding: 8px; ">${size}</td>
        <td style="border: 1px solid #ddd; padding: 8px; ">لمدو ثلاثة اشهر</td>
        <td style="border: 1px solid #ddd; padding: 8px; ">${mobile}</td>
        <td style="border: 1px solid #ddd; padding: 8px; ">${cars}</td>
    </tr>
    </table>`


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "homoltak@gmail.com",
        Password: "17CEE3A6ADA933A119E42BC0CA257FDD8BBE",
        To: 'ahmad.sandoqah@rumman.tech',
        // To: 'homoltak@gmail.com',
        From: "ahmad.sandoqah@rumman.tech",
        Subject: "Homoltak Customers",
        Body: table
    }).then(
        message => alert('تاكيد')
    );

}




