var global_Days = '';
var global_Hour = '';
var global_Mins = '';
var global_Secs = '';
var global_die  = false;

/* Funcion inicial */

function countdown(days,hours,minutes,seconds){
    
    /*
     * Revisamos si hay valores negativos
     */
    
    if ( days < 0 ){ days = 0; }     
    if ( hours < 0 ){ hours = 0; }    
    if ( minutes < 0 ){ minutes = 0; }    
    if ( seconds < 0 ){ seconds = 0; }
    
    /*
     * Empezamos el contador
     */
    
    field = new Array();

    field[0] = '<div id="nextDays"></div>';
    field[1] = '<div id="nextHours"></div>';
    field[2] = '<div id="nextMinutes"></div>';
    //field[3] = '<div id="nextSeconds"></div>';
    
    /*
     * Separador del contador, normalmente ":"
     * Para darle un aspecto de reloj
     */
    $("#timeNext").prepend( field.join('<div class="separator">:</div>') );
    
    
    /*
     * No mover esto a menos que sepas que lo que haces o
     * bien que uses GIT y regreses a una versión funcional
     */
    
    global_Days = days;
    global_Hour = hours;
    global_Mins = minutes;
    global_Secs = seconds;
    
    var Days = disjoin( zeroFill( String(days) , 2 ) );    
    $("#nextDays").html( Days.join('') );

    var Hours = disjoin( zeroFill( String(hours) , 2 ) );    
    $("#nextHours").html( Hours.join('') );
    
    var Minutes = disjoin( zeroFill( String(minutes) , 2 ) );    
    $("#nextMinutes").html( Minutes.join('') );
    
    //var Seconds = disjoin( zeroFill( String(seconds) , 2 ) );    
    //$("#nextSeconds").html( Seconds.join('') );
    
    
    if( global_Days < 1 && global_Hour < 1 && global_Mins < 1 && global_Secs < 1){
        console.log("No empieza.");
    } else {
        console.log("Comenzamos");
        sTseconds = setInterval('countSeconds()',1000);   
    }
    
}

/*
 * Funcion para convertir una estampa de tiempo a el
 * tiempo faltante en días, horas, minutos, segundos
 */

function getValuesByTimestamp( timestampa ){

    /*
     * Apocalipsis:  1356096640
     * Tiempo ahora: 1346704132713
     */
    
    // Estampa de tiempo
    foo = timestampa;       
    
    // Estampa de este momento exacto en el tiempo
    fecha = new Date().getTime();
    
    // Adios nanosegundos de hijos de...
    bar = foo - parseInt(fecha / 1000);

    // Obtenemos los dias de diferencia
    dias = parseInt(bar/86400);
    bar = bar - (dias*86400);
    
    // Obtenemos las horas de diferencia
    horas = parseInt(bar/3600);
    bar = bar - (horas*3600);

    // Obtenemos los minutos de diferencia
    minutes = parseInt(bar/60);
    bar = bar - (minutes*60);

    seconds = parseInt(bar);

    var values = new Array( dias, horas, minutes, seconds );

    return values;

}

/*
 * Funcion para asignar a cada caracter un span
 */

function disjoin(str){
    
    var counts = String(str);
    
    counts = counts.length;
    
    var foo = new Array();
    
    for(i = 0; i < counts; i++){
        
        foo[i] = '<span>'+substr(str,i,1)+'</span>';
        
    }
    
    return foo;
    
}

/*
 * Funcion para terminar el conteo cuando esté llegue a cero.
 */

function endCountDown(){

    if( global_Days < 1 && global_Hour < 1 && global_Mins < 1 && global_Secs < 1){
        global_die = true;
        clearInterval(sTseconds);        
        console.log("Se detuvo");
    }

}

/*
 * Funcion de conteo de segundos
 */

function countSeconds(){
    
    /* Si endCountDown() dijo se que termino, se termino */
    
    if( !global_die == true ){
    
        var i = global_Secs;
        
        if( i < 1){
            minusMinutes();
            e = 59;    
        } else {    
            e = i-1;
        }
        
        global_Secs = e;
        
        //var Seconds = disjoin( zeroFill( String(e) , 2 ) );    
        //$("#nextSeconds").html( Seconds.join('') );
        //console.log( e );
        
        endCountDown();

    } else {

        //alert("Sigo jodiendo...");

    }

}

function minusMinutes(){
    
    var i = global_Mins;
    
    if( i < 1){
        minusHours();
        e = 59;    
    } else {    
        e = i-1;
    }
    
    global_Mins = e;
    
    var Minutes = disjoin( zeroFill( String(e) , 2 ) );    
    $("#nextMinutes").html( Minutes.join('') );
    
}


function minusHours(){
    
    var i = global_Hour;
    
    if( i < 1){
        minusDays();
        e = 23;    
    } else {    
        e = i-1;
    }
    
    global_Hour = e;
    
    var Hours = disjoin( zeroFill( String(e) , 2 ) );    
    $("#nextHours").html( Hours.join('') );
    
}

function minusDays(){
    
    var i = global_Days;
    
    if( i < 1){
        e = 0;    
    } else {    
        e = i-1;
    }
    
    global_Days = e;
    
    var Days = disjoin( zeroFill( String(e) , 2 ) );    
    $("#nextDays").html( Days.join('') );
    
}

function zeroFill( number, width ){
  width -= number.toString().length;  if ( width > 0 ){   return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;   } return number + ""; 
}

function substr (str, start, len) {
    var i = 0,        allBMP = true,        es = 0,        el = 0,        se = 0,        ret = '';    str += '';    var end = str.length;      this.php_js = this.php_js || {};    this.php_js.ini = this.php_js.ini || {};     switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {    case 'on':         for (i = 0; i < str.length; i++) {            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {                allBMP = false;                break;            }        }         if (!allBMP) {            if (start < 0) {                for (i = end - 1, es = (start += end); i >= es; i--) {                    if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {                        start--;                        es--;                    }                }            } else {                var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;                while ((surrogatePairs.exec(str)) != null) {                    var li = surrogatePairs.lastIndex;                    if (li - 2 < start) {                        start++;                    } else {                        break;                    }                }            }             if (start >= end || start < 0) {                return false;            }            if (len < 0) {                for (i = end - 1, el = (end += len); i >= el; i--) {                    if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {                        end--;                        el--;                    }                }                if (start > end) {                    return false;                }                return str.slice(start, end);            } else {                se = start + len;                for (i = start; i < se; i++) {                    ret += str.charAt(i);                    if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {                        se++;                     }                }                return ret;            }            break;        }     case 'off':    default:        if (start < 0) {            start += end;        }        end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);         return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);    }    return undefined; 
}