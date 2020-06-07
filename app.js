// *************************************  Assignment # 1 ***************************************

// ------------------ 1 --------------------

alert("Hey There! Welcome to my website, Good to see you here")

// ------------------ 2 --------------------

alert("Error! Please enter a valid password.")

// ------------------ 3 --------------------

alert("Welcome to JS land... \r\n  Happy Coding!")

// ------------------ 4 --------------------
alert("Welcome to JS land..")
alert("Happy Coding \r\n Prevent this page from creating additional dialogs.")


// ------------------ 5 --------------------
alert("Hello...I can run JS through my web browser's console.")

// ------------------ 6 --------------------
alert("Hey ! Welcome to my website.")




// ************************************* Assignment # 2  *************************************



// ------------------ 1 --------------------

var username;

// ------------------ 2--------------------

var myName = "AASIA FAYYAZ";

// ------------------ 3 --------------------
var message = "Hello World"
alert(message)


// ------------------ 4 --------------------
var name = "Jhone Doe"
var Age = "15 years old"
var certification = "Certified Mobile Application Development"
alert(name)
alert(Age)
alert(certification)


// ------------------ 5 --------------------
var food = "PIZZA"
alert(food + "\r\n" + food.slice(0,4) + "\r\n"+ food.slice(0,3)+"\r\n"+ food.slice(0,2)+"\r\n"+ food.slice(0,1))


// ------------------ 6 --------------------
var email = "aasiafayyz89@gmail.com"
alert("My email address is " + email)



// ------------------ 7 --------------------
var book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the book " + book)

// ------------------ 8 --------------------
document.write("Yah! i can write HTML content through Javascript.")

// ------------------ 9 --------------------

var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(design)
document.write(design)


// ************************************* Assignment # 3  *************************************


// ------------------ 1 --------------------
var age= 22
alert("I am " + age + " years old")

// ------------------ 2 --------------------
var track = 17
alert("You have visited this site "+ track +" times")


// ------------------ 3 --------------------
var birthYear=1998
document.write("My birth year is "+ birthYear +"<br>" )
document.write("Data type of my declared variable is Number")


// ------------------ 4 --------------------
var V_name = "<b> John Doe </b>"
var title = "<b> T-shirt </b>"
var quantity= "<b> 5 </b>"
document.write(V_name+" ordered "+ quantity + title +" (s) on XYZ Clothing Store.")


// ************************************* Assignment # 4  *************************************

// ------------------ 1 --------------------
var name, age, gender


// ------------------ 2 --------------------
// legal

var _name,firstName,__age__,$Gender,last_name

// illegal
var 1name, &age, .write, @qualification, -address

// ------------------ 3 --------------------
document.write("<b> Rules for naming JS varaibles </b> <br> <br> <br>")
document.write("Variable names can only contain, numbers, $ and _ . For example: $my_1stvariable <br>")
document.write("Variable must begin with a letter, $ or _. For xample: $name, _name or name <br>")
document.write("Variable names are case sensitive <br> Variable names should not be JS keywords")



// ************************************* Assignment # 5  *************************************


// ------------------ 1 --------------------

var firstNum = +prompt("Enter first value---->>")
var secondNum = +prompt("Enter second value---->>")
var addResult = firstNum + secondNum
document.write("Sum of  " +firstNum + " and  " +secondNum+ " is "+ addResult)


// ------------------ 2 --------------------
var firstNum = +prompt("Enter first value---->>")
var secondNum = +prompt("Enter second value---->>")
var subResult = firstNum - secondNum
document.write("Subtraction of  " +firstNum + " and  " +secondNum+ " is "+ subResult+"<br>")
var mulResult = firstNum * secondNum
document.write("Multiplication of  " +firstNum + " and  " +secondNum+ " is "+ mulResult+"<br>")
var divResult = firstNum / secondNum
document.write("Division of  " +firstNum + " and  " +secondNum+ " is "+ divResult+"<br>")

// ------------------ 3 --------------------
var value ="??";
document.write("Value after variable declaration is: "+ value+" <br>")
value=5;
document.write("Initial value:"+ value+" <br>")
++value
document.write("Value after increment is:"+ value+" <br>")
value = value+7
document.write("Value after addition is:"+ value+" <br>")
--value
document.write("Value after decrement is:"+ value+" <br>")
value= value%3
document.write("Output : The remainder is "+ value+" <br>")



