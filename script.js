
const edt_question=document.getElementById("edt_question");
const edt_output=document.getElementById("edt_output");
const edt_option1=document.getElementById("edt_option1");
const edt_option2=document.getElementById("edt_option2");
const edt_option3=document.getElementById("edt_option3");
const edt_option4=document.getElementById("edt_option4");
const edt_title=document.getElementById("edt_title");
const edt_correct=document.getElementById("edt_correct");
const edt_final_output=document.getElementById("edt_final_output");





function copyit()
        {

            var title=edt_title.value.trim().replace(/"/g, '\\"');
            var output=edt_output.value;

            var err="";
            if(!title.length>0)err+="Please enter title\n";
            if(!output.length>0)err+="Data is empty";
            if(err.length>0)
            {
                alert(err);
            }
            else
            {

                var final_data="";
                final_data+='{"QUIZ_TITLE":"'+title+'","QUESTIONS_ARRAY":['+output+']}';

                edt_final_output.value=final_data;


            }


        }




    
function addQ()
{
        var question=edt_question.value.trim().replace(/"/g, '\\"');
        var option1=edt_option1.value.trim().replace(/"/g, '\\"');
        var option2=edt_option2.value.trim().replace(/"/g, '\\"');
        var option3=edt_option3.value.trim().replace(/"/g, '\\"');
        var option4=edt_option4.value.trim().replace(/"/g, '\\"');
        var correctans=edt_correct.value.trim();


        var errMSG="";
        if(!question.length>0)errMSG+="Enter valid question\n";
        if(!option1.length>0)errMSG+="Enter valid option 1\n";
        if(!option2.length>0)errMSG+="Enter valid option 2\n";
        if(!option3.length>0)errMSG+="Enter valid option 3\n";
        if(!option4.length>0)errMSG+="Enter valid option 4\n";
        if(correctans==1||correctans==2||correctans==3||correctans==4)
        {
            errMSG+="";
        }
        else
        {
            errMSG+="Enter valid correct answer";
        }


        if(errMSG.length>0)
        {
            alert(errMSG);
        }
        else
        {
            
            var jq='"q":"'+question;
            var jq='"q":"'+question;
            var j1='","1":"'+option1;
            var j2='","2":"'+option2;
            var j3='","3":"'+option3;
            var j4='","4":"'+option4;
            var ja='","a":'+correctans;
            var ju=',"u":'+0;


            var jd=',{'+jq+j1+j2+j3+j4+ja+ju+'}';


            if(edt_output.value=="")
            {
                var jd='{'+jq+j1+j2+j3+j4+ja+ju+'}';
            }

           
        
            edt_output.append(jd);


            localStorage.setItem("data",edt_output.value);

            

            edt_question.value="";
            edt_option1.value="";
            edt_option2.value="";
            edt_option3.value="";
            edt_option4.value="";
            edt_correct.value="";




        }
}

/*
function delD()
{
    localStorage.setItem("data","")
}

*/

   









