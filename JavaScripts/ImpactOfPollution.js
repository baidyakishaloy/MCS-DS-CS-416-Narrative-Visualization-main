function CreateImpactData() {

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 20, bottom: 20, left: 10 },
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style('background-color', '#D3D3D3')
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var tooltip2 = d3.select("#my_dataviz")
        .append("div")
        .attr("id", "impacttooltip")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")


        var length = width + margin.left + margin.right
        var height = height + margin.top + margin.bottom


        svg.append('rect').attr('id', 'economical')
            .attr('x', margin.left - 10)
            .attr('y', margin.top)
            .attr('height', height - margin.top-margin.bottom)
            .attr('width', width/4 -5)
            .style('fill', 'red')

            svg.append('text')
            .attr('x', margin.left - 5)
            .attr('y', height/2)
            .text("Economical")
            .style('fill','white')

            svg.append('text')
            .attr('x', margin.left - 5)
            .attr('y', height/2 + 15)
            .text("Impact")
            .style('fill','white')            
            

            svg.append('rect').attr('id', 'social')
            .attr('x', margin.left + length/4 - 10)
            .attr('y', margin.top)
            .attr('height', height - margin.top-margin.bottom)
            .attr('width', width/4 -5)
            .style('fill', 'green')

            svg.append('text')
            .attr('x', margin.left + length/4 - 5)
            .attr('y', height/2)
            .text("Social Impact")
            .style('fill','white')            

            svg.append('rect').attr('id', 'phychological')
            .attr('x', margin.left + length/4 + length/4 - 10)
            .attr('y', margin.top)
            .attr('height', height - margin.top-margin.bottom)
            .attr('width', width/4 - 5)
            .style('fill', 'magenta')    
            
            svg.append('text')
            .attr('x', margin.left + length/4 + length/4 - 5)
            .attr('y', height/2)
            .text("Psychological")
            .style('fill','white')   
            
            svg.append('text')
            .attr('x', margin.left + length/4 + length/4 - 5)
            .attr('y', height/2 + 15)
            .text("Impact")
            .style('fill','white')             

            
            svg.append('rect').attr('id', 'environmental')
            .attr('x', margin.left + length/4 + length/4 + length/4-10)
            .attr('y', margin.top)
            .attr('height', height - margin.top-margin.bottom)
            .attr('width', width/4 - 5)
            .style('fill', 'purple')  
            
            svg.append('text')
            .attr('x', margin.left + length/4 + length/4 + length/4-5)
            .attr('y', height/2)
            .text("Environmental")
            .style('fill','white')    
            
            svg.append('text')
            .attr('x', margin.left + length/4 + length/4 + length/4-5)
            .attr('y', height/2 + 15)
            .text("Impact")
            .style('fill','white')              
          
            d3.selectAll('rect').on('mouseover', function () { ChangeColor(this); })
            d3.selectAll('rect').on('mouseout', function () { ResetColor(this); })
}



    function showInfo(element) {

        if (element == "economical")
            element = "The economic consequences of outdoor air pollution, such as effects on labor productivity, health care costs, and agricultural crop yields, are expected to result in global economic costs that are forecasted to rise to 1% of global GDP by 2060."
        else if (element == "phychological")
            element = "Exposure to air pollutants can physiologically induce anxiety by heightening oxidative stress and systemic inflammation, while also triggering existential concerns about one’s health and future."
        else if (element == "social")
            element = "In a comprehensive review of 178 research articles, Lu uncovered evidence highlighting the harmful effects of air pollution. Consistently, air pollution—comprising particulate matter, metals, and various gases and compounds—has been linked to reduced happiness and increased depression. It also impairs cognitive function and decision-making abilities. Economically, it undermines productivity at work, while socially, it contributes to increased instances of criminal behavior."
        else if (element == "environmental")
            element = "Air pollution disrupts ecosystems in several ways: particulates eventually settle onto the ground, contaminating soil; it generates acid rain, harming plants and altering soil chemistry, thereby affecting plant growth. Animals are also impacted, with potential damage to reproduction and occurrences of reproductive anomalies."


            d3.select('#impacttooltip').style("visibility", "visible");
            d3.select('#impacttooltip').style("top", (event.pageY) + "px").style("left", (event.pageX) + "px");
            d3.select('#impacttooltip').html(element);

    }

    function ChangeColor(element)
    {
        d3.select('#' + element.id)
        .transition()
        .duration(800)
        .style('fill','orange')
        .attr('y', 5 )
    
        showInfo(element.id);
    }

    function ResetColor(element)
    {
        d3.select('#impacttooltip').style("visibility", "hidden");

        if(element.id == "economical")
        {
            d3.select('#' + element.id)
            .transition()
            .duration(800)
            .style('fill','red')
            .attr('y', 10 )
        }

        if(element.id == "social")
        {
            d3.select('#' + element.id)
            .transition()
            .duration(800)
            .style('fill','green')
            .attr('y', 10 )
        }

        if(element.id == "phychological")
        {
            d3.select('#' + element.id)
            .transition()
            .duration(800)
            .style('fill','magenta')
            .attr('y', 10 )
        }

        if(element.id == "environmental")
        {
            d3.select('#' + element.id)
            .transition()
            .duration(800)
            .style('fill','purple')
            .attr('y', 10 )
        }
    }