// ------------------ 4 --------------------
var ticketPrice = 600
var totalCost =5 * ticketPrice
document.write("Total cost to buy 5 tickets to a movie is "+totalCost+"PKR")

// ------------------ 5 --------------------
document.write("Table of 6 <br>")
for ( var i=1; i<11; i++ ){
    document.write("6 x "+i+" = "+ 6*i+"<br>")
}

// ------------------ 6 --------------------
var celcius= 25
var farCon = (celcius*9/5) +32
document.write(celcius+"oC"+" is "+ farCon+"oF"+"<br>")
var far=70
var celCon =(far-32) * 5/9
document.write(far+"oF"+" is "+ celCon+"oC")


// ------------------ 7 --------------------
var head="<b> Shopping Cart </b> <br><br>"

document.write(head.fontsize(7))
var P1 = 650
var Q1= 3
var P2=100
var Q2=7
var shipping=100
document.write("Price of item 1 is "+P1+"<br>"+ "Quantity of item 1 is "+Q1+"<br>")
document.write("Price of item 2 is "+P2+"<br>"+ "Quantity of item 2 is "+Q2+"<br>")
document.write("Shipping Charges "+shipping +"<br> <br>")
document.write("Total cost of your order is "+ (P1*Q1 + P2*Q2 +100))



// ------------------ 8 --------------------

var head="<b> Marks Sheet </b> <br><br>"
document.write(head.fontsize(7))
var totalMark=980
var obtMark=804
var result= (obtMark*100)/totalMark
document.write("Total Marks: "+ totalMark+"<br>"+"Obtained Marks: "+obtMark+"<br>"+"Percentage: "+result+"%")



// ------------------ 9 --------------------
var head="<b> Currency in PKR </b> <br><br>"
document.write(head.fontsize(7))
document.write("Total Currency in PKR : "+(104.80*10 + 28*25))


// ------------------10 --------------------
var num = 9
document.write(((num+5)*10)/2)

// ------------------11 --------------------

var head="<b> Age Calculator </b> <br><br>"
document.write(head.fontsize(7))
var current=2016
var birth=1992
document.write("Current year: "+current+"<br>"+"Birth year: "+birth+"<br>"+"Your age is : "+(current-birth))


// ------------------12 --------------------
var head="<b> The Geometrizer </b> <br><br>"
document.write(head.fontsize(7))
var radius=20
var circum= 2*3.142*radius
var area=3.142*(radius**2)
document.write("Radius of circle: "+radius+"<br>"+"The circumference is : "+circum+"<br>"+"The area is: "+area)


// ------------------13 --------------------
var head="<b> The Lifetime Supply Calculator </b> <br><br>"
document.write(head.fontsize(7))

var snack="chocolate chip"
var age=15
var maxAge=65
var perday=3
document.write("Favourite snack: "+snack+"<br>"+"Current age: "+age+"<br>"+"Estimated Maximum Age: "+maxAge+"<br>"+"Amount of snacks per day: "+perday+"<br>")
document.write("You will need "+((maxAge-age)*3)+" chocolate chip to last you until ripe old age of "+maxAge)




// ************************************* Assignment # 6  *************************************


// ------------------1 --------------------
document.write("Result:<br>")
var a =10
document.write("The value of a is: "+a +"<br>"+".............................................<br><br>")
var b=++a
document.write("The value of ++a is: "+b+"<br>"+"Now the value of a is: "+a+"<br><br><br>")
var c=a++
document.write("The value of a++ is: "+c+"<br>"+"Now the value of a is: "+a+"<br><br><br>")
var d=--a
document.write("The value of --a is: "+d+"<br>"+"Now the value of a is: "+a+"<br><br><br>")
var e=a--
document.write("The value of a-- is: "+e+"<br>"+"Now the value of a is: "+a+"<br><br><br>")



// ------------------2--------------------

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

--a;                    //1
--a - --b;               //1-0=1
--a - --b + ++b;           // 1-0+1=2 
--a - --b + ++b + b--;      //1-0+1+1=3

document.write("a is: "+a+"<br>"+"b is : "+b+"<br>"+"result is: "+result)

// ------------------3 --------------------

var name=prompt("whats your name?")
alert("Welcome here "+name)


