<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Routine,ICE</title>
    <link rel="icon" type="image/x-icon" href="icons/favicon.png">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js "></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    
    <script src="./firstyear.js"></script>
</head>

<body>

    <section id="full-content">
        <!-- header -->

        <nav id="navbar">
            <div class="logoDetails">
                <img class="logo" src="icons/logo.png" alt="">
                <h1>University of Rajshahi</h1>
            </div>
            {/* SelectYearandTeacher */}
        </nav>
        <h2>Dept. of Information &amp; Communication Engineering</h2>
        <div class="headDown">
            <h3 style="margin-right: 20px;">Class Routine</h3>
            <img src="icons/download.png" alt="">
        </div>
        <div class="effective">
            <p>Effective from <span class="issueDate">05.05.2024</span></p>
        </div>

        <!-- header -->
        <p style="text-align: end;" class="noOfClassP">Number of classes per week, <span class="noOfClass">5</span></p>
        <!-- maincontent -->

        <div class="mainContent">
            <div id="header1 ">
                <input type="text" name="" id="day" value="Day" disabled="">
                <input type="text" name="" class="day" value="SUN" disabled="">
                <input style="margin-top: 35px;" type="text" name="" class="day" value="MON" disabled="">
                <input style="margin-top: 35px;" type="text" name="" class="day" value="TUE" disabled="">
                <input style="margin-top: 35px;" type="text" name="" class="day" value="WED" disabled="">
                <input style="margin-top: 35px;" type="text" name="" class="day" value="THU" disabled="">
            </div>
            <div id="header2">
                <input type="text" name="" id="year" value="Year" disabled="">

                <input type="text" name="" class="year" id="1stsu" value="1st Year Odd" disabled="">
                <input type="text" name="" class="year" id="2ndsu" value="2nd Year Even" disabled="">
                <input type="text" name="" class="year" id="3rdsu" value="3rd Year Even" disabled="">
                <input type="text" name="" class="year" id="4thsu" value="4th Year Even" disabled="">

                <input type="text" name="" class="year topMargin" id="1stmo" value="1st Year Odd" disabled="">
                <input type="text" name="" class="year" id="2ndmo" value="2nd Year Even" disabled="">
                <input type="text" name="" class="year" id="3rdmo" value="3rd Year Even" disabled="">
                <input type="text" name="" class="year" id="4thmo" value="4th Year Even" disabled="">

                <input type="text" name="" class="year topMargin" id="1sttu" value="1st Year Odd" disabled="">
                <input type="text" name="" class="year" id="2ndtu" value="2nd Year Even" disabled="">
                <input type="text" name="" class="year" id="3rdtu" value="3rd Year Even" disabled="">
                <input type="text" name="" class="year" id="4thtu" value="4th Year Even" disabled="">

                <input type="text" name="" class="year topMargin" id="1stwe" value="1st Year Odd" disabled="">
                <input type="text" name="" class="year" id="2ndwe" value="2nd Year Even" disabled="">
                <input type="text" name="" class="year" id="3rdwe" value="3rd Year Even" disabled="">
                <input type="text" name="" class="year" id="4thwe" value="4th Year Even" disabled="">

                <input type="text" name="" class="year topMargin" id="1stth" value="1st Year Odd" disabled="">
                <input type="text" name="" class="year" id="2ndth" value="2nd Year Even" disabled="">
                <input type="text" name="" class="year" id="3rdth" value="3rd Year Even" disabled="">
                <input type="text" name="" class="year" id="4thth" value="4th Year Even" disabled="">
            </div>
            <div id="header3">
                <input type="text" name="" id="time1" value="9:05 AM - 10:00 AM" disabled="">
                <select id="selectCourse">
                    
                </select>
                <select id="selectCourse">
                   
                </select>
                <select id="selectCourse">
                  
                </select>
               <FourthYear />

                <select id="selectCourse">
                   
                </select>
                <select id="selectCourse">
                    
                </select>
                <select id="selectCourse">
                    
                </select>

                <select id="selectCourse">
                    
                </select>
                <select id="selectCourse">
                    
                </select>
                <select id="selectCourse">
                   
                </select>
                <select id="selectCourse">
                   
                </select>

                <select id="selectCourse">
                   
                </select>
                <select id="selectCourse">
                    
                </select>

                <select id="selectCourse">
                   
                </select>

                <select id="selectCourse">
                    
                </select>

                <select id="selectCourse">
                    
                </select>
                <select id="selectCourse">
                   
                </select>
            </div>
            <div id="header4">
                <input type="text" name="" id="time2" value="10:05 AM - 11:00 AM" disabled="">

                
            </div>
            <div id="header5">
                <input type="text" name="" id="time3" value="11:05 AM - 12:00 PM" disabled="">

            </div>

            <div class="break">
                <div class="up1">
                    <p style="margin-top: 220px;">BREAK</p>
                    <p style="margin-top: 200px;">PRAYER</p>
                    <p style="margin-bottom: 170px; margin-top: 70px;">&amp;</p>
                    <p>LUNCH</p>
                </div>
            </div>

            <div id="header6">
                <input type="text" name="" id="time4" value="1:05 PM - 2:00 PM" disabled="">
    
            </div>
            <div id="header7">
                <input type="text" name="" id="time5" value="1:05 PM - 4:00 PM" disabled="">



                <input type="text" name="" class="time5 allInput topMargin programming" value=""
                    placeholder="Assigned for Programming Club">
            </div>
        </div>
        <div class="updateDiv">
            <button class="updateButton">Update Routine</button>
        </div>

        <!-- maincontent -->

        <!-- footer -->

        <div class="footerTop">
            <div class="mid">
                <div>
                    <h4>Teacher's Name : </h4>
                </div>

                <div>
                    <p>RY : Dr. Rubaiyat Yasmin</p>
                    <p>DD : Dr. Dipankar Das</p>
                    <p>AMAR : Dr. A. M. Abdur Rahman</p>
                    <p>EH : Dr. Md. Emdadul Haque</p>
                </div>
                <div>
                    <p>RH : Dr. Mirza. A.F.M. Rashidul Hasan</p>
                    <p>FA-1 : Dr. Firoz Ahmed</p>
                    <p>HH : Dr. Halida Homyara</p>
                    <p>HK : Dr. Md. Hasnat Kabir</p>
                </div>
                <div>
                    <p>SR : Muhammad Sajjadur Rahim</p>
                    <p>MRH : Md. Reaz Hossain</p>
                    <p>RUM : Dr. Riaz Uddin Mondal</p>
                    <p>LN : Laila Naznin</p>
                </div>
                <div>
                    <p>GR : Dr. Md. Golam Rashed</p>
                    <p>MH : Dr. Mousumi Haque</p>
                    <p>MI : Dr. Matiqul Islam</p>
                    <p>AI : Dr. Md Ashraful Islam</p>
                </div>
                <div>
                    <p>FA-2 : Md. Firoz Ahmed - 2</p>
                    <p>MZA : Md Zulfikar Ali</p>
                    <p>NF : Natasha Afrin</p>
                    <p>MA : Dr. M. Asaduzzaman</p>
                </div>

            </div>
            <div class="chairman">
                <h4>(Mirza. A.F.M. Rashidul Hasan,<i>Ph.D &amp; D.Engg</i>)</h4>
                <p>Chairman</p>
                <p>Dept. of ICE, University of Rajshahi</p>

            </div>
        </div>

        <hr>

        <div class="footerBottom">
            <p>© 2023 Class Routine. All rights reserved by ICE-18.</p>
            <div class="footerRight">
                <img style="margin-right: 20px;" src="icons/linkedin.png" alt="">
                <img style="margin-right: 20px;" src="icons/fb.png" alt="">
                <img src="icons/link-ice.png" alt="">
                <a href="https://www.ru.ac.bd/ice/">https://www.ru.ac.bd/ice/</a>
            </div>
        </div>

        <!-- footer -->

        <script src="script.js"></script>

    </section>
</body>

</html>