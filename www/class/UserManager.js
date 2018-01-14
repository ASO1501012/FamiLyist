//クラス名『UserManager』を定義
document.write('<script type="text/javascript" language="JavaScript" src="class/LocalDBManager.js"></script>');
document.write('<script type="text/javascript" language="JavaScript" src="class/Connect.js"></script>');

UserManager = function(){}
    
    //新規のphoneID
    var phoneID;
    
    UserManager.prototype.fistAccsses = function(){
        //ローカルにphoneIDがあるか確認
        var ProvisionalPhoneID = localDBManager.selectPhone();
        
        //ローカルにphoneIDがない場合作成
        if(ProvisionalPhoneID == null){
            var connectInstance = new Connect();
            var phoneID_value = connectInstance.getPhoneID();
            phoneID = JSON.parse(phoneID_value);
            
            //addPhoneにphoneIDを渡す
            userManagerInstance.addPhone(phoneID);
        }        
    }

    UserManager.prototype.editNickName = function(nickName){
        //作成したニックネームをサーバに登録
        var PhoneID = localDBManager.selectPhone();
        var connectInstance = new Connect();
        connectInstance.registerNickname(nickName,PhoneID);
        //編集したnickNameを保存する
        localDBManager.insertNickName(nickName);
    }
    
    UserManager.prototype.addPhone = function(phoneID){
        //insertPhoneにphoneIDを渡す
        localDBManager.insertPhone(phoneID);

    }
    
    UserManager.prototype.addNickName = function(nickName){        
        //作成したニックネームをサーバに登録
        var PhoneID = localDBManager.selectPhone();
        var connectInstance = new Connect();
        connectInstance.registerNickname(nickName,PhoneID);
        //登録したnickNameを保存する
        localDBManager.insertNickName(nickName);
    }
    
    UserManager.prototype.linkTablet = function(tabletID,phoneID){
        //ローカルからtabletIDの値を取得
        var local_tabletID = localDBManager.selectTabletID();
        var connectInstance = new Connect();
        //tabletIDがあった場合
        if(local_tabletID != null){
            //tabletIDを渡す
            connectInstance.deletTablet(phoneID,tabletID);
        }
        connectInstance.connectTablet(tabletID,phoneID);
        var link = connectInstance.connectCheck(tabletID);
        
        if(link == ""){
            console.log("空です");
            return link;
        }else if(link != ""){
            localDBManager.insertTabletID(tabletID);
        }
    }