// ------------------5 --------------------
 var num=+prompt("Enter number?")
 if (num != " "){
     for ( var i=1; i<11; i++ ){
    document.write( num+" x "+i+" = "+ num*i+"<br>")}
 }
else{
    for ( var i=1; i<11; i++ ){
        document.write("5  x "+i+" = "+ 5*i+"<br>")}
 }


// ------------------6 --------------------

var sub1=prompt("Enter name of subject")
var sub2=prompt("Enter name of subject")
var sub3=prompt("Enter name of subject")
var total=100
var ob1=+prompt("Enter marks of subject-1")
var ob2=+prompt("Enter marks of subject-2")
var ob3=+prompt("Enter marks of subject-3")

document.write("-------- <b>Subject </b>--------"+" --------  <b> Total Marks</b>  -------- "+" -------- <b>Obtained Marks </b> --------   "+"  -------- <b>   Percentage</b>-------- <br><br>")
document.write(".................. "+sub1+"..................  "+".................. "+total+"  .................................. "+ob1+" ..................................... "+ ((ob1*100)/total)+"%"+"<br>")
document.write("................ "+sub2+"..................  "+".................. "+total+"  .................................. "+ob2+" ..................................... "+ ((ob2*100)/total)+"%"+"<br>")
document.write(".............. "+sub3+"..................  "+".................. "+total+"  .................................. "+ob3+" ..................................... "+ ((ob3*100)/total)+"%"+"<br>")
document.write("--------------------------------------------   300    "+"  ----------------- "+(ob1+ob2+ob3)+" ----------------------------------------- "+(((ob1+ob2+ob3)*100)/300)+"%")



// ************************************* Assignment # 9-10  *************************************


// ------------------1 --------------------
var user=prompt("Enter city name")
if (user==="karachi"||user==="Karachi"||user==="KARACHI")
{
    alert("Welcome to city of lights")
}


// ------------------2 --------------------
var user=prompt("Enter gender")
if (user==="male")
{
    alert("Good Morning Sir")
}
else if (user==="female")
{
    alert("Good Morning Ma’am")
}



// ------------------3 --------------------
var user=prompt("Enter color")
if (user==="red")
{
    alert("Must Stop!")
}
else if (user==="yellow")
{
    alert("Ready to move")
}
else if(user==="green")
{
    alert("Move now")
}


// ------------------4--------------------
var user=prompt("Enter fuel")
if (user<0.25)
{
    alert("Please refill the fuel in your car")
}

// ------------------5--------------------
//a (alert mesg displayed)

var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

//b (alert mesg not displayed)

var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }

//c (not displayedalert mesg displayed for cond 2 and 4)

var c = 12; if (c++ === 13){ alert("condition 1 is true"); }
if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }

//d (alert displayed)

var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }


//e  (true displayed)
if (true){ alert("True"); } if (false){ alert("False"); }

//f (alert displayed)
if("car" < "cat"){ alert("car is smaller than cat"); }


// ------------------6--------------------

var head="<b> Mark Sheet </b> <br><br>"
document.write(head.fontsize(7))
var totalMarks=+prompt("enter total marks")
var obtMarks=+prompt("enter obtained marks")
var percent=((obtMarks*100)/totalMarks)
document.write("Total Marks: "+totalMarks+"<br>"+"Marks Obtained: "+obtMarks+"<br>"+"Percentage: "+percent+"%"+"<br>")
if(percent >= 80){
    document.write("Grade: A-one <br> Remarks: Excellent ")
}
else if(percent>=70){
    document.write("Grade: A <br> Remarks: Good ")
}
else if(percent>=60){
    document.write("Grade: B <br> Remarks: You need to improve ")
}
else if(percent<60){
    document.write("Grade: Fail <br> Remarks: Sorry ")
}


// ------------------7--------------------

var secretNum=7
var user=+prompt("Enter number")
if(user===secretNum){
    alert("Bingo! Correct answer")
}
else if(user===secretNum+1){
    alert("Close enough to the correct answer")
}

// -----------------8--------------------
var user=+prompt("Enter number")
if (user%3 === 0){
    alert("Given number is divisible by 3")
}


// ------------------9--------------------
var user=+prompt("Enter number")
if (user%2 === 0){
    alert("Given number is even number")
}
else{
    alert("Given number is odd number")
}


