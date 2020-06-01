let questions = {
    "question1": [{
            "ques": "Q1.What are the risks and benefits of taking part in a clinical study?",
            "Explanation": "If you are interested in participating in a specific study any potential risks will be explained to you before you give your consent to participate. You will also be able to discuss any concerns you may have with a member of our medical team."
        },
        {
            "ques": "Q2.Can my family and friends visit?",
            "Explanation": "In order to protect volunteer confidentiality we don't allow visitors during your time with us. However you are free to contact family and friends via the phone and internet."
        },
        {
            "ques": "Q3.What are my responsibilities as a participant?",
            "Explanation": "Depending on the type of study, there are certain conditions we may ask you to meet to ensure accurate study results. These could include restrictions on exercise, smoking, medications and alcohol. We’ll give you full details before you apply to take part in a study so you’ll always know what’s expected"
        },
        {
            "ques": "Q4.What is involved in participating in a clinical study?",
            "Explanation": "Our studies usually require one or more overnight stays at the research clinic, and may require multiple outpatient visits. The number of visits depends on the requirements of each study.When you stay at the research clinic, you will have multiple blood draws, physical exams and vital sign checks. Between procedures, you may have time to read, study, watch TV, play games, etc. Other recreational items such as a pool table, DVDs, board games and internet service are available. These items vary based on the individual clinic location."
        },
        {
            "ques": "Q5.Do I have to attend on set days?",
            "Explanation": "Yes. It is very important to collect information or samples at set times. In order to do this, you'll need to attend at the times and dates on the calendar given to you at screening."
        }
    ],


    "question2": [{
            "ques": "Q.1 What is a clinical study?",
            "Explanation": "Before a drug can be prescribed, it must go through a long testing and approval process, including clinical studies.  A clinical study is used to test new drugs (medications) and develop new uses for existing drugs. At our research clinics, we work with some of the world’s leading companies on studies to answer questions like:How is a drug absorbed into the body?	How does one drug react to another drug?	How is a drug affected by food?"
        },
        {
            "ques": "Q2.Do I have to stay onsite?",
            "Explanation": "That depends on the study you're taking part in. Sometimes it's just an overnight stay with a number of follow-up visits to the clinic, but other times we may need you to stay longer to monitor the results of the medical trial."
        },
        {
            "ques": "Q3.Will I be paid and how will I receive my payment?",
            "Explanation": "Yes. You’ll be paid for your time and participation during the clinical study. The payment you receive varies from study to study, depending on its length and type. Payment details will be discussed with your study team at your first visit."
        },
        {
            "ques": "Q4.Are the urban myths about clinical trials true?",
            "Explanation": "There are plenty of urban myths about what happens on a clinical research study. These are just that: myths. Your safety is our number one priority. Drug development is highly regulated with strict safety and ethical guidelines and we take those regulations very seriously."
        },
        {
            "ques": "Q5.Will I have to share a room?",
            "Explanation": "You will share a room with other same sex participants. "
        }
    ],



    "question3": [{
            "ques": "Q1.What is involved in an overnight stay? Do I have to stay in the clinic the whole time?",
            "Explanation": "Yes, you will need to stay with us at the clinic for the duration of your overnight stay(s).  In other words, you will be at the clinic from the day of check-in until the day you check-out.  The reason we keep you here is for your safety – to monitor you and also to perform events that are needed by the study, such as drawing your blood or taking your blood pressure.  We provide your meals and a comfortable room to stay in while you’re here, as well as recreational items and Wi-Fi so you can relax in between study procedures!Of course, our clinical studies are voluntary so you are free to withdraw from the study (“withdraw consent”) at any time and for any reason. You will be compensated for the portion of the study you complete as outlined in the informed consent document you receive at your screening visit."
        },
        {
            "ques": "Q2.Where can I find independent information?",
            "Explanation": "There are a number of online resources available ClinicalTrials.gov--A registry of federally and privately supported clinical trials conducted in the United States and around the world"
        },
        {
            "ques": "Q3.Who can participate in a clinical study and how often?",
            "Explanation": "The studies conducted at our clinics require that you are at least 18 years old. Medical eligibility requirements vary with each clinical study.For each clinical trial to provide the level of information needed to understand how a new medicine works, volunteers can only take part in one study at a time, usually with one month in between the end of one trial and the start of another. After that, you’re free to apply for another study.If you are on medication, your eligibility will depend on what medication you are taking and the clinical study design, which varies from study to study. If you have questions about your eligibility for a trial, please contact us"
        },
        {
            "ques": "Q4.What if I fail at the screening stage?",
            "Explanation": "There are many reasons why applicants don’t pass the screening stage. You can ask if it may be possible to reapply in the future or screen for a different study."
        },
        {
            "ques": "Q5.What if I change my mind?",
            "Explanation": "Our clinical studies are always voluntary. You are free to withdraw your consent at any time. Once you’ve already started the clinical study, our doctors may need you to come back for a visit, just to check that the drug is out of your system."
        }
    ]
};

