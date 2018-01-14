document.write('<script type="text/javascript" language="JavaScript" src="class/Connect.js"></script>');
document.write('<script type="text/javascript" language="JavaScript" src="class/LocalDBManager.js"></script>');
//クラス名『ListManager』を定義
ListManager = function(){}
    
    ListManager.prototype.getGoodsList = function(tabletID){
        //リストを取得
        var connect = new Connect();
        var list = connect.getList(tabletID);

    // function vardump(arr,lv,key) {
    // var dumptxt = "",
    //     lv_idt = "",
    //     type = Object.prototype.toString.call(arr).slice(8, -1);
    // if(!lv) lv = 0;
    // for(var i=0;i<lv;i++) lv_idt += "    ";
    // if(key) dumptxt += lv_idt + "[" + key + "] => ";
    // 
    // if(arr == null || arr == undefined){
    //     dumptxt += arr + '\n';
    // } else if(type == "Array" || type == "Object"){
    //     dumptxt += type + "...{\n";
    //     for(var item in arr) dumptxt += vardump(arr[item],lv+1,item);
    //     dumptxt += lv_idt + "}\n";
    // } else if(type == "String"){
    //     dumptxt += '"' + arr + '" ('+ type +')\n';
    // }  else if(type == "Number"){
    //     dumptxt += arr + " (" + type + ")\n";
    // } else {
    //     dumptxt += arr + " (" + type + ")\n";
    // }
    // return dumptxt;
    // }
        
        return list;
    }
    
    ListManager.prototype.checkGoodsList = function(goodsID,tabletID,phoneID){
        //リストをチェック
        var connect = new Connect();
        connect.checkItem(goodsID,tabletID,phoneID);
    }
    
    ListManager.prototype.untickGoodsList = function(goodsID,tabletID,phoneID){
        //リストのチェックをはずす
        var connect = new Connect();
        connect.untickItem(goodsID,tabletID,phoneID);
    }

    ListManager.prototype.deleteList = function(goodsID){
        //tabletIDを取得
        var tabletID = localDBManager.selectTabletID();
        //tabletIDとgoodsIDを渡す
        var connect = new Connect();
        connect.deleteItem(goodsID,tabletID);        
    }