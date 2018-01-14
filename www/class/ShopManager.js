document.write('<script type="text/javascript" language="JavaScript" src="class/Connect.js"></script>');

//クラス名『ShopManager』を定義
var ShopManager = function(){}

    var shopList;
    
    //タブレットで登録した位置情報を取得
    ShopManager.prototype.getShopList = function(tabletID){
        //jsonGetShopList.phpを使い登録した位置を取得
        var connectInstance = new Connect();
        var shopList = connectInstance.getShop(tabletID);
                                
    //     function vardump(arr,lv,key) {
    //     var dumptxt = "",
    //     lv_idt = "",
    //     type = Object.prototype.toString.call(arr).slice(8, -1);
    //     if(!lv) lv = 0;
    //     for(var i=0;i<lv;i++) lv_idt += "    ";
    //     if(key) dumptxt += lv_idt + "[" + key + "] => ";
    //         
    //     if(arr == null || arr == undefined){
    //         dumptxt += arr + '\n';
    //     } else if(type == "Array" || type == "Object"){
    //         dumptxt += type + "...{\n";
    //         for(var item in arr) dumptxt += vardump(arr[item],lv+1,item);
    //         dumptxt += lv_idt + "}\n";
    //     } else if(type == "String"){
    //         dumptxt += '"' + arr + '" ('+ type +')\n';
    //     }  else if(type == "Number"){
    //         dumptxt += arr + " (" + type + ")\n";
    //     } else {
    //         dumptxt += arr + " (" + type + ")\n";
    //     }
    //     return dumptxt;
    //     }    
    // 
    // alert(vardump(shopList));
        
        return shopList;
    };
    
//     //位置情報を取得
//     ShopManager.prototype.userLocation = function(){
// 
//         var options = {
//             enableHighAccuracy: true,
//             timeout: 6000,
//             maximumAge: 0
//         };
// 
//         function success(pos) {
//             var crd = pos.coords;            
//             latitude = crd.latitude;
//             longitude = crd.longitude;
//             
//             document.write("成功"+" 緯度が"+latitude+" 経度が"+longitude);
//                         
//             shop = new ShopManager();
//             var shopItem = shop.getShopList();
//             shop.checkLocationMatch(latitude,longitude,shopItem);
//             
//         };
// 
//         function error(error) {
//             // エラーコードのメッセージを定義
// 	    var errorMessage = {
// 	    	0: "原因不明のエラーが発生しました" ,
// 	    	1: "位置情報の取得が許可されませんでした" ,
// 	    	2: "電波状況などで位置情報が取得できませんでした" ,
// 	    	3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました" ,
// 	        } ;
//             
//             // エラーコードに合わせたエラー内容をアラート表示
//             alert( errorMessage[error.code] ) ;
//         };
//         
//         //現在の位置情報を取得
//         navigator.geolocation.getCurrentPosition(success, error, options);
// 
//     }
    
    // ShopManager.prototype.checkLocationMatch = function(latitude,longitude,shopItem){
    //     //取得した店舗の位置と現在の位置を比較
    //     alert(latitude);
    //     alert(longitude);
    //     alert(shopItem[0]);
    // }