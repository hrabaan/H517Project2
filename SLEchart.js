    var sleA = [];
    var sleB = [];
    var sleB1 = true;
    var sleB2 = true;
    var sleB3 = true;
    var sleB4 = true;
    


    d3.csv('data/SurveyData.csv', function(data) {

          let sumArray = [];
          let id_Array = [];
          current_member_Array = [],
          children_age_group1_Array = [],
          children_age_group2_Array = [],
          children_age_group3_Array = [],
          children_age_group4_Array = [],
          children_age_group5_Array = [],
          no_children_Array = [],
          live_IN_county_Array = [],
          heard_of_SLE_Array = [],
          heard_of_SLE_SM_Array = [],
          heard_of_SLE_museum_ad_Array = [],
          heard_of_SLE_website_Array = [],
          heard_of_SLE_story_Array = [],
          heard_of_SLE_tv_Array = [],
          heard_of_SLE_BB_Array = [],
          heard_of_SLE_online_ad_Array = [],
          heard_of_SLE_other_Array = [];


        data.forEach(function(d) {
            id_Array.push(d.id);
            current_member_Array.push(d.current_member); //push all jan values into jan array
            children_age_group1_Array.push(d.children_age_group1);
            children_age_group2_Array.push(d.children_age_group2);
            children_age_group3_Array.push(d.children_age_group3);
            children_age_group4_Array.push(d.children_age_group4);
            children_age_group5_Array.push(d.children_age_group5);
            no_children_Array.push(d.no_children);
            live_IN_county_Array.push(d.live_IN_county);
            heard_of_SLE_Array.push(d.heard_of_SLE);
            heard_of_SLE_SM_Array.push(d.heard_of_SLE_SM);
            heard_of_SLE_museum_ad_Array.push(d.heard_of_SLE_museum_ad);
            heard_of_SLE_website_Array.push(d.heard_of_SLE_website);
            heard_of_SLE_story_Array.push(d.heard_of_SLE_story);
            heard_of_SLE_tv_Array.push(d.heard_of_SLE_tv);
            heard_of_SLE_BB_Array.push(d.heard_of_SLE_BB);
            heard_of_SLE_online_ad_Array.push(d.heard_of_SLE_online_ad);
            heard_of_SLE_other_Array.push(d.heard_of_SLE_other);
        });
//		console.log(heard_of_SLE_BB_Array);

		let heard_of_SLE_Array_Sum = getSumOfArray(current_member_Array,heard_of_SLE_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); //get sum of jan array
		let heard_of_SLE_SM_Array_Sum = getSumOfArray(current_member_Array,heard_of_SLE_SM_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 
		let heard_of_SLE_museum_ad_Array_Sum = getSumOfArray(current_member_Array,heard_of_SLE_museum_ad_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 
		let heard_of_SLE_website_Array_Sum = getSumOfArray(current_member_Array,heard_of_SLE_website_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 
		let heard_of_SLE_story_Array_Sum = getSumOfArray(current_member_Array,heard_of_SLE_story_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 
		let heard_of_SLE_tv_Array_Sum=getSumOfArray(current_member_Array,heard_of_SLE_tv_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 
		let heard_of_SLE_BB_Array_Sum = getSumOfArray(current_member_Array, heard_of_SLE_BB_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 
		let heard_of_SLE_online_ad_Array_Sum = getSumOfArray(current_member_Array,heard_of_SLE_online_ad_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 
		let heard_of_SLE_other_Array_Sum=getSumOfArray(current_member_Array,heard_of_SLE_other_Array,live_IN_county_Array, sleB1, sleB2, sleB3, sleB4); 




//sumArray.push(children_age_group1_Array_Sum ,children_age_group2_Array_Sum ,children_age_group3_Array_Sum, children_age_group4_Array_Sum, no_childeren_Array_Sum   );

sleA= [heard_of_SLE_Array_Sum[0], heard_of_SLE_SM_Array_Sum[0],heard_of_SLE_museum_ad_Array_Sum[0],heard_of_SLE_website_Array_Sum[0],heard_of_SLE_story_Array_Sum[0], heard_of_SLE_tv_Array_Sum[0],heard_of_SLE_BB_Array_Sum[0],heard_of_SLE_online_ad_Array_Sum[0], heard_of_SLE_other_Array_Sum[0]];
//let newListA = [ a/766 for a in A];
//console.log(A);
sleB= [heard_of_SLE_Array_Sum[1], heard_of_SLE_SM_Array_Sum[1],heard_of_SLE_museum_ad_Array_Sum[1],heard_of_SLE_website_Array_Sum[1],heard_of_SLE_story_Array_Sum[1], heard_of_SLE_tv_Array_Sum[1],heard_of_SLE_BB_Array_Sum[1],heard_of_SLE_online_ad_Array_Sum[1], heard_of_SLE_other_Array_Sum[1]];
//let newListB = [ a/b for a, b in (B,t)];
//console.log(B);

//console.log(children_age_group1_Array_Sum[0]); //here is your array you want


function getSumOfArray(array1, array2, array3, Marion, Adjacent, Elsewhere, Out) {


            let thisSum = [0, 0];


            for (let i = 0; i < array2.length; i++) {
                if (Marion && Adjacent && Elsewhere && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == "" ||array2[i]=="No")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (!(Marion || Adjacent || Elsewhere || Out)) {
                    thisSum[0] = 0;
                    thisSum[1] = 0;
                } else if (Marion && Adjacent && Elsewhere) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Another state or country (please specify)")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion && Adjacent && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == "" ||array2[i]=="No"|| array3[i] == "Indiana, but not in the Indy metro area")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion && Elsewhere && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == "" ||array2[i]=="No"|| array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Adjacent && Elsewhere && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Marion County, Indiana")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion && Adjacent) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Another state or country (please specify)" || array3[i] == "Indiana, but not in the Indy metro area")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion && Elsewhere) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Another state or country (please specify)" || array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == "" ||array2[i]=="No"|| array3[i] == "Another state or country (please specify)" || array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Adjacent && Elsewhere) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Another state or country (please specify)" || array3[i] == "Indiana, but not in the Indy metro area")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion && Elsewhere) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Another state or country (please specify)" || array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Another state or country (please specify)" || array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Adjacent && Elsewhere) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Another state or country (please specify)" || array3[i] == "Marion County, Indiana")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Adjacent && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Marion County, Indiana" || array3[i] == "Indiana, but not in the Indy metro area")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Elsewhere && Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Marion County, Indiana" || array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Marion) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == "" ||array2[i]=="No" || array3[i] == "Indiana, but not in the Indy metro area" || array3[i] == "Another state or country (please specify)" || array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Adjacent) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == "" ||array2[i]=="No" ||  array3[i] == "Marion County, Indiana" || array3[i] == "Indiana, but not in the Indy metro area" || array3[i] == "Another state or country (please specify)")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Elsewhere) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == ""||array2[i]=="No" || array3[i] == "Marion County, Indiana" || array3[i] == "Another state or country (please specify)" || array3[i] == "A county adjacent to Marion County")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                } else if (Out) {
                    if (!(array2[i] == 'null' || array2[i] == "N/A" || array2[i] == "" ||array2[i]=="No"|| array3[i] == "Marion County, Indiana" || array3[i] == "A county adjacent to Marion County" || array3[i] == "Indiana, but not in the Indy metro area")) {
                        if (array1[i] == "Yes")
                            thisSum[0] += 1;
                        else
                            thisSum[1] += 1;
                    }
                }

            }

            thisSum[0] = Math.round((thisSum[0] / 687) * 100);
            thisSum[1] = Math.round((thisSum[1] / 687) * 100);

            return thisSum;
        }




  //A=[70, 23, 29, 27, 42, 93,32,25,12];
  //B=[73, 25, 29, 30, 49, 81,32,25,12];

