var calculator = new Vue({
    el: '#calculator',
    data: {
      income: '50,000',
      monthly_debts:'1,000',
      down_payment: '20,000',
      credit_score: '',
      state: '',
      options: [{state:"United States",tax_rate:"0.0103"},{state:"Alabama",tax_rate:"0.0037"},{state:"Alaska",tax_rate:"0.0098"},{state:"Arizona",tax_rate:"0.0060"},{state:"Arkansas",tax_rate:"0.0061"},{state:"California",tax_rate:"0.0070"},{state:"Colorado",tax_rate:"0.0052"},{state:"Connecticut",tax_rate:"0.0173"},{state:"Delaware",tax_rate:"0.0059"},{state:"Florida",tax_rate:"0.0086"},{state:"Georgia",tax_rate:"0.0087"},{state:"Hawaii",tax_rate:"0.0031"},{state:"Idaho",tax_rate:"0.0065"},{state:"Illinois",tax_rate:"0.0197"},{state:"Indiana",tax_rate:"0.0081"},{state:"Iowa",tax_rate:"0.0143"},{state:"Kansas",tax_rate:"0.0128"},{state:"Kentucky",tax_rate:"0.0078"},{state:"Louisiana",tax_rate:"0.0051"},{state:"Maine",tax_rate:"0.0120"},{state:"Maryland",tax_rate:"0.0101"},{state:"Massachusetts",tax_rate:"0.0108"},{state:"Michigan",tax_rate:"0.0131"},{state:"Minnesota",tax_rate:"0.0105"},{state:"Mississippi",tax_rate:"0.0063"},{state:"Missouri",tax_rate:"0.0096"},{state:"Montana",tax_rate:"0.0074"},{state:"Nebraska",tax_rate:"0.0154"},{state:"Nevada",tax_rate:"0.0056"},{state:"New Hampshire",tax_rate:"0.0189"},{state:"New Jersey",tax_rate:"0.0213"},{state:"New Mexico",tax_rate:"0.0059"},{state:"New York",tax_rate:"0.0130"},{state:"North Carolina",tax_rate:"0.0078"},{state:"North Dakota",tax_rate:"0.0088"},{state:"Ohio",tax_rate:"0.0152"},{state:"Oklahoma",tax_rate:"0.0083"},{state:"Oregon",tax_rate:"0.0091"},{state:"Pennsylvania",tax_rate:"0.0143"},{state:"Rhode Island",tax_rate:"0.0137"},{state:"South Carolina",tax_rate:"0.0053"},{state:"South Dakota",tax_rate:"0.0114"},{state:"Tennessee",tax_rate:"0.0063"},{state:"Texas",tax_rate:"0.0160"},{state:"Utah",tax_rate:"0.0056"},{state:"Vermont",tax_rate:"0.0176"},{state:"Virginia",tax_rate:"0.0084"},{state:"Washington",tax_rate:"0.0084"},{state:"West Virginia",tax_rate:"0.0053"},{state:"Wisconsin",tax_rate:"0.0153"},{state:"Wyoming",tax_rate:"0.0051"},{state:"District of Columbia",tax_rate:"0.0058"}],
      credit_options: [{score:"760-850",tax_rate:"0.02495"},{score:"700-759",tax_rate:"0.02717"},{score:"680-699",tax_rate:"0.02894"},{score:"660-679",tax_rate:"0.03108"},{score:"640-659",tax_rate:"0.03538"},{score:"620-639",tax_rate:"0.04084"}]
    },
    watch: {
        income: function(newValue) {
            const result = newValue.replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            Vue.nextTick(() => this.income = result);
          },
          monthlyDebts: function(newValue) {
            const result = newValue.replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            Vue.nextTick(() => this.monthlyDebts = result);
          },
          downPayment: function(newValue) {
            const result = newValue.replace(/\D/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            Vue.nextTick(() => this.downPayment = result);
          },
    },
//     methods: {
//       // functions go here
//       getResults: function () {
//         let A = parseInt((this.income.replace(/,/g, '')),10),
//             r = (this.interestRate/100)/12,
//             n = this.term,
//             DNumerator,
//             DDenominator,
//             D,
//             currentDate,
//             fullPayoffDate,
//             month,
//             year,
//             catYear,
//             monthName,
//             monthlyData = [],
//             annualData = [],
//             catArray = [],
//             loanTotal = A,
//             containerWidth,
//             N10,
//             N25,
//             I10,
//             I25,
//             categories,
//             tickInterval = 2.
//             year = new Date().getFullYear();

        
//         // converts the term into months
//         if (this.frequency == 1) {
//             n = n*12;
//         }

//         // amortized loan calculations
//         DNumerator = (Math.pow((1+r),n))-1;
//         DDenominator = r*(Math.pow((1+r), n));
//         D = DNumerator/DDenominator;

//         this.monthlyPayment = A/D;

//         this.totalPaid = this.monthlyPayment*n;

//         this.totalInterest = this.totalPaid - A;

//         // get current date and payoff date
//         const monthNames = ["January", "February", "March", "April", "May", "June",
//             "July", "August", "September", "October", "November", "December"
//             ];

//         currentDate = new Date();

//         fullPayoffDate = new Date(currentDate.setMonth(currentDate.getMonth()+n));

//         this.payoffMonth = monthNames[fullPayoffDate.getMonth()];
//         year = fullPayoffDate.getFullYear();

//         this.payoffDate = this.payoffMonth + " " + year;

//         // get data for chart
//         monthlyData.push(A); // adds starting loan amount to the data array

//         for (i=0; i<n; i++) {
//             loanTotal = loanTotal * r + loanTotal - this.monthlyPayment; // monthly loan total calculated as principal plus interest, minus the payment
//             monthlyData.push(loanTotal); 
            
//             if (n>24) {
//                 annualData = monthlyData.filter((_,i) => i % 12 == 0); // takes every 12th data point

//             } else {
//                 annualData = monthlyData; // if the loan period is 2 years or less, pushes monthly data to chart
//             }
            
//         }

//         annualData.pop(); // removes last data point and replaces it with 0
//         annualData.push(0);

//         currentDate = new Date();

//         for (i=0; i<annualData.length; i++) {
//             year = currentDate.getFullYear();
//             month = currentDate.getMonth();
//             monthName = monthNames[month];
//             catYear = year;

//             // shortens long month names
//             if (monthName == 'January' || monthName == 'February' || monthName == 'March' || monthName == 'April' || monthName == 'August' || monthName == 'September' || monthName == 'October' || monthName == 'November' || monthName == 'December') {
//                 monthName = monthName.substring(0,3) + '.';
//             }

//             //  pulls category years for annual charts
//             if (n>24) {
//                 catYear = i + year; // gets the array of years for the loan
//                 categories = catYear.toString().substr(-2); // converts years to two digits
//                 categories = ' \'' + categories; // adds month to year
//                 catArray.push(categories);
//             } else {
//                 categories = i + month;
//                 if (categories > 11 && categories <= 23) {
//                     categories= categories - 12;
//                     catYear = year + 1;
//                 } else if (categories > 23) {
//                     categories= categories - 24;
//                     catYear = year + 2;
//                 }

                

//                 monthName = monthNames[categories];
//                 if (monthName == 'January' || monthName == 'February' || monthName == 'March' || monthName == 'April' || monthName == 'August' || monthName == 'September' || monthName == 'October' || monthName == 'November' || monthName == 'December') {
//                     monthName = monthName.substring(0,3) + '.';
//                 }

//                 categories = monthName + ' \'' + catYear.toString().substr(-2);;
//                 catArray.push(categories);
//             }

            
//         }


//         // get title name for chart
//         if (n>24) {
//             this.headerString = "Loan balance in " + monthName + " of each year"
//         } else {
//             this.headerString = "Monthly loan balance"
//         }

//         containerWidth = document.getElementById('calculator').offsetWidth;

//         if (containerWidth < 400) {
//             setTickIntervalMobile();
//         } else {
//             setTickIntervalDesktop();
//         }

//         function setTickIntervalMobile() {
//             if (annualData.length >= 22) {
//                 tickInterval = 10;
//             } else if (annualData.length >= 12 && annualData.length < 22) {
//                 tickInterval = 5;
//             } else if (annualData.length < 7) {
//                 tickInterval = 1;
//             }
//         }

//         function setTickIntervalDesktop() {
//             if (annualData.length < 12) {
//                 tickInterval = 1;
//             } else if (annualData.length > 17) {
//                 tickInterval = 5;
//             }
//         }

        

//         this.drawChart(annualData,catArray,tickInterval);


//         // add 10% to your payment
//         this.tenPayment = this.monthlyPayment*1.1;

//         N10 = (Math.log(1-r*A/this.tenPayment)*-1)/Math.log(1+r);

//         currentDate = new Date();

//         fullPayoffDate10 = new Date(currentDate.setMonth(currentDate.getMonth()+N10+1));

//         month = monthNames[fullPayoffDate10.getMonth()];
//         year = fullPayoffDate10.getFullYear();

//         this.tenPayoff = month + " " + year;

//         I10 = this.tenPayment*N10 - A;

//         this.tenSave = this.totalInterest - I10;


//         // add 25% to your payment
//         this.twentyfivePayment = this.monthlyPayment*1.25;
//         N25 = (Math.log(1-r*A/this.twentyfivePayment)*-1)/Math.log(1+r);

//         currentDate = new Date();

//         fullPayoffDate25 = new Date(currentDate.setMonth(currentDate.getMonth()+N25+1));

//         month = monthNames[fullPayoffDate25.getMonth()];
//         year = fullPayoffDate25.getFullYear();

//         this.twentyfivePayoff = month + " " + year;

//         I25 = this.twentyfivePayment*N25 - A;

//         this.twentyfiveSave = this.totalInterest - I25;


//         this.monthlyPayment = this.monthlyPayment.toLocaleString(undefined,
//             {'minimumFractionDigits':2,'maximumFractionDigits':2});

//         this.totalPaid = this.totalPaid.toLocaleString(undefined,
//             {'minimumFractionDigits':2,'maximumFractionDigits':2});

//         this.totalInterest = this.totalInterest.toLocaleString(undefined,
//             {'minimumFractionDigits':2,'maximumFractionDigits':2});

//         this.tenPayment = this.tenPayment.toLocaleString(undefined,
//             {'minimumFractionDigits':2,'maximumFractionDigits':2});

//         this.tenSave = this.tenSave.toLocaleString(undefined,
//             {'minimumFractionDigits':2,'maximumFractionDigits':2});

//         this.twentyfivePayment = this.twentyfivePayment.toLocaleString(undefined,
//             {'minimumFractionDigits':2,'maximumFractionDigits':2});

//         this.twentyfiveSave = this.twentyfiveSave.toLocaleString(undefined,
//             {'minimumFractionDigits':2,'maximumFractionDigits':2});


//       },
//       drawChart: function(annualData,catArray,tickInterval) {

//         Highcharts.setOptions({
//             lang: {
//               thousandsSep: ',',
//               numericSymbols: [null, "M", "G", "T", "P", "E"]
//             }
//         });

//         function drawHighcharts() {
//             Highcharts.chart('chart-container-loancalc', {
//                 chart: {
//                     type: 'column',
//                     styledMode: true,
//                     spacingBottom: 0,
//                     spacingRight: 0,
//                     spacingLeft: 0,
//                     animation: false
//                 }, 
//                 title: {
//                     text: null
//                 },
//                 series: [{
//                     name: 'Loan balance',
//                     data: annualData
//                 }],
//                 // for line charts only
//                 plotOptions: {
//                     series: {
//                         groupPadding: 0.1
//                     }
//                 },
//                 legend: {
//                     enabled: false
//                 },
//                 xAxis: {
//                     labels: {
//                         style: {
//                             textOverflow: 'none'
//                         },
//                         autoRotation: 0,
//                     },
//                     categories: catArray,
//                     tickLength: 5,
//                     tickInterval: tickInterval
//                 },
//                 yAxis: {
//                     title: false,
//                     labels: {
//                         overflow: 'allow',
//                         formatter: function () {
//                             return '$' + Highcharts.numberFormat(this.value,0,'.',',');
//                         },
//                     },
//                     tickAmount: 5,
//                 },
//                 credits: {
//                     enabled: false
//                 },
//                 tooltip: {
//                     shadow: false,
//                     padding: 10,
//                     shared: true,
//                     valuePrefix: '$',
//                     valueDecimals: 2
//                 },
//             })
//         }
        
//         if (document.readyState === 'complete' || document.readyState === 'interactive') {
//             drawHighcharts();
//         } else {
//             document.addEventListener("DOMContentLoaded", drawHighcharts);
//         }

//       }
//     },
//     mounted: function(){
//         this.getResults()
//      },
  })

//   function limitNumber () {
//     if (this.value.length > this.maxLength) {
//         this.value = this.value.slice(0, this.maxLength);
//         type = "number"
//         maxlength = "2"
//     }
//   }