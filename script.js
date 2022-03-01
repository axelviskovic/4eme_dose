/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



const firstTxt = document.querySelector('#firstTxt')
const imgArrow = document.querySelector('#imgArrow')
const chartdiv = document.querySelector('#chartdiv')
const loader = document.querySelector('.loaderContainer')
const txtChart = document.querySelector('.txtChart')

setTimeout(function(){
    loader.style.opacity="0"
}, 1500);

setTimeout(function(){
    loader.style.display="none"
}, 2000);

imgArrow.addEventListener(
    'click',
    ()=>{
        firstTxt.style.display='none'
        chartdiv.style.display='block'
        setTimeout(function(){
            txtChart.style.opacity="100%"
        }, 5000);
    }
)




var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 5;
series.labels.template.tooltipText = "{word}: {value}";
series.fontFamily = "Courier New";
series.maxFontSize = am4core.percent(50);

series.heatRules.push({
    "target": series.labels.template,
    "property": "fill",
    "min": am4core.color("#CF0531"),
    "max": am4core.color("#3c3b6e"),
    "dataField": "value"
   });

series.text = "Print They should pay all the back all the money plus interest. The entire family and everyone who came in with them need to be deported asap. Why did it take two years to bust them? Here we go again …another group stealing from the government and taxpayers! A group of Somalis stole over four million in government benefits over just 10 months! We’ve reported on numerous cases like this one where the Muslim refugees/immigrants commit fraud by scamming our system…It’s way out of control! More RelatedWhy Did Attorney General Loretta Lynch Plead The Fifth? Barracuda Brigade 2016-10-28 Print The administration is blocking congressional probe into cash payments to Iran. Of course she needs to plead the 5th. She either can’t recall, refuses to answer, or just plain deflects the question. Straight up corruption at its finest! 100percentfedUp.com ; Talk    covering your ass! Loretta Lynch did just that when she plead the Fifth to avoid incriminating herself over payments to Iran…Corrupt to the core! Attorney General Loretta Lynch is declining to comply with an investigation by leading members of Congress    the Obama administration’s secret efforts to send Iran $1.7 billion in cash earlier this year, prompting accusations that Lynch has “pleaded the Fifth” Amendment to avoid incriminating herself over    payments, according to lawmakers and communications exclusively obtained by the Washington Free Beacon. Sen. Marco Rubio (R., Fla.) and Rep. Mike Pompeo (R., Kan.) initially presented Lynch in October with a series of questions    hoYou may use    HTML tags and attributes:";