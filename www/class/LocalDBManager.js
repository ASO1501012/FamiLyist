//クラス名『LocalDBManager』を定義
LocalDBManager = function(){}
    
    var null_value = null;
    
    //tabletIDをローカルに保存する
    LocalDBManager.prototype.insertTabletID = function(tabletID){
       localStorage.setItem('tabletID',tabletID);
    }
    //phoneIDをローカルに保存する
    LocalDBManager.prototype.insertPhone = function(phoneID){
        localStorage.setItem('phoneID',phoneID);
    }
    //nickNameをローカルに保存する
    LocalDBManager.prototype.insertNickName = function(nickName){
        localStorage.setItem('nickName',nickName);        
    }
    //tabletIDをローカルから検索する
    LocalDBManager.prototype.selectTabletID = function(){
        var tabletID = localStorage.getItem('tabletID');
        if(tabletID == 'undefined'){
            tabletID = null_value;
        }       
        return tabletID;
    }
    //phoneIDをローカルから検索する
    LocalDBManager.prototype.selectPhone = function(){
        //phoneIDを取得
        phoneID= localStorage.getItem('phoneID');
        
        if(phoneID == 'undefined'){
            phoneID = null_value;
        }
        return phoneID;
    }
    //nickNameをローカルから検索する
    LocalDBManager.prototype.selectNickname = function(){
       var nickName = localStorage.getItem('nickName');

        if(nickName == 'undefined'){
            nickName= null_value;
        }       
        return nickName;
    }