// ------------------10--------------------
var user=+prompt("EnterTemperature")
if (user>40){
    alert("It is too hot outside.")
}
else if (user>30){
    alert("The Weather today is Normal.")
}
else if (user>20){
    alert("Today’s Weather is cool.")
}
else if (user>10){
    alert("OMG! Today’s weather is so Cool.")
}

// ------------------11--------------------
var num1=+prompt("Enter first number")
var num2=+prompt("Enter second number")
var op=prompt("Enter operation to perform")

if (op==="+"){
    document.write("Sum of "+num1+" and "+num2+" is " + num1+num2)
}
else if (op==="-"){
    document.write("Subtraction of "+num1+" and "+num2+" is " + num1-num2)
}
else if (op==="*"){
    document.write("Multiplication of "+num1+" and "+num2+" is " + num1*num2)
}
else if (op==="/"){
    document.write("Division of "+num1+" and "+num2+" is " + num1/num2)
}
else if (op==="%"){
    document.write("Remainder"+ " is " + num1%num2)
}



// ************************************* Assignment # 12-13  *************************************


// ------------------1--------------------
var user=prompt("Enter character")
var n= user.charCodeAt(0)
if (n >=65 && n<=90){
    alert("This is a upper case letter")
}
else if(n >=97 && n<=122){
    alert("This is a lower case letter")
}
else{
    alert("This is a number")
}

// ------------------2--------------------

var num1=prompt("Enter first int")
var num2=prompt("Enter second int")
if (num1===num2){
    alert("The two int are equal")
}
else if(num1 >num2){
    alert("int1 is greater")
}
else if(num1<num2){
    alert("int2 is greater")
}


// ------------------3--------------------

var num1=+prompt("Enter number")
if (num1===0){
    alert("This number is zero")
}
else if(num1 >0){
    alert("Number is positive.")
}
else if(num1<0){
    alert("Number is negative.")
}


// ------------------4--------------------

var char=prompt("Enter character")
if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
    alert("True")
}
else{
    alert("false")
}

// ------------------5--------------------
var pass="webmobdev123"
var user=prompt("Enter password?")
if (user!=""){
    if(user===pass){
        alert("Correct! The password you entered matches the original password")
    }
    else if (user!=pass){
        alert("Incorrect password")
    }
}
else{
    alert("Please enter your password")
}

// ------------------6--------------------
var greeting;
 var hour = 13; 
 if (hour < 18) { 
     greeting = "Good day";}
else {greeting = "Good evening"; }


// ------------------7--------------------
var user=+prompt("Enter time","like 1200")
if (user===1900){
    if(user>=0000 && user<1200){
        alert("Good Morning!")
    }
    else{
        if (user>=1200 && user<1700){
            alert("Good Afternoon!")
        }
        else{
            if(user>=1700 && user<2100){
                alert("Good evening!")
            }
            else{
                if(user>=2100 && user<2359){
                    alert("Good Night!")
                }
            }
        }
    }
}



// ************************************* Assignment # 13-15  ************************************



// ------------------1--------------------
var arr=[]
// ------------------2--------------------
var arr=new Array()

// ------------------3--------------------
var arr= ["Ali","Ghous"]

// ------------------4--------------------
var arr= [34,78900,4,678] 

// ------------------5--------------------
var arr= ["true","false"] 

// ------------------6--------------------
var arr= new Array("Ali",78,"cat",5,"true") 

// ------------------7--------------------
var qualification=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qualifications:<br>")
for (i in qualification){
    document.write(((+i)+1)+")"+qualification[i]+"<br>")
}

// ------------------8--------------------
var stud=["Micheal","John","Tony"]
var score=[320,230,480]
for (i =0;i<3;i++){
    document.write("Score of "+stud[i]+" is "+score[i]+". Percentage: "+((score[i]*100)/500)+"% <br>")
}


// ------------------9--------------------
var arr=["Green","yellow","Blue","Red"]
//a

document.write("Array with colors: "+ arr)
var user=prompt("Do you want to add any other color in the beginning of the array?","Enter color name")
arr.unshift(user)
document.write("<br> Updated Array with colors: "+ arr)

//b

var user=prompt("Do you want to add any other color in the end of the array?","Enter color name")
arr.push(user)
document.write("<br> Updated Array with colors: "+ arr)

