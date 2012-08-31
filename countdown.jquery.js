$(document).ready(function() {
  
  countdown(357,23,1,15);
  
  
  
});

var global_Days = '';
var global_Hour = '';
var global_Mins = '';
var global_Secs = '';

function countdown(days,hours,minutes,seconds){
    
    var Boxs = '<input id="inputDays" type="hidden" value="'+days+'" />';
        Boxs+= '<input id="inputHours" type="hidden" value="'+hours+'" />';
        Boxs+= '<input id="inputMins" type="hidden" value="'+minutes+'" />';
        Boxs+= '<input id="inputSecs" type="hidden" value="'+seconds+'" />';
    
    global_Days = days;
    global_Hour = hours;
    global_Mins = minutes;
    global_Secs = seconds;
    
    $("#timeNext").append(Boxs);
    
    var Days = disjoin( zeroFill( String(days) , 2 ) );    
    $("#nextDays").html( Days.join('') );

    var Hours = disjoin( zeroFill( String(hours) , 2 ) );    
    $("#nextHours").html( Hours.join('') );
    
    var Minutes = disjoin( zeroFill( String(minutes) , 2 ) );    
    $("#nextMinutes").html( Minutes.join('') );
    
    var Seconds = disjoin( zeroFill( String(seconds) ) ,2 );    
    $("#nextSeconds").html( Seconds.join('') );
    
    
    var sTseconds = setInterval('countSeconds()',1000);
    
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

function countSeconds(){
    
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
        minusHours();
        e = 59;    
    } else {    
        e = i-1;
    }
    
    global_Hour = e;
    
    var Hours = disjoin( zeroFill( String(e) , 2 ) );    
    $("#nextHours").html( Hours.join('') );
    
}



function zeroFill( number, width ){
  width -= number.toString().length;  if ( width > 0 ){   return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;   } return number + ""; 
}

function explode (delimiter, string, limit) {
    var emptyArray = { 0: '' }; if (arguments.length < 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined') { return null;  }  if (delimiter === '' || delimiter === false || delimiter === null) { return false; }  if (typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object') { return emptyArray; }   if (delimiter === true) { delimiter = '1'; }  if (!limit) { return string.toString().split(delimiter.toString()); } else {  var splitted = string.toString().split(delimiter.toString()); var partA = splitted.splice(0, limit - 1);      var partB = splitted.join(delimiter.toString());        partA.push(partB);        return partA;    }
}

function str_replace (search, replace, subject, count) {
    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0, f = [].concat(search), r = [].concat(replace), s = subject, ra = Object.prototype.toString.call(r) === '[object Array]', sa = Object.prototype.toString.call(s) === '[object Array]';    s = [].concat(s);    if (count) {        this.window[count] = 0;    }     for (i = 0, sl = s.length; i < sl; i++) {        if (s[i] === '') {            continue;        }        for (j = 0, fl = f.length; j < fl; j++) {            temp = s[i] + '';            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];            s[i] = (temp).split(f[j]).join(repl);            if (count && s[i] !== temp) {                this.window[count] += (temp.length - s[i].length) / f[j].length;            }        }    }    return sa ? s : s[0];
}


function substr (str, start, len) {
    var i = 0,        allBMP = true,        es = 0,        el = 0,        se = 0,        ret = '';    str += '';    var end = str.length;      this.php_js = this.php_js || {};    this.php_js.ini = this.php_js.ini || {};     switch ((this.php_js.ini['unicode.semantics'] && this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {    case 'on':         for (i = 0; i < str.length; i++) {            if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {                allBMP = false;                break;            }        }         if (!allBMP) {            if (start < 0) {                for (i = end - 1, es = (start += end); i >= es; i--) {                    if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {                        start--;                        es--;                    }                }            } else {                var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;                while ((surrogatePairs.exec(str)) != null) {                    var li = surrogatePairs.lastIndex;                    if (li - 2 < start) {                        start++;                    } else {                        break;                    }                }            }             if (start >= end || start < 0) {                return false;            }            if (len < 0) {                for (i = end - 1, el = (end += len); i >= el; i--) {                    if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i - 1))) {                        end--;                        el--;                    }                }                if (start > end) {                    return false;                }                return str.slice(start, end);            } else {                se = start + len;                for (i = start; i < se; i++) {                    ret += str.charAt(i);                    if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i + 1))) {                        se++;                     }                }                return ret;            }            break;        }     case 'off':    default:        if (start < 0) {            start += end;        }        end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);         return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);    }    return undefined; 
}

function stristr (haystack, needle, bool) {
    var pos = 0;     haystack += '';    pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());    if (pos == -1) {        return false;    } else {        if (bool) {            return haystack.substr(0, pos);        } else {            return haystack.slice(pos);        }    }
}

function getUrlVars() {
	var vars = {};	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {		vars[key] = value;	});	return vars;
}