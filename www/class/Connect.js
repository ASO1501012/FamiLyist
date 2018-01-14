//クラス名『Connect』を定義
Connect = function(){}

    Connect.prototype.submit = function(){}
    
    //phoneIDを返すための変数
    var return_phoneID;
    
    //サーバからPhoneIDを取得
    Connect.prototype.getPhoneID = function(){
        
        var JSONdata = {
            terminal:'phone',
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonNewID.php',
            async: false,//通信を完了まで待たせる
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'json',
            scriptCharset: 'utf-8',

            success : function(data) {

                // Success
                console.log("success　NewPhoneID取得");
                return_phoneID = JSON.stringify(data);
            },
            error : function(data) {

                // Error
                console.log("error　NewPhoneIDの取得に失敗");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
        if(return_phoneID != null){
            return return_phoneID;
        };
    }
    
    //nickNameを登録
    Connect.prototype.registerNickname = function(nick,phone){
        var JSONdata = {
            phoneid:phone,
            nickname:nick
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonNickName.php',
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'html',
            scriptCharset: 'utf-8',
            
            success : function(data) {

                // Success
                console.log("success　NickNameを登録");
            },
            error : function(data) {

                // Error
                console.log("error　NickName登録失敗");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
    }
    
    //Tabletとリンクする
    Connect.prototype.connectTablet = function(tablet,phone){
        var JSONdata = {
            tabletid:tablet,
            phoneid:phone
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonAddLink.php',
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'html',
            scriptCharset: 'utf-8',

            success : function(data) {

                // Success
                console.log("success Tabletとリンク完了");
            },
            error : function(data) {

                // Error
                console.log("error　Tabletとリンク失敗");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
    }
    
    //リンク結果を返す変数
    var tablet_return;
    
    //Tabletとリンクできているかチェック
    Connect.prototype.connectCheck = function(tabletID){
        var JSONdata = {
            tabletid:tabletID
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonGetLinkedPhoneList.php',
            async: false,//通信を完了まで待たせる
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'json',
            scriptCharset: 'utf-8',

            success : function(data) {

                // Success
                console.log("success Tabletリンク確認");
                tablet_return = data;
            },
            error : function(data) {

                // Error
                console.log("error Tabletとリンク失敗");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
        return tablet_return;
    }
    
    //Tabletとリンクを解除する
    Connect.prototype.deletTablet = function(phone){
        var JSONdata = {
            phoneid:phone
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonDeleteLink.php',
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'html',
            scriptCharset: 'utf-8',

            success : function(data) {

                // Success
                console.log("success Tabletとのリンクを解除");
            },
            error : function(data) {

                // Error
                console.log("error2　Tabletとのリンクが解除できませんでした");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
    }
    
    //Listを返すための変数
    var return_list;
    
    //Listを取得する
    Connect.prototype.getList = function(tabletID){
        var JSONdata = {
            tabletid:tabletID
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonGetGoodsListToList.php',
            async: false,//通信を完了まで待たせる
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'json',
            scriptCharset: 'utf-8',
        
            success : function(data) {

                // Success
                console.log("success リストを取得できました");
                return_list = data;
            },
            error : function(data) {

                // Error
                console.log("error　リストが取得できませんでした");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
        
        if(return_list != null){
            return return_list;
        };
    }
    

    
    //Listのチェックをする
    Connect.prototype.checkItem = function(goodsID,tabletID,phoneID){
        var JSONdata = {
            goodsid:goodsID,
            tabletid:tabletID,
            phoneid:phoneID
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonAddBoughtSign.php',
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'html',
            scriptCharset: 'utf-8',

            success : function(data) {

                // Success
                console.log("success チェックをいれました");
            },
            error : function(data) {

                // Error
                console.log("error チェックできません");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
    }
    
    //Listのチェックをはずす
    Connect.prototype.untickItem = function(goodsID,tabletID,phoneID){
        var JSONdata = {
            goodsid:goodsID,
            tabletid:tabletID,
            phoneid:phoneID
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonDeleteBoughtSign.php',
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'html',
            scriptCharset: 'utf-8',

            success : function(data) {

                // Success
                console.log("success　チェックをはずしました");
             },
            error : function(data) {

                // Error
                console.log("error　チェックが外れていません");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
    }
    
    //Listを削除
    Connect.prototype.deleteItem = function(goodsID,tabletID){
        var JSONdata = {
            goodsid:goodsID,
            tabletid:tabletID
        };

    $.ajax({
         type : 'post',
         url : 'http://163.44.174.115:80/jsonDeleteGoodsToList.php',
         data : JSON.stringify(JSONdata),
         contentType: 'application/JSON',
         dataType : 'html',
         scriptCharset: 'utf-8',

         success : function(data) {

              // Success
              console.log("success リストの削除完了");
         },
         error : function(data) {

             // Error
             console.log("error リストが削除されていません");
             console.log(JSON.stringify(data)+"というエラー");
         }
     });
    }
    
    //shopListを返すための変数
    var shopList_value;
    
    //ShopListを取得
    Connect.prototype.getShop = function(tabletID){
        var JSONdata = {
            tabletid:tabletID
        };

        $.ajax({
            type : 'post',
            url : 'http://163.44.174.115:80/jsonGetShopList.php',
            async: false,//通信を完了まで待たせる
            data : JSON.stringify(JSONdata),
            contentType: 'application/JSON',
            dataType : 'json',
            scriptCharset: 'utf-8',

            success : function(data) {

                // Success
                console.log("success Shopのリストを取得");
                shopList_value = data;

            },
            error : function(data) {
    
                // Error
                console.log("error　Shopのリストが取得できませんでした");
                console.log(JSON.stringify(data)+"というエラー");
            }
        });
        if(shopList_value != null){
            return shopList_value;
        };
    }

    