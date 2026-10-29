//==========================================
// Get Elements
//==========================================

const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const fromValue = document.getElementById("fromValue");
const toValue = document.getElementById("toValue");

const error = document.getElementById("error");

//==========================================
// Convert Function
//==========================================

function convertTemperature()
{

    let value = parseFloat(temperature.value);

    let from = fromUnit.value;

    let to = toUnit.value;

    error.innerHTML="";

    fromValue.innerHTML="--";

    toValue.innerHTML="--";

    // Empty

    if(temperature.value=="")
    {
        error.innerHTML="Please enter a temperature.";
        return;
    }

    // Invalid Number

    if(isNaN(value))
    {
        error.innerHTML="Please enter a valid number.";
        return;
    }

    // Same Unit

    if(from==to)
    {
        error.innerHTML="Please select different units.";
        return;
    }

    //==============================
    // Absolute Zero Validation
    //==============================

    if(from=="celsius" && value<-273.15)
    {
        error.innerHTML="Temperature cannot be below Absolute Zero (-273.15°C).";
        return;
    }

    if(from=="fahrenheit" && value<-459.67)
    {
        error.innerHTML="Temperature cannot be below Absolute Zero (-459.67°F).";
        return;
    }

    if(from=="kelvin" && value<0)
    {
        error.innerHTML="Temperature cannot be below Absolute Zero (0 K).";
        return;
    }

    let answer;

    //==========================================
    // Celsius
    //==========================================

    if(from=="celsius")
    {

        if(to=="fahrenheit")
        {
            answer=(value*9/5)+32;
        }

        else
        {
            answer=value+273.15;
        }

    }

    //==========================================
    // Fahrenheit
    //==========================================

    else if(from=="fahrenheit")
    {

        if(to=="celsius")
        {
            answer=(value-32)*5/9;
        }

        else
        {
            answer=((value-32)*5/9)+273.15;
        }

    }

    //==========================================
    // Kelvin
    //==========================================

    else
    {

        if(to=="celsius")
        {
            answer=value-273.15;
        }

        else
        {
            answer=((value-273.15)*9/5)+32;
        }

    }

    //==========================================
    // Unit Symbols
    //==========================================

    let fromSymbol="";
    let toSymbol="";

    if(from=="celsius")
    {
        fromSymbol="°C";
    }
    else if(from=="fahrenheit")
    {
        fromSymbol="°F";
    }
    else
    {
        fromSymbol="K";
    }

    if(to=="celsius")
    {
        toSymbol="°C";
    }
    else if(to=="fahrenheit")
    {
        toSymbol="°F";
    }
    else
    {
        toSymbol="K";
    }

    //==========================================
    // Display Result
    //==========================================

    fromValue.innerHTML=value.toFixed(2)+" "+fromSymbol;

    toValue.innerHTML=answer.toFixed(2)+" "+toSymbol;

}

//==========================================
// Convert Button
//==========================================

convertBtn.addEventListener("click",convertTemperature);

//==========================================
// Enter Key
//==========================================

temperature.addEventListener("keypress",function(event)
{

    if(event.key==="Enter")
    {
        convertTemperature();
    }

});

//==========================================
// Reset Button
//==========================================

resetBtn.addEventListener("click",function()
{

    temperature.value="";

    fromUnit.selectedIndex=0;

    toUnit.selectedIndex=1;

    error.innerHTML="";

    fromValue.innerHTML="--";

    toValue.innerHTML="--";

});

//==========================================
// Swap Units
//==========================================

fromUnit.addEventListener("change",function()
{

    if(fromUnit.value==toUnit.value)
    {

        if(toUnit.value=="celsius")
        {
            toUnit.value="fahrenheit";
        }

        else if(toUnit.value=="fahrenheit")
        {
            toUnit.value="kelvin";
        }

        else
        {
            toUnit.value="celsius";
        }

    }

});

toUnit.addEventListener("change",function()
{

    if(fromUnit.value==toUnit.value)
    {

        if(fromUnit.value=="celsius")
        {
            fromUnit.value="fahrenheit";
        }

        else if(fromUnit.value=="fahrenheit")
        {
            fromUnit.value="kelvin";
        }

        else
        {
            fromUnit.value="celsius";
        }

    }

});