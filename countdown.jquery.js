var global_Days = '';
var global_Hour = '';
var global_Mins = '';
var global_Secs = '';
var global_die  = false;

function countdown(days,hours,minutes,seconds){
    
    global_Days = days;
    global_Hour = hours;
    global_Mins = minutes;
    global_Secs = seconds;
    
    var Days = disjoin( zeroFill( String(days) , 3 ) );    
    $("#nextDays").html( Days.join('') );

    var Hours = disjoin( zeroFill( String(hours) , 2 ) );    
    $("#nextHours").html( Hours.join('') );
    
    var Minutes = disjoin( zeroFill( String(minutes) , 2 ) );    
    $("#nextMinutes").html( Minutes.join('') );
    
    var Seconds = disjoin( zeroFill( String(seconds) ) ,2 );    
    $("#nextSeconds").html( Seconds.join('') );
    
    
    sTseconds = setInterval('countSeconds()',1000);
    
}

function disjoin(str){
    
    var counts = String(str);
    
    counts = counts.length;
    
    var foo = new Array();
    
    for(i = 0; i < counts; i++){
        
        foo[i] = '<span>'+substr(str,i,1)+'</span>';
        
    }
    
    return foo;
    
}

//clearInterval(sTseconds);

function endCountDown(){

    if( global_Days < 1 && global_Hour < 1 && global_Mins < 1 && global_Secs < 1){

        global_die = true;

        clearInterval(sTseconds);

    }

}

function countSeconds(){

    if( !global_die == true ){
    
        var i = global_Secs;
        
        if( i < 1){
            minusMinutes();
            e = 59;    
        } else {    
            e = i-1;
        }
        
        global_Secs = e;
        
        var Seconds = disjoin( zeroFill( String(e) , 2 ) );    
        $("#nextSeconds").html( Seconds.join('') );
        
        endCountDown();

    } else {

        alert("Sigo jodiendo...");

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
    
    var Days = disjoin( zeroFill( String(e) , 3 ) );    
    $("#nextDays").html( Days.join('') );
    
}



function zeroFill( number, width ){
  width -= number.toString().length;  if ( width > 0 ){   return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;   } return number + ""; 
}

function substr (str, start, len) {
    var i = 0,        allBMP = true,        es = 0,        el = 0,        se = 0,        ret = '';    str += '';    var end = str.length;      this.php_js = this.php_js || {};    this.php_js.ini = this.php_js.ini || {};     switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {    case 'on':         for (i = 0; i < str.length; i++) {            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {                allBMP = false;                break;            }        }         if (!allBMP) {            if (start < 0) {                for (i = end - 1, es = (start += end); i >= es; i--) {                    if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {                        start--;                        es--;                    }                }            } else {                var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;                while ((surrogatePairs.exec(str)) != null) {                    var li = surrogatePairs.lastIndex;                    if (li - 2 < start) {                        start++;                    } else {                        break;                    }                }            }             if (start >= end || start < 0) {                return false;            }            if (len < 0) {                for (i = end - 1, el = (end += len); i >= el; i--) {                    if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {                        end--;                        el--;                    }                }                if (start > end) {                    return false;                }                return str.slice(start, end);            } else {                se = start + len;                for (i = start; i < se; i++) {                    ret += str.charAt(i);                    if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {                        se++;                     }                }                return ret;            }            break;        }     case 'off':    default:        if (start < 0) {            start += end;        }        end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);         return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);    }    return undefined; 
}