//c

var col1=prompt("Do you want to add any other color in the beginning of the array?","Enter color name")
var col2=prompt("Do you want to add any other color in the beginning of the array?","Enter color name")
arr.unshift(col1,col2)
document.write("<br> Updated Array with colors: "+ arr)

//d

arr.shift()
document.write("<br> Updated Array with colors: "+ arr)

//e

arr.pop()
document.write("<br> Updated Array with colors: "+ arr)

//f

var ind=prompt("At which index do you want to add color")
var color=prompt("which color")
arr. splice(ind, 0, color); 
document.write("<br> Updated Array with colors: "+ arr)

//g
var ind=prompt("From which index do you want to start deleting color")
var color=prompt("How many colors do you want to delete")
arr. splice(ind, color); 
document.write("<br> Updated Array with colors: "+ arr)

// ------------------10--------------------
var score = [320,230,480,120]
document.write("Scores of students: "+score)
var sorted =score.sort()
document.write("<br> Ordered score of students: "+sorted)

// ------------------11--------------------
 var cities=["karachi","lahore","faisalabad","Multan","quetta"]
var selectedCities = cities.slice(1,4)
document.write("Cities List: "+ cities+"<br> Selected Cities:"+selectedCities)

// ------------------12--------------------
var arr = ["This","is","my","cat"];
var string=arr.join(" ")

document.write("Array: "+arr+"<br> String: "+string)

// ------------------13--------------------

var arr=["Keyboard","mouse","printer","monitor"]
var len=arr.length
for (var i=0;i<len ;i++){
    document.write("OUT:<br> ")
    var a= arr.shift()
    document.write(a+"<br>")
}


// ------------------14--------------------
var arr=["Keyboard","mouse","printer","monitor"]
var len=arr.length
for (var i=0;i<len ;i++){
    document.write("OUT:<br> ")
    var a= arr.pop()
    document.write(a+"<br>")
}

// ------------------15--------------------
var phone=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
for (var i in phone){
    document.write(phone[i]+"<br>")
}


// ************************************* Assignment # 17-20 ***********************************

// ------------------1--------------------

var arr=[[],[],[]]
// ------------------2--------------------
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
document.write(arr[0].join("")+"<br>"+arr[1].join("")+"<br>"+arr[2].join(""))

// ------------------3--------------------
for (var i=0; i<11;i++){
    document.write(i+"<br>")
}


// ------------------4--------------------
var table=+prompt("Enter a number to show it multiplication table")
var len =+prompt("Enter length of the table")
document.write("Multiplication table of "+table+"<br>"+"Length : "+len+"<br><br>")
for (var i=1;i<len+1;i++){
    document.write( table+" x "+i+" = "+ table*i+"<br>")
}

// ------------------5--------------------
fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (var i in fruits){
    document.write(fruits[i]+"<br>")
}
for (var i in fruits){
    document.write("Element at index "+i+" is " +fruits[i]+"<br>")
}



// ------------------6--------------------
document.write("<b>Counting:</b> <br> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 <br>")
document.write("<b>Reverse counting:</b> <br> 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 <br>")

document.write("<b>Even:</b> <br> 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 <br>")

document.write("<b>Odd:</b> <br> 11, 3, 5, 7, 9, 11, 13, 15, 17, 19 <br>")

document.write("<b>Series:</b> <br> 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k <br>")


// ------------------7--------------------
var item=["cake", "apple pie","cookie", "chips", "patties"]
var user=prompt("Welcome to ABC bakery! What do you want to order Sir/Maam??")
for(var i in item){
    if(user===item[i]){
        document.write(user+" is available at index "+i+" in our bakery <br>")
        break
    }else{
        document.write("We are sorry."+user+" is <b> not available</b> in our bakrey <br>")
        break

    }
}

// ------------------8--------------------

var A = [24, 53, 78, 91, 12]
var largest = Math.max.apply(0, A);
document.write(largest+"is largest")

// ------------------9--------------------

var A = [24, 53, 78, 91, 12]
var smallest = Math.min.apply(0, A);
document.write(smallest+"is smallest")

// ------------------10--------------------

for (var i =1; i<=100;i++){
    if(i%5 === 0){
        document.write(i+",")
    }
}

