var arr_useful_data = new Object([]);
$(document).ready(function(){
     
    $.ajax({
        type: 'GET',
        url: 'http://5.188.232.220:5000/api/Geobase/getall',
        success: function(data){
            console.log(data);
            var data_arr = data;
           
            data_arr.map(dt => {
               var geometry = new Object({
                   geometry: {
                      type: "Point",
                      coordinates: [dt.lautitude, dt.longtitude] 
                   },
                   
                   properties: {
                // Контент метки.
                iconContent: '',
                hintContent: '',
                balloonContent: '<div class="place_info"><h2 style="font-size: 15px;">' + dt.adress + '</h2><div class="place_info_a"><strong>Люди до обеда: </strong>' + dt.averegeBeforeLanch + '</div> <div class="place_info_a"><strong>Люди после обеда: </strong>' + dt.averateAfterLanch + '</div></div>'
            }
               });
                arr_useful_data.push(geometry);
            });
        }
    });
    
    var hello_admin = document.getElementById("hello_admin");
    hello_admin.innerHTML = hello_admin.innerHTML + sessionStorage.getItem("username");
});

// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        
        
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [50.0, 36.15],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: '',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });
        arr_useful_data.map(point => {
            point = new ymaps.GeoObject(point);
            console.log(point);
            myMap.geoObjects.add(point);
        })
    }
$(document).ready(function(){
    
        if(sessionStorage.getItem("username") != null && !location.pathname.includes("_ua")){
    var log_eng = document.getElementById("log_eng");
    var reg_eng = document.getElementById("reg_eng");
    var exit = document.getElementById("exit");
        
    var log_eng_nm = document.getElementById("log_eng_nm");
    var reg_eng_nm = document.getElementById("reg_eng_nm");
    var exit_nm = document.getElementById("exit_nm");
        
     
        
    log_eng.style.display = "none";
    reg_eng.style.display = "none";
    exit.style.display = "block";
        
    log_eng_nm.style.display = "none";
    reg_eng_nm.style.display = "none";
    exit_nm.style.display = "inline-block";
        
        

}
    
    
    
    if(sessionStorage.getItem("username") == null){
        var hello_admin = document.getElementById("hello_admin");
        hello_admin.style.display = "none";
    }
});

$(document).ready(function(){
    
        if(sessionStorage.getItem("username") != null && location.pathname.includes("_ua")){
   
        
    var log_ua_nm = document.getElementById("log_ua_nm");
    var reg_ua_nm = document.getElementById("reg_ua_nm");
    var exit_nm_ua = document.getElementById("exit_nm_ua");
        
        
    log_ua_nm.style.display = "none";
    reg_ua_nm.style.display = "none";
    exit_nm_ua.style.display = "inline-block";
}
    
    
});

function log_out(){
    sessionStorage.clear();
}


