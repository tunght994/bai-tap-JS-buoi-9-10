function UserList(
    userID,
    fullName,
    email,
    password,
    datepicker,
    salary,
    level,
    workTime,
) {
    this.userID = userID;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.salary = salary;
    this.level = level;
    this.workTime = workTime;
}
// Hàm tính tổng lương
UserList.prototype.sumSalary = function (){
    switch (this.level) {
        case 'Sếp':
            return this.totalSalary = this.salary * 3
            break;
        case 'Trưởng phòng':
            return this.totalSalary = this.salary * 2
            break;
        case 'Nhân viên':
            return this.totalSalary = this.salary
            break;
    }

}

// Hàm xếp loại
UserList.prototype.classiFication = function() {
    if (this.workTime >= 192) {
        return 'Xuất sắc'
    }
    if (this.workTime >= 176) {
        return 'Giỏi'
    }
    if (this.workTime >= 160) {
        return 'Khá'
    }
    return 'Trung Bình'  
}
