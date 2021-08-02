function ManageUser () {
    this.dsnv = JSON.parse(localStorage.getItem('dsnv')) || [];
}

ManageUser.prototype.createSourece = function () {
    if (this.dsnv.length === 0) {
        return
    }
    this.dsnv = this.dsnv.map(function (user) {
        return new UserList (
            user.userID,
            user.fullName,
            user.email,
            user.password,
            user.datepicker,
            user.salary,
            user.level,
            user.workTime
        ) 
    })
}
ManageUser.prototype.saveLocalStorage = function (){
    localStorage.setItem('dsnv', JSON.stringify(this.dsnv))
}
ManageUser.prototype.addUser = function (UserList){
    this.dsnv.push(UserList)
    this.saveLocalStorage()
}

ManageUser.prototype.updateUser = function (UserList) {
    this.dsnv = this.dsnv.map((user) => {
        if (user.userID === UserList.userID){
            return UserList
        }
        return user
    })
    this.saveLocalStorage()
}

ManageUser.prototype.deleteUser = function (userID){
    this.dsnv = this.dsnv.filter((user) => {
        return user.userID !== userID
    })
    this.saveLocalStorage()
}

ManageUser.prototype.selectUser = function (userID){
    return this.dsnv.find((user) => {
        return user.userID = userID
    })

}

ManageUser.prototype.searchUser = function (search){
    return this.dsnv.filter ((user) => {
        var searchValue = search.trim().toLowerCase()
        var positionValue = user.classiFication().trim().toLowerCase()
        return positionValue.indexOf(searchValue) !== -1
    })
}