//  console.log(sleA);
  let trace1 = {
  x: ['Family/Friends', 'Social Media', 'Ads at Museum', 'Our Website', 'A story in the Media', 'TV commercials', 'Billboards', 'Online Ads', 'Others'],
 
  y:sleA ,
  name: '% of Members',
  marker: {color: '#2c7fb8'},
  type: 'bar'
};

let trace2 = {
  x: ['Family/Friends', 'Social Media', 'Ads at Museum', 'Our Website', 'A story in the Media', 'TV commercials', 'Billboards', 'Online Ads', 'Others'],
  y: sleB,
  name: '% of Non-members',
  marker: {color: '#e34a33'},
  type: 'bar'
};

let plotData = [trace1, trace2];

let layout = {
  title: 'How did you hear about sports legends experience?',
   
  yaxis:{ title: 'Percentage of visitors',
  range: [0,30]
  },

  xaxis: {
    title: '',
    titlefont: {
      size: 16,
      color: '#636363'
    },
    tickfont: {
      size: 14,
      color: "#636363"
    }
  },
  legend: {
    x: 0,
    y: 1.0,
    bgcolor: '#f0f0f0',
    bordercolor: '#f0f0f0'
  },
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1
};

Plotly.newPlot('slebarchart', plotData, layout);

})


/*  d3.csv("SurveyData.csv", function(error, csv_data) {
 let data = d3.nest()
  .key(function(d) { return d.current_member;})
  .rollup(function(d) { 
   return d3.sum(d, function(g) {return g.value == null ? 0 : 1 });
  }).entries(csv_data);
*/  

//About//
//Dataset retrived from: http://vis.ninja/teaching/H517/project1/cholera_data/deaths.age.mf//
//Data filtered and parsed with Excel//
//Graphing done in Plotly.js built on top of D3.js and stack.gl//
//Color blindness safe with the help of Color Brewer 2.0, http://colorbrewer2.org/#type=sequential&scheme=PuBu&n=3//

