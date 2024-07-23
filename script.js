let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
// console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});



// Table JavaScript 


function editRow(button) {
    const row = button.parentElement.parentElement;
    if (button.textContent === 'Edit') {
        for (let i = 0; i < 3; i++) {
            row.cells[i].contentEditable = "true";
            row.cells[i].style.backgroundColor = "#e0f7fa";
        }
        button.textContent = 'Save';
    } else {
        for (let i = 0; i < 3; i++) {
            row.cells[i].contentEditable = "false";
            row.cells[i].style.backgroundColor = "";
        }
        button.textContent = 'Edit';
    }
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}



const data = async ()=>{
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data;
  }
  
  const arr = data().then((response)=>{
    const control = document.getElementById("table");

    control.innerHTML = "";
    console.log(response.users[0].firstName);
    for(let i =0;i<response.users.length;i++){
            let fullName = response.users[i].firstName + " " + response.users[i].lastName + " " + response.users[i].maidenName; 
        control.innerHTML +=`
               <tr>
                <td>${fullName}</td>
                <td>${response.users[i].username}</td>
                <td>${response.users[i].email}</td>
                <td>
                    <button class = "edit" onclick="editRow(this)">Edit</button>
                    <button class = "delete" onclick="deleteRow(this)">Delete</button>
                </td>
            </tr>


        
        
        `;
    }


  });
  