let number = 0;
let questions_myth = document.querySelector("#questions_myth fieldset");

//appending the questions and answers
for (i = 0; i < questions.question1.length; i++) {
    number += 1;
    let qus_div = document.createElement("div");
    qus_div.setAttribute('id', `${number}`)
    qus_div.setAttribute('class', "question_div")
    let question_i = document.createElement("h2");
    question_i.setAttribute('class', `question`)
    let explanation_i = document.createElement("p");
    explanation_i.setAttribute('id', `ans${number}`)
    explanation_i.setAttribute('class', `ans`)
    question_i.innerHTML = questions.question1[i].ques;
    explanation_i.innerHTML = questions.question1[i].Explanation;
    questions_myth.appendChild(qus_div);
    qus_div.appendChild(question_i);
    qus_div.appendChild(explanation_i);
    $(`.ans`).hide();
};


let div_class = document.querySelectorAll('.question_div');
div_class.forEach(function (h2) {
    h2.onclick = function () {
        let div_id = $(this).attr('id');
        let check_ans = document.querySelector(`#ans${div_id}`);
        check_ans.classList.toggle('displayyy')
    };
    $(`.ans`).hide();
});


$(function () {
    $(window).on("scroll", function () {
        if (document.body.style.width >= 600) {
            if ($(window).scrollTop() > 800) {
                $("header").addClass("activea");
                $("header").addClass("border");
                $('.topnav a').addClass("activea");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $("header").removeClass("activea");
                $("header").removeClass("border");
                $('.topnav a').removeClass("activea");
            }
        } else if (document.body.style.width <= 600 && document.body.style.width >= 400) {
            if ($(window).scrollTop() > 400) {
                $("header").addClass("activea");
                $("header").addClass("border");
                $('.topnav a').addClass("activea");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $("header").removeClass("activea");
                $("header").removeClass("border");
                $('.topnav a').removeClass("activea");
            }
        } else {
            if ($(window).scrollTop() > 300) {
                $("header").addClass("activea");
                $("header").addClass("border");
                $('.topnav a').addClass("activea");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $("header").removeClass("activea");
                $("header").removeClass("border");
                $('.topnav a').removeClass("activea");
            }
        }
    })
});

//function for survey transparency
$("#survey1").hover(function () {
    $(this).toggleClass('scale-up').siblings().toggleClass('scale-down');
    $("#survey_overlay1").toggleClass("transparency");
});
$("#survey2").hover(function () {
    $(this).toggleClass('scale-up').siblings().toggleClass('scale-down');
    $("#survey_overlay2").toggleClass("transparency");
});
$("#survey3").hover(function () {
    $(this).toggleClass('scale-up').siblings().toggleClass('scale-down');
    $("#survey_overlay3").toggleClass("transparency");
});