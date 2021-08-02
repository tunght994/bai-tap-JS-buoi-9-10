// Xử lý sự kiện
document.querySelector('#btnThemNV').addEventListener('click', addUser)
document.querySelector("#btnCapNhat").addEventListener("click", updateUser);
document.getElementById("btnTimNV").addEventListener("click", searchUser);
document.querySelector('#tableDanhSach').addEventListener('click', delegationTable)

document.querySelector("#btnThem").addEventListener('click', () => {
    document.querySelector("#tknv").disabled = false;
})


var manageUser = new ManageUser()
manageUser.createSourece()
showUser(manageUser.dsnv)

function addUser() {
    var userID = document.querySelector("#tknv").value;
    var fullName = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var datepicker = document.querySelector("#datepicker").value;
    var salary = document.querySelector("#luongCB").value;
    var level = document.querySelector("#chucvu").value;
    var workTime = document.querySelector("#gioLam").value;

    var userList = new UserList(
        userID,
        fullName,
        email,
        password,
        datepicker,
        salary,
        level,
        workTime
    )

    manageUser.addUser(userList)
    showUser(manageUser.dsnv)
}

function updateUser() {
    var userID = document.querySelector("#tknv").value;
    var fullName = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var datepicker = document.querySelector("#datepicker").value;
    var salary = document.querySelector("#luongCB").value;
    var level = document.querySelector("#chucvu").value;
    var workTime = document.querySelector("#gioLam").value;

    var userList = new UserList(
        userID,
        fullName,
        email,
        password,
        datepicker,
        salary,
        level,
        workTime
    )
    manageUser.updateUser(userList)
    showUser(manageUser.dsnv)

}

function showUser(dsnv) {
    var tbody = document.querySelector("#tableDanhSach")
    var html = ''
    for (var i = 0; i < dsnv.length; i++) {
        var user = dsnv[i]
        html += `
            <tr>
                <td>${user.userID}</td>
                <td>${user.fullName}</td>
                <td>${user.email}</td>
                <td>${user.datepicker}</td>
                <td>${user.level}</td>
                <td>${user.sumSalary()}</td>
                <td>${user.classiFication()}</td>
                <td>
                <button class="btn btn-primary" data-toggle="modal"
                data-target="#myModal" data-action="select" data-user="${user.userID
            }">Update</button>
                <button class="btn btn-danger" data-action="delete" data-user="${user.userID
            }">Delete</button>
              </td>
            </tr>
        `
        tbody.innerHTML = html
    }
}

function searchUser() {
    var search = document.querySelector('#searchName').value
    var newDsnv = manageUser.searchUser(search)

    showUser(newDsnv)
}

function delegationTable(e) {

    var action = e.target.getAttribute('data-action')
    var userID = e.target.getAttribute('data-user')

    if (action === 'select') {
        selectUser(userID)
    }
    if (action === 'delete') {
        deleteUser(userID)
    }
}

function deleteUser(userID) {
    manageUser.deleteUser(userID)
    showUser(manageUser.dsnv)
}


function selectUser(userID) {
    manageUser.selectUser(userID)
    document.querySelector("#tknv").disabled = true;
    showUser(manageUser.dsnv)
}
