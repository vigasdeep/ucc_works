
/**
 * This function is used to show/hide parts of a page
 * The input is the id of a div element. There must be a "display-divName" which
 * display the hide/show link.
 */
function conflist(){
var conf=document.getElementById("conflist");
conf.innerHTML='<select name="maintopic" onchange="topiclist(this.value);" size="1"><option value="0">Please Select</option><option value="1">High Performance Concrete Using Admixtures</option><option value="2">Precast Concrete and Construction</option><option value="3">Low Carbon Cements and Concrete in Modern Construction</option><option value="4">Designing Reinforced Concrete for Sustainability</option><option value="5">Efficient Concrete Structures</option><option value="6">Fine, Ultrafine and Nano-based Materials in Concrete</option></select>';
document.getElementById("topiclist").innerHTML='<select name="topic"><option value="">Please select conference name above.</option></select>';
}



function topiclist(valu){
//alert(valu);
//var valu=document.form_submit.maintopic.value;
var topi=document.getElementById("topiclist");
if(valu==0)
{
topi.innerHTML='<select name="topic"><option value="">Please select conference name above.</option></select>';
}
if(valu==1){
topi.innerHTML='<select name="topic" size="1"><option value="1">Measuring Performance and Test Methods </option><option value="2">Self Compacting Concrete</option><option value="3"> Rheology/Set controllers</option><option value="4">High performance superplasticisers</option><option value="5">Early high strength concrete</option><option value="6">High and ultra high strength concrete</option><option value="7">Shrinkage Compensating Concrete</option><option value="8">Water Proofed Concrete</option><option value="9">Enhanced Permeation Properties</option><option value="10">Durability Enhancement</option><option value="11">High Performance in Multi-Aggressive Exposures</option><option value="12">Developments in Under Water Construction</option><option value="13">Foamed Concrete</option><option value="14">Decorative Concrete</option><option value="15">Other Products/Applications</option></select>';
}
if(valu==2){
topi.innerHTML='<select name="topic" size="1"><option value="16">Production Processes and Innovations</option><option value="17">Developments in Precast Construction</option><option value="18">Sustainable Design</option><option value="19">Structural Frames</option><option value="20">Architectural Cladding</option><option value="21">Normal/Light Weight Building Blocks</option><option value="22">Concrete Floor Beams/Hollow Core Slabs</option><option value="23">Concrete Pipeline Systems</option><option value="24">Foundation Systems</option><option value="25">Concrete Railway Systems</option><option value="26">Applications in Bridge Construction</option><option value="27">Concrete Tilt up Construction</option><option value="28">Concrete Tunnel Segments</option><option value="29">Codal Provisions and Design Aspects</option><option value="30">Safe Erection/Other</option></select>';
}
if(valu==3){
topi.innerHTML='<select name="topic"><option value="31">Progress in Carbon Foot Print Reduction in Concrete Construction</option><option value="32">Challenges for Developing Countries</option><option value="33">Appropriate Use of Waste Materials</option><option value="34">Engineering and Durability Performance</option><option value="35">Sulphoalumnates</option><option value="36">Magnesium Oxide/Silicate Based Cements</option><option value="37">Geopolymers</option><option value="38">Production/Process Changes</option><option value="39">Mineralised Portland Clinkers</option><option value="40">Zeolite Cements</option><option value="41">Portland Clinker/Fly Ash Cements</option><option value="42">Portland Clinker/Slag Cements</option><option value="43">Low Carbon Concrete and Construction</option><option value="44">Modeling Cement Composites for Strength and Durability</option><option value="45">Other Cements</option></select>';
}
if(valu==4){
topi.innerHTML='<select name="topic" size="1"><option value="46">Design and Analysis of Structural Sytems</option><option value="47">Reinforced Cementitious Composites</option><option value="48">Computational Structural Mechanics</option><option value="49">Structural Health Monitoring and Retrofitting</option><option value="50">Life Cycle Analysis</option><option value="51">Safety and Reliability</option><option value="52">Service Life and Sustainable Design Methods</option><option value="53">Structural Optimization</option><option value="54">Minimising Design Cost</option><option value="55">Construction and Environment Issues</option><option value="56">Reinforced Materials and Their Appropriate Use</option><option value="57">Efficient and Appropriate Use of Virgin/Recycled Materials</option><option value="58">Role of Ready Mixed Concrete</option><option value="59">Challenges for Developing Countries</option><option value="60">Others</option></select>';
}
if(valu==5){
topi.innerHTML='<select name="topic" size="1"><option value="61">High Rise Buildings</option><option value="62">Wide-Span Bridges</option><option value="63">Offshore/Onshore Tunnels</option><option value="64">Naturally Ventilated Structures</option><option value="65">Offshore Oil Applications</option><option value="66">Thermal Mass Effects</option><option value="67">Nuclear Structures</option><option value="68">Embedded Structural and Foundation Systems</option><option value="69">Active and Passive Control Systems </option><option value="70">Plate Systems</option><option value="71">Fire Resistance and Assessment </option><option value="72">Seismic Resistant Structures</option><option value="73">Aesthetics and Sustainability Issues</option><option value="74">Challenges for Developing Countries</option><option value="75">Others</option></select>';
}
if(valu==6){
topi.innerHTML='<select name="topic" size="1"><option value="76">Role of Fine/UltraFine/Nano Materials in Concrete Construction</option><option value="77">Role in Promoting Sustainable Construction</option><option value="78">Fine and Ultrafine Calcium Carbonates and Silicates</option><option value="79">Fine and Ultrafine Fly Ash and Slag Materials</option><option value="80">Metakaolin and Silica Fume Materials</option><option value="81">Nano Structural Superplasticisers</option><option value="82">Nano Silica Additions</option><option value="83">Nano Particles and Tubes</option><option value="84">Nano Materials and Cement Hydration</option><option value="85">Nano Instruments</option><option value="86">Hydration and Microstructure Changes</option><option value="87">Next Generation of Nano-Based Concrete Construction Products</option><option value="88">Challenges for Designing Concrete in Developing Countries</option><option value="89">Challenges of Reducing Carbon footprint</option><option value="90">Others</option></select>';
}
}




