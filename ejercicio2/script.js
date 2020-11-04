let m_div= document.getElementById("tests");
m_div.addEventListener('keydown', OnPress);



function ChangeColor(color)
{
    m_div.className = color;
}

const PressR = () =>
{
    ChangeColor("red");
}
const PressY = () =>
{
    ChangeColor("yellow");
}
const PressW = () =>
{
    ChangeColor("white");
}

function OnPress(e)
{
    switch(e.keyCode)
    {
        case 82: //key R
            PressR();
            break;
        case 87: //key W
            PressW();
            break;
        case 89: //Key Y
            PressY();
        break;
    }

    console.log( e.keyCode);
}