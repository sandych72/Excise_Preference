function generatepref(){
var i,j;
var a=[
{ name : 'ANKIT SINGH PARIHAR', cat : 9, pref : [ 'G','B','P','K','D','L','H','J','A','I','N','F','E','C','O' ] },
{ name : 'BHUPENDER DABAS', cat : 9, pref : [ 'G','D','P','H','B','L','A','C','F','E','J','N','O','I','K' ] },
{ name : 'SHAKTI SINGH SHEORAN', cat : 9, pref : [ 'G','D','P','L','K','B','H','A','I','E','C','F','N','J','O' ] },
{ name : 'ASHISH SHARMA', cat : 6, pref : [ 'G','D','K','P','L','H','J','B','F','E','A','I','C','N','O' ] },
{ name : 'SAARTHAK DAHIYA', cat : 9, pref : [ 'G','P','L','D','H','A','B','E','I','J','F','C','O','N','K' ] },
{ name : 'ANKUSH', cat : 9, pref : [ 'G','D','','','','','','','','','','','','','' ] },
{ name : 'AMIT PATHAK', cat : 9, pref : [ 'G','P','K','D','L','B','A','I','J','C','N','H','F','E','O' ] },
{ name : 'KAPIL KUMAR', cat : 9, pref : [ 'G','K','D','P','L','N','A','B','C','E','F','H','I','J','O' ] },
{ name : 'SAGAR DAS', cat : 6, pref : [ 'N','J','K','G','D','B','C','L','H','O','P','A','E','F','I' ] },
{ name : 'VIVEK LATHWAL', cat : 9, pref : [ 'G','D','P','H','L','K','B','C','E','F','I','J','N','O','A' ] },
{ name : 'HARSHA JINDAL', cat : 9, pref : [ 'D','G','M','K','L','P','B','H','N','A','C','F','J','E','I' ] },
{ name : 'TARUN PAL', cat : 9, pref : [ 'K','G','D','H','L','B','P','A','I','N','C','E','J','F','O' ] },
{ name : 'ABHISHEK ANAND', cat : 9, pref : [ 'G','J','P','N','L','A','B','C','D','E','F','H','I','K','O' ] },
{ name : 'AKSHAY KUMAR CHAUDHARY', cat : 9, pref : [ 'G','D','A','P','H','K','L','B','N','I','F','E','J','O','C' ] },
{ name : 'GAUTAM RANA', cat : 9, pref : [ 'D','G','P','K','H','B','A','L','I','E','F','N','J','C','O' ] },
{ name : 'JACKY AGRAWAL', cat : 9, pref : [ 'B','P','G','L','H','D','J','K','A','C','N','O','F','E','I' ] },
{ name : 'GYANENDRA PANDEY', cat : 9, pref : [ 'K','G','B','D','N','L','P','J','I','A','E','C','H','F','O' ] },
{ name : 'ASHISH', cat : 9, pref : [ 'G','P','D','B','L','A','K','H','I','J','E','N','F','C','O' ] },
{ name : 'MANISH KUMAR', cat : 9, pref : [ 'G','P','D','L','K','B','M','A','H','E','F','N','C','J','O' ] },
{ name : 'ADITYA SHARMA', cat : 9, pref : [ 'G','B','K','D','P','A','I','J','E','C','H','L','F','N','O' ] },
{ name : 'RAHUL TRIPATHI', cat : 9, pref : [ 'K','G','P','B','L','H','A','D','I','E','J','C','N','F','O' ] },
{ name : 'PANKAJ SINGH NATHAWAT', cat : 9, pref : [ 'P','G','D','B','K','L','A','I','H','J','N','E','C','F','O' ] },
{ name : 'VIVEK KUMAR SINGH', cat : 9, pref : [ 'G','K','B','D','P','J','N','L','A','I','H','E','C','F','O' ] },
{ name : 'GAURAV PANDEY', cat : 9, pref : [ 'K','G','B','D','P','H','J','A','L','M','F','I','N','C','O' ] },
{ name : 'YADAGIRI REDDY M', cat : 9, pref : [ 'I','A','E','H','L','F','G','D','B','J','P','K','C','N','O' ] },
{ name : 'NISHIKANT GAUTAM', cat : 9, pref : [ 'N','G','J','K','L','P','B','C','D','M','H','A','E','F','I' ] },
{ name : 'SAIKAT SAHA', cat : 9, pref : [ 'J','C','P','O','N','I','F','D','A','H','L','B','K','G','E' ] },
{ name : 'ROHIT KUMAR', cat : 9, pref : [ 'G','K','D','P','B','H','L','J','A','C','E','F','I','N','O' ] },
{ name : 'RAHUL KUMAR', cat : 6, pref : [ 'G','D','P','B','H','A','E','L','J','C','F','I','K','N','O' ] },
{ name : 'DEVINDER', cat : 9, pref : [ 'G','D','P','H','I','L','B','A','K','E','J','N','F','C','O' ] },
{ name : 'AARTI GUPTA', cat : 6, pref : [ 'N','B','J','G','C','K','P','L','D','I','A','E','F','H','O' ] },
{ name : 'ANKIT KUMAR GUPTA', cat : 9, pref : [ 'G','D','K','P','L','H','A','I','B','J','C','E','F','N','O' ] },
{ name : 'ABHISHEK DERASHRI', cat : 9, pref : [ 'P','B','L','A','D','F','G','H','I','J','K','C','E','N','O' ] },
{ name : 'POOJA SHARMA', cat : 9, pref : [ 'G','P','D','B','K','A','L','H','C','J','N','I','E','F','O' ] },
{ name : 'ATANU SINHA ROY', cat : 9, pref : [ 'J','C','N','P','K','A','B','D','E','F','G','H','I','L','O' ] },
{ name : 'ABHISHEK SINGH', cat : 9, pref : [ 'G','K','P','D','L','B','A','H','J','I','F','E','C','N','O' ] },
{ name : 'MOHIT GOYAL', cat : 9, pref : [ 'P','G','D','B','M','L','K','H','A','E','F','I','J','N','O' ] },
{ name : 'DINESH DHULL', cat : 9, pref : [ 'G','D','P','K','L','B','A','H','F','I','E','J','N','C','O' ] },
{ name : 'MITESHWAR PANDEY', cat : 9, pref : [ 'G','K','D','P','L','B','A','C','J','N','I','E','H','F','O' ] },
{ name : 'SANDEEP', cat : 9, pref : [ 'G','D','K','P','L','J','N','H','A','B','C','E','F','I','O' ] },
{ name : 'ASHU GOYAL', cat : 9, pref : [ 'G','P','D','K','B','L','M','A','','','','','','','' ] },
{ name : 'ARPIT MALIK', cat : 9, pref : [ 'G','D','K','P','J','A','H','O','B','C','E','F','I','L','N' ] },
{ name : 'GADE ANUDEEP NAIDU', cat : 9, pref : [ 'I','A','E','F','B','L','C','H','P','N','G','J','K','D','O' ] },
{ name : 'MANEPALLI AVINASH', cat : 9, pref : [ 'I','E','A','F','H','L','G','J','P','D','O','N','K','C','B' ] },
{ name : 'VIKRANT JAIN', cat : 9, pref : [ 'D','G','P','K','L','I','H','M','B','E','C','F','J','N','O' ] },
{ name : 'MANISH KUMAR JHA', cat : 9, pref : [ 'G','N','J','P','B','K','C','D','A','H','L','I','F','E','O' ] },
{ name : 'JAPMANDEEP SINGH', cat : 9, pref : [ 'G','D','P','L','M','B','K','I','A','H','N','C','F','J','O' ] },
{ name : 'SAGAR MISHRA', cat : 9, pref : [ 'G','D','K','P','B','L','A','J','I','H','N','C','O','E','F' ] },
{ name : 'BHAVANI V', cat : 9, pref : [ 'E','I','A','F','B','C','D','G','H','J','K','L','N','O','P' ] },
{ name : 'SUMEET DHAKA', cat : 9, pref : [ 'G','D','P','L','T','B','K','A','M','E','H','I','J','O','N' ] },
{ name : 'GAURANG', cat : 9, pref : [ 'G','P','K','N','L','J','H','D','B','C','A','O','I','E','F' ] },
{ name : 'SUNIL', cat : 9, pref : [ 'G','D','P','B','K','A','H','L','I','C','F','J','O','N','E' ] },
{ name : 'SHASHANK BISHNOI', cat : 9, pref : [ 'G','D','L','P','B','H','F','A','C','E','I','J','K','N','O' ] },
{ name : 'KAPIL VIJAYVARGIYA', cat : 9, pref : [ 'G','P','B','D','L','K','H','N','A','C','J','I','O','F','E' ] },
{ name : 'GURLEEN KAUR', cat : 9, pref : [ 'D','G','B','L','A','P','K','H','C','I','E','F','J','N','O' ] },
{ name : 'MANJEET', cat : 9, pref : [ 'G','D','P','K','B','H','A','E','J','L','C','O','N','I','F' ] },
{ name : 'DEBANJANA MUKHERJEE', cat : 9, pref : [ 'J','C','D','B','F','E','L','G','K','A','I','O','H','N','P' ] },
{ name : 'SHAILESH KADIAN', cat : 9, pref : [ 'D','G','P','L','B','K','H','A','F','I','O','J','C','N','E' ] },
{ name : 'KAPOOR SINGH', cat : 9, pref : [ 'K','B','N','O','H','L','C','E','J','F','I','P','D','A','G' ] },
{ name : 'MANISHA', cat : 9, pref : [ 'G','D','P','B','L','H','I','A','J','K','N','C','F','E','O' ] },
{ name : 'ANKUSH KUMAR', cat : 9, pref : [ 'D','G','P','L','M','A','H','I','B','C','K','J','E','F','N' ] },
{ name : 'PANKAJ BANSAL', cat : 9, pref : [ 'D','G','L','H','P','A','K','I','O','J','B','N','C','E','F' ] },
{ name : 'M SHYAM SUNDER REDDY', cat : 9, pref : [ 'I','A','L','E','G','H','B','P','D','J','K','N','O','F','C' ] },
{ name : 'GIRRAJ PRASAD SHARMA', cat : 9, pref : [ 'G','P','D','B','L','K','A','I','J','F','C','H','E','N','O' ] },
{ name : 'POGABUDDI FARHANA BEGUM', cat : 9, pref : [ 'I','A','E','F','C','B','H','K','D','G','J','L','P','O','N' ] },
{ name : 'SHIVAM BAJPAI', cat : 9, pref : [ 'K','G','P','B','L','J','H','N','A','I','C','E','D','F','O' ] },
{ name : 'SHARWAN KUMAR', cat : 6, pref : [ 'G','D','P','B','K','L','M','I','N','A','C','E','H','J','O' ] },
{ name : 'ASHISH AHLAWAT', cat : 9, pref : [ 'G','D','P','K','H','B','L','E','A','J','I','O','F','C','N' ] },
{ name : 'MANOJ', cat : 9, pref : [ 'G','D','P','H','B','K','L','A','E','J','I','C','N','F','O' ] },
{ name : 'ABODH KUMAR ROY', cat : 9, pref : [ 'N','J','K','','','','','','','','','','','','' ] },
{ name : 'AMIT SINGH', cat : 9, pref : [ 'G','P','D','H','K','L','B','A','J','I','E','C','N','F','O' ] },
{ name : 'AMIT KUMAR SHARMA', cat : 9, pref : [ 'G','K','B','N','D','P','L','H','I','A','C','J','E','F','O' ] },
{ name : 'RUPESH RANJAN', cat : 9, pref : [ 'G','P','','','','','','','','','','','','','' ] },
{ name : 'RAJVIR SINGH', cat : 6, pref : [ 'G','P','D','L','B','A','H','J','C','E','F','I','K','N','O' ] },
{ name : 'NEMANI ESWAR', cat : 9, pref : [ 'I','A','E','C','H','F','B','L','G','P','J','N','K','D','O' ] },
{ name : 'YOGENDRA SINGH', cat : 9, pref : [ 'K','G','B','M','L','D','P','N','H','A','C','E','I','J','E' ] },
{ name : 'AMIT SHARMA', cat : 9, pref : [ 'G','P','L','H','A','I','K','B','F','E','C','D','J','N','O' ] },
{ name : 'TARA CHAND JANGID', cat : 9, pref : [ 'G','P','D','L','H','B','A','I','K','N','J','C','E','F','O' ] },
{ name : 'ANIRUDH MARWAH', cat : 9, pref : [ 'D','G','P','L','A','I','J','E','H','K','B','O','C','F','N' ] },
{ name : 'NISHA', cat : 9, pref : [ 'G','P','B','A','J','L','H','D','K','E','F','N','C','I','O' ] },
{ name : 'JASPREET SINGH MALHAN', cat : 9, pref : [ 'G','D','P','L','H','K','B','A','J','I','N','C','E','F','O' ] },
{ name : 'ANOOP KUMAR VERMA', cat : 6, pref : [ 'K','G','D','J','O','B','P','A','I','N','L','H','C','E','F' ] },
{ name : 'ANKIT BANSAL', cat : 9, pref : [ 'G','D','P','L','K','B','J','H','A','F','I','N','C','E','O' ] },
{ name : 'RAMAN KUMAR', cat : 9, pref : [ 'G','K','P','D','B','L','H','J','N','A','I','C','E','F','O' ] },
{ name : 'MRIDUL KAKRAN', cat : 9, pref : [ 'G','D','P','K','H','L','A','J','B','I','F','E','C','O','N' ] },
{ name : 'PANKAJ CHHIKARA', cat : 9, pref : [ 'G','D','P','L','K','H','M','B','A','I','C','N','J','O','E' ] },
{ name : 'GOURAV SALUJA', cat : 9, pref : [ 'D','G','P','H','A','L','K','B','I','J','E','F','C','N','O' ] },
{ name : 'VINAY PRATAP VISHWAKARMA', cat : 6, pref : [ 'G','K','B','P','D','L','J','N','H','I','A','C','E','F','O' ] },
{ name : 'RUPENDER MANDHAN', cat : 9, pref : [ 'G','K','P','D','B','L','H','A','C','F','E','I','J','N','O' ] },
{ name : 'PARMOD KUMAR', cat : 9, pref : [ 'G','D','P','B','K','L','H','A','I','E','F','O','J','C','N' ] },
{ name : 'MANISH DALAL', cat : 9, pref : [ 'G','D','P','K','B','L','A','H','N','O','F','E','C','I','J' ] },
{ name : 'KULDEEP UPADHYAY', cat : 9, pref : [ 'P','G','L','K','B','A','I','H','F','E','C','D','N','J','O' ] },
{ name : 'GAURAV JANGRA', cat : 6, pref : [ 'G','D','P','B','L','M','K','H','A','F','I','N','C','O','J' ] },
{ name : 'VIKAS GUPTA', cat : 9, pref : [ 'G','K','P','L','B','H','A','D','J','I','C','N','F','E','O' ] },
{ name : 'SHALABH BINDAL', cat : 9, pref : [ 'K','G','D','B','P','A','C','E','F','H','I','J','L','N','O' ] },
{ name : 'ABHISHEK MALIK', cat : 9, pref : [ 'P','K','G','D','L','H','A','I','B','F','C','O','J','N','E' ] },
{ name : 'RAJESH KUMAR', cat : 9, pref : [ 'G','D','P','K','B','H','L','A','M','E','F','N','J','I','O' ] },
{ name : 'GAUTAM MITTAL', cat : 9, pref : [ 'G','D','P','B','K','L','A','I','H','J','N','C','E','F','O' ] },
{ name : 'PRAJNESH PRASUN', cat : 9, pref : [ 'N','G','J','P','B','H','I','A','F','E','L','K','C','D','O' ] },
{ name : 'AMIT KUMAR', cat : 9, pref : [ 'G','P','D','B','K','H','I','L','J','A','E','F','O','N','C' ] },
{ name : 'AJAY RANI', cat : 9, pref : [ 'G','P','L','D','H','A','B','K','I','N','J','F','E','C','O' ] },
{ name : 'ABIRAL PANDEY', cat : 9, pref : [ 'B','G','P','K','L','D','A','C','H','I','J','N','E','F','O' ] },
{ name : 'DEEPAK JAIN', cat : 9, pref : [ 'G','P','D','B','K','H','L','I','C','F','E','A','J','O','N' ] },
{ name : 'SANDEEP KUMAR', cat : 9, pref : [ 'D','G','P','H','L','A','B','K','O','C','E','F','I','J','N' ] },
{ name : 'RAI SINGH KASANA', cat : 6, pref : [ 'P','G','D','L','H','B','K','A','J','I','N','F','E','C','O' ] },
{ name : 'GAURAV SHARMA', cat : 9, pref : [ 'P','G','L','B','I','A','H','F','K','E','C','D','N','J','O' ] },
{ name : 'ANIMESH SINGH', cat : 6, pref : [ 'B','P','D','K','N','G','H','L','F','E','I','A','C','J','O' ] },
{ name : 'SAUMYAJIT MUKHERJEE', cat : 9, pref : [ 'J','C','N','B','G','L','I','A','E','O','H','K','P','D','F' ] },
{ name : 'KRISHNA KUMAR', cat : 6, pref : [ 'N','K','B','G','D','J','L','H','P','A','I','E','C','O','F' ] },
{ name : 'VINAY KUMAR', cat : 9, pref : [ 'G','D','P','B','K','A','I','H','L','C','N','J','O','F','E' ] },
{ name : 'NARENDER KUMAR', cat : 6, pref : [ 'G','D','P','L','B','A','K','H','N','J','E','F','C','I','O' ] },
{ name : 'CHETAN MITTAL', cat : 9, pref : [ 'G','D','B','K','P','L','H','A','C','J','I','F','N','E','O' ] },
{ name : 'ANURAG SHARMA', cat : 9, pref : [ 'G','P','B','D','L','H','K','I','A','N','C','J','E','F','O' ] },
{ name : 'RAHUL RAGHUWANSHI', cat : 9, pref : [ 'D','G','A','H','O','F','P','L','I','B','E','J','C','K','N' ] },
{ name : 'DINESH KUMAR', cat : 9, pref : [ 'D','G','P','B','H','L','K','J','C','N','A','I','E','O','F' ] },
{ name : 'BHAGHAT CHANDRA R', cat : 9, pref : [ 'I','A','E','L','M','G','F','J','K','H','B','D','P','O','C' ] },
{ name : 'JAVVADI MANIKANTA', cat : 9, pref : [ 'I','A','E','H','L','G','F','C','O','D','J','K','P','B','N' ] },
{ name : 'MO KASIM', cat : 9, pref : [ 'K','B','P','G','D','N','J','I','C','H','L','F','A','E','O' ] },
{ name : 'MOHIT PANNU', cat : 9, pref : [ 'G','D','P','L','B','I','H','A','M','K','S','U','N','J','T' ] },
{ name : 'BHARAT CHANDANI', cat : 9, pref : [ 'P','B','G','D','H','I','A','J','K','','','','','','' ] },
{ name : 'ANARAJULA CHAITHRA VARSHINI', cat : 9, pref : [ 'I','A','E','L','F','J','H','C','B','P','G','K','N','D','O' ] },
{ name : 'AKSHAY RUDOLA', cat : 9, pref : [ 'K','G','D','B','P','L','H','J','I','A','N','E','F','C','O' ] },
{ name : 'DAVINDER SINGH', cat : 9, pref : [ 'D','G','P','K','B','I','A','L','H','J','F','E','C','N','O' ] },
{ name : 'AMAN GARG', cat : 9, pref : [ 'G','P','D','L','A','K','B','J','H','E','C','I','F','N','O' ] },
{ name : 'AMIT YADAV', cat : 6, pref : [ 'G','P','D','B','K','A','C','L','H','I','J','F','E','N','O' ] },
{ name : 'AMAN GARG', cat : 9, pref : [ 'G','D','P','K','L','A','H','M','E','F','B','J','I','N','O' ] },
{ name : 'VANDNA DABAS', cat : 9, pref : [ 'L','P','H','G','M','D','B','K','I','E','A','J','C','N','F' ] },
{ name : 'JASHANDEEP SINGH SIDHU', cat : 9, pref : [ 'D','G','P','L','A','B','H','I','J','E','K','N','C','F','O' ] },
{ name : 'ANIRUDDH PATHAK', cat : 9, pref : [ 'B','P','G','D','H','K','M','L','A','J','F','I','C','N','E' ] },
{ name : 'SOMENDRA SINGH', cat : 9, pref : [ 'G','K','B','P','L','H','D','N','C','I','J','A','E','F','O' ] },
{ name : 'KARANAM SREEKANTH CHOWDARY', cat : 9, pref : [ 'I','E','A','H','L','P','B','C','F','M','G','K','D','J','N' ] },
{ name : 'ABHISHEK MISRA', cat : 9, pref : [ 'J','G','L','I','P','A','E','B','D','K','N','C','H','F','O' ] },
{ name : 'NISHANT RANA', cat : 9, pref : [ 'K','P','G','D','H','L','A','C','B','E','F','I','J','M','N' ] },
{ name : 'SMRITI SHUKLA', cat : 9, pref : [ 'K','B','G','P','D','J','N','O','L','M','H','A','C','E','I' ] },
{ name : 'SRI KAVYA KALLURU', cat : 9, pref : [ 'I','E','A','L','J','F','C','B','G','P','K','N','D','O','H' ] },
{ name : 'SUMIT SUROLIA', cat : 9, pref : [ 'G','P','L','D','I','B','K','H','A','J','C','E','F','N','O' ] },
{ name : 'NIKHIL VIKRAM', cat : 9, pref : [ 'G','N','K','P','I','J','C','B','H','F','L','D','E','A','O' ] },
{ name : 'LAGGISHETTY SRINIVAS', cat : 9, pref : [ 'I','A','E','L','H','K','P','M','G','D','B','C','N','F','O' ] },
{ name : 'MUKESH KUMAR BIJARNIA', cat : 6, pref : [ 'G','D','P','B','K','L','H','E','A','N','I','J','C','F','O' ] },
{ name : 'UTTAM KUMAR', cat : 9, pref : [ 'G','D','K','P','B','H','E','A','J','L','M','F','I','N','O' ] },
{ name : 'ABHISHEK BAJPAI', cat : 9, pref : [ 'K','G','P','B','L','H','J','A','N','I','D','C','E','F','O' ] },
{ name : 'GAURAV JOSHI', cat : 9, pref : [ 'P','D','I','G','B','K','M','L','H','A','J','F','E','C','N' ] },
{ name : 'SHIVA PRASAD M', cat : 6, pref : [ 'I','A','E','F','L','C','H','B','P','D','G','N','J','K','O' ] },
{ name : 'KESHAV SINGLA', cat : 9, pref : [ 'D','G','P','L','H','B','A','K','C','I','J','N','E','F','O' ] },
{ name : 'GAURAV SHANDILYA', cat : 9, pref : [ 'N','G','K','J','B','D','I','P','C','H','A','L','F','E','O' ] },
{ name : 'ISHWAR SINGH DHARIWAL', cat : 9, pref : [ 'G','P','D','K','H','L','B','A','J','I','E','C','N','F','O' ] },
{ name : 'TANIMA SAHA', cat : 9, pref : [ 'J','C','G','A','L','B','K','O','I','H','N','P','D','E','F' ] },
{ name : 'MUDILI BRAHMANI', cat : 9, pref : [ 'I','A','E','L','F','M','B','G','H','J','K','C','D','N','P' ] },
{ name : 'SANDEEP KUMAR', cat : 9, pref : [ 'G','D','P','K','L','B','M','A','I','H','J','E','F','C','N' ] },
{ name : 'GAUTAM KUMAR', cat : 6, pref : [ 'N','J','K','L','G','I','B','H','E','D','A','F','O','P','C' ] },
{ name : 'INDRA KUMAR P', cat : 9, pref : [ 'I','A','H','G','P','E','L','F','C','O','J','B','N','D','K' ] },
{ name : 'SAYAN CHATTERJEE', cat : 9, pref : [ 'J','C','N','B','O','K','L','P','I','A','F','H','E','D','G' ] },
{ name : 'K SWETHA REDDY', cat : 9, pref : [ 'I','A','E','F','H','L','C','B','D','G','N','P','O','J','K' ] },
{ name : 'MANJEET SINGH', cat : 9, pref : [ 'G','D','P','L','B','K','A','H','N','E','C','J','I','F','O' ] },
{ name : 'ANIMESH CHATTERJEE', cat : 9, pref : [ 'J','C','N','B','O','K','L','P','I','A','F','H','E','D','G' ] },
{ name : 'A SRI HAINDAVI', cat : 9, pref : [ 'I','E','A','L','C','H','B','D','F','G','J','K','N','O','P' ] },
{ name : 'SHASHI RANJAN KUMAR', cat : 9, pref : [ 'N','J','G','B','P','L','K','H','D','I','A','F','C','E','O' ] },
{ name : 'AJAY PATWAL', cat : 9, pref : [ 'G','D','K','P','B','L','N','J','A','I','H','E','C','O','F' ] },
{ name : 'NITESH GARG', cat : 9, pref : [ 'G','D','P','A','L','H','T','B','J','K','E','F','R','U','W' ] },
{ name : 'ASHOK CHOUDHARY', cat : 6, pref : [ 'P','D','G','B','K','L','M','N','J','H','I','A','C','F','O' ] },
{ name : 'ROBIN BALHARA', cat : 9, pref : [ 'G','D','P','B','K','A','L','H','J','N','F','E','C','I','O' ] },
{ name : 'VEERESH PATHAK', cat : 9, pref : [ 'G','K','P','B','D','L','M','A','H','N','J','C','E','F','O' ] },
{ name : 'SUMAN SAURAV', cat : 9, pref : [ 'J','N','G','K','P','L','B','A','H','D','E','F','I','C','O' ] },
{ name : 'NIKHIL SHAHDEO', cat : 9, pref : [ 'N','B','C','J','L','G','D','A','H','I','K','P','E','F','O' ] },
{ name : 'PAVEEN SANGWAN', cat : 9, pref : [ 'G','D','P','B','L','K','H','A','C','F','J','N','I','E','O' ] },
{ name : 'KULDEEP SINGH', cat : 9, pref : [ 'G','D','P','K','B','H','L','A','I','J','N','F','C','O','E' ] },
{ name : 'RAJESH SOMEPALLI', cat : 9, pref : [ 'I','A','H','E','M','F','L','B','C','P','J','G','K','D','N' ] },
{ name : 'RAHUL KUMAR JHA', cat : 9, pref : [ 'J','N','C','G','D','K','O','H','L','E','P','A','B','F','I' ] },
{ name : 'MERAJ AHMED', cat : 6, pref : [ 'K','G','B','D','P','L','J','I','A','H','N','C','E','F','O' ] },
{ name : 'NISHANT KR SINGH', cat : 9, pref : [ 'K','G','D','B','J','N','H','L','P','I','A','E','C','F','O' ] },
{ name : 'RAHUL', cat : 9, pref : [ 'G','D','P','H','L','K','A','B','','','','','','','' ] },
{ name : 'AMIT KUMAR PANDAY', cat : 9, pref : [ 'G','K','P','H','F','L','B','A','J','I','N','D','E','C','O' ] },
{ name : 'SHALENDER', cat : 9, pref : [ 'G','D','K','P','A','H','L','B','I','J','E','C','F','N','O' ] },
{ name : 'RAJ KUMAR', cat : 9, pref : [ 'G','P','D','B','M','','','','','','','','','','' ] },
{ name : 'MURALIKRISHNA RADHAM', cat : 6, pref : [ 'I','E','A','F','P','B','C','G','N','L','J','D','H','K','O' ] },
{ name : 'BIRAJ KUMAR PANDEY', cat : 9, pref : [ 'N','J','C','P','L','K','A','D','I','H','B','O','F','M','G' ] },
{ name : 'GOVIND BHARDWAJ', cat : 9, pref : [ 'D','G','P','B','I','A','J','H','L','K','C','E','F','N','O' ] },
{ name : 'JANGA RAKESH REDDY', cat : 9, pref : [ 'I','A','E','F','L','P','B','D','H','C','K','N','M','G','J' ] },
{ name : 'NIKHIL', cat : 9, pref : [ 'G','D','P','K','H','B','L','A','F','C','E','I','J','N','O' ] },
{ name : 'SHREYA DAS', cat : 9, pref : [ 'J','P','C','B','I','A','N','K','L','E','G','O','H','F','D' ] },
{ name : 'ABHISHEK GUPTA', cat : 9, pref : [ 'G','P','D','L','K','B','J','F','H','N','A','I','E','C','O' ] },
{ name : 'MANISH KUMAR', cat : 6, pref : [ 'N','G','K','J','D','P','B','L','I','C','F','A','E','H','O' ] },
{ name : 'GOVIND SINGH SINSINWAR', cat : 9, pref : [ 'D','G','P','L','B','H','K','A','I','O','N','E','F','J','C' ] },
{ name : 'AMOGH SHARMA R', cat : 9, pref : [ 'A','L','E','I','F','H','J','O','G','B','C','D','P','N','K' ] },
{ name : 'SAURABH KUMAR GUPTA', cat : 9, pref : [ 'G','K','P','B','D','A','H','L','I','J','','','','','' ] },
{ name : 'PRITI MUDGAL', cat : 9, pref : [ 'G','P','D','L','B','A','H','K','I','F','N','J','C','E','O' ] },
{ name : 'ATUL KUMAR SHUKLA', cat : 9, pref : [ 'K','G','P','J','B','L','D','A','N','I','H','C','E','F','P' ] },
{ name : 'SHIVENDRA SINGH', cat : 9, pref : [ 'G','K','P','B','*','*','*','*','*','*','*','*','*','*','*' ] },
{ name : 'ABHISHEK KUMAR YADAV', cat : 6, pref : [ 'K','G','J','B','P','D','N','L','I','E','F','C','H','O','A' ] },
{ name : 'SHIVA SHARMA', cat : 9, pref : [ 'P','K','G','B','D','L','M','H','A','I','F','E','C','N','J' ] },
{ name : 'NAVEEN AGRAWAL', cat : 9, pref : [ 'G','P','D','B','K','H','I','A','E','F','L','C','J','N','O' ] },
{ name : 'RAVI MALIK', cat : 9, pref : [ 'G','P','D','L','A','H','K','B','C','E','F','I','J','N','O' ] },
{ name : 'PRERANA KHANDELWAL', cat : 9, pref : [ 'B','P','G','L','D','K','I','N','J','C','A','E','F','H','O' ] },
{ name : 'SRIKAR TADALA', cat : 9, pref : [ 'I','P','E','A','C','F','H','J','O','M','L','B','D','G','K' ] },
{ name : 'CHEERLA MANOJ KUMAR', cat : 9, pref : [ 'I','A','E','H','L','F','P','G','D','J','B','N','C','K','O' ] },
{ name : 'BINOD KUMAR', cat : 9, pref : [ 'N','J','B','C','K','G','A','P','D','L','H','F','I','E','O' ] },
{ name : 'DIPANJAN NAG', cat : 9, pref : [ 'J','C','N','P','A','B','L','D','E','F','G','H','I','K','O' ] },
{ name : 'SHIVAM CHAUDHARY', cat : 9, pref : [ 'G','K','P','D','B','L','A','H','N','J','I','C','O','F','E' ] },
{ name : 'ASHISH TYAGI', cat : 9, pref : [ 'D','G','K','P','H','L','A','B','O','E','N','F','I','J','C' ] },
{ name : 'ABHIJIT DEY', cat : 9, pref : [ 'J','C','N','P','K','G','B','A','D','H','I','L','E','F','O' ] },
{ name : 'PARTEEK', cat : 9, pref : [ 'D','G','P','K','H','B','L','A','N','I','J','C','O','E','F' ] },
{ name : 'ASHISH HAWA', cat : 9, pref : [ 'P','G','L','D','H','B','K','A','I','N','J','C','E','F','O' ] },
{ name : 'SEEMANT GUPTA', cat : 9, pref : [ 'G','D','K','P','B','I','H','L','J','A','C','O','N','F','E' ] },
{ name : 'MONIKA KHATRI', cat : 9, pref : [ 'P','D','G','B','K','L','H','J','A','E','I','C','F','N','O' ] },
{ name : 'MAHIPAL SINGH SHAKTAWAT', cat : 9, pref : [ 'P','B','G','D','H','K','A','L','O','E','J','F','C','N','I' ] },
{ name : 'PATEL HEMANG PRAKASHBHAI', cat : 9, pref : [ 'P','G','L','B','D','H','A','C','I','E','F','J','N','O','K' ] },
{ name : 'ABHISHEK SINGH', cat : 9, pref : [ 'N','K','G','J','P','B','C','A','L','H','I','O','D','F','E' ] },
{ name : 'AKASHDEEP CHAUHAN', cat : 9, pref : [ 'G','D','P','L','I','B','M','K','H','A','J','C','F','N','O' ] },
{ name : 'AMAN', cat : 9, pref : [ 'D','G','P','K','L','H','A','B','I','J','C','N','O','E','F' ] },
{ name : 'SHARIQ ZAHEER ANSARI', cat : 6, pref : [ 'G','K','D','L','B','A','I','J','N','C','P','H','E','F','O' ] },
{ name : 'MAHAJAN SHARVED VILAS', cat : 9, pref : [ 'L','P','H','A','G','D','B','K','O','I','N','J','C','E','F' ] },
{ name : 'JEETU SINGH BHADAURIYA', cat : 9, pref : [ 'K','G','P','B','J','L','N','H','I','A','D','C','E','O','F' ] },
{ name : 'DEEPAK YADAV', cat : 6, pref : [ 'G','P','B','D','L','K','A','H','I','E','J','N','C','F','O' ] },
{ name : 'HIMANSHU RAWAT', cat : 9, pref : [ 'P','B','G','D','K','L','H','N','A','E','C','I','F','J','O' ] },
{ name : 'BHUPENDRA NARAYAN AWASTHI', cat : 9, pref : [ 'G','K','L','H','I','P','D','A','N','B','E','J','C','F','O' ] },
{ name : 'GEETIKA', cat : 9, pref : [ 'D','G','P','A','L','K','H','B','I','J','E','C','F','N','O' ] },
{ name : 'KESHAV GOYAL', cat : 9, pref : [ 'D','G','P','B','L','H','K','I','A','J','O','E','F','N','C' ] },
{ name : 'SHAKHER', cat : 9, pref : [ 'G','D','H','P','L','I','A','B','K','J','C','N','E','O','F' ] },
{ name : 'BRIJESH KUMAR CHAURASIYA', cat : 6, pref : [ 'G','K','D','P','B','H','A','I','L','N','F','E','J','O','C' ] },
{ name : 'ADITYA MUKHERJEE', cat : 9, pref : [ 'J','C','N','P','O','H','G','L','K','B','A','D','I','F','E' ] },
{ name : 'MAHESH KHANDURI', cat : 9, pref : [ 'K','G','D','B','A','J','P','L','H','N','C','I','E','F','O' ] },
{ name : 'NITIN GOYAL', cat : 9, pref : [ 'P','D','G','K','B','I','L','A','H','C','F','E','J','N','O' ] },
{ name : 'JAMMI RAGHAVENDRA KALYAN', cat : 9, pref : [ 'I','A','H','L','C','B','P','F','G','D','E','K','J','N','O' ] },
{ name : 'DASHRATH SINGH KASANA', cat : 6, pref : [ 'G','P','B','D','K','L','I','A','H','C','E','J','N','O','F' ] },
{ name : 'GOBINATH Y', cat : 6, pref : [ 'E','F','A','I','H','L','B','O','D','N','G','J','P','C','K' ] },
{ name : 'SANDEEP', cat : 6, pref : [ 'G','P','D','H','B','L','K','A','I','J','C','F','N','E','O' ] },
{ name : 'VIKAS CHOUDHARY', cat : 9, pref : [ 'G','P','B','D','K','H','L','J','A','I','C','N','E','F','O' ] },
{ name : 'GAURAV CHAUHAN', cat : 9, pref : [ 'G','P','K','D','B','L','M','H','A','I','N','F','J','C','O' ] },
{ name : 'BIPLAB BHAKAT', cat : 9, pref : [ 'J','N','C','B','K','I','G','A','O','E','F','L','H','P','D' ] },
{ name : 'BABLU SINGH', cat : 9, pref : [ 'N','P','H','B','D','G','A','L','K','J','F','O','I','C','E' ] },
{ name : 'SAURABH KUMAR SHARMA', cat : 9, pref : [ 'D','G','P','K','A','I','B','L','H','N','J','E','F','C','O' ] },
{ name : 'ANURODH SHARMA', cat : 9, pref : [ 'G','P','D','B','L','K','A','J','H','I','N','C','E','F','O' ] },
{ name : 'AMIT KUMAR DEY', cat : 9, pref : [ 'N','J','C','K','G','B','D','I','A','L','H','F','E','O','P' ] },
{ name : 'NARREDDI BHANU PRAKASH REDDY', cat : 9, pref : [ 'A','I','F','H','P','E','D','L','G','B','C','O','J','N','K' ] },
{ name : 'ABHIJEET KUMAR RANJAN', cat : 6, pref : [ 'G','N','K','J','P','A','C','B','L','D','I','E','F','H','O' ] },
{ name : 'RUBBAL DINDYAL', cat : 9, pref : [ 'G','D','K','P','B','L','A','','','','','','','','' ] },
{ name : 'HARENDRA KUMAR BHALOTHIA', cat : 6, pref : [ 'G','D','P','K','B','L','H','J','A','I','F','E','C','N','O' ] },
{ name : 'DEEKSHITHA REDDY GAGIREDDY', cat : 9, pref : [ 'I','A','E','L','M','G','O','F','D','B','J','N','K','P','H' ] },
{ name : 'ASHIRBAD NAYAK', cat : 9, pref : [ 'C','I','A','E','H','L','N','G','P','J','B','D','K','F','O' ] },
{ name : 'RAHUL CHOPRA', cat : 9, pref : [ 'G','D','P','K','B','L','H','A','N','I','F','C','E','J','O' ] },
{ name : 'PRIYA  SEHRAWAT', cat : 9, pref : [ 'D','G','K','P','L','H','A','B','I','E','J','F','N','C','O' ] },
{ name : 'BISAKHA GHOSH', cat : 9, pref : [ 'J','N','C','B','G','P','H','E','L','K','D','A','I','F','O' ] },
{ name : 'SHISHIR KUKRETI', cat : 9, pref : [ 'D','G','H','P','B','A','L','K','C','N','I','J','F','E','O' ] },
{ name : 'RUPENDER', cat : 9, pref : [ 'G','D','B','P','K','H','A','L','O','N','J','C','I','F','E' ] },
{ name : 'ASHISH KUMAR SHARMA', cat : 9, pref : [ 'G','K','P','L','B','A','D','J','H','I','C','O','E','N','F' ] },
{ name : 'FARHA AFRIN', cat : 6, pref : [ 'K','G','P','D','B','L','H','A','F','C','E','J','O','N','I' ] },
{ name : 'DHARMENDRA SINGH', cat : 6, pref : [ 'G','P','L','H','D','B','I','K','A','M','J','N','O','E','F' ] },
{ name : 'VIKAS NAIN', cat : 9, pref : [ 'G','P','D','L','H','K','F','B','A','E','J','N','O','I','C' ] },
{ name : 'ADITYA GODHA', cat : 9, pref : [ 'P','L','B','G','A','H','D','J','I','O','E','K','N','C','F' ] },
{ name : 'JITENDRA KUMAR', cat : 9, pref : [ 'G','D','K','P','L','B','H','M','J','C','N','A','I','E','F' ] },
{ name : 'SUMIT SINGH', cat : 9, pref : [ 'G','K','P','D','J','L','H','I','N','B','C','O','A','E','F' ] },
{ name : 'NEERAJ KUMAR', cat : 9, pref : [ 'P','B','L','G','K','A','C','D','N','J','H','I','E','F','O' ] },
{ name : 'CHAMANDEEP SINGH', cat : 9, pref : [ 'D','G','P','L','H','B','A','K','E','F','I','N','C','J','O' ] },
{ name : 'SANDEEP KUMAR', cat : 9, pref : [ 'G','P','D','L','B','K','A','H','J','C','E','F','I','N','O' ] },
{ name : 'VINAY KUMAR', cat : 9, pref : [ 'G','D','K','P','B','L','H','I','A','J','N','C','F','E','O' ] },
{ name : 'SUBHASH CHANDRA PANDEY', cat : 9, pref : [ 'K','G','P','B','D','L','A','I','H','C','J','N','F','E','O' ] },
{ name : 'SAHIL BHATEJA', cat : 9, pref : [ 'D','G','P','K','B','L','H','A','J','N','I','E','F','O','C' ] },
{ name : 'PARTIK JAIN', cat : 9, pref : [ 'G','D','P','A','H','L','B','','','','','','','','' ] },
{ name : 'NITISH KUMAR SINGLA', cat : 9, pref : [ 'D','G','P','B','K','L','O','A','H','I','C','F','E','J','N' ] },
{ name : 'SHUBHAM GUPTA', cat : 9, pref : [ 'K','D','P','G','B','H','L','A','I','C','F','E','J','O','N' ] },
{ name : 'BHAWNA', cat : 9, pref : [ 'G','D','B','P','L','M','A','H','','','','','','','' ] },
{ name : 'DABBIRU SRAVAN', cat : 9, pref : [ 'I','E','A','L','C','J','H','F','G','P','B','K','D','N','O' ] },
{ name : 'ARNAB ROY', cat : 9, pref : [ 'J','C','N','G','P','H','A','B','D','E','F','I','K','L','O' ] },
{ name : 'VINEET', cat : 9, pref : [ 'G','P','D','K','L','','','','','','','','','','' ] },
{ name : 'NAVEEN GADDAM', cat : 9, pref : [ 'I','E','A','F','H','L','C','B','G','D','K','P','N','J','O' ] },
{ name : 'PRASHANT CHAUHAN', cat : 9, pref : [ 'G','D','K','P','L','B','H','J','A','F','C','E','I','N','O' ] },
{ name : 'ANKIT SHARMA', cat : 9, pref : [ 'G','P','L','K','B','H','A','D','J','I','N','E','F','C','O' ] },
{ name : 'ABHAY KUMAR MISHRA', cat : 9, pref : [ 'G','K','P','L','A','D','I','B','N','J','C','H','E','F','O' ] },
{ name : 'SIDDHARTH SRIVASTAVA', cat : 9, pref : [ 'G','K','D','P','L','A','H','','','','','','','','' ] },
{ name : 'AMIT KUMAR SINGHAL', cat : 9, pref : [ 'K','P','G','D','B','L','H','A','I','F','N','C','E','J','O' ] },
{ name : 'AKSHAY GUPTA', cat : 9, pref : [ 'G','D','P','K','L','B','A','I','C','H','E','F','N','J','O' ] },
{ name : 'GANESH REDDY S', cat : 9, pref : [ 'I','A','E','L','B','H','F','P','G','C','J','D','K','N','O' ] },
{ name : 'PIYUSH BAGAL', cat : 9, pref : [ 'D','G','P','K','B','L','H','I','A','J','F','N','C','E','O' ] },
{ name : 'KRISHNAN G', cat : 9, pref : [ 'F','E','A','H','L','I','G','M','P','B','J','N','D','K','O' ] },
{ name : 'AKHILENDRA NATH BAJPAI', cat : 9, pref : [ 'G','K','B','P','D','H','L','N','C','A','I','J','O','F','E' ] },
{ name : 'JATIN BANSAL', cat : 9, pref : [ 'D','G','P','K','B','L','H','A','J','I','F','C','N','E','O' ] },
{ name : 'BANIBROTO SAHA', cat : 9, pref : [ 'J','C','I','A','N','G','B','P','L','F','H','D','E','K','O' ] },
{ name : 'VIKAS', cat : 9, pref : [ 'G','D','P','L','B','H','K','A','I','N','J','C','O','F','E' ] },
{ name : 'SAWAI RAM', cat : 6, pref : [ 'P','G','H','L','A','B','D','E','F','I','J','K','N','O','C' ] },
{ name : 'DEEPAK', cat : 9, pref : [ 'G','D','P','B','K','L','A','I','M','H','J','E','N','F','C' ] },
{ name : 'NAGENDRA KUMAR', cat : 9, pref : [ 'G','D','P','B','K','H','L','A','F','I','O','N','E','C','J' ] },
{ name : 'PANKAJ', cat : 6, pref : [ 'G','D','P','L','B','K','J','A','H','I','F','E','N','O','C' ] },
{ name : 'SHAILESH NIRALA', cat : 9, pref : [ 'G','P','N','K','B','J','C','D','I','L','M','A','H','E','O' ] },
{ name : 'ADITI AGRAWAL', cat : 9, pref : [ 'G','P','L','K','D','J','A','B','C','I','E','F','N','H','O' ] },
{ name : 'JAYTOSH S CHAUHAN', cat : 9, pref : [ 'G','D','K','P','B','A','N','L','I','H','C','J','F','O','E' ] },
{ name : 'RITENDER THAKUR', cat : 9, pref : [ 'O','D','G','H','M','P','A','I','L','F','E','J','K','C','N' ] },
{ name : 'RANJEET KUMAR YADAV', cat : 6, pref : [ 'N','G','J','C','L','H','B','A','K','P','D','I','E','F','O' ] },
{ name : 'MOHIT NANDAL', cat : 9, pref : [ 'G','D','P','K','L','H','B','A','E','I','F','J','C','N','O' ] },
{ name : 'AMIT SHARMA', cat : 9, pref : [ 'G','P','L','D','H','A','K','I','B','J','E','F','C','O','N' ] },
{ name : 'NITESH KUMAR', cat : 9, pref : [ 'D','G','P','B','H','A','L','I','K','N','C','F','E','J','O' ] },
{ name : 'RAJAN KUMAR', cat : 6, pref : [ 'N','K','J','B','D','G','O','L','P','H','I','F','A','E','C' ] },
{ name : 'RAKSHIT DAHIYA', cat : 9, pref : [ 'G','D','P','K','B','L','A','I','H','J','N','E','F','C','O' ] },
{ name : 'KRITI VERMA', cat : 9, pref : [ 'G','L','P','D','B','A','H','J','I','K','F','N','C','E','O' ] },
{ name : 'NUNE VENKATA AJITH', cat : 9, pref : [ 'E','I','A','F','P','B','L','J','K','D','H','O','C','N','G' ] },
{ name : 'KRISHAN SHARMA', cat : 9, pref : [ 'G','D','P','L','B','H','K','M','A','I','J','T','N','E','F' ] },
{ name : 'SHANKHADIP BISWAS', cat : 9, pref : [ 'B','P','A','L','G','H','D','C','E','F','I','J','K','O','N' ] },
{ name : 'RUPESH TYAGI', cat : 9, pref : [ 'G','D','K','P','L','M','A','C','E','H','N','O','I','B','F' ] },
{ name : 'MEENAKSHI', cat : 9, pref : [ 'G','D','P','B','K','L','H','I','A','J','N','C','E','F','O' ] },
{ name : 'NAVEEN MANSINGHANI', cat : 9, pref : [ 'G','D','P','B','H','L','A','K','I','J','C','F','E','N','O' ] },
{ name : 'GARIMA KADIAN', cat : 9, pref : [ 'G','D','L','H','P','K','A','B','N','I','C','E','F','J','O' ] },
{ name : 'MRITUNJAY KUMAR', cat : 9, pref : [ 'N','J','G','K','L','D','B','P','C','I','A','H','O','F','E' ] },
{ name : 'SUBHASH CHAND', cat : 9, pref : [ 'G','D','P','A','K','F','L','M','B','H','E','I','J','C','N' ] },
{ name : 'RAMESH', cat : 9, pref : [ 'G','D','K','P','B','L','A','H','J','N','C','E','F','I','O' ] },
{ name : 'ABHILASH P', cat : 9, pref : [ 'I','E','A','F','H','P','B','L','G','J','D','C','K','N','O' ] },
{ name : 'ABHISHEK KUMAR', cat : 9, pref : [ 'K','G','P','B','L','J','C','N','H','D','A','E','F','I','O' ] },
{ name : 'NAVEEN JAKHAR', cat : 9, pref : [ 'D','G','P','L','I','H','A','B','E','F','C','J','K','O','N' ] },
{ name : 'MVS RAGHAVENDRA RAO T', cat : 9, pref : [ 'I','A','F','G','E','H','D','L','J','P','C','B','K','N','O' ] },
{ name : 'GOPAL MAHESHWARI', cat : 9, pref : [ 'G','K','P','B','L','D','H','N','A','I','J','E','C','F','O' ] },
{ name : 'SAROJ KUMARI', cat : 9, pref : [ 'G','D','P','B','A','K','I','L','H','J','E','N','C','F','O' ] },
{ name : 'ANUPAM RANA', cat : 9, pref : [ 'G','A','H','K','P','L','D','B','J','F','I','N','C','O','E' ] },
{ name : 'AMIT AGARWAL', cat : 9, pref : [ 'G','P','D','B','K','H','L','A','I','J','N','C','E','F','O' ] },
{ name : 'SACHIN', cat : 9, pref : [ 'G','P','L','D','T','H','U','B','K','A','M','C','J','E','I' ] },
{ name : 'AKANSHA KHANDELWAL', cat : 9, pref : [ 'G','P','H','D','L','B','A','N','I','E','K','F','J','C','O' ] },
{ name : 'MANISH KUMAR GOYAL', cat : 9, pref : [ 'G','P','D','B','K','L','M','A','','','','','','','' ] },
{ name : 'URVASHI SINGH', cat : 9, pref : [ 'G','D','P','H','L','A','J','F','E','I','B','N','C','K','O' ] },
{ name : 'MAYUR BHATIA', cat : 9, pref : [ 'G','D','P','B','K','M','H','A','N','C','I','E','J','F','L' ] },
{ name : 'PRAVEEN REDDY SOMA', cat : 9, pref : [ 'I','A','E','F','H','L','C','J','D','B','N','O','P','G','K' ] },
{ name : 'NIDHI RAGHUVANSHI', cat : 9, pref : [ 'B','P','L','H','A','I','G','D','E','J','O','K','N','F','C' ] },
{ name : 'ANIL KALAL', cat : 6, pref : [ 'P','G','L','H','B','D','A','K','J','E','F','N','C','I','O' ] },
{ name : 'SUBHADIPTA PARIJA', cat : 9, pref : [ 'C','J','L','A','B','P','M','K','N','','','','','','' ] },
{ name : 'ASHISH SHARMA', cat : 9, pref : [ 'G','D','K','B','P','L','','','','','','','','','' ] },
{ name : 'KRISHNA CHAITANYA NAYUDU', cat : 9, pref : [ 'I','A','E','H','F','P','C','G','L','J','K','D','B','N','O' ] },
{ name : 'PARBAR PRATHAM SINGH', cat : 9, pref : [ 'D','P','G','H','B','N','I','K','A','C','E','F','J','L','O' ] },
{ name : 'DEEPANKAR KARMAKAR', cat : 9, pref : [ 'J','C','N','A','I','E','F','P','L','H','B','D','G','K','O' ] },
{ name : 'MOHIT VATS', cat : 9, pref : [ 'G','D','L','P','A','B','J','H','K','E','F','I','C','N','O' ] },
{ name : 'VIKRAM JANGRA', cat : 6, pref : [ 'D','G','P','K','B','H','I','N','L','A','O','E','F','C','J' ] },
{ name : 'SARAVJIT SINGH', cat : 9, pref : [ 'D','G','P','L','K','H','B','A','F','E','I','C','N','O','J' ] },
{ name : 'NISHANT GROVER', cat : 9, pref : [ 'D','G','P','I','L','K','B','A','H','N','F','E','J','O','C' ] },
{ name : 'SARVESH SHARMA', cat : 9, pref : [ 'P','D','G','B','K','L','H','J','I','A','E','C','F','N','O' ] },
{ name : 'NITIN KHANDELWAL', cat : 9, pref : [ 'G','P','B','L','D','K','H','I','A','C','J','N','E','F','O' ] },
{ name : 'ROHIT KUMAR TRIPATHI', cat : 9, pref : [ 'K','G','P','B','D','N','L','H','C','J','A','I','E','F','O' ] },
{ name : 'GAURAV VATS', cat : 9, pref : [ 'G','D','P','K','B','L','N','C','H','O','I','J','A','E','F' ] },
{ name : 'SUMIT RANA', cat : 9, pref : [ 'G','D','P','L','K','M','A','B','H','J','E','I','C','N','O' ] },
{ name : 'MANISH SHARMA', cat : 9, pref : [ 'G','D','K','P','B','L','H','N','A','C','J','O','F','E','I' ] },
{ name : 'JITENDRA BAHADUR SINGH', cat : 9, pref : [ 'G','K','P','D','B','L','J','N','A','H','E','I','F','C','O' ] },
{ name : 'BHARAT KUMAR', cat : 9, pref : [ 'D','G','P','B','L','H','I','A','K','F','C','E','J','N','O' ] },
{ name : 'KAPIL AGRAWAL', cat : 9, pref : [ 'G','P','D','B','K','H','O','A','F','I','E','J','C','N','L' ] },
{ name : 'HIMANSHU SHARMA', cat : 9, pref : [ 'D','G','P','L','H','I','A','J','B','K','C','F','E','N','O' ] },
{ name : 'VISHWAJEET SINGH SHEKHAWAT', cat : 9, pref : [ 'G','D','P','B','L','H','A','J','K','N','F','C','O','I','E' ] },
{ name : 'ROHIT KUMAR', cat : 6, pref : [ 'G','D','P','B','K','A','L','N','I','J','C','E','F','H','O' ] },
{ name : 'AKASH ARORA', cat : 9, pref : [ 'G','D','K','L','P','H','B','A','I','J','N','C','F','E','O' ] },
{ name : 'BHASKER SIGNH', cat : 9, pref : [ 'G','K','B','P','D','L','C','H','J','A','I','N','E','F','O' ] },
{ name : 'POONAM THAKUR', cat : 6, pref : [ 'P','G','H','D','B','F','A','I','E','O','L','C','N','K','J' ] },
{ name : 'RANJEET KUMAR', cat : 9, pref : [ 'N','J','K','C','B','G','P','A','D','O','L','I','E','H','F' ] },
{ name : 'HARSHAVARDHAN REDDY P', cat : 9, pref : [ 'I','A','E','H','F','L','C','J','P','G','B','D','K','N','O' ] },
{ name : 'VARUN RAGHAV', cat : 9, pref : [ 'G','D','P','B','K','L','H','M','N','A','C','E','F','I','J' ] },
{ name : 'SUDHAKAR DASH', cat : 9, pref : [ 'C','J','E','G','A','I','F','H','L','D','B','K','N','P','O' ] },
{ name : 'GHIYA NIKHIL JAVARILAL', cat : 9, pref : [ 'P','B','H','L','G','K','N','I','A','J','E','C','F','D','O' ] },
{ name : 'DEEPAK BHASKAR', cat : 6, pref : [ 'G','P','H','D','L','A','O','J','I','B','C','E','F','K','N' ] },
{ name : 'KUMAR SAURAV SUNDER', cat : 9, pref : [ 'J','N','K','P','C','B','G','D','O','E','A','F','L','H','I' ] },
{ name : 'KONAGALLA ADITYA', cat : 9, pref : [ 'I','E','H','L','P','A','F','J','D','C','B','G','K','N','O' ] },
{ name : 'SOUMYA KASHNIA', cat : 9, pref : [ 'G','D','P','L','A','B','K','H','I','J','C','N','F','E','O' ] },
{ name : 'ABHIJEET KUMAR JHA', cat : 9, pref : [ 'N','K','G','P','B','D','J','','','','','','','','' ] },
{ name : 'ANKIT KUMAR ARYA', cat : 9, pref : [ 'L','G','K','H','D','P','B','A','I','E','F','C','J','N','O' ] },
{ name : 'AKHIL BUDHLAKOTI', cat : 9, pref : [ 'G','L','P','H','K','A','I','E','F','J','D','C','N','O','B' ] },
{ name : 'ROHIT KUMAR', cat : 9, pref : [ 'K','P','B','L','A','H','M','G','D','C','F','J','O','N','E' ] },
{ name : 'SONU OJHA', cat : 9, pref : [ 'N','K','G','J','B','D','P','C','A','H','L','E','I','F','O' ] },
{ name : 'ANURAG UPADHYAY', cat : 9, pref : [ 'G','D','K','P','B','A','L','H','J','I','F','N','C','O','E' ] },
{ name : 'VISHAL SINGHAL', cat : 9, pref : [ 'G','P','D','B','L','K','A','I','H','J','N','C','E','F','O' ] },
{ name : 'JOGENDER', cat : 9, pref : [ 'P','B','G','D','L','A','I','H','K','J','E','F','C','N','O' ] },
{ name : 'AMIT KUMAR', cat : 9, pref : [ 'D','G','L','H','A','B','C','E','F','I','J','K','N','O','P' ] },
{ name : 'YUGAL KISHOR MATHURIA', cat : 9, pref : [ 'G','P','B','D','M','L','H','K','J','N','A','C','I','F','E' ] },
{ name : 'MUKUND KUMAR PANDEY', cat : 9, pref : [ 'N','G','J','K','D','B','P','H','L','A','C','I','E','F','M' ] },
{ name : 'RAMKUMAR S B', cat : 6, pref : [ 'E','F','A','H','I','L','C','D','K','G','B','N','P','J','O' ] },
{ name : 'MANDEEP KUMAR', cat : 9, pref : [ 'G','D','K','P','L','H','A','I','B','O','E','N','J','F','C' ] },
{ name : 'SINGAM SUMANTH KUMAR REDDY', cat : 9, pref : [ 'I','A','G','E','L','F','P','H','J','C','B','K','D','N','O' ] },
{ name : 'K H SURESH KRISHNA', cat : 9, pref : [ 'I','A','E','L','H','G','J','F','B','P','K','C','D','N','O' ] },
{ name : 'SAURABH KUMAR SHARMA', cat : 9, pref : [ 'G','D','H','P','K','A','L','E','I','J','C','B','F','N','O' ] },
{ name : 'RAVI KUMAR ATHOTRA', cat : 9, pref : [ 'G','D','P','K','B','H','L','I','A','E','J','C','F','N','O' ] },
{ name : 'RAKESH  KUMAR', cat : 9, pref : [ 'G','D','K','P','H','L','B','A','I','J','F','E','N','C','O' ] },
{ name : 'HARSHIT GUPTA', cat : 9, pref : [ 'G','K','D','P','B','L','A','J','C','I','N','H','O','F','E' ] },
{ name : 'VIBHOR GOEL', cat : 9, pref : [ 'G','P','B','A','I','K','L','H','D','J','N','F','C','E','O' ] },
{ name : 'DEEPAK KUMAR', cat : 9, pref : [ 'G','D','P','H','K','B','A','L','I','N','J','F','E','C','O' ] },
{ name : 'PRASHANT PANNU', cat : 9, pref : [ 'P','L','K','J','G','D','B','A','I','H','C','F','N','O','E' ] },
{ name : 'GYANENDRA TIWARI', cat : 9, pref : [ 'K','B','P','L','J','G','H','D','A','C','M','N','E','F','O' ] },
{ name : 'RAVI KUMAR SHARMA', cat : 9, pref : [ 'P','D','B','G','K','L','A','H','I','F','E','C','J','N','O' ] },
{ name : 'SOMNATH MISHRA', cat : 9, pref : [ 'K','G','B','J','P','A','I','H','N','C','D','L','E','O','F' ] },
{ name : 'NEHA', cat : 9, pref : [ 'G','P','L','D','H','A','B','K','I','N','J','F','E','C','O' ] },
{ name : 'G ASHRIT REDDY', cat : 9, pref : [ 'I','A','H','L','E','P','F','B','C','D','G','K','J','N','O' ] },
{ name : 'AYAN PAUL', cat : 9, pref : [ 'O','G','J','A','H','D','P','I','B','E','F','L','M','K','N' ] },
{ name : 'ANIL KUMAR', cat : 9, pref : [ 'G','D','K','B','P','T','U','L','H','A','Q','R','E','F','S' ] },
{ name : 'SAVITA', cat : 9, pref : [ 'G','D','P','B','K','M','L','H','I','N','J','C','E','A','O' ] },
{ name : 'MANOJ KARMAKAR', cat : 6, pref : [ 'J','P','N','L','B','A','D','G','C','K','I','O','H','F','E' ] },
{ name : 'K TEJESWAR', cat : 6, pref : [ 'I','A','E','H','L','B','F','G','P','K','J','C','N','D','O' ] },
{ name : 'ROHIT NEGI', cat : 9, pref : [ 'G','K','D','P','B','A','L','I','J','H','N','C','O','E','F' ] },
{ name : 'SURABHI RAZDAN', cat : 9, pref : [ 'D','G','P','L','A','H','B','I','K','E','J','C','N','F','O' ] },
{ name : 'NILESH VIJENDRA TIWARI', cat : 9, pref : [ 'L','P','H','B','K','G','D','J','A','C','N','I','F','O','E' ] },
{ name : 'APOORV AGARWAL', cat : 9, pref : [ 'G','D','P','B','K','L','H','A','J','E','I','C','F','N','O' ] },
{ name : 'ANKIT KUMAR SINGH', cat : 9, pref : [ 'G','L','A','I','D','J','K','H','B','P','O','C','N','E','F' ] },
{ name : 'ARVIND SINGH RATHORE', cat : 9, pref : [ 'P','D','B','G','L','H','K','A','J','I','C','E','F','N','O' ] },
{ name : 'SANJAY KUMAR', cat : 9, pref : [ 'G','D','P','L','H','A','I','J','F','K','B','C','E','N','O' ] },
{ name : 'DEEPIKA DHIR', cat : 9, pref : [ 'D','G','P','A','H','B','F','E','K','I','C','L','J','N','O' ] },
{ name : 'SHOBHIT BANSAL', cat : 9, pref : [ 'K','G','P','B','J','D','N','H','L','A','O','I','C','E','F' ] },
{ name : 'MANAN TYAGI', cat : 9, pref : [ 'G','D','K','P','B','L','H','A','M','I','J','N','O','E','C' ] },
{ name : 'RITESH CHAUDHARY', cat : 9, pref : [ 'G','K','P','D','H','B','L','A','I','E','F','J','N','C','O' ] },
{ name : 'ANAMIKA TYAGI', cat : 9, pref : [ 'P','B','G','D','H','K','J','L','A','O','I','N','C','E','F' ] },
{ name : 'MOHIT SINGLA', cat : 9, pref : [ 'D','G','P','L','A','I','K','B','H','F','E','J','C','N','P' ] },
{ name : 'MANOJ KUMAR', cat : 9, pref : [ 'G','D','H','L','B','J','A','P','K','C','N','F','I','O','E' ] },
{ name : 'KALAKOTA PRITHVIRAJ REDDY', cat : 9, pref : [ 'I','E','L','A','J','H','F','G','K','N','P','B','C','D','O' ] },
{ name : 'SURYA PRAKASH', cat : 9, pref : [ 'G','K','D','P','B','A','L','H','J','I','N','C','O','E','F' ] },
{ name : 'NITIN KUMAR', cat : 6, pref : [ 'G','K','D','P','B','L','H','A','I','C','E','J','F','N','O' ] },
{ name : 'PINKI', cat : 6, pref : [ 'P','G','D','B','L','A','H','K','F','I','E','N','O','C','J' ] },
{ name : 'BALA NARESH AYYALA', cat : 9, pref : [ 'I','A','E','F','L','H','C','P','G','B','K','D','J','O','N' ] },
{ name : 'RITESH KUMAR', cat : 9, pref : [ 'N','G','D','K','J','C','P','B','H','O','E','F','A','I','L' ] },
{ name : 'SOURAV KOLEY', cat : 9, pref : [ 'J','C','N','G','K','I','B','P','H','A','D','L','O','E','F' ] },
{ name : 'NISHANT SINGH', cat : 9, pref : [ 'P','L','A','K','B','H','C','D','E','F','G','I','J','N','O' ] },
{ name : 'AJAY SHARMA', cat : 9, pref : [ 'D','G','P','B','K','N','J','H','L','C','I','A','E','F','O' ] },
{ name : 'HEMANTH KUPPILI', cat : 9, pref : [ 'I','A','E','C','L','J','B','G','D','F','H','N','K','P','O' ] },
{ name : 'ABHISHEK SINGH', cat : 9, pref : [ 'K','G','D','P','B','L','A','I','H','J','N','C','E','F','O' ] },
{ name : 'SURESH KUMAR GOYAL', cat : 9, pref : [ 'P','B','G','H','L','A','D','I','F','K','N','J','C','E','O' ] },
{ name : 'ASHISH CHAUHAN', cat : 9, pref : [ 'G','D','K','P','B','H','I','N','C','L','E','A','J','F','O' ] },
{ name : 'SWAPNIL TIWARI', cat : 9, pref : [ 'B','K','G','P','D','L','H','J','N','A','I','C','E','F','O' ] },
{ name : 'PRANAV SIKERWAR', cat : 9, pref : [ 'G','L','D','K','B','H','P','A','J','I','F','N','E','C','O' ] },
{ name : 'SHILPA', cat : 9, pref : [ 'G','D','K','P','L','B','A','I','J','C','N','H','E','F','O' ] },
{ name : 'RAGHWESH PANDEY', cat : 9, pref : [ 'G','D','K','P','B','L','M','H','C','J','N','A','E','I','F' ] },
{ name : 'ABHINAV CHOUDHARY', cat : 9, pref : [ 'G','K','P','H','B','D','I','N','E','A','L','F','O','C','J' ] },
{ name : 'DAMMANNA NIKHIL', cat : 9, pref : [ 'I','E','A','P','L','B','F','H','G','C','D','J','K','N','O' ] },
{ name : 'DEBARSHI BANERJEE', cat : 9, pref : [ 'J','C','G','N','K','A','I','L','O','B','D','E','P','H','F' ] },
{ name : 'ANKUR GOYAL', cat : 9, pref : [ 'G','D','P','K','B','L','A','I','H','C','J','N','E','F','O' ] },
{ name : 'SHIRISH KUMAR DWIVEDI', cat : 9, pref : [ 'K','G','D','B','P','L','N','J','H','C','I','A','E','F','O' ] },
{ name : 'VENKATESH ARIGE', cat : 9, pref : [ 'I','A','E','L','H','G','F','C','P','B','K','J','D','N','O' ] },
{ name : 'KHUSHAL SINGH SHEKHAWAT', cat : 9, pref : [ 'P','D','G','B','H','L','K','I','J','A','E','N','F','O','C' ] },
{ name : 'DINDAYAL KUMAR', cat : 9, pref : [ 'A','H','P','C','J','F','E','I','L','B','N','K','G','D','O' ] },
{ name : 'MANOJ KUMAR JAT', cat : 6, pref : [ 'G','D','P','K','B','H','L','A','J','N','E','F','C','I','O' ] },
{ name : 'SHIWANI KUMARI', cat : 9, pref : [ 'G','D','K','L','A','J','E','I','P','B','N','H','C','F','O' ] },
{ name : 'OWAIS ARIF BUCHH', cat : 9, pref : [ 'D','G','I','L','K','B','A','F','E','H','J','P','N','C','O' ] },
{ name : 'RAHUL SINGH NEGI', cat : 9, pref : [ 'G','A','P','L','D','H','E','M','B','C','I','J','K','N','O' ] },
{ name : 'DHEERAJ KUMAR SHARMA', cat : 6, pref : [ 'G','K','B','P','D','A','N','J','I','C','H','L','F','E','O' ] },
{ name : 'ANJNEY UPADHYAY', cat : 9, pref : [ 'K','G','P','B','J','D','C','A','H','N','L','I','E','F','O' ] },
{ name : 'PIYUSH MAHESHWARI', cat : 9, pref : [ 'B','P','G','D','L','K','H','A','I','J','C','N','F','E','O' ] },
{ name : 'ABHISHEK SAHOO', cat : 6, pref : [ 'C','I','J','P','A','N','B','L','E','K','F','H','D','G','O' ] },
{ name : 'TAMANNA', cat : 9, pref : [ 'G','D','P','K','A','I','B','L','H','J','N','C','F','E','O' ] },
{ name : 'PATHAN SADDAMHUSSAIN', cat : 9, pref : [ 'P','L','H','A','B','I','G','K','D','C','O','J','N','F','E' ] },
{ name : 'HIMANSHU KHURANA', cat : 9, pref : [ 'G','D','P','L','A','H','B','I','J','K','E','F','C','N','O' ] },
{ name : 'KANDLURI SREENIVASULU', cat : 6, pref : [ 'I','E','A','H','F','C','N','B','L','P','D','G','K','J','O' ] },
{ name : 'HARSH GARG', cat : 9, pref : [ 'D','G','P','B','L','H','A','K','I','J','E','O','C','F','N' ] },
{ name : 'VIPIN UDAYWAL', cat : 6, pref : [ 'G','P','K','B','L','M','J','D','H','A','I','C','N','O','' ] },
{ name : 'KRISHNA KANT TIWARI', cat : 9, pref : [ 'P','B','L','H','G','K','D','A','I','F','N','J','C','E','O' ] },
{ name : 'NAMAN VERMA', cat : 9, pref : [ 'G','D','P','L','A','B','I','H','C','F','K','J','N','E','O' ] },
{ name : 'TOSHNIWAL SANJOG DWARKADAS', cat : 9, pref : [ 'G','L','P','H','I','B','A','D','F','K','J','E','C','N','O' ] },
{ name : 'RAJHANSH KUMAR AMBASTHA', cat : 9, pref : [ 'K','P','C','B','N','G','D','J','I','A','L','H','E','F','O' ] },
{ name : 'KULDEEP SINGH', cat : 6, pref : [ 'D','G','P','B','L','H','A','I','M','K','N','E','F','C','O' ] },
{ name : 'NISHI', cat : 9, pref : [ 'K','P','G','D','B','L','N','H','J','A','I','E','C','F','O' ] },
{ name : 'RAJVIR SINGH', cat : 9, pref : [ 'D','G','P','K','H','L','B','A','I','F','E','N','J','C','O' ] },
{ name : 'B NARASIMHA REDDY', cat : 9, pref : [ 'I','E','A','G','H','F','C','L','B','D','P','K','J','N','O' ] },
{ name : 'PREETI KUMARI', cat : 9, pref : [ 'P','B','I','H','A','L','E','F','J','K','N','O','G','D','C' ] },
{ name : 'SANDEEP KUMAR SINGH', cat : 9, pref : [ 'B','G','K','P','D','L','J','A','I','H','E','F','N','O','C' ] },
{ name : 'MONIKA DEVI', cat : 9, pref : [ 'G','D','P','K','B','L','H','M','A','C','E','F','J','N','O' ] },
{ name : 'GAURAV SRIVASTAV', cat : 9, pref : [ 'K','G','D','P','B','A','L','H','J','N','C','I','E','F','O' ] },
{ name : 'SANDEEP KUMAR', cat : 9, pref : [ 'G','D','P','B','A','L','K','H','I','J','C','N','E','F','O' ] },
{ name : 'MANISH RANA', cat : 9, pref : [ 'D','G','A','P','H','L','B','J','E','I','K','C','F','N','O' ] },
{ name : 'DEBASISH HAZRA', cat : 9, pref : [ 'J','C','O','H','P','N','M','L','K','J','G','B','D','A','F' ] },
{ name : 'GAURI SHANKAR', cat : 6, pref : [ 'D','G','P','B','K','L','J','H','I','A','N','C','E','F','O' ] },
{ name : 'ARPIT JAIN', cat : 9, pref : [ 'P','B','G','D','A','L','H','I','K','J','E','F','C','N','O' ] },
{ name : 'NIKHIL KUMAR PAREEK', cat : 9, pref : [ 'P','G','C','L','M','K','A','B','C','E','F','H','J','N','O' ] },
{ name : 'MANGU NIKITHA', cat : 9, pref : [ 'I','E','A','F','G','L','B','O','C','H','N','P','K','J','D' ] },
{ name : 'MOHD AYOOB', cat : 9, pref : [ 'K','G','B','N','P','J','H','C','L','A','I','E','F','D','O' ] },
{ name : 'SAURAV RAJ', cat : 9, pref : [ 'G','N','K','J','B','D','P','C','H','L','O','I','A','F','E' ] },
{ name : 'PRASHANT KUMAR PONIA', cat : 9, pref : [ 'G','K','D','H','L','B','A','P','I','J','F','E','C','O','N' ] },
{ name : 'SANJEEV KUMAR', cat : 6, pref : [ 'G','N','K','J','B','L','P','C','H','D','A','I','E','F','O' ] },
{ name : 'VISHESH ARORA', cat : 9, pref : [ 'G','K','D','P','B','','','','','','','','','','' ] },
{ name : 'ANKITA DUA', cat : 9, pref : [ 'G','D','A','P','H','L','I','E','B','J','O','K','F','C','N' ] },
{ name : 'RANDEEP SINGH', cat : 9, pref : [ 'D','G','B','P','A','H','L','I','E','K','J','C','F','N','O' ] },
{ name : 'P SUDARSHAN REDDY', cat : 9, pref : [ 'I','A','E','F','L','H','P','B','C','J','G','K','D','N','O' ] },
{ name : 'RAHUL', cat : 9, pref : [ 'G','D','P','B','A','L','H','J','I','E','C','F','K','N','O' ] },
{ name : 'NAYAK AJAY DINBANDHU', cat : 9, pref : [ 'G','L','A','I','H','J','D','E','K','C','B','P','F','N','O' ] },
{ name : 'SIDDAPAREDDY TILAK REDDY', cat : 9, pref : [ 'I','E','A','F','H','C','L','G','B','P','J','D','K','N','O' ] },
{ name : 'GOURAV KUMAR NARANG', cat : 9, pref : [ 'G','D','P','K','L','A','B','H','I','J','N','C','E','F','O' ] },
{ name : 'ANKIT SRIVASTAVA', cat : 9, pref : [ 'B','G','D','P','L','H','K','N','A','I','J','C','F','O','E' ] },
{ name : 'SHUBHAM TIWARI', cat : 9, pref : [ 'K','B','G','D','P','L','N','J','H','A','I','E','C','F','O' ] },
{ name : 'KAMINI GOYAL', cat : 9, pref : [ 'P','B','D','G','H','K','L','A','I','F','C','E','N','O','J' ] },
{ name : 'KRISHAN SINGLA', cat : 9, pref : [ 'P','G','D','L','I','H','B','K','A','J','N','E','F','C','O' ] },
{ name : 'SUMIT JAIN', cat : 9, pref : [ 'G','D','B','P','L','A','K','E','H','J','I','N','C','F','O' ] },
{ name : 'MAYUR GOYAL', cat : 9, pref : [ 'G','D','K','P','B','L','H','N','C','J','A','I','F','E','O' ] },
{ name : 'DARPAN GOYAL', cat : 9, pref : [ 'G','D','P','B','L','A','H','K','I','C','J','E','F','N','O' ] },
{ name : 'RAHUL', cat : 6, pref : [ 'K','G','D','P','B','A','H','L','M','I','N','F','E','C','O' ] },
{ name : 'SANDEEP KR JHA', cat : 9, pref : [ 'J','P','A','N','L','B','C','G','D','I','K','H','F','E','O' ] },
{ name : 'DEEPAK GUPTA', cat : 9, pref : [ 'K','B','G','H','N','P','I','D','M','N','A','C','F','O','E' ] },
{ name : 'SUNIL JANGRA', cat : 6, pref : [ 'G','D','P','B','L','H','A','I','N','J','F','E','K','C','O' ] },
{ name : 'SHIVAM KUMAR SHARMA', cat : 9, pref : [ 'P','B','L','H','G','K','D','A','I','F','N','J','C','E','O' ] },
{ name : 'NEERAJ KUMAR', cat : 9, pref : [ 'D','G','P','B','L','J','H','A','K','N','I','E','F','O','C' ] },
{ name : 'ROHIT RAI', cat : 9, pref : [ 'K','N','G','J','B','P','D','C','L','A','H','I','E','O','F' ] },
{ name : 'SHIV AASHEESH SINGH T', cat : 9, pref : [ 'I','A','H','B','L','P','E','K','G','D','C','F','J','O','N' ] },
{ name : 'GAURAV SHARMA', cat : 9, pref : [ 'G','P','D','K','B','F','M','C','H','N','A','J','I','L','O' ] },
{ name : 'MUKESH SINGH TOMAR', cat : 9, pref : [ 'B','P','G','D','K','L','H','J','A','I','E','C','N','F','O' ] },
{ name : 'NISHI', cat : 9, pref : [ 'D','P','A','I','T','G','U','B','O','C','S','R','N','K','E' ] },
{ name : 'PRABHAT KUMAR PANDEY', cat : 9, pref : [ 'K','G','B','P','D','I','A','N','J','C','L','H','E','F','O' ] },
{ name : 'JASBIR SINGH', cat : 9, pref : [ 'D','G','P','L','B','K','H','I','A','E','F','J','O','N','C' ] },
{ name : 'SHIVAM KATIYAR', cat : 6, pref : [ 'K','G','P','B','D','N','E','L','I','A','H','J','C','F','O' ] },
{ name : 'BHARAT KUMAR', cat : 9, pref : [ 'P','B','L','A','I','E','K','H','F','G','D','N','J','C','O' ] },
{ name : 'APPALARAJU KARUBHUKTHA', cat : 6, pref : [ 'I','A','E','C','H','F','L','P','G','B','D','N','K','J','O' ] },
{ name : 'GOVIND RATNU', cat : 9, pref : [ 'P','B','L','G','K','D','A','I','H','E','N','F','J','C','O' ] },
{ name : 'VISHISHT GARG', cat : 9, pref : [ 'P','H','L','A','F','K','B','O','D','G','N','J','I','E','C' ] },
{ name : 'MOHIT SHUKLA', cat : 9, pref : [ 'P','B','L','H','G','K','D','A','I','F','N','J','C','E','O' ] },
{ name : 'ANU CHIKKARA', cat : 9, pref : [ 'G','P','K','L','A','H','I','B','J','C','N','D','E','F','O' ] },
{ name : 'ARUN KUMAR REDDY BEESAM', cat : 9, pref : [ 'I','A','L','H','P','E','G','B','F','D','K','J','C','N','O' ] },
{ name : 'NEHA KUMARI', cat : 9, pref : [ 'G','D','P','A','K','L','M','B','H','N','J','C','O','I','E' ] },
{ name : 'ASHUTOSH TIWARI', cat : 9, pref : [ 'G','K','P','B','L','J','N','C','A','H','I','E','F','O','D' ] },
{ name : 'DEEPAK KUMAR', cat : 9, pref : [ 'G','D','P','B','K','L','A','H','I','F','E','C','J','N','O' ] },
{ name : 'ANKUR SINGHAL', cat : 9, pref : [ 'G','D','K','P','L','B','H','I','A','E','N','F','C','J','O' ] },
{ name : 'SIDDHARTH DAGAR', cat : 9, pref : [ 'G','D','A','L','H','P','B','K','J','I','N','E','O','C','F' ] },
{ name : 'NIKHIL GIRDHAR', cat : 9, pref : [ 'G','D','P','K','H','L','A','B','I','F','J','C','N','E','O' ] },
{ name : 'ATHARVA SHARMA', cat : 9, pref : [ 'G','D','P','B','K','H','L','I','A','J','N','C','F','E','O' ] },
{ name : 'VIKASH KUMAR GUPTA', cat : 9, pref : [ 'B','P','G','L','K','D','I','A','J','H','N','F','C','E','O' ] },
{ name : 'HARISHCHANDRA PRAJAPAT', cat : 6, pref : [ 'G','D','P','B','L','H','A','K','J','E','F','C','I','N','O' ] },
{ name : 'VAIBHAV SHARMA', cat : 9, pref : [ 'P','B','L','H','G','K','D','A','I','F','N','J','C','E','O' ] },
{ name : 'INDERPAL', cat : 6, pref : [ 'G','P','D','B','K','L','M','A','N','O','J','E','F','C','H' ] },
{ name : 'KUSUM KUMAR YADAV', cat : 6, pref : [ 'P','B','G','L','K','H','D','A','I','F','N','J','C','E','O' ] },
{ name : 'YADHU KRISHNA B', cat : 9, pref : [ 'F','E','A','H','G','I','L','M','J','C','D','K','B','P','N' ] },
{ name : 'PARVEEN', cat : 9, pref : [ 'G','D','P','L','K','A','J','H','I','N','F','C','B','E','O' ] },
{ name : 'SUMIT', cat : 9, pref : [ 'G','D','P','B','E','K','','','','','','','','','' ] },
{ name : 'AMIT KUMAR', cat : 9, pref : [ 'G','D','K','P','B','N','I','L','A','H','F','E','J','C','O' ] },
{ name : 'PRAMOD SHARMA', cat : 9, pref : [ 'P','L','G','D','E','H','A','F','C','I','B','K','J','O','N' ] },
{ name : 'DHEERAJ CHAUDHARY', cat : 9, pref : [ 'G','D','K','B','P','L','N','I','H','A','J','B','O','E','F' ] },
{ name : 'PARAS MAHAWAR', cat : 9, pref : [ 'P','J','K','G','B','C','N','D','A','L','H','E','I','F','O' ] },
{ name : 'BALLAMUDI POOJITHA', cat : 9, pref : [ 'I','A','E','P','G','B','J','L','D','F','K','H','N','C','O' ] },
{ name : 'ABHISHEK', cat : 9, pref : [ 'G','D','P','H','B','L','A','F','I','K','J','C','N','E','O' ] },
{ name : 'KRISHAN KUMAR', cat : 9, pref : [ 'G','D','H','L','P','B','A','F','E','K','J','C','I','N','O' ] },
{ name : 'HARSH KAUSHIK', cat : 9, pref : [ 'G','P','B','K','H','L','D','A','I','J','N','E','F','C','O' ] },
{ name : 'UPENDER SHARMA', cat : 9, pref : [ 'G','D','P','K','B','H','L','J','A','E','N','C','F','I','O' ] },
{ name : 'MUKMALLA C KRISHNAREDDY', cat : 9, pref : [ 'I','A','E','H','F','P','D','B','C','L','G','J','N','K','O' ] },
{ name : 'AMIT MATHUR', cat : 9, pref : [ 'G','D','K','P','H','L','B','A','I','J','E','C','F','N','O' ] },
{ name : 'POOJA PANDAY', cat : 9, pref : [ 'K','P','L','H','A','B','I','J','N','C','D','E','F','G','O' ] },
{ name : 'HEMA SIVA KUMAR PENUGONDA', cat : 9, pref : [ 'I','E','A','F','P','L','H','C','J','G','B','K','D','N','O' ] },
{ name : 'ANJIT KUMAR AGARWAL', cat : 9, pref : [ 'G','P','B','D','L','H','K','I','A','E','N','C','F','J','O' ] },
{ name : 'RAHUL ROY', cat : 9, pref : [ 'J','L','G','P','K','C','B','A','E','I','H','F','N','O','D' ] },
{ name : 'KUNAL SHANKAR', cat : 9, pref : [ 'J','C','N','A','I','E','F','P','L','H','B','D','G','K','O' ] },
{ name : 'SHUBHAM BHATIA', cat : 9, pref : [ 'G','D','P','L','A','I','H','J','B','K','F','E','C','N','O' ] },
{ name : 'DHARMENDER YADAV', cat : 6, pref : [ 'G','D','P','H','K','B','N','J','A','E','F','L','O','C','I' ] },
{ name : 'UTKARSH GAUR', cat : 9, pref : [ 'G','D','H','K','I','P','B','L','A','J','N','O','F','C','E' ] },
{ name : 'SONU KUMAR SAH', cat : 6, pref : [ 'J','P','L','G','B','D','K','H','A','N','C','O','I','E','F' ] },
{ name : 'K RAVICHANDRA', cat : 9, pref : [ 'I','A','E','L','F','P','H','C','G','J','D','B','K','N','O' ] },
{ name : 'DEVENDRA SWARUP BHARGAVA', cat : 6, pref : [ 'G','P','D','B','K','H','L','I','E','N','J','A','F','O','' ] },
{ name : 'SAURABH KUMAR', cat : 9, pref : [ 'N','J','G','B','P','C','K','D','L','A','H','I','E','F','O' ] },
{ name : 'RAJAT GARG', cat : 9, pref : [ 'G','D','P','B','K','L','H','I','A','E','F','N','C','J','O' ] },
{ name : 'NAVEEN KHANDELWAL', cat : 9, pref : [ 'G','D','P','B','H','L','K','A','I','J','N','C','O','E','F' ] },
{ name : 'YOGESH CHAMOLI', cat : 9, pref : [ 'G','D','K','P','L','H','B','A','I','N','J','C','O','F','E' ] },
{ name : 'ANUPAM MEHROTRA', cat : 9, pref : [ 'P','G','K','B','L','D','A','I','J','N','C','H','E','F','O' ] },
{ name : 'VENKATA NAGA RAGHAV KURELLA', cat : 9, pref : [ 'I','C','A','G','P','B','E','J','F','L','N','H','K','D','O' ] },
{ name : 'BIKRAMJIT SINGH MANSHAHIA', cat : 9, pref : [ 'D','G','P','A','L','H','B','I','J','E','K','C','F','N','O' ] },
{ name : 'SUNNY SINGH', cat : 9, pref : [ 'G','D','K','P','L','H','A','B','J','I','N','E','C','F','O' ] },
{ name : 'SHUBHAM UPADHYAY', cat : 9, pref : [ 'G','K','D','H','P','B','L','M','J','I','A','C','F','E','N' ] },
{ name : 'PAWAN SINGH', cat : 9, pref : [ 'G','K','L','A','J','I','D','B','P','E','N','C','F','H','O' ] },
{ name : 'GAURAV SATI', cat : 9, pref : [ 'G','D','J','P','B','L','M','I','H','J','A','O','C','E','F' ] },
{ name : 'PANKAJ KUMAR', cat : 9, pref : [ 'G','D','P','L','A','B','H','K','I','E','J','F','N','O','C' ] },
{ name : 'MOHIT SINGH RAJPUT', cat : 6, pref : [ 'K','B','P','G','L','H','D','I','J','A','E','N','O','C','F' ] },
{ name : 'K RAJASHEKARREDDY', cat : 9, pref : [ 'I','A','E','H','F','P','L','B','J','C','G','K','N','D','O' ] },
{ name : 'Y SRAVAN KUMAR', cat : 6, pref : [ 'I','A','M','E','L','B','C','H','F','G','D','K','J','O','P' ] },
{ name : 'TEJASWI KOKKILIGADDA', cat : 9, pref : [ 'I','E','A','C','H','F','L','B','N','J','P','G','K','D','O' ] },
{ name : 'SUMIT DWIVEDI', cat : 9, pref : [ 'K','G','P','D','B','L','H','A','F','C','E','J','O','N','I' ] },
{ name : 'TARIF SINGH', cat : 9, pref : [ 'G','D','P','B','L','H','K','A','I','F','E','O','J','C','N' ] },
{ name : 'YOGESH', cat : 9, pref : [ 'G','D','P','K','L','J','B','A','C','H','I','N','E','F','O' ] },
{ name : 'AMIT PARASHER', cat : 9, pref : [ 'P','I','A','L','J','B','H','K','G','D','F','E','C','O','N' ] },
{ name : 'VINAY KUMAR PANDEY', cat : 9, pref : [ 'K','P','G','D','B','L','N','H','J','A','C','E','I','F','O' ] },
{ name : 'VIRENDRA PRATAP PARMAR', cat : 9, pref : [ 'G','D','P','K','B','H','I','C','A','L','N','J','F','O','E' ] },
{ name : 'MOHINI', cat : 9, pref : [ 'G','D','P','B','L','K','I','H','A','C','J','F','E','N','O' ] },
{ name : 'DIGHE HARSHAD ARUN', cat : 9, pref : [ 'L','H','P','B','I','A','E','F','C','J','G','D','K','N','O' ] },
{ name : 'MANJEET KUMAR', cat : 6, pref : [ 'G','K','D','I','B','P','H','A','J','C','E','F','N','L','O' ] },
{ name : 'DOMA VINAYAK', cat : 6, pref : [ 'I','A','E','L','B','F','J','K','G','H','P','D','C','N','O' ] },
{ name : 'TUMU SARANYA', cat : 9, pref : [ 'I','A','E','H','L','B','C','O','F','G','J','K','N','O','P' ] },
{ name : 'SHIVAM', cat : 9, pref : [ 'G','D','K','P','I','A','H','J','C','B','L','N','E','F','O' ] },
{ name : 'RAJENDRA SINGH', cat : 6, pref : [ 'G','K','B','P','D','N','L','O','J','I','H','F','A','C','E' ] },
{ name : 'DEVENDER S SHEKHAWAT', cat : 9, pref : [ 'G','D','P','B','A','F','E','H','L','I','J','C','K','N','O' ] },
{ name : 'PRIYESH KUMAR', cat : 9, pref : [ 'G','K','D','P','B','J','L','','','','','','','','' ] },
{ name : 'RAVI KUMAR', cat : 9, pref : [ 'K','G','D','B','P','H','A','I','N','J','L','C','F','E','O' ] },
{ name : 'NAVEEN SHARMA', cat : 9, pref : [ 'P','K','B','L','A','H','J','G','D','I','C','N','E','F','O' ] },
{ name : 'DIWAKAR SHARMA', cat : 9, pref : [ 'G','D','K','P','L','B','H','A','I','N','J','C','E','F','O' ] },
{ name : 'SACHIN KUMAR RAY', cat : 9, pref : [ 'K','N','P','B','L','J','C','G','D','','','','','','' ] },
{ name : 'RAMESH RANJAN', cat : 9, pref : [ 'G','L','K','J','B','D','P','F','E','A','H','C','I','N','O' ] },
{ name : 'KUL DEEP KUSHWAH', cat : 6, pref : [ 'P','L','K','G','E','F','B','A','D','H','I','J','N','O','C' ] },
{ name : 'ADARSH SINGH CHAUHAN', cat : 9, pref : [ 'K','G','B','D','P','L','J','I','N','H','A','E','F','C','O' ] },
{ name : 'NITIN KUMAR', cat : 6, pref : [ 'K','G','D','B','P','I','A','N','C','J','H','L','E','F','O' ] },
{ name : 'MRITYUNJAI SINGH', cat : 9, pref : [ 'K','D','P','G','J','N','B','A','C','H','I','L','M','O','E' ] },
{ name : 'ANIL KUMAR', cat : 6, pref : [ 'G','D','P','L','H','B','A','F','K','E','I','J','C','N','O' ] },
{ name : 'ABHISHEK RAJ', cat : 9, pref : [ 'B','K','P','G','L','D','A','I','J','N','C','H','E','F','O' ] },
{ name : 'SANTHOSH KUMAR GUMADIDALA', cat : 6, pref : [ 'I','A','E','H','L','F','G','D','B','J','P','K','C','N','O' ] },
{ name : 'SONIT KUMAR', cat : 9, pref : [ 'G','D','P','K','B','H','I','A','L','E','F','J','N','C','O' ] },
{ name : 'SAHIL GARG', cat : 9, pref : [ 'D','G','P','K','B','I','A','L','H','J','E','F','C','N','O' ] },
{ name : 'ABHINAV SAXENA', cat : 9, pref : [ 'K','G','D','J','B','P','N','C','H','A','L','I','O','F','E' ] },
{ name : 'SATYA ANVESH MADAGALA', cat : 9, pref : [ 'I','A','E','H','J','F','C','P','B','D','G','L','K','N','O' ] },
{ name : 'SONAKSHI SHANWAL', cat : 9, pref : [ 'G','D','B','P','L','K','A','I','N','J','H','F','C','E','O' ] },
{ name : 'ASHISH TIWARI', cat : 9, pref : [ 'G','D','P','K','L','I','A','J','N','B','C','H','O','E','F' ] },
{ name : 'PUNEET AGGARWAL', cat : 9, pref : [ 'D','G','H','F','K','A','P','L','B','E','I','O','C','J','N' ] },
{ name : 'ANKIT BHATEJA', cat : 9, pref : [ 'G','D','P','B','K','A','E','I','H','L','J','F','C','N','O' ] },
{ name : 'JAYA', cat : 6, pref : [ 'B','P','I','N','J','C','K','D','G','L','H','A','E','F','O' ] },
{ name : 'SIERRA CHAUDHARY', cat : 9, pref : [ 'G','D','P','K','B','L','J','C','A','E','F','H','N','O','I' ] },
{ name : 'ANKUR DAHIYA', cat : 9, pref : [ 'G','D','P','L','K','B','I','H','A','J','C','N','E','F','O' ] },
{ name : 'SALONY BANSAL', cat : 9, pref : [ 'D','G','P','L','M','H','K','B','J','A','N','I','O','C','E' ] },
{ name : 'DEEPAK KAUSHIK', cat : 9, pref : [ 'G','D','P','B','K','C','A','L','I','N','J','H','F','E','O' ] },
{ name : 'JITENDER KUMAR SHARMA', cat : 9, pref : [ 'G','D','P','K','B','L','I','A','H','N','C','J','F','E','O' ] },
{ name : 'GAURAV PATEL', cat : 6, pref : [ 'K','G','P','B','A','D','O','C','E','F','H','J','L','N','I' ] },
{ name : 'NARENDRA KUMAR', cat : 6, pref : [ 'K','W','B','G','D','L','P','T','A','H','X','Y','M','I','F' ] },
{ name : 'KULDEEP KUMAR SONI', cat : 6, pref : [ 'G','K','B','P','L','J','D','E','I','A','N','F','C','O','H' ] },
{ name : 'SHIVAM JAISWAL', cat : 6, pref : [ 'K','G','B','P','L','J','D','N','H','A','I','E','C','F','O' ] },
{ name : 'SHRAVAN RAM', cat : 6, pref : [ 'D','G','P','H','A','B','K','N','E','I','J','F','L','C','O' ] },
{ name : 'PINKY KUMARI', cat : 6, pref : [ 'G','D','K','N','P','J','B','M','I','A','L','C','E','P','H' ] },
{ name : 'PRIYANKA SACHAN', cat : 6, pref : [ 'G','K','B','P','J','A','L','I','E','O','C','H','N','D','F' ] },
{ name : 'PRAVEEN KUMAR', cat : 6, pref : [ 'G','D','P','B','K','L','H','A','I','N','J','C','E','F','O' ] },
{ name : 'NITHIN S', cat : 6, pref : [ 'F','A','E','I','L','H','G','P','C','D','B','J','N','K','O' ] },
{ name : 'YOGESH PAL', cat : 6, pref : [ 'K','G','B','D','P','L','J','H','I','A','E','N','C','F','O' ] },
{ name : 'VIJAY KUMAR', cat : 6, pref : [ 'G','P','D','B','K','L','H','A','I','J','N','F','E','O','C' ] },
{ name : 'ASHWANI SINGH', cat : 6, pref : [ 'G','D','P','B','L','K','H','A','I','J','N','C','O','F','E' ] },
{ name : 'RAJESH RAJARAM MAHTO', cat : 6, pref : [ 'P','L','G','H','B','K','D','A','N','I','J','E','F','C','O' ] },
{ name : 'HIMANSHU KAMBOJ', cat : 6, pref : [ 'G','D','P','H','L','K','B','C','E','F','N','O','J','I','A' ] },
{ name : 'ARUN KUMAR JANGID', cat : 6, pref : [ 'G','P','D','K','L','B','I','A','H','J','N','C','E','F','O' ] },
{ name : 'YASHPAL YADAV', cat : 6, pref : [ 'G','D','P','K','B','M','L','A','H','J','I','E','F','N','O' ] },
{ name : 'NARENDAR PARVATHALA', cat : 6, pref : [ 'I','A','E','H','L','F','C','P','B','J','N','G','O','D','K' ] },
{ name : 'VADDADI SUDHIR KUMAR', cat : 6, pref : [ 'I','C','H','J','L','A','F','B','P','G','D','K','N','O','E' ] },
{ name : 'VIKAS RANJAN CHAURASIA', cat : 6, pref : [ 'K','P','G','B','D','L','J','A','H','E','F','C','I','N','O' ] },
{ name : 'GAURAV SINGH', cat : 6, pref : [ 'K','B','G','P','L','D','A','J','I','H','F','E','N','C','O' ] },
{ name : 'VIKAS KUMAR', cat : 6, pref : [ 'G','D','P','L','A','K','B','E','F','H','J','I','N','C','O' ] },
{ name : 'SUBITA', cat : 6, pref : [ 'G','D','P','B','A','L','I','M','H','J','N','C','E','F','K' ] },
{ name : 'VIKASH KUMAR', cat : 6, pref : [ 'G','P','B','A','C','D','E','F','H','I','J','K','L','N','M' ] },
{ name : 'SHITAL KUMARI', cat : 6, pref : [ 'G','D','P','B','A','I','K','L','H','J','E','O','F','N','C' ] },
{ name : 'AKSHAY VERMA', cat : 6, pref : [ 'G','D','P','L','T','M','K','B','H','U','J','S','A','N','C' ] },
{ name : 'MANISH SAINI', cat : 6, pref : [ 'G','D','P','K','L','B','H','A','I','F','E','C','N','J','O' ] },
{ name : 'GAUTAM KUMAR', cat : 6, pref : [ 'N','G','K','J','P','B','L','C','D','A','I','E','H','O','F' ] },
{ name : 'SUBRATA DAS', cat : 6, pref : [ 'J','P','L','G','D','B','A','N','O','I','H','K','E','F','C' ] },
{ name : 'BHANU PRATAP YADAV', cat : 6, pref : [ 'D','G','H','P','B','L','K','F','E','A','N','O','J','I','C' ] },
{ name : 'VIVEK PANWAR', cat : 6, pref : [ 'K','G','D','P','A','B','I','H','L','E','F','J','N','O','C' ] },
{ name : 'RAJAT KUMAR YADAV', cat : 6, pref : [ 'G','P','D','B','L','H','E','I','K','C','A','J','N','O','F' ] },
{ name : 'NANDIVADA AKARSH PREM', cat : 6, pref : [ 'I','A','E','H','L','F','G','D','B','J','P','K','C','N','O' ] },
{ name : 'ASHISH VERMA', cat : 6, pref : [ 'G','D','P','L','B','K','I','A','C','N','H','J','O','F','E' ] },
{ name : 'AMIT KUMAR VERMA', cat : 6, pref : [ 'K','G','B','L','P','N','J','D','H','I','A','E','F','C','O' ] },
{ name : 'NARENDRA KUMAR RASTOGI', cat : 6, pref : [ 'K','G','B','P','D','N','I','H','A','L','C','J','E','F','O' ] },
{ name : 'RAJESH KUMAR', cat : 6, pref : [ 'K','G','B','D','J','P','N','L','H','A','I','E','F','C','O' ] },
{ name : 'SHAD MUHAMMED E', cat : 6, pref : [ 'F','A','E','H','I','L','G','J','B','D','C','O','P','K','N' ] },
{ name : 'SONU KUMAR', cat : 6, pref : [ 'G','N','K','J','B','C','P','L','D','E','H','A','F','I','O' ] },
{ name : 'KARTIK CHINTAKRINDA', cat : 6, pref : [ 'I','A','E','F','H','G','L','C','D','P','B','J','K','N','O' ] },
{ name : 'ANUP KUMAR', cat : 6, pref : [ 'N','J','K','B','P','L','A','G','D','C','H','I','O','E','F' ] },
{ name : 'JYOTI', cat : 6, pref : [ 'P','K','G','L','J','A','D','H','B','','','','','','' ] },
{ name : 'HIMANSHU PACHAR', cat : 6, pref : [ 'G','D','P','B','L','H','K','A','I','J','E','F','N','O','C' ] },
{ name : 'ASHOK KUMAR', cat : 6, pref : [ 'G','P','D','B','H','L','A','I','M','J','C','K','E','F','O' ] },
{ name : 'ATULESH KUMAR GIRI', cat : 6, pref : [ 'K','G','B','D','N','P','I','L','A','C','H','J','O','F','E' ] },
{ name : 'SOHIL SAINI', cat : 6, pref : [ 'G','D','P','K','B','A','I','L','M','C','E','F','H','J','N' ] },
{ name : 'TANMOY PAL', cat : 6, pref : [ 'J','N','C','G','P','B','L','H','D','A','E','F','I','K','O' ] },
{ name : 'MITHILESH KUMAR RANJAN', cat : 6, pref : [ 'G','P','J','N','K','B','C','D','L','A','I','E','F','H','O' ] },
{ name : 'PRASHANT DEO', cat : 6, pref : [ 'G','N','D','P','J','L','K','B','A','I','H','F','E','O','C' ] },
{ name : 'MOHAMED MEERASAHIB J', cat : 6, pref : [ 'E','F','A','I','L','G','H','C','B','J','K','N','P','D','O' ] },
{ name : 'RAKESH KUMAR BURNWAL', cat : 6, pref : [ 'J','P','K','B','N','G','L','C','A','D','H','I','F','E','O' ] },
{ name : 'SHOBHIT KUMAR VERMA', cat : 6, pref : [ 'G','K','P','B','L','A','I','E','F','C','O','H','N','J','D' ] },
{ name : 'SREEVATSAV DANDASI', cat : 6, pref : [ 'I','A','E','F','J','B','L','K','N','G','H','P','D','O','C' ] },
{ name : 'SESETTY VENKATA KISHORE', cat : 6, pref : [ 'I','A','E','P','B','C','F','H','J','G','L','K','N','D','O' ] },
{ name : 'NAVEEN GUPTA', cat : 6, pref : [ 'D','G','K','N','J','B','P','C','H','L','I','A','E','F','O' ] },
{ name : 'NARENDRA KUMAR SONI', cat : 6, pref : [ 'G','P','B','D','K','L','J','A','C','E','F','H','I','N','O' ] },
{ name : 'ANURAG YADAV', cat : 6, pref : [ 'K','G','B','D','P','L','I','A','E','N','H','F','C','J','O' ] },
{ name : 'VIKAS KUMAR BHAWARIA', cat : 6, pref : [ 'G','D','P','B','K','H','L','A','E','I','J','C','F','N','O' ] },
{ name : 'RAMBARAN LODHI', cat : 6, pref : [ 'B','K','P','G','D','L','M','H','I','C','J','A','N','F','E' ] },
{ name : 'SUMIT KUMAR', cat : 6, pref : [ 'G','P','D','L','A','B','H','K','J','I','C','E','N','F','O' ] },
{ name : 'PEESA RAVITEJA', cat : 6, pref : [ 'I','E','A','F','H','L','P','G','D','J','B','K','C','N','O' ] },
{ name : 'HEMRAJ CHOUDHARY', cat : 6, pref : [ 'G','P','D','L','A','B','K','H','N','O','E','F','I','J','C' ] },
{ name : 'NIKHIL SUDHIR MANJREKAR', cat : 6, pref : [ 'L','H','B','P','G','A','D','I','J','K','C','O','F','E','N' ] },
{ name : 'KAMLESH KRISHNIYA', cat : 6, pref : [ 'G','P','D','L','B','H','K','A','I','E','F','O','J','C','N' ] },
{ name : 'ARUN KUMAR', cat : 6, pref : [ 'J','G','K','B','N','D','P','L','C','A','I','H','E','F','O' ] },
{ name : 'RAVI RANJAN KUMAR', cat : 6, pref : [ 'N','J','K','D','B','A','C','F','G','H','I','L','O','P','E' ] },
{ name : 'ASHUTOSH CHANDRA PAL', cat : 6, pref : [ 'G','D','K','N','J','B','I','A','C','L','P','E','F','H','O' ] },
{ name : 'KUNAL YADAV', cat : 6, pref : [ 'G','D','P','H','L','A','B','F','I','E','J','C','K','N','O' ] },
{ name : 'PUSHPAK VERMA', cat : 6, pref : [ 'P','B','K','H','L','G','D','J','A','C','E','F','I','N','O' ] },
{ name : 'ABINESH M P', cat : 6, pref : [ 'E','A','I','F','H','G','L','J','C','B','P','D','O','N','K' ] },
{ name : 'PRATEEK SAINI', cat : 6, pref : [ 'G','D','P','B','L','M','H','A','K','E','J','C','F','I','O' ] },
{ name : 'MAHENDRA SINGH', cat : 6, pref : [ 'P','L','T','B','K','G','D','J','H','S','F','R','I','Q','E' ] },
{ name : 'KRISHAN KUMAR', cat : 6, pref : [ 'P','G','D','B','L','H','K','J','F','A','E','I','N','C','O' ] },
{ name : 'DEEPAK KUMAR UPADHYAY', cat : 6, pref : [ 'G','K','P','B','D','H','A','C','N','O','L','J','I','F','E' ] },
{ name : 'SUMIT KUMAR', cat : 6, pref : [ 'G','D','P','L','A','B','H','I','J','K','E','O','F','N','C' ] },
{ name : 'AMIT PRATAP', cat : 6, pref : [ 'K','P','B','G','D','J','M','L','S','T','U','C','N','A','R' ] },
{ name : 'RAVI PRAKASH', cat : 6, pref : [ 'G','D','P','B','H','F','K','I','A','J','E','N','O','L','C' ] },
{ name : 'SURAJ KUMAR', cat : 6, pref : [ 'N','B','J','G','L','D','P','H','A','E','K','O','C','F','I' ] },
{ name : 'MANOJ KUMAR YADAV', cat : 6, pref : [ 'G','D','P','K','L','H','B','A','I','E','F','J','O','N','C' ] },
{ name : 'HEMANT KUMAR', cat : 6, pref : [ 'N','J','G','K','P','D','B','L','M','H','O','C','E','F','I' ] },
{ name : 'ANOOP SINGH DAGUR', cat : 6, pref : [ 'P','K','','','','','','','','','','','','','' ] },
{ name : 'YADAGIRI CHALAMALLA', cat : 6, pref : [ 'I','A','L','E','B','P','H','C','F','K','D','G','J','N','O' ] },
{ name : 'DEVENDER', cat : 6, pref : [ 'G','D','P','B','K','L','H','A','I','J','E','N','C','F','O' ] },
{ name : 'HARSH VARDHAN SINGH CHAUHAN', cat : 6, pref : [ 'G','P','D','B','K','H','L','A','I','N','J','C','E','F','O' ] },
{ name : 'BARETHIYA ANSHU ASHOK', cat : 6, pref : [ 'B','L','P','G','H','I','A','D','C','F','E','K','N','J','O' ] },
{ name : 'SREENATH P', cat : 6, pref : [ 'F','E','A','H','G','I','L','M','J','C','D','K','B','P','N' ] },
{ name : 'NAVEEN KUMAR', cat : 6, pref : [ 'D','G','P','B','K','L','A','I','J','E','H','F','N','O','C' ] },
{ name : 'RAKESH KUMAR NARAIN', cat : 6, pref : [ 'N','G','J','K','D','P','B','C','L','H','A','I','E','F','O' ] },
{ name : 'RISHIKESH ANAND', cat : 6, pref : [ 'G','J','L','K','A','H','P','D','N','B','I','F','E','O','C' ] },
{ name : 'SHREY NARESH SINGH', cat : 6, pref : [ 'K','G','B','D','L','P','J','N','H','I','A','C','F','E','O' ] },
{ name : 'SUSHEEL CHOUDHARY', cat : 6, pref : [ 'P','G','B','D','L','H','A','I','K','F','E','J','N','O','C' ] },
{ name : 'SUSHEEL KUMAR', cat : 6, pref : [ 'P','G','D','B','H','K','L','J','I','C','E','F','N','O','' ] },
{ name : 'ROHIT KUMAR', cat : 6, pref : [ 'G','P','A','B','L','K','D','I','H','N','J','F','E','C','O' ] },
{ name : 'MRATUNJAY KATIYAR', cat : 6, pref : [ 'G','K','P','B','D','L','J','H','N','A','I','C','E','F','O' ] },
{ name : 'GAUTAM KUMAR', cat : 6, pref : [ 'N','K','J','C','B','G','P','D','A','L','H','M','I','E','F' ] },
{ name : 'DEVENDRA KUMAR JANGID', cat : 6, pref : [ 'P','L','G','D','H','A','B','K','I','C','E','F','N','O','J' ] },
{ name : 'NALLA PRADEEP', cat : 6, pref : [ 'I','A','E','C','J','L','H','M','P','F','G','B','D','N','O' ] },
{ name : 'VIVEK SUMAN', cat : 6, pref : [ 'G','N','K','D','P','B','L','A','J','E','I','C','H','F','O' ] },
{ name : 'AMIT', cat : 6, pref : [ 'G','D','K','B','L','P','J','A','H','I','E','F','N','O','C' ] },
{ name : 'DEVENDER KUMAR', cat : 6, pref : [ 'G','D','P','B','K','L','H','J','I','A','C','E','F','N','O' ] },
{ name : 'SHIVARAMANANDAM KUMMARI', cat : 6, pref : [ 'I','E','A','H','L','F','P','C','B','G','J','K','N','D','O' ] },
{ name : 'AJEET DANGI', cat : 6, pref : [ 'G','P','B','K','D','A','I','H','N','C','J','E','F','O','L' ] },
{ name : 'GAUTHAM KOKKU', cat : 6, pref : [ 'I','E','F','L','H','A','P','G','D','B','K','J','N','O','C' ] },
{ name : 'DONTHU SATISHNATH', cat : 6, pref : [ 'I','A','E','F','P','L','H','B','C','G','N','J','K','O','D' ] },
{ name : 'SUNEEL KUMAR', cat : 6, pref : [ 'G','K','P','L','H','D','A','M','B','F','I','E','C','J','N' ] },
{ name : 'ZEBA FARHEEN', cat : 6, pref : [ 'J','B','N','K','I','G','C','D','E','A','P','M','L','H','F' ] },
{ name : 'SAMUDRALA KISHAN', cat : 6, pref : [ 'I','A','E','L','G','P','H','F','B','C','D','J','N','K','O' ] },
{ name : 'SUMIT KUMAR GURJER', cat : 6, pref : [ 'G','P','L','B','D','H','A','K','I','J','E','F','N','C','O' ] },
{ name : 'MAHESH KUMAR YADAV', cat : 6, pref : [ 'G','D','P','B','K','J','A','E','H','L','C','N','F','O','I' ] },
{ name : 'MUKESH KUMAR', cat : 6, pref : [ 'G','N','K','D','P','L','J','B','I','A','H','C','E','F','O' ] },
{ name : 'SUBODH BHARTI', cat : 6, pref : [ 'N','J','B','K','P','G','L','I','D','E','A','F','O','H','C' ] },
{ name : 'AMRINDER SINGH', cat : 6, pref : [ 'D','G','K','P','B','H','N','J','I','O','L','A','C','F','E' ] },
{ name : 'DEVANSHU', cat : 6, pref : [ 'K','G','P','B','L','A','J','H','I','N','D','C','E','F','O' ] },
{ name : 'HEMENDRA KUMAR BENIWAL', cat : 6, pref : [ 'P','G','D','B','L','K','H','I','N','A','J','C','E','F','O' ] },
{ name : 'SUSHEEL KUMAR YADAV', cat : 6, pref : [ 'P','K','G','B','L','D','N','A','J','F','I','H','E','C','O' ] },
{ name : 'RAM SINGH YADAV', cat : 6, pref : [ 'K','P','B','J','N','H','L','C','G','I','F','E','D','O','A' ] },
{ name : 'VIRENDRA SINGH YADAV', cat : 6, pref : [ 'G','D','P','B','L','A','H','K','I','E','F','N','C','J','O' ] },
{ name : 'AMBICA MAHESWARI GUMMIDI', cat : 6, pref : [ 'I','E','A','F','L','P','J','H','C','G','D','B','K','N','O' ] },
{ name : 'MEENA SONI', cat : 6, pref : [ 'G','B','P','D','K','L','H','A','N','E','I','J','F','O','C' ] },
{ name : 'N YODHAN', cat : 6, pref : [ 'I','A','E','L','P','F','H','B','C','D','G','J','K','N','O' ] },
{ name : 'SANJAY PRIYAL', cat : 6, pref : [ 'G','D','N','J','K','B','C','P','L','I','E','A','H','F','O' ] },
{ name : 'CHINNAVENKATANAIDU L', cat : 6, pref : [ 'I','E','A','G','P','J','L','B','K','F','C','D','H','N','O' ] },
{ name : 'M SURESH', cat : 6, pref : [ 'I','A','L','E','H','F','B','J','K','G','D','P','N','O','C' ] },
{ name : 'DIKSHA YADAV', cat : 6, pref : [ 'K','G','B','P','D','N','A','E','I','C','F','H','J','L','O' ] },
{ name : 'TARA CHAND', cat : 6, pref : [ 'P','L','B','K','G','D','H','A','I','J','N','O','F','C','E' ] },
{ name : 'K RANJITH KUMAR', cat : 6, pref : [ 'I','A','E','H','L','F','P','C','B','J','G','K','D','N','O' ] },
{ name : 'SACHIN KUMAR', cat : 6, pref : [ 'G','K','D','B','P','N','J','H','L','M','A','I','O','E','F' ] },
{ name : 'SUBHASH CHANDRA', cat : 6, pref : [ 'G','P','L','H','D','B','I','K','A','J','N','F','E','O','C' ] },
{ name : 'DINESH CHOUDHARY', cat : 6, pref : [ 'G','P','L','K','B','H','D','I','A','J','E','C','N','F','O' ] },
{ name : 'NAGESH B', cat : 6, pref : [ 'I','L','A','H','B','P','C','F','G','D','J','K','N','E','O' ] },
{ name : 'ASHUTOSH SHARMA', cat : 6, pref : [ 'L','P','K','B','','','','','','','','','','','' ] },
{ name : 'HEMENT SINGH', cat : 6, pref : [ 'G','D','P','L','B','K','I','H','A','E','N','J','O','C','F' ] },
{ name : 'VISHWANATH KORRA', cat : 2, pref : [ 'I','A','E','L','H','F','G','B','C','D','J','K','N','O','P' ] },
{ name : 'RAHUL KASANA', cat : 6, pref : [ 'G','D','K','P','L','B','H','J','E','A','F','I','N','O','C' ] },
{ name : 'MANSHA BHARTI', cat : 6, pref : [ 'G','D','K','J','L','P','N','B','H','I','A','F','O','E','C' ] },
{ name : 'SONU KUMAR', cat : 6, pref : [ 'G','D','P','L','K','A','H','I','E','B','N','J','C','F','O' ] },
{ name : 'MD AZAD', cat : 6, pref : [ 'I','J','A','E','G','K','N','L','H','D','P','B','F','O','C' ] },
{ name : 'UMESH KUMAR', cat : 6, pref : [ 'G','D','P','K','L','B','H','A','J','I','N','C','E','F','O' ] },
{ name : 'PUNEET KUMAR', cat : 6, pref : [ 'G','K','P','D','H','L','A','B','I','J','F','E','C','N','O' ] },
{ name : 'MEESALA KIRAN KUMAR', cat : 6, pref : [ 'I','E','A','F','C','H','L','B','N','P','J','G','D','K','O' ] },
{ name : 'DEEPAK KUMAR', cat : 6, pref : [ 'G','D','P','K','B','L','H','A','E','I','J','N','F','C','O' ] },
{ name : 'AMANE SAGAR JALINDAR', cat : 6, pref : [ 'L','P','H','A','B','I','F','K','N','O','E','C','J','G','D' ] },
{ name : 'MUNNA KUMAR', cat : 6, pref : [ 'N','G','J','P','C','B','K','D','I','H','A','O','L','E','F' ] },
{ name : 'SAMEER KUMAR KATIYAR', cat : 6, pref : [ 'G','K','B','P','D','H','L','','','','','','','','' ] },
{ name : 'ARJUN KUMAR CHAURASIYA', cat : 6, pref : [ 'G','K','B','P','D','L','H','A','C','E','F','I','J','M','N' ] },
{ name : 'GOUTAM YADAV', cat : 6, pref : [ 'G','D','K','P','B','L','A','H','I','N','J','C','F','E','O' ] },
{ name : 'MANDEEP', cat : 6, pref : [ 'G','D','P','L','K','J','B','I','E','A','H','C','N','F','O' ] },
{ name : 'AJIT YADAV', cat : 6, pref : [ 'G','P','B','K','A','D','H','M','L','J','I','E','F','C','N' ] },
{ name : 'MANISH KUMAR SAVITA', cat : 6, pref : [ 'K','G','B','P','D','L','N','J','I','H','A','E','F','O','C' ] },
{ name : 'KALE SANKET SURESH', cat : 6, pref : [ 'L','P','A','H','I','E','F','J','B','K','G','D','N','C','O' ] },
{ name : 'RAMNANDAN KUMAR YADAV', cat : 6, pref : [ 'N','G','P','K','J','B','C','I','H','A','D','L','E','F','O' ] },
{ name : 'MANOJ PRABU P', cat : 6, pref : [ 'E','A','F','I','L','O','H','D','J','G','C','B','K','P','N' ] },
{ name : 'ADITYA PATEL', cat : 6, pref : [ 'B','P','G','H','D','L','I','K','A','F','E','C','M','N','J' ] },
{ name : 'SATISH', cat : 6, pref : [ 'L','J','K','N','B','G','D','P','H','I','F','O','E','A','C' ] },
{ name : 'AVINASH CHANDALURI', cat : 6, pref : [ 'I','A','E','L','F','J','B','H','C','P','N','K','G','D','O' ] },
{ name : 'BALRAM KUMAR', cat : 6, pref : [ 'N','G','P','J','K','L','B','C','H','A','D','I','E','O','F' ] },
{ name : 'ANIL KUMAR KHOLA', cat : 6, pref : [ 'G','D','P','B','K','H','O','I','J','M','L','A','N','F','E' ] },
{ name : 'HARISH BIJARNIYA', cat : 6, pref : [ 'G','P','B','D','K','H','I','A','N','J','E','F','C','O','L' ] },
{ name : 'SANTOSH KUMAR VERMA', cat : 6, pref : [ 'K','B','D','G','P','L','H','J','N','C','I','A','F','E','O' ] },
{ name : 'MOHAMMAD ASJAD MUJTABA', cat : 6, pref : [ 'K','G','D','P','B','I','A','H','N','E','F','J','L','C','O' ] },
{ name : 'BIPIN KUMAR', cat : 6, pref : [ 'N','J','G','P','B','K','H','D','L','M','A','C','O','I','E' ] },
{ name : 'VED PRAKASH', cat : 6, pref : [ 'D','G','P','B','H','A','F','N','K','L','C','I','E','J','O' ] },
{ name : 'NIKHIL CHOUDHARY', cat : 6, pref : [ 'G','D','P','B','K','H','L','N','J','I','A','E','F','O','C' ] },
{ name : 'RAVI SHARMA', cat : 6, pref : [ 'N','J','K','B','P','G','A','L','H','I','C','D','E','F','O' ] },
{ name : 'RAJAT KUMAR BARNWAL', cat : 6, pref : [ 'N','P','J','K','G','B','L','H','I','A','E','F','O','C','D' ] },
{ name : 'ANKIT JANGRA', cat : 6, pref : [ 'G','P','D','K','L','E','H','I','A','J','F','C','B','N','O' ] },
{ name : 'BHANU PRATAP SINGH', cat : 6, pref : [ 'N','K','J','P','B','G','A','I','L','D','H','E','F','O','C' ] },
{ name : 'GUNDU DINESH KUMAR', cat : 6, pref : [ 'I','H','E','A','F','C','P','L','B','K','G','J','N','D','O' ] },
{ name : 'KARAN KUMAR', cat : 6, pref : [ 'G','N','J','B','P','D','K','C','L','H','A','I','E','F','O' ] },
{ name : 'JAKKULA PRANAY', cat : 6, pref : [ 'I','A','E','L','F','H','P','B','G','J','K','C','D','N','O' ] },
{ name : 'MD AKBAL QURASHY', cat : 6, pref : [ 'J','C','K','G','I','P','L','B','N','D','A','E','H','F','O' ] },
{ name : 'SADUL SINGH', cat : 6, pref : [ 'G','D','P','L','B','H','I','K','J','A','C','F','E','N','O' ] },
{ name : 'SAURABH', cat : 6, pref : [ 'G','N','J','K','P','B','C','D','I','A','L','H','F','E','O' ] },
{ name : 'RAHUL', cat : 6, pref : [ 'G','D','P','B','L','K','A','H','I','C','J','N','F','O','E' ] },
{ name : 'PARAMA NANDA SHARMA', cat : 6, pref : [ 'N','K','J','B','P','L','G','O','D','I','H','F','A','E','C' ] },
{ name : 'DHARMENDRA KUMAR', cat : 6, pref : [ 'N','J','B','K','P','G','L','E','F','I','D','A','H','O','C' ] },
{ name : 'RAMA KRISHNA DASARI', cat : 6, pref : [ 'I','A','E','F','C','M','P','H','L','G','J','D','B','N','O' ] },
{ name : 'AJEET SINGH', cat : 6, pref : [ 'K','G','P','D','B','L','I','A','J','C','N','H','E','F','O' ] },
{ name : 'VASEEM', cat : 6, pref : [ 'G','D','K','B','P','L','J','H','A','I','N','O','F','E','C' ] },
{ name : 'ROSHAN KUMAR', cat : 6, pref : [ 'J','N','P','L','W','D','H','Y','X','B','K','A','G','E','I' ] },
{ name : 'RAVI KUMAR', cat : 6, pref : [ 'G','D','B','P','L','M','H','K','A','I','E','F','J','O','N' ] },
{ name : 'AMIT YADAV', cat : 6, pref : [ 'G','P','L','H','D','B','K','I','A','O','E','F','J','N','C' ] },
{ name : 'ADITYA KUMAR', cat : 6, pref : [ 'P','H','B','L','G','D','K','A','J','I','F','E','C','N','O' ] },
{ name : 'LEELADHAR GURJAR', cat : 6, pref : [ 'G','P','K','B','D','L','A','H','I','J','E','C','N','O','F' ] },
{ name : 'KOPULA BALAKRISHNA', cat : 6, pref : [ 'I','A','P','B','H','C','L','G','D','F','O','J','E','N','K' ] },
{ name : 'MUKUL', cat : 6, pref : [ 'K','P','B','G','L','H','I','A','D','J','E','C','F','N','O' ] },
{ name : 'LAXMAN DAN', cat : 6, pref : [ 'P','L','B','A','J','G','K','D','F','H','N','E','C','I','O' ] },
{ name : 'ANSHU BHARTI', cat : 6, pref : [ 'P','J','B','N','G','D','L','H','M','I','K','A','F','E','O' ] },
{ name : 'PANKAJ BHATI', cat : 6, pref : [ 'G','K','P','D','B','L','J','H','A','F','I','N','O','C','E' ] },
{ name : 'JOGENDER SINGH', cat : 6, pref : [ 'G','D','P','B','L','K','H','J','I','A','E','F','N','O','C' ] },
{ name : 'SUNNY KUMAR BARNWAL', cat : 6, pref : [ 'N','J','B','K','P','G','C','I','D','E','H','L','M','O','A' ] },
{ name : 'KRITIKA KUMAWAT', cat : 6, pref : [ 'G','P','D','B','L','K','I','A','H','E','J','F','O','N','C' ] },
{ name : 'PRASHANT CHOUDHARY', cat : 6, pref : [ 'G','P','B','L','D','K','H','I','J','A','N','F','E','O','C' ] },
{ name : 'PINJARI DASTAGIRI', cat : 6, pref : [ 'I','A','H','M','E','F','P','D','G','B','L','K','C','N','O' ] },
{ name : 'MAHESH SINGH', cat : 6, pref : [ 'G','D','L','P','H','B','J','K','A','I','E','N','F','O','C' ] },
{ name : 'AMIT KUMAR', cat : 6, pref : [ 'G','D','P','K','B','H','L','J','A','E','N','C','F','I','O' ] },
{ name : 'SANDEEP BARNWAL', cat : 6, pref : [ 'N','G','J','K','D','P','B','E','I','A','L','H','F','C','O' ] },
{ name : 'SUNIL NIRANIA', cat : 6, pref : [ 'G','P','L','B','D','K','A','H','J','E','F','I','N','O','C' ] },
{ name : 'SACHIN KUMAR', cat : 6, pref : [ 'G','P','H','D','B','M','I','A','N','J','O','L','E','F','K' ] },
{ name : 'HARDIPAK SINGH', cat : 6, pref : [ 'K','G','D','B','N','L','H','P','I','J','A','E','C','F','O' ] },
{ name : 'DEEPAK KUMAR', cat : 6, pref : [ 'P','K','L','B','G','D','H','A','I','J','E','F','N','C','O' ] },
{ name : 'GANDIKOTA NAGABHUSHANAM', cat : 6, pref : [ 'I','A','E','L','G','H','P','F','J','C','B','D','K','N','O' ] },
{ name : 'NIRBHAY KUMAR', cat : 6, pref : [ 'N','J','K','C','B','D','P','H','L','G','O','I','A','E','F' ] },
{ name : 'ANISH KUMAR', cat : 6, pref : [ 'G','D','N','K','J','B','C','P','I','A','L','H','F','E','O' ] },
{ name : 'PRAVEEN KUMAR KAKI', cat : 6, pref : [ 'I','A','H','L','F','B','E','J','P','D','G','C','K','N','O' ] },
{ name : 'SURAJ KUMAR', cat : 6, pref : [ 'G','D','P','J','K','N','B','M','L','H','A','E','I','F','C' ] },
{ name : 'HEMANT SHARMA', cat : 6, pref : [ 'G','D','P','L','B','H','I','A','K','E','F','J','C','O','N' ] },
{ name : 'NAVEEN KUMAR', cat : 6, pref : [ 'D','G','P','B','K','L','H','I','A','J','N','F','E','O','C' ] },
{ name : 'MUKESH KUMAR SHAMBHUTI', cat : 6, pref : [ 'G','D','H','K','P','I','N','J','B','L','O','A','F','E','C' ] },
{ name : 'YOGESH JANGID', cat : 6, pref : [ 'P','B','G','L','I','A','D','J','E','K','H','M','F','N','O' ] },
{ name : 'RAMENDU BHASKER', cat : 6, pref : [ 'G','P','B','K','N','J','L','A','C','H','O','D','I','E','F' ] },
{ name : 'SUDHIR VOGGU', cat : 6, pref : [ 'I','L','M','E','A','P','F','G','J','D','K','H','B','N','O' ] },
{ name : 'MANISH KUMAR', cat : 6, pref : [ 'G','D','K','P','L','B','H','A','J','I','C','N','F','O','E' ] },
{ name : 'SAURAV SUMAN', cat : 6, pref : [ 'G','P','L','B','D','A','H','J','K','N','C','I','E','F','O' ] },
{ name : 'MINAKSHI JAISWAL', cat : 6, pref : [ 'G','N','J','K','B','L','P','D','C','A','I','H','E','F','O' ] },
{ name : 'GOWLEKAR DATTA SAI NATH', cat : 6, pref : [ 'L','A','I','H','E','F','J','B','P','D','G','C','O','K','N' ] },
{ name : 'SHUBHAM KUMAR GUPTA', cat : 6, pref : [ 'P','J','L','B','K','N','G','A','I','E','F','H','D','C','O' ] },
{ name : 'MOHIT KUMAR', cat : 6, pref : [ 'G','D','P','B','K','L','A','I','H','N','C','J','E','F','O' ] },
{ name : 'RAHUL KUMAR', cat : 6, pref : [ 'J','N','B','I','K','C','G','L','P','H','O','D','A','E','F' ] },
{ name : 'KADIYALA VENKATRAMAN PRANEETH', cat : 6, pref : [ 'I','F','A','E','P','J','B','L','K','H','G','O','D','N','C' ] },
{ name : 'VAIBHAV PRAJAPATI', cat : 6, pref : [ 'G','K','B','P','L','H','D','J','I','A','C','T','U','S','E' ] },
{ name : 'AMIT KUMAR', cat : 6, pref : [ 'P','K','G','A','H','L','B','I','J','C','D','F','E','O','N' ] },
{ name : 'PRAVAL SAINI', cat : 6, pref : [ 'G','D','P','L','B','K','A','I','H','C','N','J','E','F','O' ] },
{ name : 'AMARKANT KUMAR HIMANSHU', cat : 6, pref : [ 'N','J','G','P','D','B','K','O','L','M','I','A','H','E','' ] },
{ name : 'VINIT YADAV', cat : 6, pref : [ 'G','D','P','B','L','A','H','K','I','J','N','E','F','O','C' ] },
{ name : 'KILLI SANDEEP', cat : 6, pref : [ 'I','A','E','F','L','P','B','H','G','J','K','D','C','N','O' ] },
{ name : 'MANJUNATH M', cat : 6, pref : [ 'I','A','E','F','C','P','J','B','D','G','H','K','L','N','O' ] },
{ name : 'GAURANG VERMA', cat : 6, pref : [ 'K','G','B','D','P','J','A','I','H','L','N','E','F','O','C' ] },
{ name : 'RUBY ACHARYA', cat : 6, pref : [ 'G','K','J','N','H','P','L','D','B','A','I','F','E','O','' ] },
{ name : 'BIKRAM GHOSH', cat : 6, pref : [ 'J','C','N','B','P','L','A','K','I','O','H','F','E','D','G' ] },
{ name : 'SUNIL KUMAR', cat : 6, pref : [ 'G','D','P','B','I','A','K','L','H','J','C','E','N','F','O' ] },
{ name : 'VIKRAM KUMAR SHAW', cat : 6, pref : [ 'J','N','C','G','K','B','P','O','I','L','E','D','A','H','F' ] },
{ name : 'GAURAV JHAJHARIA', cat : 6, pref : [ 'P','G','D','B','K','H','L','J','N','I','A','O','E','F','C' ] },
{ name : 'SHUBHAM GUPTA', cat : 6, pref : [ 'G','D','P','B','L','H','I','K','J','N','M','A','F','E','C' ] },
{ name : 'PUNIT DROLIYA', cat : 6, pref : [ 'G','D','K','P','L','M','H','B','A','J','F','E','O','C','N' ] },
{ name : 'BOKAM SURI NAIDU', cat : 6, pref : [ 'I','E','A','F','H','C','P','J','B','N','K','L','G','D','O' ] },
{ name : 'SANJAY KUMAR YADAV', cat : 6, pref : [ 'K','G','D','B','L','P','H','A','E','I','J','N','F','C','O' ] },
{ name : 'VENKATESH KASARLA', cat : 6, pref : [ 'I','A','E','F','P','L','B','H','C','G','D','N','K','J','O' ] },
{ name : 'NITENDRA YADAV', cat : 6, pref : [ 'G','K','B','P','L','H','D','A','J','I','N','F','C','E','O' ] },
{ name : 'BHARATISH YADAV', cat : 6, pref : [ 'G','D','P','B','K','H','A','I','J','N','O','E','F','L','C' ] },
{ name : 'PINKESH YADAV', cat : 6, pref : [ 'G','P','B','D','L','K','H','N','A','C','J','T','O','F','E' ] },
{ name : 'RAJBEER SWAMI', cat : 6, pref : [ 'K','G','P','H','A','J','F','L','I','D','E','B','O','N','C' ] },
{ name : 'RAHUL VERMA', cat : 6, pref : [ 'G','D','P','B','L','A','I','K','F','E','N','C','J','H','O' ] },
{ name : 'SUNITA KUMARI', cat : 6, pref : [ 'J','N','G','K','B','L','D','P','I','A','H','F','E','O','C' ] },
{ name : 'HEMLATA MEEL', cat : 6, pref : [ 'G','D','P','B','K','I','L','H','A','J','F','E','N','C','O' ] },
{ name : 'ANADARAM PARIHAR', cat : 6, pref : [ 'G','P','D','B','L','H','K','J','A','I','E','F','N','C','O' ] },
{ name : 'JITENDRA SINGH DANGI', cat : 6, pref : [ 'G','D','P','M','B','L','K','A','J','H','','','','','' ] },
{ name : 'AMIT KUMAR', cat : 6, pref : [ 'G','N','B','K','J','D','P','C','A','L','I','H','E','F','O' ] },
{ name : 'SURAJ RAJ', cat : 6, pref : [ 'J','N','K','D','B','P','A','I','C','G','E','L','F','H','O' ] },
{ name : 'SATISH SINGH', cat : 6, pref : [ 'G','D','P','K','B','L','I','A','J','N','C','E','H','F','O' ] },
{ name : 'BABY KUMARI', cat : 6, pref : [ 'N','J','B','P','L','K','G','A','D','I','H','E','F','O','' ] },
{ name : 'BHARAT MUNDEL', cat : 6, pref : [ 'P','H','D','A','B','J','G','L','C','F','E','I','K','O','N' ] },
{ name : 'DURGESH YADAV', cat : 6, pref : [ 'G','K','P','N','B','D','J','L','A','I','C','H','E','F','O' ] },
{ name : 'RITESH KUMAR GUPTA', cat : 6, pref : [ 'N','G','J','B','K','C','P','L','D','A','H','F','I','E','O' ] },
{ name : 'ROHIT KUMAR', cat : 6, pref : [ 'G','D','P','B','K','L','J','H','A','I','O','N','C','E','F' ] },
{ name : 'NITEESH KUMAR', cat : 6, pref : [ 'K','B','P','L','N','J','A','I','H','E','F','C','O','G','D' ] },
{ name : 'RAJENDRA', cat : 6, pref : [ 'G','D','Q','K','B','N','A','J','O','H','C','E','F','P','M' ] },
{ name : 'SHASHI MAHI RANJAN', cat : 6, pref : [ 'N','J','K','G','P','L','B','O','','','','','','','' ] },
{ name : 'KONGANA NAGA SAIRAM', cat : 6, pref : [ 'I','E','A','P','B','F','C','H','K','J','G','L','D','N','O' ] },
{ name : 'PRAVESH JANGRA', cat : 6, pref : [ 'G','D','P','B','L','H','K','I','A','O','E','F','J','N','C' ] },
{ name : 'BHAGWAN SAHAY KUMAWAT', cat : 6, pref : [ 'G','D','P','L','B','K','H','A','I','E','J','N','F','C','O' ] },
{ name : 'DHARAMVIR', cat : 6, pref : [ 'P','K','B','G','D','L','J','A','H','I','F','E','N','O','C' ] },
{ name : 'SANSKAR KUMAR', cat : 6, pref : [ 'N','J','K','B','C','D','G','A','I','E','H','L','P','F','O' ] },
{ name : 'SATISH KUMAR ROUT', cat : 6, pref : [ 'J','N','I','K','G','C','B','P','M','A','E','L','H','F','D' ] },
{ name : 'MANISH KUMAR', cat : 6, pref : [ 'N','J','K','B','G','P','I','L','H','A','D','E','F','O','' ] },
{ name : 'NEELESH KUMAR SINGH', cat : 6, pref : [ 'G','K','L','M','D','P','B','A','H','J','I','E','F','N','C' ] },
{ name : 'KAMMARI KIRANKUMAR', cat : 6, pref : [ 'I','A','E','L','G','P','H','F','B','C','J','D','K','N','O' ] },
{ name : 'PRASHANT SANAS', cat : 6, pref : [ 'B','H','P','G','D','L','I','K','A','J','E','F','N','C','O' ] },
{ name : 'ABHISHEK KUMAR VERMA', cat : 6, pref : [ 'N','J','K','B','G','P','D','I','L','C','H','A','E','F','O' ] },
{ name : 'ALLAKA DEVI CHARAN', cat : 6, pref : [ 'I','E','G','A','P','F','D','B','K','J','L','H','N','C','O' ] },
{ name : 'BHAWNA NISHAL', cat : 6, pref : [ 'G','D','P','B','K','H','A','I','F','L','E','N','C','J','O' ] },
{ name : 'T CHANDU HARSHAVARDHAN', cat : 6, pref : [ 'I','E','A','L','H','G','P','F','J','C','B','D','K','N','O' ] },
{ name : 'VIKAS YADAV', cat : 6, pref : [ 'G','D','K','P','B','L','H','N','A','J','I','F','E','C','O' ] },
{ name : 'JONTY', cat : 6, pref : [ 'G','D','P','K','L','A','B','H','I','J','C','E','N','F','O' ] },
{ name : 'ARAVIND S', cat : 6, pref : [ 'F','A','E','I','H','L','D','G','J','B','K','N','O','P','C' ] },
{ name : 'ASHISH KUMAR', cat : 6, pref : [ 'N','G','K','J','D','P','B','L','I','C','O','A','H','E','F' ] },
{ name : 'SANTOSH KUMAR', cat : 6, pref : [ 'G','N','K','J','B','D','C','I','P','L','A','F','H','E','O' ] },
{ name : 'ASHISH RANJAN', cat : 6, pref : [ 'G','J','K','D','P','L','B','N','A','I','H','E','F','O','C' ] },
{ name : 'MOHAMMAD KAZIM', cat : 6, pref : [ 'K','G','D','L','P','I','H','A','B','N','F','C','E','J','O' ] },
{ name : 'MOHAMMAD TALAHA', cat : 6, pref : [ 'K','G','P','B','J','L','D','I','N','A','C','H','F','E','O' ] },
{ name : 'CHANDAN KUMAR SUMAN', cat : 6, pref : [ 'N','J','K','G','B','P','L','D','A','I','H','E','O','F','' ] },
{ name : 'K GIREESH', cat : 6, pref : [ 'I','A','E','F','P','H','B','J','G','K','D','L','C','N','O' ] },
{ name : 'PUSHKAR KUMAR', cat : 6, pref : [ 'P','N','C','G','J','B','K','I','A','H','L','D','O','E','F' ] },
{ name : 'P RAVI KUMAR', cat : 6, pref : [ 'I','A','F','E','H','L','G','B','D','C','P','J','K','O','N' ] },
{ name : 'ANKIT YADAV', cat : 6, pref : [ 'G','D','P','B','K','L','H','N','J','I','A','E','F','C','O' ] },
{ name : 'AMIT KUMAR YADAV', cat : 6, pref : [ 'K','P','B','J','N','C','I','A','G','D','H','L','F','E','O' ] },
{ name : 'RAHUL', cat : 6, pref : [ 'P','L','H','J','B','G','D','I','E','A','C','N','O','F','K' ] },
{ name : 'MOHINI RAJPUT', cat : 6, pref : [ 'P','K','G','D','B','H','J','L','N','A','C','E','I','F','O' ] },
{ name : 'SACHIN RAJ', cat : 6, pref : [ 'N','J','K','G','D','L','P','I','H','B','F','A','E','O','C' ] },
{ name : 'ABHISHEK KUMAR', cat : 6, pref : [ 'N','J','K','P','B','L','G','D','I','A','C','O','H','E','F' ] },
{ name : 'VINOD KUMAR', cat : 6, pref : [ 'G','D','P','B','K','L','I','A','E','F','J','N','H','C','O' ] },
{ name : 'NITESH KUMAR', cat : 6, pref : [ 'D','G','P','B','K','L','A','H','N','O','J','I','F','E','C' ] },
{ name : 'BRAJENDRA SINGH', cat : 6, pref : [ 'P','K','G','D','H','B','L','J','I','A','E','N','F','C','O' ] },
{ name : 'CHANDAN SINGH', cat : 6, pref : [ 'N','J','C','K','B','G','I','P','O','E','A','H','D','L','F' ] },
{ name : 'PRATAP KUMAR SAH', cat : 6, pref : [ 'N','J','K','B','G','D','P','L','H','O','C','I','E','A','F' ] },
{ name : 'SANDEEP KUMAR', cat : 6, pref : [ 'J','B','P','K','N','I','C','A','G','L','H','O','D','F','E' ] },
{ name : 'AKASH KUMAR', cat : 6, pref : [ 'P','K','B','G','J','D','N','A','E','I','F','H','L','C','O' ] },
{ name : 'NAVIN KUMAR', cat : 6, pref : [ 'J','N','G','C','P','L','K','D','I','A','H','E','B','F','O' ] },
{ name : 'PANKAJ KUMAR', cat : 6, pref : [ 'G','K','D','B','P','L','J','H','A','N','F','I','E','O','C' ] },
{ name : 'SUMIT KUMAR', cat : 6, pref : [ 'P','G','L','A','H','I','C','N','B','K','D','J','E','O','F' ] },
{ name : 'KISHOR KUMAR', cat : 6, pref : [ 'P','G','B','D','L','H','A','K','I','E','C','J','N','O','F' ] },
{ name : 'BURADA SAI VIDYASAGAR', cat : 6, pref : [ 'I','A','E','F','G','D','L','P','H','B','K','J','N','O','C' ] },
{ name : 'MANOJ CHOUDHARY', cat : 6, pref : [ 'K','G','B','D','P','L','I','A','H','J','N','F','C','E','O' ] },
{ name : 'AISHWARYA JAISWAL', cat : 6, pref : [ 'K','L','G','P','B','J','D','I','H','A','E','F','N','O','C' ] },
{ name : 'ANAND PRAKASH', cat : 6, pref : [ 'G','P','L','H','D','K','N','B','J','A','I','F','E','O','C' ] },
{ name : 'SANKET SHIVHARE', cat : 6, pref : [ 'B','G','P','L','D','K','I','H','A','N','J','E','F','C','O' ] },
{ name : 'ANKIT', cat : 6, pref : [ 'G','D','K','P','B','L','J','A','I','H','N','E','C','O','F' ] },
{ name : 'ABHISHEK KUMAR JAISWAL', cat : 6, pref : [ 'H','J','K','P','B','N','G','D','L','C','A','I','O','F','E' ] },
{ name : 'DEVANSH SAHU', cat : 6, pref : [ 'G','D','P','L','B','H','A','K','I','N','E','J','F','C','O' ] },
{ name : 'HEMANT KUMAR TANWAR', cat : 6, pref : [ 'P','B','D','G','H','K','L','I','A','E','J','F','C','O','N' ] },
{ name : 'RAKESH KUMAR SAINI', cat : 6, pref : [ 'G','D','P','B','K','L','H','I','A','J','E','F','N','C','O' ] },
{ name : 'ROUSHAN KUMAR SINGH', cat : 6, pref : [ 'N','G','P','J','B','K','D','C','L','H','A','I','E','F','O' ] },
{ name : 'TAPPU BISWAS', cat : 1, pref : [ 'J','C','N','B','L','G','O','K','H','A','I','P','D','E','F' ] },
{ name : 'K SURESH KUMAR', cat : 1, pref : [ 'I','E','F','A','C','D','P','B','M','N','H','J','L','G','K' ] },
{ name : 'SATISH SAROHA', cat : 1, pref : [ 'G','P','B','K','H','L','A','C','E','F','I','J','D','N','O' ] },
{ name : 'JIT SAHA', cat : 1, pref : [ 'J','N','C','O','D','K','B','I','G','L','M','H','P','A','E' ] },
{ name : 'BHUPENDER', cat : 1, pref : [ 'G','P','L','D','A','H','K','B','M','E','I','F','J','N','C' ] },
{ name : 'ARUN KUMAR', cat : 1, pref : [ 'G','K','D','B','P','L','A','J','N','H','I','E','C','F','O' ] },
{ name : 'PABITRA ROY', cat : 1, pref : [ 'J','P','B','G','F','A','C','L','O','K','D','I','E','N','M' ] },
{ name : 'SHASHI SHEKHAR', cat : 1, pref : [ 'G','N','K','D','L','P','B','A','H','E','F','I','O','C','J' ] },
{ name : 'JADI SRIKANTH', cat : 1, pref : [ 'I','A','L','E','H','M','C','B','D','J','N','P','O','F','G' ] },
{ name : 'PAWAN KUMAR', cat : 1, pref : [ 'G','D','P','L','A','H','B','J','I','K','E','C','F','N','O' ] },
{ name : 'RAJKESH MEENA', cat : 2, pref : [ 'G','P','B','D','K','L','I','H','A','J','F','E','N','O','C' ] },
{ name : 'DHARM SINGH BAIRVA', cat : 1, pref : [ 'G','P','L','H','K','D','B','A','C','E','F','N','I','J','O' ] },
{ name : 'AJAY KUMAR', cat : 1, pref : [ 'G','P','D','K','L','B','H','J','E','F','A','I','C','N','O' ] },
{ name : 'HUNATA RAM', cat : 1, pref : [ 'G','D','P','B','L','M','K','A','C','I','N','E','F','H','O' ] },
{ name : 'SUBHANKAR SAHA', cat : 1, pref : [ 'J','C','P','L','G','D','N','K','H','F','E','I','B','A','O' ] },
{ name : 'VIPUL SAHAI', cat : 1, pref : [ 'G','K','D','L','B','P','H','A','C','I','E','J','F','N','O' ] },
{ name : 'NARESH KUMAR RAIGER', cat : 1, pref : [ 'G','P','D','L','B','K','J','A','C','I','E','F','H','N','O' ] },
{ name : 'ASHARAM MEENA', cat : 2, pref : [ 'P','G','B','K','L','H','A','I','J','F','E','N','C','D','O' ] },
{ name : 'VIJAY SINGH', cat : 1, pref : [ 'G','K','L','A','D','H','J','B','P','C','E','N','I','F','O' ] },
{ name : 'LALIT KUMAR', cat : 1, pref : [ 'G','K','D','P','L','H','A','B','J','O','N','C','E','F','I' ] },
{ name : 'M RAKESH', cat : 1, pref : [ 'I','A','H','L','F','E','C','J','B','P','N','G','D','K','O' ] },
{ name : 'RAJ KUMAR MEENA', cat : 2, pref : [ 'G','P','B','K','L','H','F','J','I','D','C','N','A','O','E' ] },
{ name : 'VIKAS KUMAR', cat : 1, pref : [ 'G','D','P','H','B','L','A','','','','','','','','' ] },
{ name : 'KULDEEP SINGH', cat : 1, pref : [ 'G','D','K','P','H','L','J','A','I','B','N','C','O','F','E' ] },
{ name : 'KAPIL NIGAM', cat : 1, pref : [ 'G','K','D','P','H','L','B','A','C','E','F','I','J','N','O' ] },
{ name : 'OM PRAKASH MEENA', cat : 2, pref : [ 'P','G','L','H','','','','','','','','','','','' ] },
{ name : 'VIKASH TANWAR', cat : 1, pref : [ 'G','D','P','L','A','K','B','H','E','I','J','F','C','O','N' ] },
{ name : 'YOGESH KUMAR SINGH', cat : 1, pref : [ 'G','K','D','B','*','*','*','*','*','*','*','*','*','*','*' ] },
{ name : 'HINAYKUMAR MARUTI SONKAWADE', cat : 1, pref : [ 'L','P','H','I','A','F','B','G','D','N','K','E','C','J','O' ] },
{ name : 'VINOD KUMAR REGAR', cat : 1, pref : [ 'P','G','D','H','A','I','E','F','L','O','J','K','B','N','C' ] },
{ name : 'NITESH KUMAR JATAV', cat : 1, pref : [ 'G','D','P','K','B','L','H','A','J','N','E','F','I','C','O' ] },
{ name : 'RISHABHA PAWAN', cat : 1, pref : [ 'G','P','B','L','H','D','K','A','J','I','F','O','C','E','N' ] },
{ name : 'SUSHIL KUMAR MEENA', cat : 2, pref : [ 'G','P','L','K','D','B','A','H','N','J','E','C','I','F','O' ] },
{ name : 'GONDIPALLI RAVIKANTH', cat : 1, pref : [ 'I','A','E','H','F','L','P','C','B','G','N','J','K','D','O' ] },
{ name : 'ASHISH', cat : 1, pref : [ 'G','D','P','L','K','B','H','A','J','C','E','F','I','N','O' ] },
{ name : 'NARENDER', cat : 1, pref : [ 'G','D','P','B','L','K','A','H','I','C','J','N','F','O','E' ] },
{ name : 'RANJEET SINGH', cat : 1, pref : [ 'T','S','G','D','K','P','L','J','A','I','U','Q','M','H','R' ] },
{ name : 'RAHUL KUMAR', cat : 1, pref : [ 'K','B','P','L','G','D','M','H','N','F','A','I','E','J','O' ] },
{ name : 'POONAM KUMARI', cat : 1, pref : [ 'G','D','L','P','B','K','A','H','I','N','E','J','F','O','C' ] },
{ name : 'JAGMOHAN MEENA', cat : 2, pref : [ 'G','P','K','D','L','I','H','F','B','A','N','J','C','O','E' ] },
{ name : 'RAJENDRA KUMAR BAIRWA', cat : 1, pref : [ 'G','P','B','L','K','D','M','H','J','A','I','F','E','N','O' ] },
{ name : 'MANISH KUMAR', cat : 1, pref : [ 'G','K','B','P','D','H','L','N','J','A','C','I','E','F','O' ] },
{ name : 'VAISHALI ANAND', cat : 1, pref : [ 'B','P','K','L','N','J','G','D','A','H','I','C','E','F','O' ] },
{ name : 'NAVEEN', cat : 1, pref : [ 'G','D','P','B','L','A','K','H','I','J','F','E','N','C','O' ] },
{ name : 'JAYDEEP', cat : 1, pref : [ 'P','L','H','D','K','B','C','J','A','E','F','I','G','N','O' ] },
{ name : 'SANDEEP KUMAR', cat : 1, pref : [ 'K','B','P','J','M','H','N','G','D','L','I','F','A','O','C' ] },
{ name : 'NEELAM MEENA', cat : 2, pref : [ 'G','P','K','L','H','A','I','E','B','J','F','C','N','O','D' ] },
{ name : 'KIRAN KUMAR B', cat : 1, pref : [ 'I','H','A','E','L','M','G','D','F','J','N','C','O','P','K' ] },
{ name : 'MUKESH KUMAR', cat : 1, pref : [ 'K','G','D','B','P','J','C','L','H','I','A','N','E','F','O' ] },
{ name : 'VINOD KUMAR MEENA', cat : 2, pref : [ 'G','P','D','B','K','M','L','A','H','I','E','J','C','N','O' ] },
{ name : 'BANDELA SAIBABA', cat : 1, pref : [ 'I','E','H','F','A','L','P','D','C','B','G','J','N','O','K' ] },
{ name : 'ASHISH KUMAR', cat : 1, pref : [ 'G','K','D','L','P','B','H','J','N','I','A','C','E','F','O' ] },
{ name : 'J PRASHANT', cat : 1, pref : [ 'G','D','K','I','B','A','C','F','H','J','L','E','N','O','P' ] },
{ name : 'MANISH JHINGONIYA', cat : 1, pref : [ 'G','D','P','B','L','I','K','A','H','N','J','E','F','O','C' ] },
{ name : 'PROLOY DAS', cat : 1, pref : [ 'J','N','O','C','K','G','B','L','D','P','H','I','F','A','E' ] },
{ name : 'JAY KUMAR KUNVAR', cat : 1, pref : [ 'P','K','B','G','D','L','A','H','E','F','I','N','J','C','O' ] },
{ name : 'VIJAY SINGH', cat : 1, pref : [ 'G','D','P','B','L','I','A','K','H','J','N','F','E','O','C' ] },
{ name : 'SUMIT DUTTA', cat : 1, pref : [ 'K','G','B','P','J','L','A','N','I','D','E','C','H','O','F' ] },
{ name : 'AKHIL T K', cat : 1, pref : [ 'F','A','E','I','L','B','J','P','H','C','G','K','D','N','O' ] },
{ name : 'BHARATHKUMAR GUDEM', cat : 1, pref : [ 'I','A','E','H','F','B','P','N','D','G','K','J','L','C','O' ] },
{ name : 'AKASH KUMAR SIDDHARTH', cat : 1, pref : [ 'K','G','D','B','P','L','J','H','A','I','N','E','F','C','O' ] },
{ name : 'ABHISHEK RANJAN', cat : 1, pref : [ 'G','K','D','P','A','J','I','B','O','E','F','H','L','C','N' ] },
{ name : 'NARENDER SINGH', cat : 1, pref : [ 'W','Y','G','D','K','P','B','A','M','H','N','L','O','J','I' ] },
{ name : 'MANJIT LAL', cat : 1, pref : [ 'K','G','J','N','B','C','L','P','I','D','A','H','F','O','E' ] },
{ name : 'KOPPU SAI BABA', cat : 1, pref : [ 'I','E','A','G','F','P','H','L','B','J','C','D','K','N','O' ] },
{ name : 'VAIBHAV GAUTAM', cat : 1, pref : [ 'G','D','P','K','B','H','L','A','I','F','J','N','E','C','O' ] },
{ name : 'RAKHI KOTNISH', cat : 1, pref : [ 'G','D','P','L','B','A','H','K','J','C','I','E','N','O','F' ] },
{ name : 'PANKAJ INDORA', cat : 1, pref : [ 'G','D','K','P','L','B','H','A','I','F','E','J','N','C','O' ] },
{ name : 'RADHA KISHAN MEENA', cat : 2, pref : [ 'G','P','B','K','L','J','H','I','E','A','N','O','F','D','C' ] },
{ name : 'NARINDER PAL SINGH', cat : 1, pref : [ 'D','G','P','B','K','A','I','H','L','J','E','F','N','O','C' ] },
{ name : 'RISHABH PARIHAR', cat : 1, pref : [ 'G','D','P','L','B','K','H','A','I','J','C','N','E','F','O' ] },
{ name : 'KETAVATH VENKATESH', cat : 2, pref : [ 'I','A','G','M','E','H','P','L','J','K','B','F','C','D','N' ] },
{ name : 'BETHALA SONI', cat : 1, pref : [ 'I','A','E','F','L','H','P','C','G','J','B','K','D','N','O' ] },
{ name : 'SANJIV KUMAR', cat : 1, pref : [ 'G','K','B','D','P','L','I','J','N','A','H','C','E','F','O' ] },
{ name : 'VIJAY KUMAR VERMA', cat : 1, pref : [ 'G','D','B','K','P','L','A','I','H','N','J','E','C','F','O' ] },
{ name : 'SAURABH KUMAR', cat : 1, pref : [ 'G','K','B','D','P','L','H','A','N','J','I','E','F','C','O' ] },
{ name : 'HANISH RATHI', cat : 1, pref : [ 'P','L','B','K','G','D','H','A','I','J','N','O','F','C','E' ] },
{ name : 'RAVI RANJAN KUMAR', cat : 1, pref : [ 'N','G','P','J','K','B','D','L','E','A','I','H','C','F','O' ] },
{ name : 'SAGAR KANNEPALLI', cat : 1, pref : [ 'I','E','A','F','G','H','L','M','K','P','B','C','D','N','O' ] },
{ name : 'SUBHAM KUMAR BARMAN', cat : 1, pref : [ 'J','C','P','A','B','D','E','F','G','H','I','K','L','N','O' ] },
{ name : 'ISMEET KAUR', cat : 1, pref : [ 'D','G','L','H','A','P','F','E','B','I','C','O','K','J','N' ] },
{ name : 'RAJU MISTRY', cat : 1, pref : [ 'J','C','H','A','B','G','O','F','D','N','K','E','P','I','L' ] },
{ name : 'BHOORA SINGH', cat : 2, pref : [ 'G','P','B','K','H','L','','','','','','','','','' ] },
{ name : 'Y KIRAN KUMAR', cat : 1, pref : [ 'I','A','E','L','F','P','H','G','B','J','C','D','N','K','O' ] },
{ name : 'SHIVKESH MEENA', cat : 2, pref : [ 'G','P','B','L','K','C','A','I','J','H','M','N','D','O','E' ] },
{ name : 'RADHESYAM MEENA', cat : 2, pref : [ 'G','P','B','K','L','D','M','H','O','N','I','E','A','F','J' ] },
{ name : 'SUDHANSHU BISWAS', cat : 1, pref : [ 'J','C','N','O','H','B','D','L','K','P','A','G','I','F','E' ] },
{ name : 'HIMANSHU KUMAR', cat : 1, pref : [ 'D','G','L','H','K','A','P','B','C','F','I','J','E','N','O' ] },
{ name : 'SANJEEV MANDIA', cat : 2, pref : [ 'G','P','H','L','B','M','K','A','T','U','D','N','J','O','F' ] },
{ name : 'SURAJ DEO PRASAD', cat : 1, pref : [ 'N','J','C','B','K','G','L','P','I','D','O','H','A','E','F' ] },
{ name : 'NAGESH SISODIA', cat : 1, pref : [ 'D','G','P','H','B','A','K','L','I','J','E','F','C','O','N' ] },
{ name : 'PREM SINGH MEENA', cat : 2, pref : [ 'G','P','B','K','D','L','H','A','I','N','J','E','F','C','O' ] },
{ name : 'YEDDU VIJAYA KUMARI', cat : 1, pref : [ 'I','A','E','L','F','C','D','P','J','B','G','K','N','H','O' ] },
{ name : 'AVINASH KUMAR GUPTA', cat : 1, pref : [ 'K','G','D','P','L','H','A','F','I','J','B','O','C','E','N' ] },
{ name : 'JITENDRA KUMAR BAMNIA', cat : 1, pref : [ 'B','P','L','I','H','F','J','G','D','C','A','E','O','N','K' ] },
{ name : 'MANOJ KUMAR', cat : 1, pref : [ 'G','K','B','P','D','L','J','A','N','I','H','C','F','E','O' ] },
{ name : 'SANTOSH KUMAR MEENA', cat : 2, pref : [ 'G','P','K','B','L','A','H','J','I','E','F','C','N','O','D' ] },
{ name : 'GAURAV SINGH', cat : 1, pref : [ 'G','D','K','B','P','L','I','A','H','N','J','C','F','E','O' ] },
{ name : 'DEEPIKA MEENA', cat : 2, pref : [ 'G','P','D','L','B','H','A','K','I','J','N','O','E','F','C' ] },
{ name : 'PRADEEP CHOUDHARY', cat : 1, pref : [ 'N','J','C','B','G','P','K','D','I','A','E','L','H','O','F' ] },
{ name : 'MANOJ KUMAR MEENA', cat : 2, pref : [ 'G','P','B','H','L','','','','','','','','','','' ] },
{ name : 'ARJUN SINGH', cat : 1, pref : [ 'K','G','P','B','L','N','J','I','D','H','E','A','F','C','O' ] },
{ name : 'SANDEEP KAUSHAL', cat : 1, pref : [ 'G','K','D','B','P','L','J','I','H','C','A','N','E','F','O' ] },
{ name : 'ARJUN KUMAR', cat : 1, pref : [ 'K','B','J','N','P','G','D','A','C','E','F','H','I','L','O' ] },
{ name : 'ANIL KUMAR', cat : 1, pref : [ 'G','P','D','K','L','A','B','J','I','E','H','C','F','N','O' ] },
{ name : 'ABHISHEK BADSIWAL', cat : 1, pref : [ 'G','D','L','H','A','K','J','B','P','E','','','','','' ] },
{ name : 'RINKUMONI SONOWAL', cat : 2, pref : [ 'J','J','J','O','J','I','H','A','G','L','J','E','O','J','J' ] },
{ name : 'RAHUL VERMA', cat : 1, pref : [ 'G','D','P','L','H','A','B','I','K','E','F','J','N','C','O' ] },
{ name : 'PANKAJ ARYA', cat : 1, pref : [ 'B','G','K','D','J','L','H','P','N','C','O','F','A','I','E' ] },
{ name : 'AMAR SINGH MEENA', cat : 2, pref : [ 'G','P','L','B','H','K','D','A','I','C','N','E','F','J','O' ] },
{ name : 'DEVENDRA JALTHANIYA', cat : 1, pref : [ 'G','D','P','K','B','H','L','A','I','J','N','C','E','F','O' ] },
{ name : 'ARVIND KUMAR', cat : 1, pref : [ 'B','G','D','I','A','K','H','P','F','E','C','L','J','N','O' ] },
{ name : 'LALITA KUMARI MEENA', cat : 2, pref : [ 'G','P','L','B','D','K','H','A','J','E','I','N','O','F','C' ] },
{ name : 'SHIVAM KAPOOR', cat : 1, pref : [ 'B','L','K','P','G','A','D','H','J','I','N','C','E','F','O' ] },
{ name : 'RAVI PRAKASH MEENA', cat : 2, pref : [ 'P','G','K','L','B','D','M','A','N','I','E','J','F','C','O' ] },
{ name : 'PARMAR HITENDRA JASVANTBHAI', cat : 1, pref : [ 'P','L','G','H','B','D','A','I','F','K','N','E','J','C','O' ] },
{ name : 'SHIV KUMAR MEENA', cat : 2, pref : [ 'P','K','G','','','','','','','','','','','','' ] },
{ name : 'MANISH KUMAR', cat : 1, pref : [ 'G','P','L','H','D','B','K','N','A','I','J','E','C','F','O' ] },
{ name : 'PANKAJ MEENA', cat : 2, pref : [ 'G','P','L','B','H','A','K','I','J','N','O','F','E','D','C' ] },
{ name : 'G B ARUN MANASSEH', cat : 1, pref : [ 'I','A','E','H','L','F','B','G','D','C','K','P','J','N','O' ] },
{ name : 'NITESH SINGH', cat : 1, pref : [ 'G','D','K','L','H','I','A','N','B','C','P','J','E','F','O' ] },
{ name : 'JITENDRA SINGH', cat : 1, pref : [ 'G','K','D','H','L','M','A','I','B','P','F','E','J','O','N' ] },
{ name : 'AASHISH MEHRA', cat : 1, pref : [ 'P','L','I','A','G','D','J','E','K','B','C','H','F','N','O' ] },
{ name : 'KULDEEP KUMAR SARSAR', cat : 1, pref : [ 'G','K','D','B','H','L','','','','','','','','','' ] },
{ name : 'P SIVA RAM BABU', cat : 1, pref : [ 'I','A','E','L','F','P','H','J','C','G','B','D','N','K','O' ] },
{ name : 'VIVEK BHAGAT', cat : 1, pref : [ 'G','L','P','B','K','A','H','I','C','N','F','D','J','E','O' ] },
{ name : 'AMRITA HAZRA', cat : 1, pref : [ 'I','A','J','M','L','E','G','P','C','V','S','Q','F','N','B' ] },
{ name : 'T SESHU VENKATA KANTH', cat : 1, pref : [ 'I','E','A','H','F','B','C','D','G','L','K','J','P','O','N' ] },
{ name : 'SUJAN DAS', cat : 1, pref : [ 'J','C','N','B','P','L','A','K','I','O','H','F','E','D','G' ] },
{ name : 'ASHOK KUMAR MEENA', cat : 2, pref : [ 'G','P','L','B','K','A','I','H','M','C','J','N','O','F','E' ] },
{ name : 'SUNDEEP SINGH SUNNY', cat : 1, pref : [ 'D','G','P','A','L','B','K','H','I','J','C','F','E','N','O' ] },
{ name : 'AKANKSHA AJANIYA', cat : 1, pref : [ 'G','D','B','P','L','K','A','H','I','J','C','N','F','E','O' ] },
{ name : 'SUSHANT BARI', cat : 2, pref : [ 'N','J','H','C','D','I','A','E','L','G','O','B','K','F','P' ] },
{ name : 'SANDEEP KUMAR', cat : 1, pref : [ 'G','K','D','B','P','L','I','A','F','C','H','J','E','O','N' ] },
{ name : 'SIDDHARTH BERWA', cat : 1, pref : [ 'G','K','L','P','B','H','D','A','I','J','N','C','F','E','O' ] },
{ name : 'SAYAN SARDAR', cat : 1, pref : [ 'J','C','G','D','I','K','N','B','E','A','L','H','F','P','O' ] },
{ name : 'OM PRAKASH KAMBOJ', cat : 1, pref : [ 'N','C','J','G','B','K','D','H','P','L','A','M','E','I','F' ] },
{ name : 'PAWAN KUMAR', cat : 1, pref : [ 'G','D','P','K','','','','','','','','','','','' ] },
{ name : 'NEERAJ KUMAR AJAR', cat : 1, pref : [ 'G','P','D','K','B','N','L','H','I','J','F','C','O','E','A' ] },
{ name : 'PRASHANT BAMANIYA', cat : 2, pref : [ 'P','G','B','K','L','A','I','E','H','J','C','N','F','O','' ] },
{ name : 'SUNNY BHIWAL', cat : 1, pref : [ 'G','D','L','P','H','A','K','I','B','J','F','E','C','N','O' ] },
{ name : 'NEEMA KUMARI MEENA', cat : 2, pref : [ 'G','P','L','K','B','A','I','C','H','J','N','F','E','O','D' ] },
{ name : 'SHASHI KANT BALISHTH', cat : 1, pref : [ 'P','B','K','L','J','G','A','D','H','I','C','E','F','O','N' ] },
{ name : 'SAYANTAN SARKAR', cat : 1, pref : [ 'J','G','B','C','A','L','H','F','I','K','P','E','N','O','D' ] },
{ name : 'AJAY KUMAR', cat : 1, pref : [ 'D','G','P','B','I','H','A','J','L','E','F','K','O','C','N' ] },
{ name : 'BHINV RAJ PARIHAR', cat : 1, pref : [ 'P','B','K','L','H','A','N','J','G','D','I','F','E','C','O' ] },
{ name : 'KARISHAN KUMAR MEENA', cat : 2, pref : [ 'G','P','L','B','K','A','I','N','J','O','H','F','E','C','D' ] },
{ name : 'RUPESH KUMAR PATLANI', cat : 1, pref : [ 'G','D','P','B','L','A','I','J','K','H','E','N','F','C','O' ] },
{ name : 'CHAMAN LAL MAHAWAR', cat : 1, pref : [ 'G','P','L','B','D','A','J','I','E','F','H','K','N','C','O' ] },
{ name : 'DESHRAJ MEENA', cat : 2, pref : [ 'G','P','L','J','B','I','A','E','F','H','K','O','N','D','C' ] },
{ name : 'VIVEK KUMAR', cat : 1, pref : [ 'K','G','D','P','L','B','J','N','C','H','A','I','F','O','E' ] },
{ name : 'ASHUTOSH KUMAR SINGH', cat : 1, pref : [ 'P','K','D','A','L','B','G','I','J','N','E','F','H','C','O' ] },
{ name : 'GAURAV MEHRA', cat : 1, pref : [ 'K','B','P','L','A','H','I','C','N','G','D','J','F','E','O' ] },
{ name : 'MAHENDRA KUMAR MEENA', cat : 2, pref : [ 'G','P','B','K','L','H','D','A','I','J','O','E','N','F','C' ] },
{ name : 'DINESH MEENA', cat : 2, pref : [ 'P','L','G','K','B','H','I','A','J','E','F','N','O','C','D' ] },
{ name : 'GAYATRI RAO', cat : 1, pref : [ 'P','G','D','B','A','K','L','H','I','E','J','F','C','O','N' ] },
{ name : 'ADARSH KUMAR', cat : 1, pref : [ 'G','D','K','L','A','H','J','P','B','I','F','E','N','C','O' ] },
{ name : 'ARNAB SAHA', cat : 2, pref : [ 'J','C','N','G','D','B','H','P','K','M','F','I','A','L','E' ] },
{ name : 'NAVEEN VERMA', cat : 1, pref : [ 'G','D','P','H','B','C','J','F','A','K','L','O','E','N','I' ] },
{ name : 'JOY HALDAR', cat : 1, pref : [ 'J','C','O','K','G','N','I','B','H','A','E','D','F','P','L' ] },
{ name : 'S PRANAY', cat : 1, pref : [ 'I','E','A','P','B','F','C','H','G','K','L','D','J','N','O' ] },
{ name : 'HITESH KUMAR', cat : 1, pref : [ 'G','L','K','B','P','D','I','J','A','E','C','F','H','N','O' ] },
{ name : 'VIJAY SRINIVAS NOWNDURU', cat : 1, pref : [ 'I','E','A','F','H','M','L','G','P','D','K','J','O','B','C' ] },
{ name : 'SAURABH MEENA', cat : 2, pref : [ 'G','P','K','B','L','A','H','N','J','O','F','I','E','C','D' ] },
{ name : 'PAWAN KHODA', cat : 2, pref : [ 'G','P','D','B','K','L','M','A','I','J','C','H','E','N','O' ] },
{ name : 'PRABHU NARAYAN MEENA', cat : 2, pref : [ 'G','P','B','K','D','L','H','J','A','N','I','C','E','F','O' ] },
{ name : 'CHANN SINGH', cat : 1, pref : [ 'D','G','B','P','L','K','H','I','A','J','N','C','E','F','O' ] },
{ name : 'MONIKA MEENA', cat : 2, pref : [ 'G','P','B','D','L','H','A','I','K','J','E','F','O','N','C' ] },
{ name : 'BHUPENDRA SINGH MARTOLIA', cat : 2, pref : [ 'G','K','P','B','H','A','J','L','I','F','E','O','N','','' ] },
{ name : 'LOHARI RAM MEENA', cat : 2, pref : [ 'G','P','K','B','H','L','I','D','A','F','J','C','E','O','N' ] },
{ name : 'JAGDISH PRASAD MEENA', cat : 2, pref : [ 'G','P','B','K','I','L','A','D','F','E','H','J','O','N','C' ] },
{ name : 'NOONEVATH PREETHI NISHA', cat : 2, pref : [ 'I','A','E','M','F','G','L','J','H','B','C','P','N','K','O' ] },
{ name : 'DINESH KUMAR MEENA', cat : 2, pref : [ 'G','P','L','K','B','D','H','A','I','N','C','J','F','E','O' ] },
{ name : 'KHODA HAILYANG', cat : 2, pref : [ 'O','H','G','J','A','E','L','I','D','B','C','F','P','N','K' ] },
{ name : 'YATENDRA KUMAR MEENA', cat : 2, pref : [ 'G','P','L','B','K','A','N','I','H','J','O','F','E','C','D' ] },
{ name : 'RAMESH MEENA', cat : 2, pref : [ 'G','P','K','B','L','H','A','J','I','N','O','E','F','D','C' ] },
{ name : 'AADARSH KUMAR MEENA', cat : 2, pref : [ 'G','P','L','K','B','D','I','A','E','J','H','C','N','F','O' ] },
{ name : 'JACOB JOSEPH', cat : 2, pref : [ 'F','E','A','H','I','G','O','P','L','N','B','J','K','C','D' ] },
{ name : 'DINESH MEENA', cat : 2, pref : [ 'G','P','B','K','M','L','A','','','','','','','','' ] },
{ name : 'VIKASH KUMAR MANDAWAT', cat : 2, pref : [ 'G','P','B','D','H','A','I','L','K','F','C','E','J','N','O' ] },
{ name : 'RAGHUVEER MEENA', cat : 2, pref : [ 'G','P','K','B','H','L','J','N','I','A','C','O','E','F','D' ] },
{ name : 'PRAVEEN  NEGI', cat : 2, pref : [ 'G','P','K','B','L','N','J','I','A','F','O','E','H','D','C' ] },
{ name : 'KOUSHIK N', cat : 2, pref : [ 'G','A','I','L','E','P','B','H','O','K','F','N','C','D','J' ] },
{ name : 'MAYANK JOSHI', cat : 2, pref : [ 'G','K','P','B','L','J','A','T','H','E','F','N','O','','' ] },
{ name : 'DINESH CHAND MEENA', cat : 2, pref : [ 'G','P','K','L','B','H','A','D','I','J','O','N','E','F','C' ] },
{ name : 'BABU LAL MEENA', cat : 2, pref : [ 'G','P','D','K','B','L','M','H','I','J','N','A','F','E','O' ] },
{ name : 'MAHESH KUMAR MEENA', cat : 2, pref : [ 'G','P','L','B','A','K','H','J','I','E','N','F','O','D','C' ] },
{ name : 'CHETANA MEENA', cat : 2, pref : [ 'P','G','L','H','B','K','A','D','J','C','O','F','E','I','N' ] },
{ name : 'BHARAT MEENA', cat : 2, pref : [ 'G','P','K','B','L','I','A','H','E','F','N','J','O','D','C' ] },
{ name : 'BHAGYASHREE DAMACHYA', cat : 2, pref : [ 'P','B','L','K','G','H','J','I','A','E','F','D','C','N','O' ] },
{ name : 'GAURAV MEENA', cat : 2, pref : [ 'G','P','B','K','L','N','J','H','I','A','O','E','F','D','C' ] },
{ name : 'RAMAVTAR MEENA', cat : 2, pref : [ 'G','P','K','B','D','L','J','H','N','I','A','C','E','F','O' ] },
{ name : 'PADAM SINGH MEENA', cat : 2, pref : [ 'G','P','B','K','L','H','I','A','J','F','E','N','O','D','C' ] },
{ name : 'HEMRAJ MEENA', cat : 2, pref : [ 'P','K','B','G','L','H','I','N','A','J','E','F','O','D','C' ] },
{ name : 'SATISH CHANDRA METLA', cat : 2, pref : [ 'I','A','E','L','H','B','F','P','G','J','N','K','O','C','D' ] },
{ name : 'RAM KESH MEENA', cat : 2, pref : [ 'G','P','L','K','B','D','I','H','A','N','E','J','F','O','C' ] },
{ name : 'SURBHI NEGI', cat : 2, pref : [ 'G','K','L','P','T','B','M','I','N','E','F','H','J','A','Q' ] },
{ name : 'NAMITA MEENA', cat : 2, pref : [ 'G','P','K','L','J','B','H','N','A','I','E','F','O','D','C' ] },
{ name : 'VINEET KUMAR MEENA', cat : 2, pref : [ 'G','H','P','D','A','L','B','K','I','E','F','J','C','N','O' ] },
{ name : 'HARKESH MEENA', cat : 2, pref : [ 'K','G','P','L','B','A','H','I','J','E','N','F','O','D','C' ] },
{ name : 'DEEPAK MEENA', cat : 2, pref : [ 'G','P','B','L','D','H','K','A','J','I','C','F','E','N','O' ] },
{ name : 'RAJESH KUMAR MEENA', cat : 2, pref : [ 'G','D','P','B','K','M','L','H','A','N','I','J','C','F','E' ] },
{ name : 'LOKESH MEENA', cat : 2, pref : [ 'G','P','B','K','L','N','J','H','I','A','E','F','O','','' ] },
{ name : 'ANUJ KUMAR MEENA', cat : 2, pref : [ 'P','L','G','I','B','A','H','K','E','F','J','N','O','C','D' ] },
{ name : 'KAJOR MAL MEENA', cat : 2, pref : [ 'G','P','B','K','L','D','H','A','I','J','N','C','F','O','E' ] },
{ name : 'REENA MEENA', cat : 2, pref : [ 'G','P','D','K','B','L','H','I','A','N','C','E','F','J','O' ] },
{ name : 'POTHURAJU SIVA PRASAD', cat : 2, pref : [ 'I','A','F','E','L','','','','','','','','','','' ] },
{ name : 'MAHAISING SHINGLAI', cat : 2, pref : [ 'O','A','G','I','L','H','E','F','J','K','P','N','B','','' ] },
{ name : 'MOHAN LAL MEENA', cat : 2, pref : [ 'L','G','P','K','B','A','H','I','J','E','F','N','O','D','C' ] },
{ name : 'PARAS KUJUR', cat : 2, pref : [ 'N','J','A','C','H','B','O','M','L','K','G','F','D','E','I' ] },
{ name : 'UMESH CHAND MEENA', cat : 2, pref : [ 'G','P','K','L','B','H','I','A','J','O','N','E','F','D','C' ] },
{ name : 'RAJESH KUMAR MEENA', cat : 2, pref : [ 'G','P','D','B','K','H','L','A','I','F','J','E','N','C','O' ] },
{ name : 'SURAJ KUMAR BAINARA', cat : 2, pref : [ 'G','P','D','L','K','J','H','A','I','N','O','F','E','D','C' ] },
{ name : 'VIKAS MEENA', cat : 2, pref : [ 'G','P','D','K','B','L','H','J','A','I','C','N','F','E','O' ] },
{ name : 'PAWAR SAGAR HARISHCHANDRA', cat : 2, pref : [ 'L','H','B','P','I','A','G','D','J','E','F','C','K','N','O' ] },
{ name : 'LAKHAN SINGH MEENA', cat : 2, pref : [ 'H','P','L','B','A','K','J','G','N','F','E','I','O','','' ] },
{ name : 'DHARM SINGH MEENA', cat : 2, pref : [ 'G','D','P','K','L','B','A','I','J','C','H','N','O','E','F' ] },
{ name : 'RAJNISH KUMAR MEENA', cat : 2, pref : [ 'G','P','L','B','K','H','A','I','E','F','J','N','O','C','D' ] },
{ name : 'MEENA RAKESH DEVKARAN', cat : 2, pref : [ 'L','P','G','B','H','A','E','I','K','F','O','J','N','D','C' ] },
{ name : 'MUKESH MEENA', cat : 2, pref : [ 'P','K','B','G','L','H','A','I','N','J','E','F','D','C','O' ] },
{ name : 'GYAN CHAND MEENA', cat : 2, pref : [ 'G','P','D','B','K','N','I','L','H','J','C','A','E','F','O' ] }
];

var b =[
{zone : 'A',seats : [17,9,7,4]},
{zone : 'B',seats : [85,17,5,39]},
{zone : 'C',seats : [19,6,0,0]},
{zone : 'D',seats : [3,1,0,1]},
{zone : 'E',seats : [9,2,1,5]},
{zone : 'F',seats : [21,6,3,11]},
{zone : 'G',seats : [4,1,1,3]},
{zone : 'H',seats : [12,2,1,2]},
{zone : 'I',seats : [23,7,4,12]},
{zone : 'J',seats : [102,28,21,68]},
{zone : 'K',seats : [26,8,25,32]},
{zone : 'L',seats : [38,27,11,30]},
{zone : 'N',seats : [20,7,2,6]},
{zone : 'O',seats : [10,3,2,6]},
{zone : 'P',seats : [233,13,13,121]}
]

candidate : for(i=0;i<a.length;i++)
{
for(j=0;j<15;j++)
{
switch(a[i].pref[j])
{
case 'A':
if( b[0].seats[0]>0)
{
a[i].pref[16]='Bangalore';
b[0].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[0].seats[3]>0)
    {
       a[i].pref[16]='Bangalore';
        b[0].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[0].seats[1]>0)
    {
       a[i].pref[16]='Bangalore';
        b[0].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[0].seats[2]>0)
    {
       a[i].pref[16]='Bangalore';
        b[0].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'B':
if( b[1].seats[0]>0)
{
a[i].pref[16]='Bhopal';
b[1].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[1].seats[3]>0)
    {
       a[i].pref[16]='Bhopal';
        b[1].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[1].seats[1]>0)
    {
       a[i].pref[16]='Bhopal';
        b[1].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[1].seats[2]>0)
    {
       a[i].pref[16]='Bhopal';
        b[1].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'C':
if( b[2].seats[0]>0)
{
a[i].pref[16]='Bhubaneshwar';
b[2].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[2].seats[3]>0)
    {
       a[i].pref[16]='Bhubaneshwar';
        b[2].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[2].seats[1]>0)
    {
       a[i].pref[16]='Bhubaneshwar';
        b[2].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[2].seats[2]>0)
    {
       a[i].pref[16]='Bhubaneshwar';
        b[2].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'D':
if( b[3].seats[0]>0)
{
a[i].pref[16]='Chandigarh';
b[3].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[3].seats[3]>0)
    {
       a[i].pref[16]='Chandigarh';
        b[3].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[3].seats[1]>0)
    {
       a[i].pref[16]='Chandigarh';
        b[3].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[3].seats[2]>0)
    {
       a[i].pref[16]='Chandigarh';
        b[3].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'E':
if( b[4].seats[0]>0)
{
a[i].pref[16]='Chennai';
b[4].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[4].seats[3]>0)
    {
       a[i].pref[16]='Chennai';
        b[4].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[4].seats[1]>0)
    {
       a[i].pref[16]='Chennai';
        b[4].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[4].seats[2]>0)
    {
       a[i].pref[16]='Chennai';
        b[4].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'F':
if( b[5].seats[0]>0)
{
a[i].pref[16]='Cochin';
b[5].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[5].seats[3]>0)
    {
       a[i].pref[16]='Cochin';
        b[5].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[5].seats[1]>0)
    {
       a[i].pref[16]='Cochin';
        b[5].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[5].seats[2]>0)
    {
       a[i].pref[16]='Cochin';
        b[5].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'G':
if( b[6].seats[0]>0)
{
a[i].pref[16]='Delhi';
b[6].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[6].seats[3]>0)
    {
       a[i].pref[16]='Delhi';
        b[6].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[6].seats[1]>0)
    {
       a[i].pref[16]='Delhi';
        b[6].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[6].seats[2]>0)
    {
       a[i].pref[16]='Delhi';
        b[6].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'H':
if( b[7].seats[0]>0)
{
a[i].pref[16]='Goa';
b[7].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[7].seats[3]>0)
    {
       a[i].pref[16]='Goa';
        b[7].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[7].seats[1]>0)
    {
       a[i].pref[16]='Goa';
        b[7].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[7].seats[2]>0)
    {
       a[i].pref[16]='Goa';
        b[7].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'I':
if( b[8].seats[0]>0)
{
a[i].pref[16]='Hyderabad';
b[8].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[8].seats[3]>0)
    {
       a[i].pref[16]='Hyderabad';
        b[8].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[8].seats[1]>0)
    {
       a[i].pref[16]='Hyderabad';
        b[8].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[8].seats[2]>0)
    {
       a[i].pref[16]='Hyderabad';
        b[8].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'J':
if( b[9].seats[0]>0)
{
a[i].pref[16]='Kolkatta';
b[9].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[9].seats[3]>0)
    {
       a[i].pref[16]='Kolkatta';
        b[9].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[9].seats[1]>0)
    {
       a[i].pref[16]='Kolkatta';
        b[9].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[9].seats[2]>0)
    {
       a[i].pref[16]='Kolkatta';
        b[9].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'K':
if( b[10].seats[0]>0)
{
a[i].pref[16]='Lucknow';
b[10].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[10].seats[3]>0)
    {
       a[i].pref[16]='Lucknow';
        b[10].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[10].seats[1]>0)
    {
       a[i].pref[16]='Lucknow';
        b[10].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[10].seats[2]>0)
    {
       a[i].pref[16]='Lucknow';
        b[10].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'L':
if( b[11].seats[0]>0)
{
a[i].pref[16]='Mumbai';
b[11].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[11].seats[3]>0)
    {
       a[i].pref[16]='Mumbai';
        b[11].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[11].seats[1]>0)
    {
       a[i].pref[16]='Mumbai';
        b[11].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[11].seats[2]>0)
    {
       a[i].pref[16]='Mumbai';
        b[11].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'N':
if( b[12].seats[0]>0)
{
a[i].pref[16]='Ranchi';
b[12].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[12].seats[3]>0)
    {
       a[i].pref[16]='Ranchi';
        b[12].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[12].seats[1]>0)
    {
       a[i].pref[16]='Ranchi';
        b[12].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[12].seats[2]>0)
    {
       a[i].pref[16]='Ranchi';
        b[12].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'O':
if( b[13].seats[0]>0)
{
a[i].pref[16]='Shillong';
b[13].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[13].seats[3]>0)
    {
       a[i].pref[16]='Shillong';
        b[13].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[13].seats[1]>0)
    {
       a[i].pref[16]='Shillong';
        b[13].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[13].seats[2]>0)
    {
       a[i].pref[16]='Shillong';
        b[13].seats[2]--;
        continue candidate; 
    }
else
    break;
case 'P':
if( b[14].seats[0]>0)
{
a[i].pref[16]='Vadodara';
b[14].seats[0]--;
continue candidate;
}
else if(( a[i].cat==6) && b[14].seats[3]>0)
    {
       a[i].pref[16]='Vadodara';
        b[14].seats[3]--;
        continue candidate; 
    }
else if((a[i].cat==1) && b[14].seats[1]>0)
    {
       a[i].pref[16]='Vadodara';
        b[14].seats[1]--;
        continue candidate; 
    }
else if(a[i].cat==2 && b[14].seats[2]>0)
    {
       a[i].pref[16]='Vadodara';
        b[14].seats[2]--;
        continue candidate; 
    }
else
    break;

    default:
        break;
}
}
}


for(i=0;i<a.length;i++)
{
    var table = document.getElementById("myTable");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = a[i].name;
    cell2.innerHTML = a[i].cat;
    cell3.innerHTML = a[i].pref[16];   
}
    for(i=0;i<15;i++)
    console.log(b[i].zone+" "+b[i].seats);
}