function toggle(divName) {
	var ele = document.getElementById(divName);
	var text = document.getElementById("display-" + divName);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "show";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "hide";
	}
}

/**
 * Adds the connected user to a list of authors
 */

function AddContactAuthor(id) {
	// Get the value of the connected user
	ca_last_name = document.getElementById("ca_last_name");
	ca_first_name = document.getElementById("ca_first_name");
	ca_affiliation = document.getElementById("ca_affiliation");
	ca_email = document.getElementById("ca_email");
	ca_country = document.getElementById("ca_country");
	// alert ("Value =" + ca_last_name.value);

	// Get the target elements
	author_first_name = document.getElementById("author_first_name_" + id);
	author_last_name = document.getElementById("author_last_name_" + id);
	author_email = document.getElementById("author_email_" + id);
	author_affiliation = document.getElementById("author_affiliation_" + id);
	author_contact = document.getElementById("author_contact_" + id);
	author_country = document.getElementById("author_country_" + id);

	if (author_first_name) {
		author_last_name.value = ca_last_name.value;
		author_first_name.value = ca_first_name.value;
		author_email.value = ca_email.value;
		author_affiliation.value = ca_affiliation.value;
		author_contact.checked = true;

		/* Scan all the option buttons of the country list */
		for ( var j = 0; j < author_country.options.length; j++) {
			el = ca_country.value;

			if (el == author_country.options[j].value) {
					author_country.options.selectedIndex = j;
			}
		}
	}
	return;
}

/**
 * Toggle the status of selected papers
 */

function TogglePaperStatus (status)
{
  form = document.forms.PaperList;

  /* Scan all the radio buttons of the form */
  for (var j=0; j < form.elements.length; j++)
  {
   el = form.elements[j];  
   if (el.type=='radio')
   {
    // alert ("Value = " + el.value + " Status = " + status);
    
    if (el.value == status) el.checked = true;
   }
 }
}

/**
 * Count the words in a form
 * 
 */
function cnt(inputId, showId){
	// alert ("Id =" + id);
	x = document.getElementById(showId);
	
	w = document.getElementById(inputId);
	
	if (w == null) {
		alert ("Cannot find" + inputId);
	    return;
    }
	var y=w.value;
	var r = 0;
	a=y.replace(/\s/g,' ');
	a=a.split(' ');
	for (z=0; z<a.length; z++) {if (a[z].length > 0) r++;}
	x.innerHTML = "(" + r + " words)";
	return r;
	} 

/**
 * Sum up the words in the abstract fields
 * 
 */

function trim (myString)
{
return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
} 

function sumWords (){
	x = document.getElementById('list_abstract_ids');
   
	var ids = x.value.split(';');
	var r = 0;
	for ( var i = 0; i < ids.length; i++) {
		textarea_id = 'abstract_' + trim(ids[i]);
		show_id = 'count_words_' + trim(ids[i]);
		// Count the number of words
		r += cnt (textarea_id, show_id);
	}

	w = document.getElementById('sum_words');
	w.innerHTML = "=>" + r + " words";
	} 

/**
 * Check that a form field does not contain more than xxx chars.
 * 
 */

function checkFormFieldSize(obj){
  var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
  if (obj.getAttribute && obj.value.length>mlength)
    obj.value=obj.value.substring(0,mlength)
}



/*

Functions to select option 

*/

function changedist(str)
{
if (str=="")
  {
  document.getElementById("dist").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById('dist').innerHTML=xmlhttp.responseText;
    }


}

xmlhttp.open("GET","dist.php?q="+str,true);
xmlhttp.send();
}

function setstate(distr)
{
	var str=document.getElementById('State');
	
	if (str.value=="")
  {
  document.getElementById("dist").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","setaccesstoken.php",true);
xmlhttp.send();

}

/* Function to display date */

function displayRai(x)
{
var y=document.getElementById(x).value;
document.getElementById(x).value=y.toUpperCase();
}

/* Function to Display User */


function showUser(str)
{
if (str=="")
  {
  document.getElementById("txtHint").innerHTML="";
  return;
  } 
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","getuser.php?q="+str,true);
xmlhttp.send();
}




/*-------------------------------------------------------------*/



// State lists


var states = new Array();

states['Canada'] = new Array('Conferennce1','British Conference2','Ontario');
states['Mexico'] = new Array('Baja California','Chihuahua','Jalisco');
states['United States'] = new Array('California','Florida','New York');




function setStates() {
  cntrySel = document.getElementById('country');
  stateList = states[cntrySel.value];
  changeSelect('state', stateList, stateList);
  setStates();
}



function changeSelect(fieldID, newOptions, newValues) {
  selectField = document.getElementById(fieldID);
  selectField.options.length = 0;
  for (i=0; i<newOptions.length; i++) {
    selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
  }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  setStates();
});
