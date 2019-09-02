class AuthSession {
    constructor(){
        this.session = {
            uid : "" ,
            userState : false
        }
        this.callbackStack = []
    }

    login(uid){
        console.log("AuthSession : trying to login")
        this.session.uid = uid
        this.session.userState = true
        console.log("AuthSession : user logged in")
        this.runCallbackStack()
    }

    logout(){
        this.session.userState = false
        this.runCallbackStack()
    }

    getUserID(){
        return this.session.uid
    }

    getUserState(){
        return this.session.userState
    }

    addAuthListener(callback){
        this.callbackStack.push(callback)
    }

    runCallbackStack(){
        this.callbackStack.map(callback => {
            callback({userState : this.session.userState , uid : this.session.uid})
        })
    }

}

let authSession = new AuthSession()

export default authSession